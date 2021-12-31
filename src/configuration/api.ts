import { AllVersions, RequestClient, RequestOptions, SupportsType, SupportsVersion, VersionsSince32 } from "../clients";
import { AvailableVersions } from "../internal";
import { Properties } from "../objects";
import {
  AddAutoAccessRequest,
  AddAutoAccessResponse,
  Agent,
  AgentFields,
  AgentPriorities,
  AutoAccess,
  Bot,
  BotFields,
  CreateAgentResponse,
  CreateBotResponse,
  CreateGroupResponse,
  EmptyResponse,
  GetLicenseIDResponse,
  GetOrganizationIDResponse,
  Group,
  PropertiesConfig,
  PropertyConfig,
  RegisteredWebhook,
  RegisterWebhookResponse,
  UpdateAutoAccessRequest,
  Webhook,
  WebhookData,
  WebhooksState,
} from "./structures";

export class ConfigurationAPI {
  constructor(private readonly client: RequestClient<"web">) {}

  /**
   * Creates a new Agent with specified parameters within a license.
   * @param id - ID of an agent to create
   * @param fields - agent properties
   */
  @SupportsType("web")
  @SupportsVersion(...VersionsSince32)
  async createAgent(id: string, fields: AgentFields, meta?: RequestOptions<"web">): Promise<CreateAgentResponse> {
    return this.client.send("create_agent", { id, ...fields }, meta);
  }

  /**
   * It returns the info about an Agent specified by id.
   * @param id - IF of agent to get
   * @param fields - additional fields to include
   */
  @SupportsType("web")
  @SupportsVersion(...VersionsSince32)
  async getAgent(id: string, fields?: string[], meta?: RequestOptions<"web">): Promise<Agent> {
    return this.client.send("get_agent", { id, fields }, meta);
  }

  /**
   * Returns all Agents within a license.
   * @param group_ids - groups to list agents from
   * @param fields - additional fields to include
   */
  @SupportsType("web")
  @SupportsVersion(...VersionsSince32)
  async listAgents(group_ids?: number[], fields?: string[], meta?: RequestOptions<"web">): Promise<Agent[]> {
    return this.client.send("list_agents", { fields, filters: { group_ids } }, meta);
  }

  /**
   * Updates the properties of an Agent specified by id.
   * @param id - ID of agent to update
   * @param fields - properties to update
   */
  @SupportsType("web")
  @SupportsVersion(...VersionsSince32)
  async updateAgent(id: string, fields: AgentFields, meta?: RequestOptions<"web">): Promise<EmptyResponse> {
    return this.client.send("update_agent", { id, ...fields }, meta);
  }

  /**
   * Deletes an Agent specified by id.
   * @param id - ID of agent to delete
   */
  @SupportsType("web")
  @SupportsVersion(...VersionsSince32)
  async deleteAgent(id: string, meta?: RequestOptions<"web">): Promise<EmptyResponse> {
    return this.client.send("delete_agent", { id }, meta);
  }

  /**
   * Suspends an Agent specified by id.
   * @param id - ID of agent to suspend
   */
  @SupportsType("web")
  @SupportsVersion(...VersionsSince32)
  async suspendAgent(id: string, meta?: RequestOptions<"web">): Promise<EmptyResponse> {
    return this.client.send("suspend_agent", { id }, meta);
  }

  /**
   * Unsuspends an Agent specified by id.
   * @param id - ID of agent to unsuspend
   */
  @SupportsType("web")
  @SupportsVersion(...VersionsSince32)
  async unsuspendAgent(id: string, meta?: RequestOptions<"web">): Promise<EmptyResponse> {
    return this.client.send("unsuspend_agent", { id }, meta);
  }

  /**
   * A suspended Agent can send emails to license owners and vice owners with an unsuspension request.
   */
  @SupportsType("web")
  @SupportsVersion(...VersionsSince32)
  async requestAgentUnsuspension(meta?: RequestOptions<"web">): Promise<EmptyResponse> {
    return this.client.send("request_agent_unsuspension", {}, meta);
  }

