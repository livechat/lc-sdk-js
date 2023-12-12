import { WebAPI } from "../internal";
import { TokenGetter } from "../authorization";
import {
  AddAutoAccessRequest,
  AddAutoAccessResponse,
  Agent,
  AgentFields,
  AgentPriorities,
  AutoAccess,
  BatchResponse,
  Bot,
  BotFields,
  BotTemplate,
  BotTemplateFields,
  ChannelActivity,
  CompanyDetails,
  CreateAgentResponse,
  CreateBotResponse,
  CreateBotTemplateResponse,
  CreateGroupResponse,
  EmptyResponse,
  GetLicenseIDResponse,
  GetOrganizationIDResponse,
  Group,
  GroupProperties,
  IssueBotTokenResponse,
  PlanLimit,
  Properties,
  PropertiesConfig,
  PropertyConfig,
  RegisteredWebhook,
  RegisterWebhookResponse,
  ResetBotSecretResponse,
  ResetBotTemplateSecretResponse,
  Tag,
  UpdateAutoAccessRequest,
  WebAPIOptions,
  Webhook,
  WebhookData,
  WebhooksState,
} from "./structures";

export default class ConfigurationAPI extends WebAPI {
  constructor(clientID: string, tokenGetter: TokenGetter, options?: WebAPIOptions) {
    super(clientID, tokenGetter, "configuration", options);
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
   * Creates new Agents with specified parameters within a license.
   * @param agents - agents to create
   */
  async batchCreateAgents(agents: Agent[]): Promise<BatchResponse<CreateAgentResponse>> {
    return this.send("batch_create_agents", { requests: agents });
  }

  /**
   * It returns the info about an Agent specified by id.
   * @param id - ID of agent to get
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
   * Updates the properties of Agents specified by ids.
   * @param agents - agents to update
   */
  async batchUpdateAgents(agents: Agent[]): Promise<BatchResponse<EmptyResponse>> {
    return this.send("batch_update_agents", { requests: agents });
  }

  /**
   * Deletes an Agent specified by id.
   * @param id - ID of agent to delete
   */
  async deleteAgent(id: string): Promise<EmptyResponse> {
    return this.send("delete_agent", { id });
  }

  /**
   * Deletes Agents specified by ids.
   * @param ids - IDs of agents to delete
   */
  async batchDeleteAgents(ids: string[]): Promise<BatchResponse<EmptyResponse>> {
    return this.send("batch_delete_agents", { requests: ids.map((id) => ({ id })) });
  }

  /**
   * Suspends an Agent specified by id.
   * @param id - ID of agent to suspend
   */
  async suspendAgent(id: string): Promise<EmptyResponse> {
    return this.send("suspend_agent", { id });
  }

  /**
   * Suspends Agents specified by ids.
   * @param ids - IDs of agents to suspend
   */
  async batchSuspendAgents(ids: string[]): Promise<BatchResponse<EmptyResponse>> {
    return this.send("batch_suspend_agents", { requests: ids.map((id) => ({ id })) });
  }

  /**
   * Unsuspends an Agent specified by id.
   * @param id - ID of agent to unsuspend
   */
  async unsuspendAgent(id: string): Promise<EmptyResponse> {
    return this.send("unsuspend_agent", { id });
  }

  /**
   * Unsuspends Agents specified by ids.
   * @param ids - IDs of agents to unsuspend
   */
  async batchUnsuspendAgents(ids: string[]): Promise<BatchResponse<EmptyResponse>> {
    return this.send("batch_unsuspend_agents", { requests: ids.map((id) => ({ id })) });
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
   * Approves Agents thus allowing the Agents to use the application.
   * @param ids - IDs of agents to approve
   */
  async batchApproveAgents(ids: string[]): Promise<BatchResponse<EmptyResponse>> {
    return this.send("batch_approve_agents", { requests: ids.map((id) => ({ id })) });
  }

  /**
   * Creates a new Bot with specified parameters within a license.
   * @param fields - bot properties
   */
  async createBot(fields: BotFields): Promise<CreateBotResponse> {
    return this.send("create_bot", fields || {});
  }

  /**
   * Creates new Bots with specified parameters within a license.
   * @param bots - bots to create
   */
  async batchCreateBots(bots: Bot[]): Promise<BatchResponse<CreateBotResponse>> {
    return this.send("batch_create_bots", { requests: bots });
  }

  /**
   * Deletes bot specified by id.
   * @param id - ID of bot to delete
   */
  async deleteBot(id: string): Promise<EmptyResponse> {
    return this.send("delete_bot", { id });
  }

  /**
   * Deletes Bots specified by ids.
   * @param ids - IDs of bots to delete
   */
  async batchDeleteBots(ids: string[]): Promise<BatchResponse<EmptyResponse>> {
    return this.send("batch_delete_bots", { requests: ids.map((id) => ({ id })) });
  }

  /**
   * Updates the properties of Bot specified by id.
   * @param id - ID of bot to update
   * @param fields - properties to update
   */
  async updateBot(id: string, fields: BotFields): Promise<EmptyResponse> {
    return this.send("update_bot", { id, ...fields });
  }

  /**
   * Resets secret of Bot specified by id.
   * @param id - ID of bot to reset secret
   * @param owner_client_id - clientID the bot is assigned to
   */
  async resetBotSecret(id: string, owner_client_id?: string): Promise<ResetBotSecretResponse> {
    return this.send("reset_bot_secret", { id, owner_client_id });
  }

  /**
   * Issues authorization token for Bot.
   * @param bot_id - ID of bot to issue token
   * @param client_id - clientID the bot is assigned to
   * @param bot_secret - bot secret
   * @param organization_id - organization ID to issue token for
   */
  async issueBotToken(
    bot_id: string,
    client_id: string,
    bot_secret: string,
    organization_id: string,
  ): Promise<IssueBotTokenResponse> {
    return this.send("issue_bot_token", { bot_id, client_id, bot_secret, organization_id });
  }

  /**
   * Updates the properties of Bots specified by ids.
   * @param bots - bots to update
   */
  async batchUpdateBots(bots: Bot[]): Promise<BatchResponse<EmptyResponse>> {
    return this.send("batch_update_bots", { requests: bots });
  }

  /**
   * Lists all bots within license.
   * @param all - switch if it should return all bots or only caller's bots
   * @param fields - additional fields to include
   */
  async listBots(all?: boolean, fields?: BotFields): Promise<Bot[]> {
    return this.send("list_bots", { all, ...fields });
  }

  /**
   * Gets info about Bot.
   * @param id - bot ID to get info about
   * @param fields - additional fields to include
   */
  async getBot(id: string, fields?: BotFields): Promise<Bot> {
    return this.send("get_bot", { id, ...fields });
  }

  /**
   * Creates a new Bot Template with specified parameters.
   * @param fields - bot template properties
   * @param owner_client_id - clientID the bot template is assigned to
   */
  async createBotTemplate(fields: BotTemplateFields, owner_client_id?: string): Promise<CreateBotTemplateResponse> {
    return this.send("create_bot_template", { ...fields, owner_client_id });
  }

  /**
   * Updates the properties of Bot Template specified by id.
   * @param id - ID of bot template to update
   * @param fields - properties to update
   * @param affect_existing_installations - if true, all bots created from this template will be affected
   * @param owner_client_id - clientID the bot template is assigned to
   */
  async updateBotTemplate(
    id: string,
    fields: BotTemplateFields,
    affect_existing_installations?: boolean,
    owner_client_id?: string,
  ): Promise<EmptyResponse> {
    return this.send("update_bot_template", { id, ...fields, affect_existing_installations, owner_client_id });
  }

  /**
   * Deletes bot template specified by id.
   * @param id - ID of bot template to delete
   * @param owner_client_id - clientID the bot template is assigned to
   * @param affect_existing_installations - if true, all bots created from this template will be affected
   */
  async deleteBotTemplate(
    id: string,
    owner_client_id?: string,
    affect_existing_installations?: boolean,
  ): Promise<EmptyResponse> {
    return this.send("delete_bot_template", { id, owner_client_id, affect_existing_installations });
  }

  /**
   * Lists bot templates.
   * @param owner_client_id - clientID the bot templates are assigned to
   */
  async listBotTemplates(owner_client_id?: string): Promise<BotTemplate[]> {
    return this.send("list_bot_templates", { owner_client_id });
  }

  /**
   * Resets bot template secret specified by id.
   * @param id - ID of bot template to reset secret
   * @param owner_client_id - clientID the bot template is assigned to
   * @param affect_existing_installations - if true, all bots created from this template will be affected
   */
  async resetBotTemplateSecret(
    id: string,
    owner_client_id?: string,
    affect_existing_installations?: boolean,
  ): Promise<ResetBotTemplateSecretResponse> {
    return this.send("reset_bot_template_secret", { id, owner_client_id, affect_existing_installations });
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
   * @param fields - additional fields to include
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
  async unregisterProperty(name: string, owner_client_id = ""): Promise<EmptyResponse> {
    return this.send("unregister_property", { name, owner_client_id });
  }

  /**
   * Publishes private property.
   * @param name - property name
   * @param owner_client_id - clientID of property owner
   * @param read - determines whether non-owners can read the property
   * @param write - determines whether non-owners can write the property
   */
  async publishProperty(name: string, owner_client_id = "", read: boolean, write: boolean): Promise<EmptyResponse> {
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
  async listProperties(owner_client_id = ""): Promise<PropertiesConfig> {
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
   * @param namespace_prefix - namespace prefix
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
   * Deletes the properties set within a group.
   * @param id - group ID to delete properties from
   * @param properties - properties to delete
   */
  async deleteGroupProperties(id: number, properties: Properties): Promise<EmptyResponse> {
    return this.send("delete_group_properties", {
      id,
      properties,
    });
  }

  /**
   * Registers webhook on a license.
   * @param webhook - webhook to register
   * @param owner_client_id - must be provided when authorizing with Personal Access Token
   */
  async registerWebhook(webhook: Webhook, owner_client_id = ""): Promise<RegisterWebhookResponse> {
    return this.send("register_webhook", { ...webhook, owner_client_id });
  }

  /**
   * Lists registered webhooks.
   * @param owner_client_id - must be provided when authorizing with Personal Access Token
   */
  async listWebhooks(owner_client_id = ""): Promise<RegisteredWebhook[]> {
    return this.send("list_webhooks", { owner_client_id });
  }

  /**
   * Removes webhook from license.
   * @param id - ID of webhook to unregister
   * @param owner_client_id - must be provided when authorizing with Personal Access Token
   */
  async unregisterWebhook(id: string, owner_client_id = ""): Promise<EmptyResponse> {
    return this.send("unregister_webhook", { id, owner_client_id });
  }

  /**
   * Lists webhooks available in given API version
   * @param version - version of API for webhooks
   */
  async listWebhookNames(version?: string): Promise<WebhookData[]> {
    return this.send("list_webhook_names", { version });
  }

  /**
   * Enables license webhooks for authorization token's clientID
   * @param client_id - clientID when authorizing via Personal Access Token
   */
  async enableLicenseWebhooks(client_id?: string): Promise<EmptyResponse> {
    return this.send("enable_license_webhooks", { client_id });
  }

  /**
   * Disables license webhooks for authorization token's clientID
   * @param client_id - clientID when authorizing via Personal Access Token
   */
  async disableLicenseWebhooks(client_id?: string): Promise<EmptyResponse> {
    return this.send("disable_license_webhooks", { client_id });
  }

  /**
   * Gets license webhooks' state for authorization token's clientID
   * @param client_id - clientID when authorizing via Personal Access Token
   */
  async getLicenseWebhooksState(client_id?: string): Promise<WebhooksState> {
    return this.send("get_license_webhooks_state", { client_id });
  }

  /**
   * Creates an auto access data structure, which is a set of conditions for the tracking URL and geolocation of a customer.
   * @param opts - options for auto access like conditions
   */
  async addAutoAccess(opts: AddAutoAccessRequest): Promise<AddAutoAccessResponse> {
    return this.send("add_auto_access", opts);
  }

  /**
   * Returns all existing auto access data structures.
   */
  async listAutoAccesses(): Promise<AutoAccess[]> {
    return this.send("list_auto_accesses", {});
  }

  /**
   * Deletes an existing auto access data structure specified by its ID.
   * @param id - ID of the auto access to remove
   */
  async deleteAutoAccess(id: string): Promise<EmptyResponse> {
    return this.send("delete_auto_access", { id });
  }

  /**
   * Updates an existing auto access. Only specified fields are updated (overwritten), leaving unspecified fields unchanged.
   * @param id - ID of the auto access to modify
   * @param access - fields of auto access you want to overwrite
   */
  async updateAutoAccess(id: string, access: UpdateAutoAccessRequest): Promise<EmptyResponse> {
    return this.send("update_auto_access", {
      id,
      ...access,
    });
  }

  /**
   * Returns organization ID for given license ID.
   * @param licenseID - ID of the license
   */
  async getOrganizationID(licenseID: number): Promise<GetOrganizationIDResponse> {
    return this.send("get_organization_id", { license_id: licenseID });
  }

  /**
   * Returns license ID for given organizationID.
   * @param organizationID - UUID of the organization
   */
  async getLicenseID(organizationID: string): Promise<GetLicenseIDResponse> {
    return this.send("get_license_id", { organization_id: organizationID });
  }

  /**
   * Compares your organization's current resources with a given plan and returns those which exceeded the called plan's limits.
   * @param plan - `plan` must be one of: 'starter', 'team', 'enterprise' or 'enterpriseplus'
   */
  async checkProductLimitsForPlan(plan: string): Promise<PlanLimit[]> {
    return this.send("check_product_limits_for_plan", { plan });
  }

  /**
   * Returns the summary of communication channels for your LiveChat product.
   */
  async listChannels(): Promise<ChannelActivity[]> {
    return this.send("list_channels", {});
  }

  /**
   * Creates a new tag.
   * @param name - name of the created tag
   * @param groupIDs - list of groups where tag will be assigned
   */
  async createTag(name: string, groupIDs?: number[]): Promise<EmptyResponse> {
    return this.send("create_tag", { name, group_ids: groupIDs });
  }

  /**
   * Deletes an existing tag.
   * @param name - name of the tag to be deleted
   */
  async deleteTag(name: string): Promise<EmptyResponse> {
    return this.send("delete_tag", { name });
  }

  /**
   * Returns tags assigned to requested groups.
   * @param groupIDs - filter tags by groups where there are assigned
   */
  async listTags(groupIDs?: number[]): Promise<Tag[]> {
    return this.send("list_tags", { group_ids: groupIDs });
  }

  /**
   * Updates an existing tag.
   * @param name - name of the updated tag
   * @param groupIDs - list of groups where tag will be assigned
   */
  async updateTag(name: string, groupIDs?: number[]): Promise<EmptyResponse> {
    return this.send("update_tag", { name, group_ids: groupIDs });
  }

  /**
   * Lists groups' properties
   * @param groupIDs - list of groups whose properties will be returned
   * @param namespace - namespace
   * @param namePrefix - name prefix
   */
  async listGroupsProperties(groupIDs?: number[], namespace?: string, namePrefix?: string): Promise<GroupProperties[]> {
    return this.send("list_groups_properties", { group_ids: groupIDs, namespace, name_prefix: namePrefix });
  }

  /**
   * Reactivates bounced email
   * @param agentID - email address of an agent
   */
  async reactivateEmail(agentID: string): Promise<EmptyResponse> {
    return this.send("reactivate_email", { agent_id: agentID });
  }

  /**
   * Updates company details in the license.
   * @param companyDetails - company details to update
   * @param enrich - if true, system will search for company's url or email domain to automatically fill empty fields
   */
  async updateCompanyDetails(companyDetails: CompanyDetails, enrich: boolean): Promise<EmptyResponse> {
    return this.send("update_company_details", { ...companyDetails, enrich });
  }
}
