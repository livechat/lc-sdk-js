import { Chat, User } from "../agent/structures";
import { Access, Customer, Event, Postback, Properties, RoutingStatus } from "./structures";

export interface Webhook {
  webhook_id: string;
  secret_key: string;
  action: string;
  license_id: string;
  additional_data: object;
  payload: WebhookPayload;
}

type WebhookPayload =
  | IncomingChat
  | ChatDeactivated
  | ChatAccessGranted
  | ChatAccessRevoked
  | ChatAccessSet
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
  | AgentDeleted
  | IncomingCustomer
  | EventsMarkedAsSeen
  | ChatTransferred
  | CustomerSessionFieldsUpdated;

export interface IncomingChat {
  chat: Chat;
}

export interface ChatDeactivated {
  chat_id: string;
  thread_id: string;
  user_id?: string;
}

export interface ChatAccessGranted {
  id: string;
  access: Access;
}

export interface ChatAccessRevoked {
  id: string;
  access: Access;
}

export interface ChatAccessSet {
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

export interface AgentDeleted {
  agent_id: string;
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
