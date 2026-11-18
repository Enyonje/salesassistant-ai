CREATE TABLE "sales_assistant"."social_connections" (
  "id" TEXT NOT NULL,
  "tenant_id" TEXT NOT NULL,
  "platform" TEXT NOT NULL,
  "display_name" TEXT NOT NULL,
  "account_ref" TEXT NOT NULL,
  "access_token_encrypted" TEXT NOT NULL,
  "status" TEXT NOT NULL DEFAULT 'connected',
  "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" TIMESTAMP(3) NOT NULL,
  CONSTRAINT "social_connections_pkey" PRIMARY KEY ("id")
);
CREATE UNIQUE INDEX "social_connections_tenant_platform_account_key" ON "sales_assistant"."social_connections"("tenant_id", "platform", "account_ref");
CREATE INDEX "social_connections_tenant_status_idx" ON "sales_assistant"."social_connections"("tenant_id", "status");
CREATE TABLE "sales_assistant"."social_posts" (
  "id" TEXT NOT NULL,
  "tenant_id" TEXT NOT NULL,
  "connection_id" TEXT NOT NULL,
  "title" TEXT NOT NULL DEFAULT '',
  "body" TEXT NOT NULL,
  "media_url" TEXT,
  "status" TEXT NOT NULL DEFAULT 'draft',
  "scheduled_at" TIMESTAMP(3),
  "approved_at" TIMESTAMP(3),
  "published_at" TIMESTAMP(3),
  "external_post_id" TEXT,
  "external_url" TEXT,
  "error_message" TEXT,
  "attempts" INTEGER NOT NULL DEFAULT 0,
  "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" TIMESTAMP(3) NOT NULL,
  CONSTRAINT "social_posts_pkey" PRIMARY KEY ("id"),
  CONSTRAINT "social_posts_connection_id_fkey" FOREIGN KEY ("connection_id") REFERENCES "sales_assistant"."social_connections"("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
CREATE INDEX "social_posts_tenant_status_scheduled_idx" ON "sales_assistant"."social_posts"("tenant_id", "status", "scheduled_at");
CREATE INDEX "social_posts_connection_created_idx" ON "sales_assistant"."social_posts"("connection_id", "created_at");
