[@livechat/lc-sdk-js](../README.md) › [Globals](../globals.md) › ["src/configuration/index"](../modules/_src_configuration_index_.md) › [ConfigurationAPI](_src_configuration_index_.configurationapi.md)

# Class: ConfigurationAPI

## Hierarchy

* [WebAPI](_src_internal_index_.webapi.md)

  ↳ **ConfigurationAPI**

## Index

### Constructors

* [constructor](_src_configuration_index_.configurationapi.md#constructor)

### Properties

* [APIURL](_src_configuration_index_.configurationapi.md#apiurl)
* [clientID](_src_configuration_index_.configurationapi.md#clientid)
* [tokenGetter](_src_configuration_index_.configurationapi.md#tokengetter)
* [type](_src_configuration_index_.configurationapi.md#type)
* [version](_src_configuration_index_.configurationapi.md#version)

### Methods

* [approveAgent](_src_configuration_index_.configurationapi.md#approveagent)
* [createAgent](_src_configuration_index_.configurationapi.md#createagent)
* [createBot](_src_configuration_index_.configurationapi.md#createbot)
* [createGroup](_src_configuration_index_.configurationapi.md#creategroup)
* [deleteAgent](_src_configuration_index_.configurationapi.md#deleteagent)
* [deleteBot](_src_configuration_index_.configurationapi.md#deletebot)
* [deleteGroup](_src_configuration_index_.configurationapi.md#deletegroup)
* [deleteGroupProperties](_src_configuration_index_.configurationapi.md#deletegroupproperties)
* [deleteLicenseProperties](_src_configuration_index_.configurationapi.md#deletelicenseproperties)
* [getAgent](_src_configuration_index_.configurationapi.md#getagent)
* [getBot](_src_configuration_index_.configurationapi.md#getbot)
* [getGroup](_src_configuration_index_.configurationapi.md#getgroup)
* [listAgents](_src_configuration_index_.configurationapi.md#listagents)
* [listBots](_src_configuration_index_.configurationapi.md#listbots)
* [listGroupProperties](_src_configuration_index_.configurationapi.md#listgroupproperties)
* [listGroups](_src_configuration_index_.configurationapi.md#listgroups)
* [listLicenseProperties](_src_configuration_index_.configurationapi.md#listlicenseproperties)
* [listRegisteredProperties](_src_configuration_index_.configurationapi.md#listregisteredproperties)
* [listRegisteredWebhooks](_src_configuration_index_.configurationapi.md#listregisteredwebhooks)
* [registerProperties](_src_configuration_index_.configurationapi.md#registerproperties)
* [registerWebhook](_src_configuration_index_.configurationapi.md#registerwebhook)
* [requestAgentUnsuspension](_src_configuration_index_.configurationapi.md#requestagentunsuspension)
* [send](_src_configuration_index_.configurationapi.md#send)
* [suspendAgent](_src_configuration_index_.configurationapi.md#suspendagent)
* [unregister_webhook](_src_configuration_index_.configurationapi.md#unregister_webhook)
* [unsuspendAgent](_src_configuration_index_.configurationapi.md#unsuspendagent)
* [updateAgent](_src_configuration_index_.configurationapi.md#updateagent)
* [updateBot](_src_configuration_index_.configurationapi.md#updatebot)
* [updateGroup](_src_configuration_index_.configurationapi.md#updategroup)
* [updateGroupProperties](_src_configuration_index_.configurationapi.md#updategroupproperties)
* [updateLicenseProperties](_src_configuration_index_.configurationapi.md#updatelicenseproperties)

## Constructors

###  constructor

\+ **new ConfigurationAPI**(`clientID`: string, `tokenGetter`: [TokenGetter](../modules/_src_authorization_index_.md#tokengetter)): *[ConfigurationAPI](_src_configuration_index_.configurationapi.md)*

*Overrides [WebAPI](_src_internal_index_.webapi.md).[constructor](_src_internal_index_.webapi.md#constructor)*

*Defined in [src/configuration/index.ts:22](https://github.com/livechat/lc-sdk-js/blob/e25bbbb/src/configuration/index.ts#L22)*

**Parameters:**

Name | Type |
------ | ------ |
`clientID` | string |
`tokenGetter` | [TokenGetter](../modules/_src_authorization_index_.md#tokengetter) |

**Returns:** *[ConfigurationAPI](_src_configuration_index_.configurationapi.md)*

## Properties

###  APIURL

• **APIURL**: *string*

*Inherited from [WebAPI](_src_internal_index_.webapi.md).[APIURL](_src_internal_index_.webapi.md#apiurl)*

*Defined in [src/internal/index.ts:11](https://github.com/livechat/lc-sdk-js/blob/e25bbbb/src/internal/index.ts#L11)*

___

###  clientID

• **clientID**: *string*

*Inherited from [WebAPI](_src_internal_index_.webapi.md).[clientID](_src_internal_index_.webapi.md#clientid)*

*Defined in [src/internal/index.ts:12](https://github.com/livechat/lc-sdk-js/blob/e25bbbb/src/internal/index.ts#L12)*

___

###  tokenGetter

• **tokenGetter**: *[TokenGetter](../modules/_src_authorization_index_.md#tokengetter)*

*Inherited from [WebAPI](_src_internal_index_.webapi.md).[tokenGetter](_src_internal_index_.webapi.md#tokengetter)*

*Defined in [src/internal/index.ts:15](https://github.com/livechat/lc-sdk-js/blob/e25bbbb/src/internal/index.ts#L15)*

___

###  type

• **type**: *[apiType](../modules/_src_internal_index_.md#apitype)*

*Inherited from [WebAPI](_src_internal_index_.webapi.md).[type](_src_internal_index_.webapi.md#type)*

*Defined in [src/internal/index.ts:14](https://github.com/livechat/lc-sdk-js/blob/e25bbbb/src/internal/index.ts#L14)*

___

###  version

• **version**: *string*

*Inherited from [WebAPI](_src_internal_index_.webapi.md).[version](_src_internal_index_.webapi.md#version)*

*Defined in [src/internal/index.ts:13](https://github.com/livechat/lc-sdk-js/blob/e25bbbb/src/internal/index.ts#L13)*

## Methods

###  approveAgent

▸ **approveAgent**(`id`: string): *Promise‹[EmptyResponse](../interfaces/_src_configuration_structures_.emptyresponse.md)›*

*Defined in [src/configuration/index.ts:98](https://github.com/livechat/lc-sdk-js/blob/e25bbbb/src/configuration/index.ts#L98)*

Approves an Agent thus allowing the Agent to use the application.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of agent to approve  |

**Returns:** *Promise‹[EmptyResponse](../interfaces/_src_configuration_structures_.emptyresponse.md)›*

___

###  createAgent

▸ **createAgent**(`id`: string, `fields`: [AgentFields](../interfaces/_src_configuration_structures_.agentfields.md)): *Promise‹[CreateAgentResponse](../interfaces/_src_configuration_structures_.createagentresponse.md)›*

*Defined in [src/configuration/index.ts:32](https://github.com/livechat/lc-sdk-js/blob/e25bbbb/src/configuration/index.ts#L32)*

Creates a new Agent with specified parameters within a license.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of an agent to create |
`fields` | [AgentFields](../interfaces/_src_configuration_structures_.agentfields.md) | agent properties  |

**Returns:** *Promise‹[CreateAgentResponse](../interfaces/_src_configuration_structures_.createagentresponse.md)›*

___

###  createBot

▸ **createBot**(`fields`: [BotFields](../interfaces/_src_configuration_structures_.botfields.md)): *Promise‹[CreateBotResponse](../interfaces/_src_configuration_structures_.createbotresponse.md)›*

*Defined in [src/configuration/index.ts:106](https://github.com/livechat/lc-sdk-js/blob/e25bbbb/src/configuration/index.ts#L106)*

Creates a new Bot Agent with specified parameters within a license.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`fields` | [BotFields](../interfaces/_src_configuration_structures_.botfields.md) | bot agent properties  |

**Returns:** *Promise‹[CreateBotResponse](../interfaces/_src_configuration_structures_.createbotresponse.md)›*

___

###  createGroup

▸ **createGroup**(`name`: string, `agent_priorities`: [AgentPriorities](../interfaces/_src_configuration_structures_.agentpriorities.md), `language_code?`: undefined | string): *Promise‹[CreateGroupResponse](../interfaces/_src_configuration_structures_.creategroupresponse.md)›*

*Defined in [src/configuration/index.ts:149](https://github.com/livechat/lc-sdk-js/blob/e25bbbb/src/configuration/index.ts#L149)*

Creates new group.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`name` | string | group name |
`agent_priorities` | [AgentPriorities](../interfaces/_src_configuration_structures_.agentpriorities.md) | agents priorities within a group |
`language_code?` | undefined &#124; string | groups language  |

**Returns:** *Promise‹[CreateGroupResponse](../interfaces/_src_configuration_structures_.creategroupresponse.md)›*

___

###  deleteAgent

▸ **deleteAgent**(`id`: string): *Promise‹[EmptyResponse](../interfaces/_src_configuration_structures_.emptyresponse.md)›*

*Defined in [src/configuration/index.ts:67](https://github.com/livechat/lc-sdk-js/blob/e25bbbb/src/configuration/index.ts#L67)*

Deletes an Agent specified by id.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of agent to delete  |

**Returns:** *Promise‹[EmptyResponse](../interfaces/_src_configuration_structures_.emptyresponse.md)›*

___

###  deleteBot

▸ **deleteBot**(`bot_agent_id`: string): *Promise‹[EmptyResponse](../interfaces/_src_configuration_structures_.emptyresponse.md)›*

*Defined in [src/configuration/index.ts:114](https://github.com/livechat/lc-sdk-js/blob/e25bbbb/src/configuration/index.ts#L114)*

Deletes bot specified by id.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`bot_agent_id` | string | ID of bot to delete  |

**Returns:** *Promise‹[EmptyResponse](../interfaces/_src_configuration_structures_.emptyresponse.md)›*

___

###  deleteGroup

▸ **deleteGroup**(`id`: number): *Promise‹[EmptyResponse](../interfaces/_src_configuration_structures_.emptyresponse.md)›*

*Defined in [src/configuration/index.ts:186](https://github.com/livechat/lc-sdk-js/blob/e25bbbb/src/configuration/index.ts#L186)*

Deletes group specified by id.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | number | ID of group to delete  |

**Returns:** *Promise‹[EmptyResponse](../interfaces/_src_configuration_structures_.emptyresponse.md)›*

___

###  deleteGroupProperties

▸ **deleteGroupProperties**(`group_id`: number, `properties`: [Properties](../interfaces/_src_objects_index_.properties.md)): *Promise‹[EmptyResponse](../interfaces/_src_configuration_structures_.emptyresponse.md)›*

*Defined in [src/configuration/index.ts:281](https://github.com/livechat/lc-sdk-js/blob/e25bbbb/src/configuration/index.ts#L281)*

Deletes the properties set within a group.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`group_id` | number | group ID to delete properties from |
`properties` | [Properties](../interfaces/_src_objects_index_.properties.md) | properties to delete  |

**Returns:** *Promise‹[EmptyResponse](../interfaces/_src_configuration_structures_.emptyresponse.md)›*

___

###  deleteLicenseProperties

▸ **deleteLicenseProperties**(`properties`: [Properties](../interfaces/_src_objects_index_.properties.md)): *Promise‹[EmptyResponse](../interfaces/_src_configuration_structures_.emptyresponse.md)›*

*Defined in [src/configuration/index.ts:247](https://github.com/livechat/lc-sdk-js/blob/e25bbbb/src/configuration/index.ts#L247)*

Deletes the properties set within a license.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`properties` | [Properties](../interfaces/_src_objects_index_.properties.md) | properties to delete  |

**Returns:** *Promise‹[EmptyResponse](../interfaces/_src_configuration_structures_.emptyresponse.md)›*

___

###  getAgent

▸ **getAgent**(`id`: string, `fields?`: string[]): *Promise‹[Agent](../interfaces/_src_configuration_structures_.agent.md)›*

*Defined in [src/configuration/index.ts:41](https://github.com/livechat/lc-sdk-js/blob/e25bbbb/src/configuration/index.ts#L41)*

It returns the info about an Agent specified by id.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | IF of agent to get |
`fields?` | string[] | additional fields to include  |

**Returns:** *Promise‹[Agent](../interfaces/_src_configuration_structures_.agent.md)›*

___

###  getBot

▸ **getBot**(`bot_agent_id`: string): *Promise‹[GetBotResponse](../interfaces/_src_configuration_structures_.getbotresponse.md)›*

*Defined in [src/configuration/index.ts:139](https://github.com/livechat/lc-sdk-js/blob/e25bbbb/src/configuration/index.ts#L139)*

Gets info about Bot Agent.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`bot_agent_id` | string | bot agent ID to get info about  |

**Returns:** *Promise‹[GetBotResponse](../interfaces/_src_configuration_structures_.getbotresponse.md)›*

___

###  getGroup

▸ **getGroup**(`id`: number, `fields?`: string[]): *Promise‹[Group](../interfaces/_src_configuration_structures_.group.md)›*

*Defined in [src/configuration/index.ts:203](https://github.com/livechat/lc-sdk-js/blob/e25bbbb/src/configuration/index.ts#L203)*

Returns details about a group specified by its id.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | number | group ID to get info about |
`fields?` | string[] | additiona fields to include  |

**Returns:** *Promise‹[Group](../interfaces/_src_configuration_structures_.group.md)›*

___

###  listAgents

▸ **listAgents**(`group_ids?`: number[], `fields?`: string[]): *Promise‹[Agent](../interfaces/_src_configuration_structures_.agent.md)[]›*

*Defined in [src/configuration/index.ts:50](https://github.com/livechat/lc-sdk-js/blob/e25bbbb/src/configuration/index.ts#L50)*

Returns all Agents within a license.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`group_ids?` | number[] | groups to list agents from |
`fields?` | string[] | additional fields to include  |

**Returns:** *Promise‹[Agent](../interfaces/_src_configuration_structures_.agent.md)[]›*

___

###  listBots

▸ **listBots**(`all?`: undefined | false | true): *Promise‹[ListBotsResponse](../interfaces/_src_configuration_structures_.listbotsresponse.md)›*

*Defined in [src/configuration/index.ts:131](https://github.com/livechat/lc-sdk-js/blob/e25bbbb/src/configuration/index.ts#L131)*

Lists all bot agents within license.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`all?` | undefined &#124; false &#124; true | switch if should return all bots or only caller's bots  |

**Returns:** *Promise‹[ListBotsResponse](../interfaces/_src_configuration_structures_.listbotsresponse.md)›*

___

###  listGroupProperties

▸ **listGroupProperties**(`group_id`: number, `namespace_prefix?`: undefined | string, `name_prefix?`: undefined | string): *Promise‹[Properties](../interfaces/_src_objects_index_.properties.md)›*

*Defined in [src/configuration/index.ts:268](https://github.com/livechat/lc-sdk-js/blob/e25bbbb/src/configuration/index.ts#L268)*

Returns the properties set within a group.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`group_id` | number | group ID to get properties from |
`namespace_prefix?` | undefined &#124; string | namespace prefix |
`name_prefix?` | undefined &#124; string | name prefix  |

**Returns:** *Promise‹[Properties](../interfaces/_src_objects_index_.properties.md)›*

___

###  listGroups

▸ **listGroups**(`fields?`: string[]): *Promise‹[Group](../interfaces/_src_configuration_structures_.group.md)[]›*

*Defined in [src/configuration/index.ts:194](https://github.com/livechat/lc-sdk-js/blob/e25bbbb/src/configuration/index.ts#L194)*

Lists all existing groups.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`fields?` | string[] | additional fields to include  |

**Returns:** *Promise‹[Group](../interfaces/_src_configuration_structures_.group.md)[]›*

___

###  listLicenseProperties

▸ **listLicenseProperties**(`namespace_prefix?`: undefined | string, `name_prefix?`: undefined | string): *Promise‹[Properties](../interfaces/_src_objects_index_.properties.md)›*

*Defined in [src/configuration/index.ts:236](https://github.com/livechat/lc-sdk-js/blob/e25bbbb/src/configuration/index.ts#L236)*

Returns the properties set within a license.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`namespace_prefix?` | undefined &#124; string | namsepace prefix |
`name_prefix?` | undefined &#124; string | name prefix  |

**Returns:** *Promise‹[Properties](../interfaces/_src_objects_index_.properties.md)›*

___

###  listRegisteredProperties

▸ **listRegisteredProperties**(`all?`: undefined | false | true): *Promise‹[PropertiesConfig](../interfaces/_src_configuration_structures_.propertiesconfig.md)›*

*Defined in [src/configuration/index.ts:219](https://github.com/livechat/lc-sdk-js/blob/e25bbbb/src/configuration/index.ts#L219)*

Lists registered properties.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`all?` | undefined &#124; false &#124; true | if should return all properties within license  |

**Returns:** *Promise‹[PropertiesConfig](../interfaces/_src_configuration_structures_.propertiesconfig.md)›*

___

###  listRegisteredWebhooks

▸ **listRegisteredWebhooks**(): *Promise‹[RegisteredWebhook](../interfaces/_src_configuration_structures_.registeredwebhook.md)[]›*

*Defined in [src/configuration/index.ts:299](https://github.com/livechat/lc-sdk-js/blob/e25bbbb/src/configuration/index.ts#L299)*

Lists registered webhooks.

**Returns:** *Promise‹[RegisteredWebhook](../interfaces/_src_configuration_structures_.registeredwebhook.md)[]›*

___

###  registerProperties

▸ **registerProperties**(`properties`: [PropertiesConfig](../interfaces/_src_configuration_structures_.propertiesconfig.md)): *Promise‹[EmptyResponse](../interfaces/_src_configuration_structures_.emptyresponse.md)›*

*Defined in [src/configuration/index.ts:211](https://github.com/livechat/lc-sdk-js/blob/e25bbbb/src/configuration/index.ts#L211)*

Registers properties.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`properties` | [PropertiesConfig](../interfaces/_src_configuration_structures_.propertiesconfig.md) | properties to register  |

**Returns:** *Promise‹[EmptyResponse](../interfaces/_src_configuration_structures_.emptyresponse.md)›*

___

###  registerWebhook

▸ **registerWebhook**(`webhook`: [Webhook](../interfaces/_src_configuration_structures_.webhook.md)): *Promise‹[RegisterWebhookResponse](../interfaces/_src_configuration_structures_.registerwebhookresponse.md)›*

*Defined in [src/configuration/index.ts:292](https://github.com/livechat/lc-sdk-js/blob/e25bbbb/src/configuration/index.ts#L292)*

Registers webhook on a license.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`webhook` | [Webhook](../interfaces/_src_configuration_structures_.webhook.md) | webhook to register  |

**Returns:** *Promise‹[RegisterWebhookResponse](../interfaces/_src_configuration_structures_.registerwebhookresponse.md)›*

___

###  requestAgentUnsuspension

▸ **requestAgentUnsuspension**(): *Promise‹[EmptyResponse](../interfaces/_src_configuration_structures_.emptyresponse.md)›*

*Defined in [src/configuration/index.ts:90](https://github.com/livechat/lc-sdk-js/blob/e25bbbb/src/configuration/index.ts#L90)*

A suspended Agent can send emails to license owners and vice owners with an unsuspension request.

**Returns:** *Promise‹[EmptyResponse](../interfaces/_src_configuration_structures_.emptyresponse.md)›*

___

###  send

▸ **send**(`name`: string, `req`: any): *Promise‹any›*

*Inherited from [WebAPI](_src_internal_index_.webapi.md).[send](_src_internal_index_.webapi.md#send)*

*Defined in [src/internal/index.ts:25](https://github.com/livechat/lc-sdk-js/blob/e25bbbb/src/internal/index.ts#L25)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |
`req` | any |

**Returns:** *Promise‹any›*

___

###  suspendAgent

▸ **suspendAgent**(`id`: string): *Promise‹[EmptyResponse](../interfaces/_src_configuration_structures_.emptyresponse.md)›*

*Defined in [src/configuration/index.ts:75](https://github.com/livechat/lc-sdk-js/blob/e25bbbb/src/configuration/index.ts#L75)*

Suspends an Agent specified by id.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of agent to suspend  |

**Returns:** *Promise‹[EmptyResponse](../interfaces/_src_configuration_structures_.emptyresponse.md)›*

___

###  unregister_webhook

▸ **unregister_webhook**(`webhook_id`: string): *Promise‹[EmptyResponse](../interfaces/_src_configuration_structures_.emptyresponse.md)›*

*Defined in [src/configuration/index.ts:307](https://github.com/livechat/lc-sdk-js/blob/e25bbbb/src/configuration/index.ts#L307)*

Removes webhook from license.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`webhook_id` | string | webhook to unregister  |

**Returns:** *Promise‹[EmptyResponse](../interfaces/_src_configuration_structures_.emptyresponse.md)›*

___

###  unsuspendAgent

▸ **unsuspendAgent**(`id`: string): *Promise‹[EmptyResponse](../interfaces/_src_configuration_structures_.emptyresponse.md)›*

*Defined in [src/configuration/index.ts:83](https://github.com/livechat/lc-sdk-js/blob/e25bbbb/src/configuration/index.ts#L83)*

Unsuspends an Agent specified by id.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of agent to unsuspend  |

**Returns:** *Promise‹[EmptyResponse](../interfaces/_src_configuration_structures_.emptyresponse.md)›*

___

###  updateAgent

▸ **updateAgent**(`id`: string, `fields`: [AgentFields](../interfaces/_src_configuration_structures_.agentfields.md)): *Promise‹[EmptyResponse](../interfaces/_src_configuration_structures_.emptyresponse.md)›*

*Defined in [src/configuration/index.ts:59](https://github.com/livechat/lc-sdk-js/blob/e25bbbb/src/configuration/index.ts#L59)*

Updates the properties of an Agent specified by id.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of agent to update |
`fields` | [AgentFields](../interfaces/_src_configuration_structures_.agentfields.md) | properties to update  |

**Returns:** *Promise‹[EmptyResponse](../interfaces/_src_configuration_structures_.emptyresponse.md)›*

___

###  updateBot

▸ **updateBot**(`id`: string, `fields`: [BotFields](../interfaces/_src_configuration_structures_.botfields.md)): *Promise‹[EmptyResponse](../interfaces/_src_configuration_structures_.emptyresponse.md)›*

*Defined in [src/configuration/index.ts:123](https://github.com/livechat/lc-sdk-js/blob/e25bbbb/src/configuration/index.ts#L123)*

Updates the properties of Bot Agent specified by id.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of bot agent to update |
`fields` | [BotFields](../interfaces/_src_configuration_structures_.botfields.md) | properties to update  |

**Returns:** *Promise‹[EmptyResponse](../interfaces/_src_configuration_structures_.emptyresponse.md)›*

___

###  updateGroup

▸ **updateGroup**(`id`: number, `name?`: undefined | string, `agent_priorities?`: [AgentPriorities](../interfaces/_src_configuration_structures_.agentpriorities.md), `language_code?`: undefined | string): *Promise‹[EmptyResponse](../interfaces/_src_configuration_structures_.emptyresponse.md)›*

*Defined in [src/configuration/index.ts:168](https://github.com/livechat/lc-sdk-js/blob/e25bbbb/src/configuration/index.ts#L168)*

Updates an existing group.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | number | group id |
`name?` | undefined &#124; string | group name |
`agent_priorities?` | [AgentPriorities](../interfaces/_src_configuration_structures_.agentpriorities.md) | agents priorities within a group |
`language_code?` | undefined &#124; string | groups language  |

**Returns:** *Promise‹[EmptyResponse](../interfaces/_src_configuration_structures_.emptyresponse.md)›*

___

###  updateGroupProperties

▸ **updateGroupProperties**(`group_id`: number, `properties`: [Properties](../interfaces/_src_objects_index_.properties.md)): *Promise‹[EmptyResponse](../interfaces/_src_configuration_structures_.emptyresponse.md)›*

*Defined in [src/configuration/index.ts:256](https://github.com/livechat/lc-sdk-js/blob/e25bbbb/src/configuration/index.ts#L256)*

Updates a property value within a group as the property location. This operation doesn't overwrite the existing values.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`group_id` | number | group ID to update properties |
`properties` | [Properties](../interfaces/_src_objects_index_.properties.md) | properties to update  |

**Returns:** *Promise‹[EmptyResponse](../interfaces/_src_configuration_structures_.emptyresponse.md)›*

___

###  updateLicenseProperties

▸ **updateLicenseProperties**(`properties`: [Properties](../interfaces/_src_objects_index_.properties.md)): *Promise‹[EmptyResponse](../interfaces/_src_configuration_structures_.emptyresponse.md)›*

*Defined in [src/configuration/index.ts:227](https://github.com/livechat/lc-sdk-js/blob/e25bbbb/src/configuration/index.ts#L227)*

Updates a property value within a license. This operation doesn't overwrite the existing values.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`properties` | [Properties](../interfaces/_src_objects_index_.properties.md) | properties to update  |

**Returns:** *Promise‹[EmptyResponse](../interfaces/_src_configuration_structures_.emptyresponse.md)›*
