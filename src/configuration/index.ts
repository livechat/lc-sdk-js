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

export default class ConfigurationAPI extends WebAPI {
  constructor(clientID: string, tokenGetter: TokenGetter) {
    super(clientID, tokenGetter, "configuration");
  }

  /**
   * Creates a new Agent with specified parameters within a license.
   * @param id - ID of an agent to create
   * @param fields - agent properties
   */
  async createAgent(
    id: string,
    fields: AgentFields
  ): Promise<CreateAgentResponse> {
    return this.handleAction("create_agent", { id, ...fields });
  }

  /**
   * It returns the info about an Agent specified by id.
   * @param id - IF of agent to get
   * @param fields - additional fields to include
   */
  async getAgent(id: string, fields?: string[]): Promise<Agent> {
    return this.handleAction("get_agent", { id, fields });
  }

  /**
   * Returns all Agents within a license.
   * @param group_ids - groups to list agents from
   * @param fields - additional fields to include
   */
  async listAgents(group_ids?: number[], fields?: string[]): Promise<Agent[]> {
    return this.handleAction("list_agents", { fields, filters: { group_ids } });
  }

  /**
   * Updates the properties of an Agent specified by id.
   * @param id - ID of agent to update
   * @param fields - properties to update
   */
  async updateAgent(id: string, fields: AgentFields): Promise<EmptyResponse> {
    return this.handleAction("update_agent", { id, ...fields });
  }

  /**
   * Deletes an Agent specified by id.
   * @param id - ID of agent to delete
   */
  async deleteAgent(id: string): Promise<EmptyResponse> {
    return this.handleAction("delete_agent", { id });
  }

  /**
   * Suspends an Agent specified by id.
   * @param id - ID of agent to suspend
   */
  async suspendAgent(id: string): Promise<EmptyResponse> {
    return this.handleAction("suspend_agent", { id });
  }

  /**
   * Unsuspends an Agent specified by id.
   * @param id - ID of agent to unsuspend
   */
  async unsuspendAgent(id: string): Promise<EmptyResponse> {
    return this.handleAction("unsuspend_agent", { id });
  }

  /**
   * A suspended Agent can send emails to license owners and vice owners with an unsuspension request.
   */
  async requestAgentUnsuspension(): Promise<EmptyResponse> {
    return this.handleAction("request_agent_unsuspension", {});
  }

  /**
   * Approves an Agent thus allowing the Agent to use the application.
   * @param id - ID of agent to approve
   */
  async approveAgent(id: string): Promise<EmptyResponse> {
    return this.handleAction("approve_agent", { id });
  }

  /**
   * Creates a new Bot Agent with specified parameters within a license.
   * @param fields - bot agent properties
   */
  async createBot(fields: BotFields): Promise<CreateBotResponse> {
    return this.handleAction("create_bot", fields || {});
  }

  /**
   * Deletes bot specified by id.
   * @param bot_agent_id - ID of bot to delete
   */
  async deleteBot(bot_agent_id: string): Promise<EmptyResponse> {
    return this.handleAction("delete_bot", { bot_agent_id });
  }

  /**
   * Updates the properties of Bot Agent specified by id.
   * @param id - ID of bot agent to update
   * @param fields - properties to update
   */
  async updateBot(id: string, fields: BotFields): Promise<EmptyResponse> {
    return this.handleAction("update_bot", { id, ...fields });
  }

  /**
   * Lists all bot agents within license.
   * @param all - switch if should return all bots or only caller's bots
   */
  async listBots(all?: boolean): Promise<ListBotsResponse> {
    return this.handleAction("list_bots", { all });
  }

  /**
   * Gets info about Bot Agent.
   * @param bot_agent_id - bot agent ID to get info about
   */
  async getBot(bot_agent_id: string): Promise<GetBotResponse> {
    return this.handleAction("get_bot", { bot_agent_id });
  }

