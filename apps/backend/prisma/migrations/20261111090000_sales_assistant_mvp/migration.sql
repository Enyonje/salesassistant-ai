-- Sales Assistant MVP. Tenant identifiers are derived from the authenticated
-- organization (or user workspace when no organization exists).
CREATE TABLE "sales_profiles" (
  "id" TEXT NOT NULL,
  "tenant_id" TEXT NOT NULL,
  "owner_user_id" TEXT NOT NULL,
  "business_name" TEXT,
  "website" TEXT,
  "product_description" TEXT,
  "target_customer" TEXT,
  "value_proposition" TEXT,
  "tone" TEXT NOT NULL DEFAULT 'professional',
  "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" TIMESTAMP(3) NOT NULL,
  CONSTRAINT "sales_profiles_pkey" PRIMARY KEY ("id")
);
CREATE UNIQUE INDEX "sales_profiles_tenant_id_key" ON "sales_profiles"("tenant_id");

CREATE TABLE "sales_leads" (
  "id" TEXT NOT NULL,
  "tenant_id" TEXT NOT NULL,
  "owner_user_id" TEXT NOT NULL,
  "full_name" TEXT NOT NULL,
  "company" TEXT,
  "email" TEXT,
  "phone" TEXT,
  "source" TEXT NOT NULL DEFAULT 'manual',
  "stage" TEXT NOT NULL DEFAULT 'new',
  "score" INTEGER NOT NULL DEFAULT 0,
  "estimated_value" DECIMAL(12,2),
  "notes" TEXT,
  "last_contacted_at" TIMESTAMP(3),
  "next_follow_up_at" TIMESTAMP(3),
  "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" TIMESTAMP(3) NOT NULL,
  CONSTRAINT "sales_leads_pkey" PRIMARY KEY ("id")
);
CREATE INDEX "sales_leads_tenant_id_stage_idx" ON "sales_leads"("tenant_id", "stage");
CREATE INDEX "sales_leads_tenant_id_updated_at_idx" ON "sales_leads"("tenant_id", "updated_at");
CREATE INDEX "sales_leads_tenant_id_next_follow_up_at_idx" ON "sales_leads"("tenant_id", "next_follow_up_at");

CREATE TABLE "sales_activities" (
  "id" TEXT NOT NULL,
  "tenant_id" TEXT NOT NULL,
  "owner_user_id" TEXT NOT NULL,
  "lead_id" TEXT,
  "activity_type" TEXT NOT NULL,
  "summary" TEXT NOT NULL,
  "metadata" JSONB,
  "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "sales_activities_pkey" PRIMARY KEY ("id")
);
CREATE INDEX "sales_activities_tenant_id_created_at_idx" ON "sales_activities"("tenant_id", "created_at");
CREATE INDEX "sales_activities_tenant_id_lead_id_idx" ON "sales_activities"("tenant_id", "lead_id");
