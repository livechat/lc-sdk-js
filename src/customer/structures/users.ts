interface BaseUser {
  id: string;
  name?: string;
  email?: string;
  events_seen_up_to: string;
  type: string;
  present: boolean;
  avatar?: string;
}

export interface Agent extends BaseUser {
  job_title?: string;
  is_bot?: boolean;
}

export interface Customer extends BaseUser {
  email_verified?: boolean;
  session_fields?: Record<string, string>[];
  statistics?: CustomerStatistics;
}

export interface CustomerStatistics {
  chats_count: number;
  threads_count: number;
  visits_count: number;
  page_views_count: number;
  greetings_shown_count: number;
  greetings_accepted_count: number;
}

export type User = Agent | Customer;

export interface InitialUser {
  id: string;
  type: string;
}
