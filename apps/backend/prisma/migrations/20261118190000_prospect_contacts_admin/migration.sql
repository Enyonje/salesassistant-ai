CREATE TABLE IF NOT EXISTS sales_assistant.prospect_contacts (
  id TEXT PRIMARY KEY,
  tenant_id TEXT NOT NULL,
  prospect_id TEXT NOT NULL,
  full_name TEXT,
  first_name TEXT,
  last_name TEXT,
  title TEXT,
  email TEXT,
  email_type TEXT,
  confidence INTEGER,
  verification TEXT NOT NULL DEFAULT 'unverified',
  source_provider TEXT NOT NULL,
  source_url TEXT,
  created_at TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);
CREATE INDEX IF NOT EXISTS prospect_contacts_tenant_prospect_idx ON sales_assistant.prospect_contacts(tenant_id, prospect_id);
CREATE INDEX IF NOT EXISTS prospect_contacts_tenant_email_idx ON sales_assistant.prospect_contacts(tenant_id, email);
CREATE UNIQUE INDEX IF NOT EXISTS prospect_contacts_tenant_prospect_email_key ON sales_assistant.prospect_contacts(tenant_id, prospect_id, email);
