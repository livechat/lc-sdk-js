import { RoutingStatus } from "../objects";

export interface EmptyResponse {}

export interface CreateAgentResponse {
  id: string;
}

export interface Agent extends AgentFields {
  id: string;
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
  [day: string]: DaySchedule;
}

export interface DaySchedule {
  start: string;
  end: string;
}

export interface CreateBotResponse {
  id: string;
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
  owner_client_id: string;
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

export interface WebhookFilters {
  author_type?: string;
  only_my_chats?: boolean;
  chat_presence?: {
    user_ids?: {
      values?: string[];
      exclude_values?: string[];
    };
    my_bots: boolean;
  };
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
