CREATE SCHEMA IF NOT EXISTS sales_assistant;
CREATE TABLE IF NOT EXISTS sales_assistant.workforce_departments (
 id TEXT PRIMARY KEY, tenant_id TEXT NOT NULL, name TEXT NOT NULL, code TEXT NOT NULL, description TEXT NOT NULL, executive TEXT NOT NULL,
 created_at TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP, updated_at TIMESTAMP(3) NOT NULL,
 CONSTRAINT workforce_departments_tenant_code_key UNIQUE (tenant_id, code));
CREATE INDEX IF NOT EXISTS workforce_departments_tenant_idx ON sales_assistant.workforce_departments(tenant_id);
CREATE TABLE IF NOT EXISTS sales_assistant.workforce_agents (
 id TEXT PRIMARY KEY, tenant_id TEXT NOT NULL, department_id TEXT NOT NULL, name TEXT NOT NULL, role TEXT NOT NULL, level TEXT NOT NULL DEFAULT 'specialist', description TEXT NOT NULL,
 capabilities JSONB NOT NULL, kpis JSONB NOT NULL, status TEXT NOT NULL DEFAULT 'idle', autonomy_level TEXT NOT NULL DEFAULT 'approval_required',
 created_at TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP, updated_at TIMESTAMP(3) NOT NULL,
 CONSTRAINT workforce_agents_department_fkey FOREIGN KEY (department_id) REFERENCES sales_assistant.workforce_departments(id) ON DELETE CASCADE);
CREATE INDEX IF NOT EXISTS workforce_agents_tenant_department_idx ON sales_assistant.workforce_agents(tenant_id, department_id);
CREATE INDEX IF NOT EXISTS workforce_agents_tenant_status_idx ON sales_assistant.workforce_agents(tenant_id, status);
CREATE TABLE IF NOT EXISTS sales_assistant.workforce_objectives (
 id TEXT PRIMARY KEY, tenant_id TEXT NOT NULL, title TEXT NOT NULL, description TEXT NOT NULL, objective_type TEXT NOT NULL DEFAULT 'revenue', target_value DOUBLE PRECISION,
 current_value DOUBLE PRECISION NOT NULL DEFAULT 0, currency TEXT NOT NULL DEFAULT 'USD', period_start TIMESTAMP(3) NOT NULL, period_end TIMESTAMP(3) NOT NULL, status TEXT NOT NULL DEFAULT 'active',
 created_at TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP, updated_at TIMESTAMP(3) NOT NULL);
CREATE INDEX IF NOT EXISTS workforce_objectives_tenant_status_idx ON sales_assistant.workforce_objectives(tenant_id, status);
CREATE TABLE IF NOT EXISTS sales_assistant.workforce_tasks (
 id TEXT PRIMARY KEY, tenant_id TEXT NOT NULL, department_id TEXT NOT NULL, agent_id TEXT, parent_task_id TEXT, title TEXT NOT NULL, description TEXT NOT NULL,
 task_type TEXT NOT NULL DEFAULT 'operational', priority TEXT NOT NULL DEFAULT 'normal', status TEXT NOT NULL DEFAULT 'queued', input JSONB, output JSONB,
 requires_approval BOOLEAN NOT NULL DEFAULT FALSE, approved_at TIMESTAMP(3), started_at TIMESTAMP(3), completed_at TIMESTAMP(3), error TEXT,
 created_at TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP, updated_at TIMESTAMP(3) NOT NULL,
 CONSTRAINT workforce_tasks_department_fkey FOREIGN KEY (department_id) REFERENCES sales_assistant.workforce_departments(id) ON DELETE CASCADE,
 CONSTRAINT workforce_tasks_agent_fkey FOREIGN KEY (agent_id) REFERENCES sales_assistant.workforce_agents(id) ON DELETE SET NULL);
CREATE INDEX IF NOT EXISTS workforce_tasks_tenant_status_priority_idx ON sales_assistant.workforce_tasks(tenant_id, status, priority);
CREATE INDEX IF NOT EXISTS workforce_tasks_tenant_created_idx ON sales_assistant.workforce_tasks(tenant_id, created_at);
CREATE INDEX IF NOT EXISTS workforce_tasks_agent_status_idx ON sales_assistant.workforce_tasks(agent_id, status);
CREATE TABLE IF NOT EXISTS sales_assistant.workforce_events (
 id TEXT PRIMARY KEY, tenant_id TEXT NOT NULL, agent_id TEXT, task_id TEXT, event_type TEXT NOT NULL, message TEXT NOT NULL, metadata JSONB,
 created_at TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP);
CREATE INDEX IF NOT EXISTS workforce_events_tenant_created_idx ON sales_assistant.workforce_events(tenant_id, created_at);
