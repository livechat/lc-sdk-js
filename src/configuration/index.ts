import { WebAPI } from "../internal";
import { TokenGetter } from "../authorization";
import {
  AgentFields,
  Agent,
  EmptyResponse,
  CreateAgentResponse,
  BotFields,
  CreateBotResponse,
  ListBotsResponse,
  GetBotResponse,
  AgentPriorities,
  CreateGroupResponse,
  Group,
  PropertiesConfig,
  Webhook,
  RegisteredWebhook,
  RegisterWebhookResponse,
} from "./structures";
import { Properties } from "../objects/index";

export class ConfigurationAPI extends WebAPI {
  constructor(clientID: string, tokenGetter: TokenGetter) {
    super(clientID, "configuration", tokenGetter);
  }

  async createAgent(
    id: string,
    fields: AgentFields
  ): Promise<CreateAgentResponse> {
    return this.handleAction("create_agent", { id, ...fields });
  }

  async listAgents(group_ids?: number[], fields?: string[]): Promise<Agent[]> {
    return this.handleAction("list_agents", { fields, filters: { group_ids } });
  }

  async updateAgent(id: string, fields: AgentFields): Promise<EmptyResponse> {
    return this.handleAction("update_agent", { id, ...fields });
  }

  async deleteAgent(id: string): Promise<EmptyResponse> {
    return this.handleAction("delete_agent", { id });
  }

  async suspendAgent(id: string): Promise<EmptyResponse> {
    return this.handleAction("suspend_agent", { id });
  }

  async unsuspendAgent(id: string): Promise<EmptyResponse> {
    return this.handleAction("unsuspend_agent", { id });
  }

  async requestAgentUnsuspension(): Promise<EmptyResponse> {
    return this.handleAction("request_agent_unsuspension", {});
  }

  async approveAgent(id: string): Promise<EmptyResponse> {
    return this.handleAction("approve_agent", { id });
  }

  async createBot(fields: BotFields): Promise<CreateBotResponse> {
    return this.handleAction("create_bot", fields || {});
  }

  async deleteBot(bot_agent_id: string): Promise<EmptyResponse> {
    return this.handleAction("delete_bot", { bot_agent_id });
  }

  async updateBot(id: string, fields: BotFields): Promise<EmptyResponse> {
    return this.handleAction("update_bot", { id, ...fields });
  }

  async listBots(all?: boolean): Promise<ListBotsResponse> {
    return this.handleAction("list_bots", { all });
  }

  async getBot(bot_agent_id: string): Promise<GetBotResponse> {
    return this.handleAction("get_bot", { bot_agent_id });
  }

  async createGroup(
    name: string,
    agent_priorities: AgentPriorities,
    language_code?: string
  ): Promise<CreateGroupResponse> {
    return this.handleAction("create_group", {
      name,
      agent_priorities,
      language_code,
    });
  }

  async updateGroup(
    id: number,
    name?: string,
    agent_priorities?: AgentPriorities,
    language_code?: string
  ): Promise<EmptyResponse> {
    return this.handleAction("create_group", {
      id,
      name,
      agent_priorities,
      language_code,
    });
  }

  async deleteGroup(id: number): Promise<EmptyResponse> {
    return this.handleAction("delete_group", { id });
  }

  async listGroups(fields?: string[]): Promise<Group[]> {
    return this.handleAction("list_groups", { fields });
  }

  async getGroup(id: number, fields?: string[]): Promise<Group> {
    return this.handleAction("get_group", { id, fields });
  }

  async registerProperties(
    properties: PropertiesConfig
  ): Promise<EmptyResponse> {
    return this.handleAction("register_properties", { ...properties });
  }

  async listRegisteredProperties(all?: boolean): Promise<PropertiesConfig> {
    return this.handleAction("list_registered_properties", { all });
  }

  async updateLicenseProperties(
    properties: Properties
  ): Promise<EmptyResponse> {
    return this.handleAction("update_license_properties", { properties });
  }

  async listLicenseProperties(
    namespace_prefix?: string,
    name_prefix?: string
  ): Promise<Properties> {
    return this.handleAction("list_license_properties", {
      namespace_prefix,
      name_prefix,
    });
  }

  async deleteLicenseProperties(
    properties: Properties
  ): Promise<EmptyResponse> {
    return this.handleAction("delete_license_properties", { properties });
  }

  async updateGroupProperties(
    group_id: number,
    properties: Properties
  ): Promise<EmptyResponse> {
    return this.handleAction("update_group_properties", {
      group_id,
      properties,
    });
  }

  async listGroupProperties(
    group_id: number,
    namespace_prefix?: string,
    name_prefix?: string
  ): Promise<Properties> {
    return this.handleAction("list_group_properties", {
      group_id,
      namespace_prefix,
      name_prefix,
    });
  }

  async deleteGroupProperties(
    group_id: number,
    properties: Properties
  ): Promise<EmptyResponse> {
    return this.handleAction("delete_group_properties", {
      group_id,
      properties,
    });
  }

  async registerWebhook(webhook: Webhook): Promise<RegisterWebhookResponse> {
    return this.handleAction("register_webhook", { ...webhook });
  }

  async listRegisteredWebhooks(): Promise<RegisteredWebhook[]> {
    return this.handleAction("list_registered_webhooks", {});
  }

  async unregister_webhook(webhook_id: string): Promise<EmptyResponse> {
    return this.handleAction("unregister_webhook", { webhook_id });
  }
}
