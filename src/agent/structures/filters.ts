import { Properties, PropertiesFilter } from "./structures";

export interface Filter<T> {
  values?: T[];
  exclude_values?: T[];
}

export interface FilterType<T> extends Filter<T> {
  exists?: boolean;
  require_every_value?: boolean;
}

export interface SurveyFilter {
  from?: string;
  to?: string;
  type: SurveyType;
  values?: string[];
  exclude_values?: string[];
  exists?: boolean;
  groups?: Filter<number>;
}

export interface GreetingsFilter extends Filter<number> {
  from?: string;
  to?: string;
  exists?: boolean;
  groups?: Filter<number>;
}

export interface AgentResponseFilter {
  first?: boolean;
  exists?: boolean;
  agents?: Filter<string>;
  groups?: Filter<number>;
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
  event_types?: Omit<FilterType<string>, "exists">;
  greetings?: GreetingsFilter;
  agent_response?: AgentResponseFilter;
}

export enum SurveyType {
  PreChat = "pre_chat",
  PostChat = "post_chat",
}