  /**
   * Approves an Agent thus allowing the Agent to use the application.
   * @param id - ID of agent to approve
   */
  @SupportsType("web")
  @SupportsVersion(...VersionsSince32)
  async approveAgent(id: string, meta?: RequestOptions<"web">): Promise<EmptyResponse> {
    return this.client.send("approve_agent", { id }, meta);
  }

  /**
   * Creates a new Bot with specified parameters within a license.
   * @param fields - bot properties
   */
  @SupportsType("web")
  @SupportsVersion(...VersionsSince32)
  async createBot(fields: BotFields, meta?: RequestOptions<"web">): Promise<CreateBotResponse> {
    return this.client.send("create_bot", fields || {}, meta);
  }

  /**
   * Deletes bot specified by id.
   * @param id - ID of bot to delete
   */
  @SupportsType("web")
  @SupportsVersion(...VersionsSince32)
  async deleteBot(id: string, meta?: RequestOptions<"web">): Promise<EmptyResponse> {
    return this.client.send("delete_bot", { id }, meta);
  }

  /**
   * Updates the properties of Bot specified by id.
   * @param id - ID of bot to update
   * @param fields - properties to update
   */
  @SupportsType("web")
  @SupportsVersion(...VersionsSince32)
  async updateBot(id: string, fields: BotFields, meta?: RequestOptions<"web">): Promise<EmptyResponse> {
    return this.client.send("update_bot", { id, ...fields }, meta);
  }

  /**
   * Lists all bots within license.
   * @param all - switch if should return all bots or only caller's bots
   * @param fields - additional fields to include
   */
  @SupportsType("web")
  @SupportsVersion(...VersionsSince32)
  async listBots(all?: boolean, fields?: BotFields, meta?: RequestOptions<"web">): Promise<Bot[]> {
    return this.client.send("list_bots", { all, ...fields }, meta);
  }

  /**
   * Gets info about Bot.
   * @param id - bot ID to get info about
   * @param fields - additional fields to include
   */
  @SupportsType("web")
  @SupportsVersion(...VersionsSince32)
  async getBot(id: string, fields?: BotFields, meta?: RequestOptions<"web">): Promise<Bot> {
    return this.client.send("get_bot", { id, ...fields }, meta);
  }

  /**
   * Creates new group.
   * @param name - group name
   * @param agent_priorities - agents priorities within a group
   * @param language_code - groups language
   */
  @SupportsType("web")
  @SupportsVersion(...VersionsSince32)
  async createGroup(
    name: string,
    agent_priorities: AgentPriorities,
    language_code?: string,
    meta?: RequestOptions<"web">,
  ): Promise<CreateGroupResponse> {
    return this.client.send(
      "create_group",
      {
        name,
        agent_priorities,
        language_code,
      },
      meta,
    );
  }

  /**
   * Updates an existing group.
   * @param id - group id
   * @param name - group name
   * @param agent_priorities - agents priorities within a group
   * @param language_code - groups language
   */
  @SupportsType("web")
  @SupportsVersion(...VersionsSince32)
  async updateGroup(
    id: number,
    name?: string,
    agent_priorities?: AgentPriorities,
    language_code?: string,
    meta?: RequestOptions<"web">,
  ): Promise<EmptyResponse> {
    return this.client.send(
      "create_group",
      {
        id,
        name,
        agent_priorities,
        language_code,
      },
      meta,
    );
  }

  /**
   * Deletes group specified by id.
   * @param id - ID of group to delete
   */
  @SupportsType("web")
  @SupportsVersion(...VersionsSince32)
  async deleteGroup(id: number, meta?: RequestOptions<"web">): Promise<EmptyResponse> {
    return this.client.send("delete_group", { id }, meta);
  }

