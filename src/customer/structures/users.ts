import { Address } from "./structures";

interface BaseUser {
  id: string;
  name?: string;
  email?: string;
  events_seen_up_to: string;
  type: string;
  present: boolean;
  avatar?: string;
}

export interface Customer extends BaseUser {
  name_is_default: boolean;
  email_verified?: boolean;
  phone_number?: string;
  session_fields?: Record<string, string>[];
  address?: Address;
}

export interface Agent extends BaseUser {
  job_title?: string;
  is_bot?: boolean;
}

export type User = Agent | Customer;

export interface InitialUser {
  id: string;
  type: string;
}
