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
  PropertyConfig,
  PropertiesConfig,
  Webhook,
  RegisteredWebhook,
  RegisterWebhookResponse,
  WebhookData,
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
  async createAgent(id: string, fields: AgentFields): Promise<CreateAgentResponse> {
    return this.send("create_agent", { id, ...fields });
  }

  /**
   * It returns the info about an Agent specified by id.
   * @param id - IF of agent to get
   * @param fields - additional fields to include
   */
  async getAgent(id: string, fields?: string[]): Promise<Agent> {
    return this.send("get_agent", { id, fields });
  }

  /**
   * Returns all Agents within a license.
   * @param group_ids - groups to list agents from
   * @param fields - additional fields to include
   */
  async listAgents(group_ids?: number[], fields?: string[]): Promise<Agent[]> {
    return this.send("list_agents", { fields, filters: { group_ids } });
  }

  /**
   * Updates the properties of an Agent specified by id.
   * @param id - ID of agent to update
   * @param fields - properties to update
   */
  async updateAgent(id: string, fields: AgentFields): Promise<EmptyResponse> {
    return this.send("update_agent", { id, ...fields });
  }

  /**
   * Deletes an Agent specified by id.
   * @param id - ID of agent to delete
   */
  async deleteAgent(id: string): Promise<EmptyResponse> {
    return this.send("delete_agent", { id });
  }

  /**
   * Suspends an Agent specified by id.
   * @param id - ID of agent to suspend
   */
  async suspendAgent(id: string): Promise<EmptyResponse> {
    return this.send("suspend_agent", { id });
  }

  /**
   * Unsuspends an Agent specified by id.
   * @param id - ID of agent to unsuspend
   */
  async unsuspendAgent(id: string): Promise<EmptyResponse> {
    return this.send("unsuspend_agent", { id });
  }

  /**
   * A suspended Agent can send emails to license owners and vice owners with an unsuspension request.
   */
  async requestAgentUnsuspension(): Promise<EmptyResponse> {
    return this.send("request_agent_unsuspension", {});
  }

  /**
   * Approves an Agent thus allowing the Agent to use the application.
   * @param id - ID of agent to approve
   */
  async approveAgent(id: string): Promise<EmptyResponse> {
    return this.send("approve_agent", { id });
  }

  /**
   * Creates a new Bot Agent with specified parameters within a license.
   * @param fields - bot agent properties
   */
  async createBot(fields: BotFields): Promise<CreateBotResponse> {
    return this.send("create_bot", fields || {});
  }

  /**
   * Deletes bot specified by id.
   * @param bot_agent_id - ID of bot to delete
   */
  async deleteBot(bot_agent_id: string): Promise<EmptyResponse> {
    return this.send("delete_bot", { bot_agent_id });
  }

  /**
   * Updates the properties of Bot Agent specified by id.
   * @param id - ID of bot agent to update
   * @param fields - properties to update
   */
  async updateBot(id: string, fields: BotFields): Promise<EmptyResponse> {
    return this.send("update_bot", { id, ...fields });
  }

  /**
   * Lists all bot agents within license.
   * @param all - switch if should return all bots or only caller's bots
   */
  async listBots(all?: boolean): Promise<ListBotsResponse> {
    return this.send("list_bots", { all });
  }

  /**
   * Gets info about Bot Agent.
   * @param bot_agent_id - bot agent ID to get info about
   */
  async getBot(bot_agent_id: string): Promise<GetBotResponse> {
    return this.send("get_bot", { bot_agent_id });
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
    language_code?: string,
  ): Promise<CreateGroupResponse> {
    return this.send("create_group", {
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
    language_code?: string,
  ): Promise<EmptyResponse> {
    return this.send("create_group", {
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
    return this.send("delete_group", { id });
  }

  /**
   * Lists all existing groups.
   * @param fields - additional fields to include
   */
  async listGroups(fields?: string[]): Promise<Group[]> {
    return this.send("list_groups", { fields });
  }

  /**
   * Returns details about a group specified by its id.
   * @param id - group ID to get info about
   * @param fields - additiona fields to include
   */
  async getGroup(id: number, fields?: string[]): Promise<Group> {
    return this.send("get_group", { id, fields });
  }

  /**
   * Registers private property.
   * @param property - property to register
   */
  async registerProperty(property: PropertyConfig): Promise<EmptyResponse> {
    return this.send("register_property", property);
  }

  /**
   * Unregisters private property.
   * @param name - property name
   * @param owner_client_id - clientID of property owner
   */
  async unregisterProperty(name: string, owner_client_id: string): Promise<EmptyResponse> {
    return this.send("unregister_property", { name, owner_client_id });
  }

  /**
   * Publishes private property.
   * @param name - property name
   * @param owner_client_id - clientID of property owner
   * @param read - determines whether non-owners can read the property
   * @param write - determines whether non-owners can write the property
   */
  async publishProperty(name: string, owner_client_id: string, read: boolean, write: boolean): Promise<EmptyResponse> {
    const access_type = new Array<string>();
    if (read) {
      access_type.push("read");
    }
    if (write) {
      access_type.push("write");
    }
    return this.send("publish_property", { name, owner_client_id, access_type });
  }

  /**
   * Lists properties for given client_id.
   * @param owner_client_id - client_id of property owner
   */
  async listProperties(owner_client_id: string): Promise<PropertiesConfig> {
    return this.send("list_properties", { owner_client_id });
  }

  /**
   * Updates a property value within a license. This operation doesn't overwrite the existing values.
   * @param properties - properties to update
   */
  async updateLicenseProperties(properties: Properties): Promise<EmptyResponse> {
    return this.send("update_license_properties", { properties });
  }

  /**
   * Returns the properties set within a license.
   * @param namespace_prefix - namsepace prefix
   * @param name_prefix - name prefix
   */
  async listLicenseProperties(namespace_prefix?: string, name_prefix?: string): Promise<Properties> {
    return this.send("list_license_properties", {
      namespace_prefix,
      name_prefix,
    });
  }

  /**
   * Deletes the properties set within a license.
   * @param properties - properties to delete
   */
  async deleteLicenseProperties(properties: Properties): Promise<EmptyResponse> {
    return this.send("delete_license_properties", { properties });
  }

  /**
   * Updates a property value within a group as the property location. This operation doesn't overwrite the existing values.
   * @param group_id - group ID to update properties
   * @param properties - properties to update
   */
  async updateGroupProperties(group_id: number, properties: Properties): Promise<EmptyResponse> {
    return this.send("update_group_properties", {
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
  async listGroupProperties(group_id: number, namespace_prefix?: string, name_prefix?: string): Promise<Properties> {
    return this.send("list_group_properties", {
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
  async deleteGroupProperties(group_id: number, properties: Properties): Promise<EmptyResponse> {
    return this.send("delete_group_properties", {
      group_id,
      properties,
    });
  }

  /**
   * Registers webhook on a license.
   * @param webhook - webhook to register
   * @param owner_client_id - must be provided when authorizing with Personal Access Token
   */
  async registerWebhook(webhook: Webhook, owner_client_id?: string): Promise<RegisterWebhookResponse> {
    return this.send("register_webhook", { ...webhook, owner_client_id });
  }

  /**
   * Lists registered webhooks.
   * @param owner_client_id - must be provided when authorizing with Personal Access Token
   */
  async listWebhooks(owner_client_id?: string): Promise<RegisteredWebhook[]> {
    return this.send("list_webhooks", { owner_client_id });
  }

  /**
   * Removes webhook from license.
   * @param id - ID of webhook to unregister
   * @param owner_client_id - must be provided when authorizing with Personal Access Token
   */
  async unregisterWebhook(id: string, owner_client_id?: string): Promise<EmptyResponse> {
    return this.send("unregister_webhook", { id, owner_client_id });
  }

  /**
   * Lists webhooks available in given API version
   * @param version - version of API for webhooks
   */
  async listWebhookNames(version?: string): Promise<WebhookData[]> {
    return this.send("list_webhook_names", { version });
  }
}
