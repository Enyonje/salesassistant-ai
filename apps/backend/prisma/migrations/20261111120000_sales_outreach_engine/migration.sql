ALTER TABLE "sales_leads"
  ADD COLUMN IF NOT EXISTS "email_consent" BOOLEAN NOT NULL DEFAULT FALSE,
  ADD COLUMN IF NOT EXISTS "whatsapp_consent" BOOLEAN NOT NULL DEFAULT FALSE,
  ADD COLUMN IF NOT EXISTS "email_consent_source" TEXT,
  ADD COLUMN IF NOT EXISTS "email_consent_at" TIMESTAMP(3),
  ADD COLUMN IF NOT EXISTS "whatsapp_consent_source" TEXT,
  ADD COLUMN IF NOT EXISTS "whatsapp_consent_at" TIMESTAMP(3),
  ADD COLUMN IF NOT EXISTS "email_opted_out_at" TIMESTAMP(3),
  ADD COLUMN IF NOT EXISTS "whatsapp_opted_out_at" TIMESTAMP(3);

CREATE TABLE IF NOT EXISTS "sales_outreach_messages" (
  "id" TEXT NOT NULL,
  "tenant_id" TEXT NOT NULL,
  "owner_user_id" TEXT NOT NULL,
  "lead_id" TEXT NOT NULL,
  "channel" TEXT NOT NULL,
  "destination" TEXT NOT NULL,
  "subject" TEXT,
  "body" TEXT NOT NULL,
  "status" TEXT NOT NULL DEFAULT 'queued',
  "provider_message_id" TEXT,
  "error_message" TEXT,
  "sent_at" TIMESTAMP(3),
  "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" TIMESTAMP(3) NOT NULL,
  CONSTRAINT "sales_outreach_messages_pkey" PRIMARY KEY ("id")
);
CREATE INDEX IF NOT EXISTS "sales_outreach_messages_tenant_id_created_at_idx" ON "sales_outreach_messages"("tenant_id", "created_at");
CREATE INDEX IF NOT EXISTS "sales_outreach_messages_tenant_id_lead_id_idx" ON "sales_outreach_messages"("tenant_id", "lead_id");
CREATE INDEX IF NOT EXISTS "sales_outreach_messages_tenant_id_status_idx" ON "sales_outreach_messages"("tenant_id", "status");
