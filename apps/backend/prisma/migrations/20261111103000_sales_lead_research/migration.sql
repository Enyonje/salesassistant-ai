-- Additive website research fields for Sales Assistant leads.
ALTER TABLE "sales_leads"
  ADD COLUMN "website" TEXT,
  ADD COLUMN "research_summary" TEXT,
  ADD COLUMN "research_source_url" TEXT,
  ADD COLUMN "researched_at" TIMESTAMP(3);

CREATE INDEX "sales_leads_tenant_id_researched_at_idx"
  ON "sales_leads"("tenant_id", "researched_at");
