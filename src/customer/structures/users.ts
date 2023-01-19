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
  email_verified?: boolean;
  session_fields?: Record<string, string>[];
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