  /**
   * Creates new group.
   * @param name - group name
   * @param agent_priorities - agents priorities within a group
   * @param language_code - groups language
   */
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

  /**
   * Updates an existing group.
   * @param id - group id
   * @param name - group name
   * @param agent_priorities - agents priorities within a group
   * @param language_code - groups language
   */
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

  /**
   * Deletes group specified by id.
   * @param id - ID of group to delete
   */
  async deleteGroup(id: number): Promise<EmptyResponse> {
    return this.handleAction("delete_group", { id });
  }

  /**
   * Lists all existing groups.
   * @param fields - additional fields to include
   */
  async listGroups(fields?: string[]): Promise<Group[]> {
    return this.handleAction("list_groups", { fields });
  }

  /**
   * Returns details about a group specified by its id.
   * @param id - group ID to get info about
   * @param fields - additiona fields to include
   */
  async getGroup(id: number, fields?: string[]): Promise<Group> {
    return this.handleAction("get_group", { id, fields });
  }

  /**
   * Registers properties.
   * @param properties - properties to register
   */
  async registerProperties(
    properties: PropertiesConfig
  ): Promise<EmptyResponse> {
    return this.handleAction("register_properties", properties);
  }

  /**
   * Lists registered properties.
   * @param all - if should return all properties within license
   */
  async listRegisteredProperties(all?: boolean): Promise<PropertiesConfig> {
    return this.handleAction("list_registered_properties", { all });
  }

  /**
   * Updates a property value within a license. This operation doesn't overwrite the existing values.
   * @param properties - properties to update
   */
  async updateLicenseProperties(
    properties: Properties
  ): Promise<EmptyResponse> {
    return this.handleAction("update_license_properties", { properties });
  }

  /**
   * Returns the properties set within a license.
   * @param namespace_prefix - namsepace prefix
   * @param name_prefix - name prefix
   */
  async listLicenseProperties(
    namespace_prefix?: string,
    name_prefix?: string
  ): Promise<Properties> {
    return this.handleAction("list_license_properties", {
      namespace_prefix,
      name_prefix,
    });
  }

  /**
   * Deletes the properties set within a license.
   * @param properties - properties to delete
   */
  async deleteLicenseProperties(
    properties: Properties
  ): Promise<EmptyResponse> {
    return this.handleAction("delete_license_properties", { properties });
  }

  /**
   * Updates a property value within a group as the property location. This operation doesn't overwrite the existing values.
   * @param group_id - group ID to update properties
   * @param properties - properties to update
   */
  async updateGroupProperties(
    group_id: number,
    properties: Properties
  ): Promise<EmptyResponse> {
    return this.handleAction("update_group_properties", {
      group_id,
      properties,
    });
  }
  /**
   * Returns the properties set within a group.
   * @param group_id - group ID to get properties from
   * @param namespace_prefix - namespace prefix
   * @param name_prefix - name prefix
   */
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

  /**
   * Deletes the properties set within a group.
   * @param group_id - group ID to delete properties from
   * @param properties - properties to delete
   */
  async deleteGroupProperties(
    group_id: number,
    properties: Properties
  ): Promise<EmptyResponse> {
    return this.handleAction("delete_group_properties", {
      group_id,
      properties,
    });
  }

  /**
   * Registers webhook on a license.
   * @param webhook - webhook to register
   */
  async registerWebhook(webhook: Webhook): Promise<RegisterWebhookResponse> {
    return this.handleAction("register_webhook", webhook);
  }

  /**
   * Lists registered webhooks.
   */
  async listRegisteredWebhooks(): Promise<RegisteredWebhook[]> {
    return this.handleAction("list_registered_webhooks", {});
  }

  /**
   * Removes webhook from license.
   * @param webhook_id - webhook to unregister
   */
  async unregister_webhook(webhook_id: string): Promise<EmptyResponse> {
    return this.handleAction("unregister_webhook", { webhook_id });
  }
}
