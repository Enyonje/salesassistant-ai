-- SEO department: tenant-scoped projects, keywords, audits and editorial briefs.
CREATE TABLE IF NOT EXISTS "sales_assistant"."seo_projects" (
  "id" TEXT NOT NULL, "tenant_id" TEXT NOT NULL, "name" TEXT NOT NULL, "website" TEXT NOT NULL,
  "target_market" TEXT, "target_country" TEXT, "language" TEXT NOT NULL DEFAULT 'en',
  "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP, "updated_at" TIMESTAMP(3) NOT NULL,
  CONSTRAINT "seo_projects_pkey" PRIMARY KEY ("id")
);
CREATE INDEX IF NOT EXISTS "seo_projects_tenant_id_updated_at_idx" ON "sales_assistant"."seo_projects"("tenant_id", "updated_at");
CREATE TABLE IF NOT EXISTS "sales_assistant"."seo_keywords" (
  "id" TEXT NOT NULL, "tenant_id" TEXT NOT NULL, "project_id" TEXT NOT NULL, "keyword" TEXT NOT NULL,
  "search_intent" TEXT, "priority" TEXT NOT NULL DEFAULT 'medium', "source" TEXT NOT NULL DEFAULT 'manual',
  "notes" TEXT, "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "seo_keywords_pkey" PRIMARY KEY ("id")
);
CREATE UNIQUE INDEX IF NOT EXISTS "seo_keywords_tenant_project_keyword_key" ON "sales_assistant"."seo_keywords"("tenant_id", "project_id", "keyword");
CREATE INDEX IF NOT EXISTS "seo_keywords_tenant_project_priority_idx" ON "sales_assistant"."seo_keywords"("tenant_id", "project_id", "priority");
CREATE TABLE IF NOT EXISTS "sales_assistant"."seo_audits" (
  "id" TEXT NOT NULL, "tenant_id" TEXT NOT NULL, "project_id" TEXT NOT NULL, "page_url" TEXT NOT NULL,
  "score" INTEGER NOT NULL, "findings" JSONB NOT NULL, "recommendations" JSONB NOT NULL,
  "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP, CONSTRAINT "seo_audits_pkey" PRIMARY KEY ("id")
);
CREATE INDEX IF NOT EXISTS "seo_audits_tenant_project_created_idx" ON "sales_assistant"."seo_audits"("tenant_id", "project_id", "created_at");
CREATE TABLE IF NOT EXISTS "sales_assistant"."seo_content_briefs" (
  "id" TEXT NOT NULL, "tenant_id" TEXT NOT NULL, "project_id" TEXT NOT NULL, "keyword" TEXT NOT NULL,
  "title" TEXT NOT NULL, "brief" TEXT NOT NULL, "provider" TEXT, "model" TEXT,
  "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP, CONSTRAINT "seo_content_briefs_pkey" PRIMARY KEY ("id")
);
CREATE INDEX IF NOT EXISTS "seo_content_briefs_tenant_project_created_idx" ON "sales_assistant"."seo_content_briefs"("tenant_id", "project_id", "created_at");
