import { Address, CustomerChat, Omnichannel, Order, Statistics, Ticket, Visit } from "./structures";

interface BaseUser {
  id: string;
  name?: string;
  email?: string;
  events_seen_up_to?: string;
  type: string;
  present?: boolean;
}

export interface Agent extends BaseUser {
  visibility: string;
  avatar: string;
}

export interface Customer extends BaseUser {
  name_is_default: boolean;
  avatar?: string;
  phone_number?: string;
  suggested_email?: string;
  created_at?: string;
  session_fields?: Record<string, string>[];
  visit?: Visit;
  statistics?: Statistics;
  agent_last_event_created_at?: string;
  customer_last_event_created_at?: string;
  chats?: CustomerChat[];
  followed: boolean;
  online: boolean;
  group_ids?: number[];
  state?: string;
  greeting_id?: number;
  email_verified: boolean;
  tickets?: Ticket[];
  orders?: Order[];
  omnichannel?: Omnichannel;
  address?: Address;
}

export type User = Agent | Customer;

export interface MyProfile extends BaseUser {
  routing_status: string;
  permission: string;
}

export interface InitialUser {
  id: string;
  type: string;
}
