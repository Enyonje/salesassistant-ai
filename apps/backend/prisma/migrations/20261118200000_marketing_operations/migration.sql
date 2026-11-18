CREATE TABLE IF NOT EXISTS sales_assistant.marketing_campaigns (
  id TEXT PRIMARY KEY, tenant_id TEXT NOT NULL, name TEXT NOT NULL, objective TEXT NOT NULL,
  channel TEXT NOT NULL, audience TEXT NOT NULL, status TEXT NOT NULL DEFAULT 'draft',
  budget DOUBLE PRECISION, currency TEXT NOT NULL DEFAULT 'USD', start_at TIMESTAMP(3), end_at TIMESTAMP(3),
  created_at TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP, updated_at TIMESTAMP(3) NOT NULL
);
CREATE INDEX IF NOT EXISTS marketing_campaigns_tenant_status_created_idx ON sales_assistant.marketing_campaigns(tenant_id,status,created_at);
CREATE TABLE IF NOT EXISTS sales_assistant.marketing_assets (
  id TEXT PRIMARY KEY, tenant_id TEXT NOT NULL, campaign_id TEXT, asset_type TEXT NOT NULL DEFAULT 'social_post',
  channel TEXT NOT NULL, title TEXT NOT NULL, body TEXT NOT NULL, call_to_action TEXT, status TEXT NOT NULL DEFAULT 'draft',
  scheduled_at TIMESTAMP(3), published_at TIMESTAMP(3), external_id TEXT, performance JSONB,
  created_at TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP, updated_at TIMESTAMP(3) NOT NULL,
  CONSTRAINT marketing_assets_campaign_id_fkey FOREIGN KEY (campaign_id) REFERENCES sales_assistant.marketing_campaigns(id) ON DELETE SET NULL ON UPDATE CASCADE
);
CREATE INDEX IF NOT EXISTS marketing_assets_tenant_status_schedule_idx ON sales_assistant.marketing_assets(tenant_id,status,scheduled_at);
CREATE INDEX IF NOT EXISTS marketing_assets_tenant_campaign_idx ON sales_assistant.marketing_assets(tenant_id,campaign_id);
