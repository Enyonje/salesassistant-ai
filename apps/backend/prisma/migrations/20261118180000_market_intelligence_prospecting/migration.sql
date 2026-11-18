CREATE SCHEMA IF NOT EXISTS sales_assistant;
CREATE TABLE IF NOT EXISTS sales_assistant.prospecting_runs (
  id TEXT PRIMARY KEY,
  tenant_id TEXT NOT NULL,
  created_by TEXT NOT NULL,
  query TEXT NOT NULL,
  industry TEXT NOT NULL,
  location TEXT,
  keywords TEXT,
  ideal_customer TEXT,
  provider TEXT NOT NULL,
  result_count INTEGER NOT NULL DEFAULT 0,
  status TEXT NOT NULL DEFAULT 'completed',
  created_at TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);
CREATE INDEX IF NOT EXISTS prospecting_runs_tenant_created_idx ON sales_assistant.prospecting_runs(tenant_id, created_at);
CREATE TABLE IF NOT EXISTS sales_assistant.market_prospects (
  id TEXT PRIMARY KEY,
  tenant_id TEXT NOT NULL,
  run_id TEXT,
  company_name TEXT NOT NULL,
  domain TEXT NOT NULL,
  website TEXT NOT NULL,
  description TEXT NOT NULL,
  source_provider TEXT NOT NULL,
  source_url TEXT NOT NULL,
  source_published_at TIMESTAMP(3),
  fit_score INTEGER NOT NULL DEFAULT 0,
  status TEXT NOT NULL DEFAULT 'discovered',
  contact_name TEXT,
  contact_title TEXT,
  contact_email TEXT,
  converted_lead_id TEXT,
  created_at TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT market_prospects_tenant_domain_key UNIQUE (tenant_id, domain)
);
CREATE INDEX IF NOT EXISTS market_prospects_tenant_status_score_idx ON sales_assistant.market_prospects(tenant_id, status, fit_score);
CREATE INDEX IF NOT EXISTS market_prospects_tenant_created_idx ON sales_assistant.market_prospects(tenant_id, created_at);