  /**
   * Lists all existing groups.
   * @param fields - additional fields to include
   */
  @SupportsType("web")
  @SupportsVersion(...VersionsSince32)
  async listGroups(fields?: string[], meta?: RequestOptions<"web">): Promise<Group[]> {
    return this.client.send("list_groups", { fields }, meta);
  }

  /**
   * Returns details about a group specified by its id.
   * @param id - group ID to get info about
   * @param fields - additiona fields to include
   */
  @SupportsType("web")
  @SupportsVersion(...VersionsSince32)
  async getGroup(id: number, fields?: string[], meta?: RequestOptions<"web">): Promise<Group> {
    return this.client.send("get_group", { id, fields }, meta);
  }

  /**
   * Registers private property.
   * @param property - property to register
   */
  @SupportsType("web")
  @SupportsVersion(AvailableVersions.V33, AvailableVersions.V34)
  async registerProperty(property: PropertyConfig, meta?: RequestOptions<"web">): Promise<EmptyResponse> {
    return this.client.send("register_property", property, meta);
  }

  /**
   * Unregisters private property.
   * @param name - property name
   * @param owner_client_id - clientID of property owner
   */
  @SupportsType("web")
  @SupportsVersion(AvailableVersions.V33, AvailableVersions.V34)
  async unregisterProperty(
    name: string,
    owner_client_id: string,
    meta?: RequestOptions<"web">,
  ): Promise<EmptyResponse> {
    return this.client.send("unregister_property", { name, owner_client_id }, meta);
  }

  /**
   * Publishes private property.
   * @param name - property name
   * @param owner_client_id - clientID of property owner
   * @param read - determines whether non-owners can read the property
   * @param write - determines whether non-owners can write the property
   */
  @SupportsType("web")
  @SupportsVersion(AvailableVersions.V33, AvailableVersions.V34)
  async publishProperty(
    name: string,
    owner_client_id: string,
    read: boolean,
    write: boolean,
    meta?: RequestOptions<"web">,
  ): Promise<EmptyResponse> {
    const access_type = new Array<string>();
    if (read) {
      access_type.push("read");
    }
    if (write) {
      access_type.push("write");
    }
    return this.client.send("publish_property", { name, owner_client_id, access_type }, meta);
  }

  /**
   * Lists properties for given client_id.
   * @param owner_client_id - client_id of property owner
   */
  @SupportsType("web")
  @SupportsVersion(AvailableVersions.V33, AvailableVersions.V34)
  async listProperties(owner_client_id: string, meta?: RequestOptions<"web">): Promise<PropertiesConfig> {
    return this.client.send("list_properties", { owner_client_id }, meta);
  }

  /**
   * Updates a property value within a license. This operation doesn't overwrite the existing values.
   * @param properties - properties to update
   */
  @SupportsType("web")
  @SupportsVersion(...VersionsSince32)
  async updateLicenseProperties(properties: Properties, meta?: RequestOptions<"web">): Promise<EmptyResponse> {
    return this.client.send("update_license_properties", { properties }, meta);
  }

  /**
   * Returns the properties set within a license.
   * @param namespace_prefix - namsepace prefix
   * @param name_prefix - name prefix
   */
  @SupportsType("web")
  @SupportsVersion(...VersionsSince32)
  async listLicenseProperties(
    namespace_prefix?: string,
    name_prefix?: string,
    meta?: RequestOptions<"web">,
  ): Promise<Properties> {
    return this.client.send(
      "list_license_properties",
      {
        namespace_prefix,
        name_prefix,
      },
      meta,
    );
  }

  /**
   * Deletes the properties set within a license.
   * @param properties - properties to delete
   */
  @SupportsType("web")
  @SupportsVersion(...VersionsSince32)
  async deleteLicenseProperties(properties: Properties, meta?: RequestOptions<"web">): Promise<EmptyResponse> {
    return this.client.send("delete_license_properties", { properties }, meta);
  }

