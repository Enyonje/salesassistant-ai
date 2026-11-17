-- Run once in the Supabase SQL Editor.
-- This creates an isolated namespace and does not alter public/SocialOps tables.
CREATE SCHEMA IF NOT EXISTS sales_assistant;

-- The backend connects using the database role in SALES_ASSISTANT_DATABASE_URL.
-- Supabase's postgres role owns the schema when created through SQL Editor.
GRANT USAGE, CREATE ON SCHEMA sales_assistant TO postgres;
