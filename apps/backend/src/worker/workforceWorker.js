import { randomUUID } from 'node:crypto';
import { prisma } from '../config/prisma.js';
import { consumeUsage, assertAgentEntitlement } from '../billing/service.js';
import { generateAIText } from '../ai/provider.js';

const model = process.env.SALES_ASSISTANT_MODEL || undefined;
const MAX_PER_TICK = Math.max(1, Number(process.env.WORKFORCE_MAX_TASKS_PER_TICK || 4));

function safeJson(value) {
  if (value == null) return {};
  if (typeof value === 'object') return value;
  try { return JSON.parse(value); } catch { return { raw: String(value) }; }
}

async function executeTask(task) {
  const agent = task.agent;
  if (!agent) throw new Error('Task has no assigned AI employee. Assign an employee before execution.');

  const system = `You are ${agent.role}, working as an employee in an autonomous sales and marketing organization.\nDepartment: ${task.department.name}.\nRole description: ${agent.description}\nCapabilities: ${JSON.stringify(agent.capabilities)}\nKPIs: ${JSON.stringify(agent.kpis)}\n\nProduce useful, specific work product for the assigned task. Distinguish verified facts from assumptions. Never invent research, contacts, statistics, campaign results, sent messages, meetings, revenue, or external actions. You cannot send messages, publish content, spend advertising budget, access external websites, or modify external systems unless a connected tool explicitly exists; none is provided in this task runner. For those actions, produce a ready-for-approval plan or draft and clearly state the required human/integration step. Return structured JSON with keys: executive_summary, deliverables (array), recommendations (array), assumptions (array), risks (array), required_approvals (array), next_actions (array), success_metrics (array).`;
  const user = `TASK TITLE: ${task.title}\nTASK TYPE: ${task.task_type}\nPRIORITY: ${task.priority}\nTASK DESCRIPTION:\n${task.description}\n\nTASK INPUT:\n${JSON.stringify(safeJson(task.input), null, 2)}\n\nReturn a concise but complete, actionable work product. Output valid JSON only.`;
  const completion = await generateAIText({
    model,
    temperature: 0.3,
    json: true,
    messages: [{ role: 'system', content: system }, { role: 'user', content: user }],
  });
  const content = completion.text.replace(/^```(?:json)?\s*/i, '').replace(/\s*```$/, '');
  return JSON.parse(content);
}

async function processOne(task) {
  const now = new Date();
  const claimed = await prisma.workforceTask.updateMany({
    where: { id: task.id, tenant_id: task.tenant_id, status: 'queued', requires_approval: false },
    data: { status: 'in_progress', started_at: now, error: null },
  });
  if (claimed.count !== 1) return false;
  if (task.agent_id) await prisma.workforceAgent.updateMany({ where: { id: task.agent_id, tenant_id: task.tenant_id }, data: { status: 'working' } });
  await prisma.workforceEvent.create({ data: { id: randomUUID(), tenant_id: task.tenant_id, agent_id: task.agent_id, task_id: task.id, event_type: 'task_execution_started', message: `${task.agent?.role || 'AI employee'} started: ${task.title}` } });
  try {
    if (task.agent_id) await assertAgentEntitlement(task.tenant_id, task.agent_id);
    await consumeUsage({ tenantId: task.tenant_id, metric: 'workforce_tasks', sourceKey: `workforce-task:${task.id}`, metadata: { task_id: task.id, agent_id: task.agent_id } });
    const output = await executeTask(task);
    await prisma.workforceTask.update({ where: { id: task.id }, data: { status: 'completed', output, completed_at: new Date(), error: null } });
    await prisma.workforceEvent.create({ data: { id: randomUUID(), tenant_id: task.tenant_id, agent_id: task.agent_id, task_id: task.id, event_type: 'task_execution_completed', message: `${task.agent.role} completed: ${task.title}`, metadata: { deliverables: Array.isArray(output.deliverables) ? output.deliverables.length : 0 } } });
  } catch (error) {
    await prisma.workforceTask.update({ where: { id: task.id }, data: { status: 'failed', error: String(error.message || error).slice(0, 4000) } });
    await prisma.workforceEvent.create({ data: { id: randomUUID(), tenant_id: task.tenant_id, agent_id: task.agent_id, task_id: task.id, event_type: 'task_execution_failed', message: `${task.title} failed: ${String(error.message || error).slice(0, 500)}` } });
  } finally {
    if (task.agent_id) await prisma.workforceAgent.updateMany({ where: { id: task.agent_id, tenant_id: task.tenant_id }, data: { status: 'idle' } });
  }
  return true;
}

export function startWorkforceWorker(logger) {
  const intervalMs = Math.max(5000, Number(process.env.WORKFORCE_POLL_INTERVAL_MS || 15000));
  let busy = false;
  const tick = async () => {
    if (busy) return;
    busy = true;
    try {
      const tasks = await prisma.workforceTask.findMany({
        where: { status: 'queued', requires_approval: false },
        include: { agent: true, department: true },
        orderBy: [{ priority: 'desc' }, { created_at: 'asc' }],
        take: MAX_PER_TICK,
      });
      for (const task of tasks) await processOne(task);
    } catch (error) {
      logger?.error?.({ err: error }, 'Workforce worker tick failed');
    } finally { busy = false; }
  };
  const timer = setInterval(tick, intervalMs);
  timer.unref();
  void tick();
  return () => clearInterval(timer);
}
