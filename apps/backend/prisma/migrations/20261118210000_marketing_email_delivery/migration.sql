CREATE TABLE IF NOT EXISTS sales_assistant.marketing_deliveries (
  id TEXT PRIMARY KEY,
  tenant_id TEXT NOT NULL,
  asset_id TEXT NOT NULL,
  lead_id TEXT NOT NULL,
  recipient TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'queued',
  provider TEXT NOT NULL DEFAULT 'smtp',
  provider_id TEXT,
  error_message TEXT,
  sent_at TIMESTAMP(3),
  created_at TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);
CREATE INDEX IF NOT EXISTS marketing_deliveries_tenant_created_idx
  ON sales_assistant.marketing_deliveries(tenant_id, created_at);
CREATE INDEX IF NOT EXISTS marketing_deliveries_tenant_asset_status_idx
  ON sales_assistant.marketing_deliveries(tenant_id, asset_id, status);
CREATE INDEX IF NOT EXISTS marketing_deliveries_tenant_lead_idx
  ON sales_assistant.marketing_deliveries(tenant_id, lead_id);

CREATE UNIQUE INDEX IF NOT EXISTS marketing_deliveries_tenant_asset_lead_key
  ON sales_assistant.marketing_deliveries(tenant_id, asset_id, lead_id);
