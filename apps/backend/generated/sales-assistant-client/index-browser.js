
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.22.0
 * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
 */
Prisma.prismaVersion = {
  client: "5.22.0",
  engine: "605197351a3c8bdd595af2d2a9bc3025bca48ea2"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.NotFoundError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`NotFoundError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  email: 'email',
  password_hash: 'password_hash',
  name: 'name',
  org_id: 'org_id',
  created_at: 'created_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.SalesProfileScalarFieldEnum = {
  id: 'id',
  tenant_id: 'tenant_id',
  owner_user_id: 'owner_user_id',
  business_name: 'business_name',
  website: 'website',
  product_description: 'product_description',
  target_customer: 'target_customer',
  value_proposition: 'value_proposition',
  tone: 'tone',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.SalesLeadScalarFieldEnum = {
  id: 'id',
  tenant_id: 'tenant_id',
  owner_user_id: 'owner_user_id',
  full_name: 'full_name',
  company: 'company',
  website: 'website',
  email: 'email',
  phone: 'phone',
  source: 'source',
  stage: 'stage',
  score: 'score',
  estimated_value: 'estimated_value',
  notes: 'notes',
  research_summary: 'research_summary',
  research_source_url: 'research_source_url',
  researched_at: 'researched_at',
  email_consent: 'email_consent',
  whatsapp_consent: 'whatsapp_consent',
  email_consent_source: 'email_consent_source',
  email_consent_at: 'email_consent_at',
  whatsapp_consent_source: 'whatsapp_consent_source',
  whatsapp_consent_at: 'whatsapp_consent_at',
  email_opted_out_at: 'email_opted_out_at',
  whatsapp_opted_out_at: 'whatsapp_opted_out_at',
  last_contacted_at: 'last_contacted_at',
  next_follow_up_at: 'next_follow_up_at',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.SalesActivityScalarFieldEnum = {
  id: 'id',
  tenant_id: 'tenant_id',
  owner_user_id: 'owner_user_id',
  lead_id: 'lead_id',
  activity_type: 'activity_type',
  summary: 'summary',
  metadata: 'metadata',
  created_at: 'created_at'
};

exports.Prisma.SalesOutreachMessageScalarFieldEnum = {
  id: 'id',
  tenant_id: 'tenant_id',
  owner_user_id: 'owner_user_id',
  lead_id: 'lead_id',
  channel: 'channel',
  destination: 'destination',
  subject: 'subject',
  body: 'body',
  status: 'status',
  provider_message_id: 'provider_message_id',
  delivery_status: 'delivery_status',
  delivered_at: 'delivered_at',
  read_at: 'read_at',
  error_message: 'error_message',
  sent_at: 'sent_at',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.SalesCampaignScalarFieldEnum = {
  id: 'id',
  tenant_id: 'tenant_id',
  owner_user_id: 'owner_user_id',
  name: 'name',
  channel: 'channel',
  status: 'status',
  steps: 'steps',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.SalesCampaignEnrollmentScalarFieldEnum = {
  id: 'id',
  tenant_id: 'tenant_id',
  campaign_id: 'campaign_id',
  lead_id: 'lead_id',
  status: 'status',
  current_step: 'current_step',
  next_send_at: 'next_send_at',
  last_sent_at: 'last_sent_at',
  replied_at: 'replied_at',
  stopped_reason: 'stopped_reason',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.SalesWebhookEventScalarFieldEnum = {
  id: 'id',
  event_id: 'event_id',
  provider: 'provider',
  event_type: 'event_type',
  payload: 'payload',
  created_at: 'created_at'
};

exports.Prisma.WorkforceDepartmentScalarFieldEnum = {
  id: 'id',
  tenant_id: 'tenant_id',
  name: 'name',
  code: 'code',
  description: 'description',
  executive: 'executive',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.WorkforceAgentScalarFieldEnum = {
  id: 'id',
  tenant_id: 'tenant_id',
  department_id: 'department_id',
  name: 'name',
  role: 'role',
  level: 'level',
  description: 'description',
  capabilities: 'capabilities',
  kpis: 'kpis',
  status: 'status',
  autonomy_level: 'autonomy_level',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.WorkforceObjectiveScalarFieldEnum = {
  id: 'id',
  tenant_id: 'tenant_id',
  title: 'title',
  description: 'description',
  objective_type: 'objective_type',
  target_value: 'target_value',
  current_value: 'current_value',
  currency: 'currency',
  period_start: 'period_start',
  period_end: 'period_end',
  status: 'status',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.WorkforceTaskScalarFieldEnum = {
  id: 'id',
  tenant_id: 'tenant_id',
  department_id: 'department_id',
  agent_id: 'agent_id',
  parent_task_id: 'parent_task_id',
  title: 'title',
  description: 'description',
  task_type: 'task_type',
  priority: 'priority',
  status: 'status',
  input: 'input',
  output: 'output',
  requires_approval: 'requires_approval',
  approved_at: 'approved_at',
  started_at: 'started_at',
  completed_at: 'completed_at',
  error: 'error',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.WorkforceEventScalarFieldEnum = {
  id: 'id',
  tenant_id: 'tenant_id',
  agent_id: 'agent_id',
  task_id: 'task_id',
  event_type: 'event_type',
  message: 'message',
  metadata: 'metadata',
  created_at: 'created_at'
};

exports.Prisma.ProspectingRunScalarFieldEnum = {
  id: 'id',
  tenant_id: 'tenant_id',
  created_by: 'created_by',
  query: 'query',
  industry: 'industry',
  location: 'location',
  keywords: 'keywords',
  ideal_customer: 'ideal_customer',
  provider: 'provider',
  result_count: 'result_count',
  status: 'status',
  created_at: 'created_at'
};

exports.Prisma.MarketProspectScalarFieldEnum = {
  id: 'id',
  tenant_id: 'tenant_id',
  run_id: 'run_id',
  company_name: 'company_name',
  domain: 'domain',
  website: 'website',
  description: 'description',
  source_provider: 'source_provider',
  source_url: 'source_url',
  source_published_at: 'source_published_at',
  fit_score: 'fit_score',
  status: 'status',
  contact_name: 'contact_name',
  contact_title: 'contact_title',
  contact_email: 'contact_email',
  converted_lead_id: 'converted_lead_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.ProspectContactScalarFieldEnum = {
  id: 'id',
  tenant_id: 'tenant_id',
  prospect_id: 'prospect_id',
  full_name: 'full_name',
  first_name: 'first_name',
  last_name: 'last_name',
  title: 'title',
  email: 'email',
  email_type: 'email_type',
  confidence: 'confidence',
  verification: 'verification',
  source_provider: 'source_provider',
  source_url: 'source_url',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.MarketingCampaignScalarFieldEnum = {
  id: 'id',
  tenant_id: 'tenant_id',
  name: 'name',
  objective: 'objective',
  channel: 'channel',
  audience: 'audience',
  status: 'status',
  budget: 'budget',
  currency: 'currency',
  start_at: 'start_at',
  end_at: 'end_at',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.MarketingAssetScalarFieldEnum = {
  id: 'id',
  tenant_id: 'tenant_id',
  campaign_id: 'campaign_id',
  asset_type: 'asset_type',
  channel: 'channel',
  title: 'title',
  body: 'body',
  call_to_action: 'call_to_action',
  status: 'status',
  scheduled_at: 'scheduled_at',
  published_at: 'published_at',
  external_id: 'external_id',
  performance: 'performance',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.MarketingDeliveryScalarFieldEnum = {
  id: 'id',
  tenant_id: 'tenant_id',
  asset_id: 'asset_id',
  lead_id: 'lead_id',
  recipient: 'recipient',
  status: 'status',
  provider: 'provider',
  provider_id: 'provider_id',
  error_message: 'error_message',
  sent_at: 'sent_at',
  created_at: 'created_at'
};

exports.Prisma.SeoProjectScalarFieldEnum = {
  id: 'id',
  tenant_id: 'tenant_id',
  name: 'name',
  website: 'website',
  target_market: 'target_market',
  target_country: 'target_country',
  language: 'language',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.SeoKeywordScalarFieldEnum = {
  id: 'id',
  tenant_id: 'tenant_id',
  project_id: 'project_id',
  keyword: 'keyword',
  search_intent: 'search_intent',
  priority: 'priority',
  source: 'source',
  notes: 'notes',
  created_at: 'created_at'
};

exports.Prisma.SeoAuditScalarFieldEnum = {
  id: 'id',
  tenant_id: 'tenant_id',
  project_id: 'project_id',
  page_url: 'page_url',
  score: 'score',
  findings: 'findings',
  recommendations: 'recommendations',
  created_at: 'created_at'
};

exports.Prisma.SeoContentBriefScalarFieldEnum = {
  id: 'id',
  tenant_id: 'tenant_id',
  project_id: 'project_id',
  keyword: 'keyword',
  title: 'title',
  brief: 'brief',
  provider: 'provider',
  model: 'model',
  created_at: 'created_at'
};

exports.Prisma.SocialConnectionScalarFieldEnum = {
  id: 'id',
  tenant_id: 'tenant_id',
  platform: 'platform',
  display_name: 'display_name',
  account_ref: 'account_ref',
  access_token_encrypted: 'access_token_encrypted',
  status: 'status',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.SocialPostScalarFieldEnum = {
  id: 'id',
  tenant_id: 'tenant_id',
  connection_id: 'connection_id',
  title: 'title',
  body: 'body',
  media_url: 'media_url',
  status: 'status',
  scheduled_at: 'scheduled_at',
  approved_at: 'approved_at',
  published_at: 'published_at',
  external_post_id: 'external_post_id',
  external_url: 'external_url',
  error_message: 'error_message',
  attempts: 'attempts',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.SubscriptionScalarFieldEnum = {
  id: 'id',
  tenant_id: 'tenant_id',
  user_id: 'user_id',
  plan_key: 'plan_key',
  status: 'status',
  trial_start: 'trial_start',
  trial_end: 'trial_end',
  current_period_start: 'current_period_start',
  current_period_end: 'current_period_end',
  cancel_at_period_end: 'cancel_at_period_end',
  canceled_at: 'canceled_at',
  stripe_customer_id: 'stripe_customer_id',
  stripe_subscription_id: 'stripe_subscription_id',
  stripe_price_id: 'stripe_price_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.UsageRecordScalarFieldEnum = {
  id: 'id',
  tenant_id: 'tenant_id',
  metric: 'metric',
  quantity: 'quantity',
  period_start: 'period_start',
  period_end: 'period_end',
  source_key: 'source_key',
  metadata: 'metadata',
  created_at: 'created_at'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullableJsonNullValueInput = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull
};

exports.Prisma.JsonNullValueInput = {
  JsonNull: Prisma.JsonNull
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.JsonNullValueFilter = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
  AnyNull: Prisma.AnyNull
};


exports.Prisma.ModelName = {
  User: 'User',
  SalesProfile: 'SalesProfile',
  SalesLead: 'SalesLead',
  SalesActivity: 'SalesActivity',
  SalesOutreachMessage: 'SalesOutreachMessage',
  SalesCampaign: 'SalesCampaign',
  SalesCampaignEnrollment: 'SalesCampaignEnrollment',
  SalesWebhookEvent: 'SalesWebhookEvent',
  WorkforceDepartment: 'WorkforceDepartment',
  WorkforceAgent: 'WorkforceAgent',
  WorkforceObjective: 'WorkforceObjective',
  WorkforceTask: 'WorkforceTask',
  WorkforceEvent: 'WorkforceEvent',
  ProspectingRun: 'ProspectingRun',
  MarketProspect: 'MarketProspect',
  ProspectContact: 'ProspectContact',
  MarketingCampaign: 'MarketingCampaign',
  MarketingAsset: 'MarketingAsset',
  MarketingDelivery: 'MarketingDelivery',
  SeoProject: 'SeoProject',
  SeoKeyword: 'SeoKeyword',
  SeoAudit: 'SeoAudit',
  SeoContentBrief: 'SeoContentBrief',
  SocialConnection: 'SocialConnection',
  SocialPost: 'SocialPost',
  Subscription: 'Subscription',
  UsageRecord: 'UsageRecord'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
