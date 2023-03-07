import { Statistics, Visit } from "./structures";

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
  email_verified?: boolean;
  last_visit?: Visit;
  session_fields?: Record<string, string>[];
  statistics?: Statistics;
  __priv_lc2_customer_id?: string;
  agent_last_event_created_at?: string;
  customer_last_event_created_at?: string;
  created_at?: string;
  followed?: boolean;
  group_ids?: number[];
  state?: string;
  avatar?: string;
  online?: boolean;
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
