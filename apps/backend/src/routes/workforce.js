import { randomUUID } from 'node:crypto';
import { z } from 'zod';
import { prisma } from '../config/prisma.js';
import { requireAuth } from '../security/authMiddleware.js';
import { getAIProviderStatus } from '../ai/provider.js';

const departments = [
  ['EXEC', 'Executive Office', 'Coordinates company strategy, priorities, governance and cross-department performance.', 'AI CEO'],
  ['REV', 'Revenue & Sales', 'Owns pipeline creation, qualification, conversion, account growth and sales operations.', 'Chief Revenue Officer'],
  ['MKT', 'Marketing', 'Owns positioning, content, SEO, social media, campaigns and demand generation.', 'Chief Marketing Officer'],
  ['GRO', 'Growth', 'Owns acquisition experiments, partnerships, conversion and retention.', 'Chief Growth Officer'],
  ['INT', 'Market Intelligence', 'Researches markets, competitors, customer needs and buying signals.', 'Chief Data & Intelligence Officer'],
  ['OPS', 'Business Operations', 'Owns workflow coordination, service quality, process controls and execution reporting.', 'Chief Operating Officer'],
  ['FIN', 'Finance & Revenue Operations', 'Tracks budgets, unit economics, revenue performance and forecasts.', 'Chief Financial Officer'],
  ['CS', 'Customer Success', 'Owns onboarding, customer outcomes, support insights and retention.', 'Customer Success Director'],
];

