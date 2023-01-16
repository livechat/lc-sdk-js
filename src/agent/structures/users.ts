import { Statistics, Visit } from "./structures";

interface BaseUser {
  id: string;
  name: string;
  email: string;
  events_seen_up_to: string;
  type: string;
  present: boolean;
  avatar: string;
}

export interface Agent extends BaseUser {}

export interface Customer extends BaseUser {
  email_verified: boolean;
  last_visit: Visit;
  session_fields: Record<string, string>[];
  statistics: Statistics;
  __priv_lc2_customer_id: string;
  agent_last_event_created_at: string;
  customer_last_event_created_at: string;
  created_at: string;
  followed: boolean;
  group_ids: number[];
  state: string;
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
