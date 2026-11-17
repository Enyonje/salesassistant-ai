ALTER TABLE "sales_outreach_messages"
  ADD COLUMN "delivery_status" TEXT NOT NULL DEFAULT 'pending',
  ADD COLUMN "delivered_at" TIMESTAMP(3),
  ADD COLUMN "read_at" TIMESTAMP(3);

CREATE TABLE "sales_webhook_events" (
  "id" TEXT NOT NULL,
  "event_id" TEXT NOT NULL,
  "provider" TEXT NOT NULL,
  "event_type" TEXT NOT NULL,
  "payload" JSONB NOT NULL,
  "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "sales_webhook_events_pkey" PRIMARY KEY ("id")
);
CREATE UNIQUE INDEX "sales_webhook_events_event_id_key" ON "sales_webhook_events"("event_id");
CREATE INDEX "sales_webhook_events_provider_created_at_idx" ON "sales_webhook_events"("provider", "created_at");
CREATE INDEX "sales_webhook_events_event_type_created_at_idx" ON "sales_webhook_events"("event_type", "created_at");