const roles = [
  ['EXEC', 'Chief Executive Officer', 'executive', 'Sets strategy, approves priorities and reviews organization-wide performance.', ['strategy', 'delegation', 'performance_review'], ['objective_attainment', 'operating_health']],
  ['EXEC', 'Chief Operating Officer', 'executive', 'Coordinates cross-functional execution, capacity and operating discipline.', ['operations', 'workflow_design', 'escalation'], ['on_time_execution', 'task_health']],
  ['EXEC', 'Chief Revenue Officer', 'executive', 'Owns revenue strategy, pipeline health and commercial performance.', ['revenue_strategy', 'pipeline_analysis', 'sales_planning'], ['pipeline_value', 'revenue_attainment']],
  ['EXEC', 'Chief Marketing Officer', 'executive', 'Owns positioning, demand generation and marketing performance.', ['marketing_strategy', 'channel_mix', 'brand_positioning'], ['qualified_demand', 'marketing_efficiency']],
  ['EXEC', 'Chief Growth Officer', 'executive', 'Owns acquisition, experimentation, conversion and retention growth.', ['growth_strategy', 'experimentation', 'retention'], ['customer_growth', 'conversion_lift']],
  ['EXEC', 'Chief Financial Officer', 'executive', 'Monitors budgets, unit economics, cash efficiency and forecast assumptions.', ['budgeting', 'unit_economics', 'forecasting'], ['gross_margin', 'acquisition_cost']],
  ['EXEC', 'Chief Data & Intelligence Officer', 'executive', 'Maintains decision-quality data, intelligence standards and measurement.', ['analytics', 'data_quality', 'insight'], ['data_completeness', 'reporting_quality']],
  ['REV', 'Sales Director', 'manager', 'Leads sales execution, territory priorities and team performance.', ['sales_management', 'pipeline_review'], ['win_rate', 'pipeline_coverage']],
  ['REV', 'Sales Operations Manager', 'manager', 'Maintains sales process, CRM quality, forecasting and workflow efficiency.', ['sales_ops', 'crm_hygiene'], ['forecast_accuracy', 'data_completeness']],
  ['REV', 'Business Development Manager', 'manager', 'Builds target-account plans and partnership opportunities.', ['business_development', 'account_planning'], ['qualified_opportunities', 'meetings_booked']],
  ['REV', 'Lead Generation Specialist', 'specialist', 'Finds and researches real target accounts using configured data sources.', ['prospecting', 'company_research'], ['verified_accounts', 'qualified_leads']],
  ['REV', 'Sales Development Representative', 'specialist', 'Prepares personalized first-touch and follow-up communication for eligible prospects.', ['lead_qualification', 'outreach_drafting'], ['positive_replies', 'meetings_booked']],
  ['REV', 'Account Executive', 'specialist', 'Manages qualified opportunities, discovery, proposals and close plans.', ['discovery', 'proposal_support', 'deal_management'], ['win_rate', 'sales_cycle']],
  ['MKT', 'Marketing Director', 'manager', 'Turns company strategy into an integrated marketing plan.', ['marketing_planning', 'campaign_strategy'], ['qualified_demand', 'campaign_roi']],
  ['MKT', 'SEO Specialist', 'specialist', 'Plans search visibility work and produces evidence-based SEO recommendations.', ['keyword_research', 'technical_seo', 'content_briefs'], ['organic_leads', 'search_visibility']],
  ['MKT', 'Content Strategist', 'specialist', 'Creates editorial plans, content briefs and conversion-focused messaging.', ['content_strategy', 'copywriting'], ['content_engagement', 'content_assisted_leads']],
  ['MKT', 'Social Media Manager', 'specialist', 'Plans channel-specific social publishing and engagement workflows.', ['social_strategy', 'publishing_calendar'], ['engagement', 'social_leads']],
  ['MKT', 'Email Marketing Specialist', 'specialist', 'Plans permission-based lifecycle and nurture campaigns.', ['email_strategy', 'segmentation', 'deliverability'], ['engagement', 'qualified_replies']],
  ['MKT', 'Campaign Manager', 'specialist', 'Coordinates campaign setup, tracking, QA and performance reviews.', ['campaign_operations', 'measurement'], ['campaign_efficiency', 'conversion']],
  ['GRO', 'Growth Manager', 'manager', 'Runs measurable acquisition and conversion experiments.', ['growth_experiments', 'funnel_optimization'], ['experiment_velocity', 'conversion_rate']],
  ['GRO', 'Partnership Manager', 'specialist', 'Identifies and qualifies mutually beneficial channel partners.', ['partner_research', 'relationship_planning'], ['qualified_partners', 'partner_sourced_pipeline']],
  ['GRO', 'Conversion Optimization Specialist', 'specialist', 'Finds friction in the customer journey and proposes evidence-based tests.', ['cro', 'funnel_analysis'], ['conversion_lift', 'funnel_completion']],
  ['INT', 'Market Research Analyst', 'specialist', 'Researches target markets, segments and market opportunities.', ['market_research', 'trend_analysis'], ['research_quality', 'market_coverage']],
  ['INT', 'Competitor Intelligence Analyst', 'specialist', 'Tracks competitor positioning, offers and publicly documented activity.', ['competitor_research', 'positioning_analysis'], ['insight_quality', 'coverage']],
  ['INT', 'Customer Intelligence Analyst', 'specialist', 'Synthesizes customer needs, objections, feedback and buying signals.', ['voice_of_customer', 'buyer_research'], ['insight_quality', 'objection_coverage']],
  ['OPS', 'Workforce Coordinator', 'manager', 'Routes work, monitors queues and escalates blocked tasks.', ['task_routing', 'capacity_planning'], ['task_sla', 'blocked_task_age']],
  ['OPS', 'Quality & Compliance Analyst', 'specialist', 'Checks factual claims, consent, channel rules and campaign safeguards.', ['quality_assurance', 'compliance_review'], ['qa_pass_rate', 'compliance_incidents']],
  ['FIN', 'Revenue Analyst', 'specialist', 'Builds revenue, pipeline, budget and unit-economics reporting.', ['revenue_analysis', 'forecasting'], ['forecast_accuracy', 'reporting_freshness']],
  ['CS', 'Customer Success Manager', 'manager', 'Plans onboarding, adoption, customer outcomes and retention interventions.', ['onboarding', 'success_planning', 'retention'], ['activation', 'retention']],
  ['CS', 'Customer Insights Specialist', 'specialist', 'Analyzes support themes, customer feedback and product adoption signals.', ['feedback_analysis', 'adoption_analysis'], ['insight_quality', 'adoption']],
];

async function record(tenant_id, event_type, message, metadata = {}) {
  return prisma.workforceEvent.create({
    data: {
      id: randomUUID(),
      tenant_id,
      event_type,
      message,
      metadata,
    },
  });
}