  /**
   * Updates a property value within a group as the property location. This operation doesn't overwrite the existing values.
   * @param group_id - group ID to update properties
   * @param properties - properties to update
   */
  @SupportsType("web")
  @SupportsVersion(...VersionsSince32)
  async updateGroupProperties(
    group_id: number,
    properties: Properties,
    meta?: RequestOptions<"web">,
  ): Promise<EmptyResponse> {
    return this.client.send(
      "update_group_properties",
      {
        group_id,
        properties,
      },
      meta,
    );
  }

  /**
   * Returns the properties set within a group.
   * @param id - group ID to get properties from
   * @param namespace_prefix - namespace prefix
   * @param name_prefix - name prefix
   */
  @SupportsType("web")
  @SupportsVersion(...VersionsSince32)
  async listGroupProperties(
    id: number,
    namespace_prefix?: string,
    name_prefix?: string,
    meta?: RequestOptions<"web">,
  ): Promise<Properties> {
    return this.client.send(
      "list_group_properties",
      {
        id,
        namespace_prefix,
        name_prefix,
      },
      meta,
    );
  }

  /**
   * Deletes the properties set within a group.
   * @param id - group ID to delete properties from
   * @param properties - properties to delete
   */
  @SupportsType("web")
  @SupportsVersion(...VersionsSince32)
  async deleteGroupProperties(
    id: number,
    properties: Properties,
    meta?: RequestOptions<"web">,
  ): Promise<EmptyResponse> {
    return this.client.send(
      "delete_group_properties",
      {
        id,
        properties,
      },
      meta,
    );
  }

  /**
   * Registers webhook on a license.
   * @param webhook - webhook to register
   * @param owner_client_id - must be provided when authorizing with Personal Access Token
   */
  @SupportsType("web")
  @SupportsVersion(...AllVersions)
  async registerWebhook(
    webhook: Webhook,
    owner_client_id?: string,
    meta?: RequestOptions<"web">,
  ): Promise<RegisterWebhookResponse> {
    return this.client.send("register_webhook", { ...webhook, owner_client_id }, meta);
  }

  /**
   * Lists registered webhooks.
   */
  @SupportsType("web")
  @SupportsVersion(AvailableVersions.V32)
  async listRegisteredWebhooks(meta?: RequestOptions<"web">): Promise<RegisteredWebhook[]> {
    return this.client.send("list_registered_webhooks", {}, meta);
  }

  /**
   * Lists registered webhooks.
   * @param owner_client_id - must be provided when authorizing with Personal Access Token
   */
  @SupportsType("web")
  @SupportsVersion(AvailableVersions.V33, AvailableVersions.V34)
  async listWebhooks(owner_client_id?: string, meta?: RequestOptions<"web">): Promise<RegisteredWebhook[]> {
    return this.client.send("list_webhooks", { owner_client_id }, meta);
  }

  /**
   * Removes webhook from license.
   * @param id - ID of webhook to unregister
   * @param owner_client_id - must be provided when authorizing with Personal Access Token
   */
  @SupportsType("web")
  @SupportsVersion(...AllVersions)
  async unregisterWebhook(id: string, owner_client_id?: string, meta?: RequestOptions<"web">): Promise<EmptyResponse> {
    return this.client.send("unregister_webhook", { id, owner_client_id }, meta);
  }

  /**
   * Lists webhooks available in given API version
   * @param version - version of API for webhooks
   */
  @SupportsType("web")
  @SupportsVersion(AvailableVersions.V33, AvailableVersions.V34)
  async listWebhookNames(version?: string, meta?: RequestOptions<"web">): Promise<WebhookData[]> {
    return this.client.send("list_webhook_names", { version }, meta);
  }

