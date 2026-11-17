CREATE TABLE IF NOT EXISTS "sales_campaigns" (
  "id" TEXT NOT NULL,
  "tenant_id" TEXT NOT NULL,
  "owner_user_id" TEXT NOT NULL,
  "name" TEXT NOT NULL,
  "channel" TEXT NOT NULL,
  "status" TEXT NOT NULL DEFAULT 'draft',
  "steps" JSONB NOT NULL,
  "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" TIMESTAMP(3) NOT NULL,
  CONSTRAINT "sales_campaigns_pkey" PRIMARY KEY ("id")
);
CREATE INDEX IF NOT EXISTS "sales_campaigns_tenant_id_status_idx" ON "sales_campaigns"("tenant_id", "status");
CREATE INDEX IF NOT EXISTS "sales_campaigns_tenant_id_created_at_idx" ON "sales_campaigns"("tenant_id", "created_at");

CREATE TABLE IF NOT EXISTS "sales_campaign_enrollments" (
  "id" TEXT NOT NULL,
  "tenant_id" TEXT NOT NULL,
  "campaign_id" TEXT NOT NULL,
  "lead_id" TEXT NOT NULL,
  "status" TEXT NOT NULL DEFAULT 'active',
  "current_step" INTEGER NOT NULL DEFAULT 0,
  "next_send_at" TIMESTAMP(3),
  "last_sent_at" TIMESTAMP(3),
  "replied_at" TIMESTAMP(3),
  "stopped_reason" TEXT,
  "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" TIMESTAMP(3) NOT NULL,
  CONSTRAINT "sales_campaign_enrollments_pkey" PRIMARY KEY ("id")
);
CREATE UNIQUE INDEX IF NOT EXISTS "sales_campaign_enrollments_campaign_id_lead_id_key" ON "sales_campaign_enrollments"("campaign_id", "lead_id");
CREATE INDEX IF NOT EXISTS "sales_campaign_enrollments_tenant_id_status_next_send_at_idx" ON "sales_campaign_enrollments"("tenant_id", "status", "next_send_at");
CREATE INDEX IF NOT EXISTS "sales_campaign_enrollments_tenant_id_campaign_id_idx" ON "sales_campaign_enrollments"("tenant_id", "campaign_id");