async function ensureWorkforce(tenant_id) {
  await prisma.$transaction(async (tx) => {

    // Tenant-specific advisory lock.
    // Cast PostgreSQL's void return value to text for Prisma compatibility.
    await tx.$queryRaw`
      SELECT pg_advisory_xact_lock(hashtext(${tenant_id}))::text AS locked
    `;

    let createdDepartments = 0;
    let createdAgents = 0;

    for (const [code, name, description, executive] of departments) {

      const department = await tx.workforceDepartment.upsert({
        where: {
          tenant_id_code: {
            tenant_id,
            code,
          },
        },
        create: {
          tenant_id,
          code,
          name,
          description,
          executive,
        },
        update: {},
      });

      const existingRoles = await tx.workforceAgent.findMany({
        where: {
          tenant_id,
          department_id: department.id,
        },
        select: {
          role: true,
        },
      });

      const existingNames = new Set(
        existingRoles.map((agent) => agent.role)
      );

      for (const [dept, role, level, desc, capabilities, kpis] of roles.filter(
        (item) => item[0] === code
      )) {

        if (existingNames.has(role)) continue;

        await tx.workforceAgent.create({
          data: {
            tenant_id,
            department_id: department.id,
            name: role,
            role,
            level,
            description: desc,
            capabilities,
            kpis,
            status: 'idle',
            autonomy_level: 'approval_required',
          },
        });

        createdAgents += 1;
      }

      if (!existingRoles.length) {
        createdDepartments += 1;
      }
    }

    if (createdAgents || createdDepartments) {
      await tx.workforceEvent.create({
        data: {
          id: randomUUID(),
          tenant_id,
          event_type: 'workforce_initialized',
          message: 'The AI company structure was provisioned or repaired with executive leadership, departments and specialist roles.',
          metadata: {
            departments_created: createdDepartments,
            employees_created: createdAgents,
          },
        },
      });
    }

  }, {
    maxWait: 15000,
    timeout: 60000,
  });
}

