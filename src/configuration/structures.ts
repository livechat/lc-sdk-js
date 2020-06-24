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
  bot_agent_id: string;
}

export interface BotFields {
  name?: string;
  avatar?: string;
  max_chats_count?: string;
  groups?: GroupConfig[];
  webhooks?: BotWebhooks;
}

export interface BotWebhooks {
  url: string;
  secret_key: string;
  actions: WebhookAction[];
}

export interface WebhookAction {
  name: string;
  filters?: object;
  additional_data?: string[];
}

export interface ListBotsResponse {
  bot_agents: BotAgent[];
}

export interface BotAgent {
  id: string;
  name: string;
  avatar: string;
  status: BotStatus;
}

export enum BotStatus {
  AcceptingChats = "accepting chats",
  NotAcceptingChats = "not accepting chats",
  Offline = "offline",
}

export interface GetBotResponse {
  bot_agent: BotAgentDetails;
}

export interface BotAgentDetails extends BotAgent {
  default_group_priority: GroupPriority;
  application: object;
  max_chats_count: number;
  groups: GroupConfig[];
  webhooks: BotWebhooks[];
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
  type: string;
  locations: {
    [locationName: string]: Location;
  };
  description?: string;
  domain?: any[];
  range?: {
    from: number;
    to: number;
  };
}

export interface Location {
  access: PropertyAccess;
}

export interface PropertyAccess {
  read: boolean;
  write: boolean;
}

export interface Webhook {
  action: string;
  secret_key: string;
  url: string;
  additional_data?: string[];
  description?: string;
  filters?: WebhookFilters;
}

export interface WebhookFilters {
  author_type?: string;
  only_my_chats?: boolean;
  chat_member_ids?: {
    agents_any?: string[];
    agents_exlude?: string[];
  };
}

export interface RegisteredWebhook extends Webhook {
  webhook_id: string;
  owner_client_id: string;
}

export interface RegisterWebhookResponse {
  webhook_id: string;
}
