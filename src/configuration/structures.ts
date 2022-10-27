import { Filter, RoutingStatus, Properties } from "../objects";

export interface EmptyResponse {}

export interface ErrorResponse {
  error: {
    type: string;
    message: string;
  };
}

export interface BatchNullableResponse {
  responses: (EmptyResponse | ErrorResponse)[];
}

export interface CreateAgentResponse {
  id: string;
}

export interface BatchCreateAgentsResponse {
  responses: (CreateAgentResponse | ErrorResponse)[];
}

export interface Agent extends AgentFields {
  id: string;
  account_id?: string;
  last_logout?: string;
}

export interface AgentFields {
  name?: string;
  role?: string;
  avatar_path?: string;
  job_title?: string;
  mobile?: string;
  max_chats_count?: number;
  awaiting_approval?: boolean;
  groups?: GroupConfig[];
  work_scheduler?: WorkScheduler;
  notifications?: string[];
  email_subscriptions?: string[];
}

export interface GroupConfig {
  id: number;
  priority: string;
}

export interface WorkScheduler {
  timezone: string;
  schedule: Schedule[];
}

export interface Schedule {
  day: string;
  enabled: boolean;
  start: string;
  end: string;
}

export interface CreateBotResponse {
  id: string;
}

export interface BatchCreateBotResponse {
  responses: (CreateBotResponse | ErrorResponse)[];
}

export interface BotFields {
  name?: string;
  avatar_path?: string;
  default_group_priority?: GroupPriority;
  job_title?: string;
  mobile?: string;
  max_chats_count?: number;
  groups?: GroupConfig[];
  work_scheduler?: WorkScheduler;
  owner_client_id?: string;
  timezone?: string;
}

export interface Bot {
  id: string;
  name?: string;
  avatar_path?: string;
  default_group_priority?: GroupPriority;
  owner_client_id?: string;
  max_chats_count?: number;
  groups?: GroupConfig[];
  job_title?: string;
  work_scheduler?: WorkScheduler;
}

export enum GroupPriority {
  First = "first",
  Normal = "normal",
  Last = "last",
  DoNotAssign = "supervisor",
}

export interface AgentPriorities {
  [agent_id: string]: GroupPriority;
}

export interface CreateGroupResponse {
  id: string;
}

export interface Group {
  id: number;
  name: string;
  language_code: string;
  agent_priorities?: AgentPriorities;
  routing_status?: RoutingStatus;
}

export interface PropertiesConfig {
  [propertyName: string]: PropertyConfig;
}

export interface PropertyConfig {
  name: string;
  owner_client_id?: string;
  type: string;
  access: {
    [locationName: string]: LocationAccess;
  };
  description?: string;
  domain?: any[];
  range?: {
    from: number;
    to: number;
  };
  public_access?: string[];
  default_value?: any;
}

export interface LocationAccess {
  agent?: string[];
  customer?: string[];
}

export interface Webhook {
  action: string;
  secret_key: string;
  url: string;
  type: string;
  additional_data?: string[];
  description?: string;
  filters?: WebhookFilters;
}

type WebhookSourceType = "my_client" | "other_clients" | "system";

export interface WebhookFilters {
  author_type?: string;
  only_my_chats?: boolean;
  chat_presence?: {
    user_ids?: Filter<string>;
    my_bots: boolean;
  };
  source_type?: WebhookSourceType[];
}

export interface RegisteredWebhook extends Webhook {
  id: string;
  owner_client_id: string;
}

export interface RegisterWebhookResponse {
  id: string;
}

export interface WebhookData {
  action: string;
  additional_data?: string[];
  filters?: string[];
}

export interface WebhooksState {
  license_webhooks_enabled: boolean;
}

interface AutoAccessConditions {
  url?: Filter<{
    value: string;
    exact_match?: boolean;
  }>;
  domain?: Filter<{
    value: string;
    exact_match?: boolean;
  }>;
  geolocation?: Filter<{
    country?: string;
    country_code?: string;
    region?: string;
    city?: string;
  }>;
}

export interface AutoAccess {
  id: string;
  access: {
    groups: number[];
  };
  description?: string;
  next_id?: string;
}

export interface AddAutoAccessRequest extends Omit<AutoAccess, "id"> {
  conditions: AutoAccessConditions;
}

export interface UpdateAutoAccessRequest extends Omit<AutoAccess, "id"> {
  conditions?: AutoAccessConditions;
}

export interface AddAutoAccessResponse {
  id: string;
}

export interface GetOrganizationIDResponse {
  organization_id: string;
}

export interface GetLicenseIDResponse {
  license_id: string;
}

export interface PlanLimit {
  resource: string;
  limit_balance: number;
  id?: string;
}

export interface ChannelActivity {
  channel_type: string;
  channel_subtype: string;
  first_activity_timestamp: string;
}

export interface Tag {
  name: string;
  group_ids: number[];
  author_id: string;
  created_at: string;
}

export interface GroupProperties {
  id: string;
  properties: Properties
}

export type GroupsProperties = GroupProperties[]
