import { Properties, SurveyType } from "./structures";

export interface Filter<T> {
  values?: T[];
  exclude_values?: T[];
}

export interface FilterType<T> extends Filter<T> {
  exists?: boolean;
}

export interface ChatsFilters {
  include_active?: boolean;
  include_chats_without_threads?: boolean;
  group_ids?: number[];
  properties?: Properties;
}

export interface ThreadsFilters {
  from?: string;
  to?: string;
}

export interface ArchivesFilters {
  query?: string;
  from?: string;
  to?: string;
  thread_ids?: string[];
  group_ids?: number[];
  properties?: PropertiesFilter;
  agents?: FilterType<string>;
  tags?: FilterType<string>;
  sales?: FilterType<number>;
  goals?: FilterType<number>;
  surveys?: SurveyFilter[];
  events?: EventsFilter;
}

export interface SurveyFilter {
  type: SurveyType;
  answer_id: string;
}

export interface EventsFilter {
  types: string[];
}

export interface PropertiesFilter {
  [namespace: string]: {
    [name: string]: FilterType<any>;
  };
}

export interface CustomerFilters {
  country?: StringFilter;
  email?: StringFilter;
  name?: StringFilter;
  customer_id?: StringFilter;
  chat_group_ids?: IntegerFilter;
  chats_count?: RangeFilter;
  threads_count?: RangeFilter;
  visits_count?: RangeFilter;
  created_at?: DateRangeFilter;
  agent_last_event_created_at?: DateRangeFilter;
  customer_last_event_created_at?: DateRangeFilter;
  include_customers_without_chats?: boolean;
}

export type StringFilter = Filter<string>;

export type IntegerFilter = Filter<number>;

export interface RangeFilter {
  lte?: number;
  lt?: number;
  gte?: number;
  gt?: number;
  eq?: number;
}

export interface DateRangeFilter {
  lte?: string;
  lt?: string;
  gte?: string;
  gt?: string;
  eq?: string;
}