export default async function workforceRoutes(app) {

  app.addHook('preHandler', requireAuth);

  app.get('/ai/status', async () => ({
    success: true,
    ai: getAIProviderStatus(),
  }));

  app.get('/overview', async (req) => {

    const tenant_id = req.user.id;

    await ensureWorkforce(tenant_id);

    const [
      departmentRows,
      agents,
      tasks,
      objectives,
      events,
    ] = await Promise.all([

      prisma.workforceDepartment.findMany({
        where: { tenant_id },
        include: {
          _count: {
            select: {
              agents: true,
              tasks: true,
            },
          },
        },
        orderBy: { name: 'asc' },
      }),

      prisma.workforceAgent.findMany({
        where: { tenant_id },
        include: {
          department: {
            select: {
              name: true,
              code: true,
            },
          },
        },
        orderBy: [
          { level: 'asc' },
          { name: 'asc' },
        ],
      }),

      prisma.workforceTask.findMany({
        where: { tenant_id },
        include: {
          agent: {
            select: {
              name: true,
              role: true,
            },
          },
          department: {
            select: {
              name: true,
            },
          },
        },
        orderBy: { created_at: 'desc' },
        take: 30,
      }),

      prisma.workforceObjective.findMany({
        where: { tenant_id },
        orderBy: { created_at: 'desc' },
        take: 10,
      }),

      prisma.workforceEvent.findMany({
        where: { tenant_id },
        orderBy: { created_at: 'desc' },
        take: 20,
      }),

    ]);

    return {
      success: true,
      departments: departmentRows,
      agents,
      tasks,
      objectives,
      events,
      metrics: {
        departments: departmentRows.length,
        employees: agents.length,
        active: agents.filter((a) => a.status === 'working').length,
        queuedTasks: tasks.filter((t) =>
          ['queued', 'awaiting_approval', 'in_progress'].includes(t.status)
        ).length,
        completedTasks: tasks.filter(
          (t) => t.status === 'completed'
        ).length,
      },
    };
  });

  app.post('/objectives', async (req, reply) => {

    const schema = z.object({
      title: z.string().trim().min(3).max(160),
      description: z.string().trim().min(5).max(4000),
      objective_type: z.enum([
        'revenue',
        'leads',
        'meetings',
        'customers',
        'retention',
      ]).default('revenue'),
      target_value: z.number().positive().optional(),
      currency: z.string().length(3).default('USD'),
      period_start: z.string().datetime(),
      period_end: z.string().datetime(),
    });

    const parsed = schema.safeParse(req.body);

    if (!parsed.success) {
      return reply.code(400).send({
        success: false,
        error: 'Provide a valid objective, target and date range.',
      });
    }

    if (
      new Date(parsed.data.period_end) <=
      new Date(parsed.data.period_start)
    ) {
      return reply.code(400).send({
        success: false,
        error: 'The objective end date must be after its start date.',
      });
    }

    const tenant_id = req.user.id;

    await ensureWorkforce(tenant_id);

    const objective = await prisma.workforceObjective.create({
      data: {
        id: randomUUID(),
        tenant_id,
        ...parsed.data,
        period_start: new Date(parsed.data.period_start),
        period_end: new Date(parsed.data.period_end),
      },
    });

    await record(
      tenant_id,
      'objective_created',
      `New ${objective.objective_type} objective created: ${objective.title}.`,
      {
        objective_id: objective.id,
        target_value: objective.target_value,
      }
    );

    return reply.code(201).send({
      success: true,
      objective,
    });
  });

  app.post('/planning-cycle', async (req, reply) => {

    const schema = z.object({
      objective_id: z.string().optional(),
      focus: z.string().trim().max(1000).optional(),
    });

    const parsed = schema.safeParse(req.body || {});

    if (!parsed.success) {
      return reply.code(400).send({
        success: false,
        error: 'Invalid planning request.',
      });
    }

    const tenant_id = req.user.id;

    await ensureWorkforce(tenant_id);

    const objective = parsed.data.objective_id
      ? await prisma.workforceObjective.findFirst({
        where: {
          id: parsed.data.objective_id,
          tenant_id,
          status: 'active',
        },
      })
      : await prisma.workforceObjective.findFirst({
        where: {
          tenant_id,
          status: 'active',
        },
        orderBy: {
          created_at: 'desc',
        },
      });

    if (!objective) {
      return reply.code(400).send({
        success: false,
        error: 'Create or select an active business objective before starting a planning cycle.',
      });
    }

    const leaders = await prisma.workforceAgent.findMany({
      where: {
        tenant_id,
        level: {
          in: ['executive', 'manager'],
        },
      },
      include: {
        department: true,
      },
    });

    const work = leaders.filter(
      (a) =>
        a.level === 'executive' ||
        ['REV', 'MKT', 'GRO', 'INT', 'OPS', 'FIN', 'CS'].includes(
          a.department.code
        )
    );

    const created = [];

    for (const agent of work) {

      const title = `${agent.department.name}: ${objective.title}`;

      const task = await prisma.workforceTask.create({
        data: {
          id: randomUUID(),
          tenant_id,
          department_id: agent.department_id,
          agent_id: agent.id,
          title,
          description: `Develop a measurable departmental execution plan aligned to the objective: ${objective.description}${parsed.data.focus ? ` Additional focus: ${parsed.data.focus}` : ''}. Identify workstreams, dependencies, KPIs, risks and recommended next actions. Do not claim external actions have been performed.`,
          task_type: 'planning',
          priority: agent.level === 'executive' ? 'high' : 'normal',
          status: 'awaiting_approval',
          requires_approval: true,
          input: {
            objective_id: objective.id,
            objective_title: objective.title,
            target_value: objective.target_value,
            currency: objective.currency,
          },
        },
      });

      created.push(task);

      await record(
        tenant_id,
        'task_delegated',
        `${agent.role} received a planning assignment for ${objective.title}.`,
        {
          task_id: task.id,
          agent_id: agent.id,
          department: agent.department.code,
        }
      );
    }

    await record(
      tenant_id,
      'planning_cycle_started',
      `Planning cycle created ${created.length} management assignments. They require review before execution.`,
      {
        objective_id: objective.id,
        task_count: created.length,
      }
    );

    return reply.code(201).send({
      success: true,
      objective,
      tasks_created: created.length,
      tasks: created,
      message: 'Management assignments have been created. Approve tasks individually before execution.',
    });
  });

  app.post('/tasks', async (req, reply) => {

    const schema = z.object({
      department_id: z.string(),
      agent_id: z.string().optional(),
      title: z.string().trim().min(3).max(180),
      description: z.string().trim().min(5).max(5000),
      priority: z.enum(['low', 'normal', 'high', 'urgent']).default('normal'),
      task_type: z.string().default('operational'),
      requires_approval: z.boolean().default(true),
    });

    const parsed = schema.safeParse(req.body);

    if (!parsed.success) {
      return reply.code(400).send({
        success: false,
        error: 'Provide a valid department, task title and description.',
      });
    }

    const tenant_id = req.user.id;

    await ensureWorkforce(tenant_id);

    const department = await prisma.workforceDepartment.findFirst({
      where: {
        id: parsed.data.department_id,
        tenant_id,
      },
    });

    if (!department) {
      return reply.code(404).send({
        success: false,
        error: 'Department not found.',
      });
    }

    if (parsed.data.agent_id) {
      const agent = await prisma.workforceAgent.findFirst({
        where: {
          id: parsed.data.agent_id,
          tenant_id,
          department_id: department.id,
        },
      });

      if (!agent) {
        return reply.code(400).send({
          success: false,
          error: 'The selected employee does not belong to this department.',
        });
      }
    }

    if (!parsed.data.agent_id && !parsed.data.requires_approval) {
      return reply.code(400).send({
        success: false,
        error: 'Assign an AI employee before queuing autonomous execution.',
      });
    }

    const task = await prisma.workforceTask.create({
      data: {
        id: randomUUID(),
        tenant_id,
        ...parsed.data,
        status: parsed.data.requires_approval
          ? 'awaiting_approval'
          : 'queued',
      },
    });

    await record(
      tenant_id,
      'task_created',
      `Task created: ${task.title}`,
      {
        task_id: task.id,
      }
    );

    return reply.code(201).send({
      success: true,
      task,
    });
  });

  app.get('/tasks/:id', async (req, reply) => {

    const task = await prisma.workforceTask.findFirst({
      where: {
        id: req.params.id,
        tenant_id: req.user.id,
      },
      include: {
        agent: true,
        department: true,
      },
    });

    if (!task) {
      return reply.code(404).send({
        success: false,
        error: 'Task not found.',
      });
    }

    return {
      success: true,
      task,
    };
  });

  app.post('/tasks/:id/retry', async (req, reply) => {

    const task = await prisma.workforceTask.findFirst({
      where: {
        id: req.params.id,
        tenant_id: req.user.id,
      },
    });

    if (!task) {
      return reply.code(404).send({
        success: false,
        error: 'Task not found.',
      });
    }

    if (task.status !== 'failed') {
      return reply.code(409).send({
        success: false,
        error: 'Only failed tasks can be retried.',
      });
    }

    if (!task.agent_id) {
      return reply.code(400).send({
        success: false,
        error: 'Assign an AI employee before retrying this task.',
      });
    }

    const updated = await prisma.workforceTask.update({
      where: {
        id: task.id,
      },
      data: {
        status: 'queued',
        error: null,
        started_at: null,
        completed_at: null,
        output: null,
      },
    });

    await record(
      req.user.id,
      'task_retried',
      `Task queued for retry: ${task.title}`,
      {
        task_id: task.id,
      }
    );

    return {
      success: true,
      task: updated,
      message: 'Task queued. The workforce worker will process it.',
    };
  });

  app.post('/tasks/:id/run', async (req, reply) => {

    const task = await prisma.workforceTask.findFirst({
      where: {
        id: req.params.id,
        tenant_id: req.user.id,
      },
    });

    if (!task) {
      return reply.code(404).send({
        success: false,
        error: 'Task not found.',
      });
    }

    if (task.status !== 'awaiting_approval') {
      return reply.code(409).send({
        success: false,
        error: 'Only tasks awaiting approval can be approved for execution.',
      });
    }

    const updated = await prisma.workforceTask.update({
      where: {
        id: task.id,
      },
      data: {
        status: 'queued',
        requires_approval: false,
        approved_at: new Date(),
        error: null,
      },
    });

    await record(
      req.user.id,
      'task_approved',
      `Task approved and queued: ${task.title}`,
      {
        task_id: task.id,
      }
    );

    return {
      success: true,
      task: updated,
      message: 'Approved. The workforce worker will execute this task.',
    };
  });

  app.post('/tasks/:id/decision', async (req, reply) => {

    const schema = z.object({
      decision: z.enum(['approve', 'reject']),
      note: z.string().max(1000).optional(),
    });

    const parsed = schema.safeParse(req.body);

    if (!parsed.success) {
      return reply.code(400).send({
        success: false,
        error: 'Choose approve or reject.',
      });
    }

    const tenant_id = req.user.id;

    const task = await prisma.workforceTask.findFirst({
      where: {
        id: req.params.id,
        tenant_id,
      },
    });

    if (!task) {
      return reply.code(404).send({
        success: false,
        error: 'Task not found.',
      });
    }

    if (task.status !== 'awaiting_approval') {
      return reply.code(409).send({
        success: false,
        error: 'Only tasks awaiting approval can be approved or rejected.',
      });
    }

    const updated = await prisma.workforceTask.update({
      where: {
        id: task.id,
      },
      data: {
        status: parsed.data.decision === 'approve'
          ? 'queued'
          : 'rejected',

        requires_approval: parsed.data.decision === 'approve',

        approved_at: parsed.data.decision === 'approve'
          ? new Date()
          : null,

        error: parsed.data.decision === 'reject'
          ? (parsed.data.note || 'Rejected by workspace owner.')
          : null,
      },
    });

    await record(
      tenant_id,
      `task_${parsed.data.decision === 'approve' ? 'approved' : 'rejected'}`,
      `Task ${parsed.data.decision === 'approve' ? 'approved' : 'rejected'}: ${task.title}`,
      {
        task_id: task.id,
        note: parsed.data.note || null,
      }
    );

    return {
      success: true,
      task: updated,
    };
  });
}