  /**
   * Enables license webhooks for authorization token's clientID
   * @param clientID - clientID when authorizing via Personal Access Token
   */
  @SupportsType("web")
  @SupportsVersion(AvailableVersions.V33, AvailableVersions.V34)
  async enableLicenseWebhooks(client_id?: string, meta?: RequestOptions<"web">): Promise<EmptyResponse> {
    return this.client.send("enable_license_webhooks", { client_id }, meta);
  }

  /**
   * Disables license webhooks for authorization token's clientID
   * @param clientID - clientID when authorizing via Personal Access Token
   */
  @SupportsType("web")
  @SupportsVersion(AvailableVersions.V33, AvailableVersions.V34)
  async disableLicenseWebhooks(client_id?: string, meta?: RequestOptions<"web">): Promise<EmptyResponse> {
    return this.client.send("disable_license_webhooks", { client_id }, meta);
  }

  /**
   * Gets license webhooks' state for authorization token's clientID
   * @param clientID - clientID when authorizing via Personal Access Token
   */
  @SupportsType("web")
  @SupportsVersion(AvailableVersions.V33, AvailableVersions.V34)
  async getLicenseWebhooksState(client_id?: string, meta?: RequestOptions<"web">): Promise<WebhooksState> {
    return this.client.send("get_license_webhooks_state", { client_id }, meta);
  }

  /**
   * Creates an auto access data structure, which is a set of conditions for the tracking URL and geolocation of a customer.
   * @param opts - options for auto access like conditions
   */
  @SupportsType("web")
  @SupportsVersion(AvailableVersions.V33, AvailableVersions.V34)
  async addAutoAccess(opts: AddAutoAccessRequest, meta?: RequestOptions<"web">): Promise<AddAutoAccessResponse> {
    return this.client.send("add_auto_access", opts, meta);
  }

  /**
   * Returns all existing auto access data structures.
   */
  @SupportsType("web")
  @SupportsVersion(AvailableVersions.V33, AvailableVersions.V34)
  async listAutoAccesses(meta?: RequestOptions<"web">): Promise<AutoAccess[]> {
    return this.client.send("list_auto_accesses", {}, meta);
  }

  /**
   * Deletes an existing auto access data structure specified by its ID.
   * @param id - ID of the auto access to remove
   */
  @SupportsType("web")
  @SupportsVersion(AvailableVersions.V33, AvailableVersions.V34)
  async deleteAutoAccess(id: string, meta?: RequestOptions<"web">): Promise<EmptyResponse> {
    return this.client.send("delete_auto_access", { id }, meta);
  }

  /**
   * Updates an existing auto access. Only specified fields are updated (overwritten), leaving unspecified fields unchanged.
   * @param id - ID of the auto access to modify
   * @param access - fields of auto access you want to overwrite
   */
  @SupportsType("web")
  @SupportsVersion(AvailableVersions.V33, AvailableVersions.V34)
  async updateAutoAccess(
    id: string,
    access: UpdateAutoAccessRequest,
    meta?: RequestOptions<"web">,
  ): Promise<EmptyResponse> {
    return this.client.send(
      "update_auto_access",
      {
        id,
        ...access,
      },
      meta,
    );
  }

  /**
   * Returns organization ID for given license ID.
   * @param licenseID - ID of the license
   */
  @SupportsType("web")
  @SupportsVersion(AvailableVersions.V34)
  async getOrganizationID(licenseID: number, meta?: RequestOptions<"web">): Promise<GetOrganizationIDResponse> {
    return this.client.send("get_organization_id", { license_id: licenseID }, { ...meta, method: "GET" });
  }

  /**
   * Returns license ID for given organizationID.
   * @param organizationID - UUID of the organization
   */
  @SupportsType("web")
  @SupportsVersion(AvailableVersions.V34)
  async getLicenseID(organizationID: string, meta?: RequestOptions<"web">): Promise<GetLicenseIDResponse> {
    return this.client.send("get_license_id", { organization_id: organizationID }, { ...meta, method: "GET" });
  }
}
