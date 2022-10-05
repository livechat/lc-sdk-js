import { Access, Event, Postback, Properties, Customer, RoutingStatus, Filter, Thread } from "../objects";
import { User, Chat } from "../agent/structures";

export interface Webhook {
  webhook_id: string;
  secret_key: string;
  action: string;
  organization_id: string;
  additional_data: object;
  payload: WebhookPayload;
}

type WebhookPayload =
  | IncomingChat
  | ChatDeactivated
  | ChatAccessUpdated
  | ChatUserAdded
  | ChatUserRemoved
  | IncomingEvent
  | EventUpdated
  | IncomingRichMessagePostback
  | ChatPropertiesUpdated
  | ChatPropertiesDeleted
  | ThreadPropertiesUpdated
  | ThreadPropertiesDeleted
  | EventPropertiesUpdated
  | EventPropertiesDeleted
  | ThreadTagged
  | ThreadUntagged
  | RoutingStatusSet
  | IncomingCustomer
  | EventsMarkedAsSeen
  | ChatTransferred
  | CustomerSessionFieldsUpdated
  | AgentCreated
  | AgentUpdated
  | AgentDeleted
  | AgentSuspended
  | AgentUnsuspended
  | AgentApproved
  | BotCreated
  | BotUpdated
  | BotDeleted
  | GroupCreated
  | GroupUpdated
  | GroupDeleted
  | AutoAccessAdded
  | AutoAccessUpdated
  | AutoAccessDeleted;

export interface IncomingChat {
  chat: Chat;
}

export interface ChatDeactivated {
  chat_id: string;
  thread_id: string;
  user_id?: string;
}

export interface ChatAccessUpdated {
  id: string;
  access: Access;
}

export interface ChatUserAdded {
  chat_id: string;
  thread_id: string;
  user: User;
  user_type: string;
}

export interface ChatUserRemoved {
  chat_id: string;
  thread_id: string;
  user_id: string;
  user_type: string;
}

export interface IncomingEvent {
  chat_id: string;
  thread_id: string;
  event: Event;
}

export interface EventUpdated {
  chat_id: string;
  thread_id: string;
  event: Event;
}

export interface IncomingRichMessagePostback {
  user_id: string;
  chat_id: string;
  thread_id: string;
  event_id: string;
  postback: Postback;
}

export interface ChatPropertiesUpdated {
  chat_id: string;
  properties: Properties;
}

export interface ChatPropertiesDeleted {
  chat_id: string;
  properties: Properties;
}

export interface ThreadPropertiesUpdated {
  chat_id: string;
  thread_id: string;
  properties: Properties;
}

export interface ThreadPropertiesDeleted {
  chat_id: string;
  thread_id: string;
  properties: Properties;
}

export interface EventPropertiesUpdated {
  chat_id: string;
  thread_id: string;
  event_id: string;
  properties: Properties;
}

export interface EventPropertiesDeleted {
  chat_id: string;
  thread_id: string;
  event_id: string;
  properties: Properties;
}

export interface ThreadTagged {
  chat_id: string;
  thread_id: string;
  tag: string;
}

export interface ThreadUntagged {
  chat_id: string;
  thread_id: string;
  tag: string;
}

export interface RoutingStatusSet {
  agent_id: string;
  status: RoutingStatus;
}

export interface IncomingCustomer {
  customer: Customer;
}

export interface EventsMarkedAsSeen {
  user_id: string;
  chat_id: string;
  seen_up_to: string;
}

export interface ChatTransferred {
  chat_id: string;
  thread_id?: string;
  requester_id?: string;
  reason: string;
  transferred_to: {
    agent_ids?: string[];
    group_ids?: number[];
  };
  queue?: {
    position: number;
    wait_time: number;
    queued_at: string;
  };
}

export interface CustomerSessionFieldsUpdated {
  id: string;
  active_chat: {
    chat_id: string;
    thread_id: string;
  };
  session_fields: Record<string, string>[];
}

interface GroupAssignment {
  id: number;
  priority: number;
}

interface WorkScheduler {
  timezone: string;
  schedule: Schedule[];
}

interface Schedule {
  enabled: boolean;
  day: string;
  start: string;
  end: string;
}

export interface AgentCreated {
  id: string;
  name: string;
  role?: string;
  avatar?: string;
  job_title?: string;
  mobile?: string;
  max_chats_count?: number;
  awaiting_approval: boolean;
  groups?: GroupAssignment[];
  notifications?: string[];
  email_subscriptions?: string[];
  work_scheduler?: WorkScheduler;
}

export interface AgentUpdated {
  id: string;
  name?: string;
  role?: string;
  avatar?: string;
  job_title?: string;
  mobile?: string;
  max_chats_count?: number;
  groups?: GroupAssignment[];
  notifications?: string[];
  email_subscriptions?: string[];
  work_scheduler?: WorkScheduler;
}

export interface AgentDeleted {
  id: string;
}

export interface AgentSuspended {
  id: string;
}

export interface AgentUnsuspended {
  id: string;
}

export interface AgentApproved {
  id: string;
}

export interface BotCreated {
  id: string;
  name: string;
  avatar?: string;
  max_chats_count?: number;
  default_group_priority: string;
  groups: GroupAssignment[];
  work_scheduler?: WorkScheduler;
  timezone?: string;
  owner_client_id: string;
  job_title?: string;
}

export interface BotUpdated {
  id: string;
  name?: string;
  avatar?: string;
  max_chats_count?: number;
  default_group_priority: string;
  groups?: GroupAssignment[];
  work_scheduler?: WorkScheduler;
  timezone?: string;
  job_title?: string;
}

export interface BotDeleted {
  id: string;
}

export interface GroupCreated {
  id: number;
  name: string;
  language_code: string;
  agent_priorities: Record<string, string>;
}

export interface GroupUpdated {
  id: number;
  name?: string;
  language_code?: string;
  agent_priorities?: Record<string, string>;
}

export interface GroupDeleted {
  id: number;
}

export interface AutoAccessAdded {
  id: string;
  description: string;
  access: {
    group_ids: number[];
  };
  conditions: {
    url: Filter<{ value: string; exact_match: boolean }>;
    domain: Filter<{ value: string; exact_match: boolean }>;
    geolocation: Pick<
      Filter<{
        country?: string;
        country_code?: string;
        region?: string;
        city?: string;
      }>,
      "values"
    >;
  };
  next_id?: string;
}

export interface AutoAccessDeleted {
  id: string;
}

export interface AutoAccessUpdated {
  id: string;
  description?: string;
  access: {
    group_ids: number[];
  };
  conditions: {
    url: Filter<{ value: string; exact_match: boolean }>;
    domain: Filter<{ value: string; exact_match: boolean }>;
    geolocation: Pick<
      Filter<{
        country?: string;
        country_code?: string;
        region?: string;
        city?: string;
      }>,
      "values"
    >;
  };
  next_id?: string;
}
