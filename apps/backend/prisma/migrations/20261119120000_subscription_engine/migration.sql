CREATE TABLE "sales_assistant"."subscriptions" (
  "id" TEXT NOT NULL, "tenant_id" TEXT NOT NULL, "user_id" TEXT NOT NULL,
  "plan_key" TEXT NOT NULL DEFAULT 'starter', "status" TEXT NOT NULL DEFAULT 'trialing',
  "trial_start" TIMESTAMP(3), "trial_end" TIMESTAMP(3),
  "current_period_start" TIMESTAMP(3), "current_period_end" TIMESTAMP(3),
  "cancel_at_period_end" BOOLEAN NOT NULL DEFAULT false, "canceled_at" TIMESTAMP(3),
  "stripe_customer_id" TEXT, "stripe_subscription_id" TEXT, "stripe_price_id" TEXT,
  "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" TIMESTAMP(3) NOT NULL, CONSTRAINT "subscriptions_pkey" PRIMARY KEY ("id")
);
CREATE UNIQUE INDEX "subscriptions_tenant_id_key" ON "sales_assistant"."subscriptions"("tenant_id");
CREATE UNIQUE INDEX "subscriptions_stripe_customer_id_key" ON "sales_assistant"."subscriptions"("stripe_customer_id");
CREATE UNIQUE INDEX "subscriptions_stripe_subscription_id_key" ON "sales_assistant"."subscriptions"("stripe_subscription_id");
CREATE INDEX "subscriptions_status_current_period_end_idx" ON "sales_assistant"."subscriptions"("status", "current_period_end");
CREATE TABLE "sales_assistant"."usage_records" (
  "id" TEXT NOT NULL, "tenant_id" TEXT NOT NULL, "metric" TEXT NOT NULL,
  "quantity" INTEGER NOT NULL DEFAULT 1, "period_start" TIMESTAMP(3) NOT NULL,
  "period_end" TIMESTAMP(3) NOT NULL, "source_key" TEXT, "metadata" JSONB,
  "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "usage_records_pkey" PRIMARY KEY ("id")
);
CREATE UNIQUE INDEX "usage_records_source_key_key" ON "sales_assistant"."usage_records"("source_key");
CREATE INDEX "usage_records_tenant_id_metric_period_start_idx" ON "sales_assistant"."usage_records"("tenant_id", "metric", "period_start");
CREATE INDEX "usage_records_tenant_id_created_at_idx" ON "sales_assistant"."usage_records"("tenant_id", "created_at");
