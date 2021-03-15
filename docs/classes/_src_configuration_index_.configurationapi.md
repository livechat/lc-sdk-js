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
* [disableLicenseWebhooks](_src_configuration_index_.configurationapi.md#disablelicensewebhooks)
* [enableLicenseWebhooks](_src_configuration_index_.configurationapi.md#enablelicensewebhooks)
* [getAgent](_src_configuration_index_.configurationapi.md#getagent)
* [getBot](_src_configuration_index_.configurationapi.md#getbot)
* [getGroup](_src_configuration_index_.configurationapi.md#getgroup)
* [getLicenseWebhooksState](_src_configuration_index_.configurationapi.md#getlicensewebhooksstate)
* [listAgents](_src_configuration_index_.configurationapi.md#listagents)
* [listBots](_src_configuration_index_.configurationapi.md#listbots)
* [listGroupProperties](_src_configuration_index_.configurationapi.md#listgroupproperties)
* [listGroups](_src_configuration_index_.configurationapi.md#listgroups)
* [listLicenseProperties](_src_configuration_index_.configurationapi.md#listlicenseproperties)
* [listProperties](_src_configuration_index_.configurationapi.md#listproperties)
* [listWebhookNames](_src_configuration_index_.configurationapi.md#listwebhooknames)
* [listWebhooks](_src_configuration_index_.configurationapi.md#listwebhooks)
* [publishProperty](_src_configuration_index_.configurationapi.md#publishproperty)
* [registerProperty](_src_configuration_index_.configurationapi.md#registerproperty)
* [registerWebhook](_src_configuration_index_.configurationapi.md#registerwebhook)
* [requestAgentUnsuspension](_src_configuration_index_.configurationapi.md#requestagentunsuspension)
* [send](_src_configuration_index_.configurationapi.md#send)
* [suspendAgent](_src_configuration_index_.configurationapi.md#suspendagent)
* [unregisterProperty](_src_configuration_index_.configurationapi.md#unregisterproperty)
* [unregisterWebhook](_src_configuration_index_.configurationapi.md#unregisterwebhook)
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

*Defined in [src/configuration/index.ts:24](https://github.com/livechat/lc-sdk-js/blob/ce4846a/src/configuration/index.ts#L24)*

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

*Defined in [src/internal/index.ts:11](https://github.com/livechat/lc-sdk-js/blob/ce4846a/src/internal/index.ts#L11)*

___

###  clientID

• **clientID**: *string*

*Inherited from [WebAPI](_src_internal_index_.webapi.md).[clientID](_src_internal_index_.webapi.md#clientid)*

*Defined in [src/internal/index.ts:12](https://github.com/livechat/lc-sdk-js/blob/ce4846a/src/internal/index.ts#L12)*

___

###  tokenGetter

• **tokenGetter**: *[TokenGetter](../modules/_src_authorization_index_.md#tokengetter)*

*Inherited from [WebAPI](_src_internal_index_.webapi.md).[tokenGetter](_src_internal_index_.webapi.md#tokengetter)*

*Defined in [src/internal/index.ts:15](https://github.com/livechat/lc-sdk-js/blob/ce4846a/src/internal/index.ts#L15)*

___

###  type

• **type**: *[apiType](../modules/_src_internal_index_.md#apitype)*

*Inherited from [WebAPI](_src_internal_index_.webapi.md).[type](_src_internal_index_.webapi.md#type)*

*Defined in [src/internal/index.ts:14](https://github.com/livechat/lc-sdk-js/blob/ce4846a/src/internal/index.ts#L14)*

___

###  version

• **version**: *string*

*Inherited from [WebAPI](_src_internal_index_.webapi.md).[version](_src_internal_index_.webapi.md#version)*

*Defined in [src/internal/index.ts:13](https://github.com/livechat/lc-sdk-js/blob/ce4846a/src/internal/index.ts#L13)*

## Methods

###  approveAgent

▸ **approveAgent**(`id`: string): *Promise‹[EmptyResponse](../interfaces/_src_configuration_structures_.emptyresponse.md)›*

*Defined in [src/configuration/index.ts:100](https://github.com/livechat/lc-sdk-js/blob/ce4846a/src/configuration/index.ts#L100)*

Approves an Agent thus allowing the Agent to use the application.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of agent to approve  |

**Returns:** *Promise‹[EmptyResponse](../interfaces/_src_configuration_structures_.emptyresponse.md)›*

___

###  createAgent

▸ **createAgent**(`id`: string, `fields`: [AgentFields](../interfaces/_src_configuration_structures_.agentfields.md)): *Promise‹[CreateAgentResponse](../interfaces/_src_configuration_structures_.createagentresponse.md)›*

*Defined in [src/configuration/index.ts:34](https://github.com/livechat/lc-sdk-js/blob/ce4846a/src/configuration/index.ts#L34)*

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

*Defined in [src/configuration/index.ts:108](https://github.com/livechat/lc-sdk-js/blob/ce4846a/src/configuration/index.ts#L108)*

Creates a new Bot with specified parameters within a license.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`fields` | [BotFields](../interfaces/_src_configuration_structures_.botfields.md) | bot properties  |

**Returns:** *Promise‹[CreateBotResponse](../interfaces/_src_configuration_structures_.createbotresponse.md)›*

___

###  createGroup

▸ **createGroup**(`name`: string, `agent_priorities`: [AgentPriorities](../interfaces/_src_configuration_structures_.agentpriorities.md), `language_code?`: undefined | string): *Promise‹[CreateGroupResponse](../interfaces/_src_configuration_structures_.creategroupresponse.md)›*

*Defined in [src/configuration/index.ts:153](https://github.com/livechat/lc-sdk-js/blob/ce4846a/src/configuration/index.ts#L153)*

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

*Defined in [src/configuration/index.ts:69](https://github.com/livechat/lc-sdk-js/blob/ce4846a/src/configuration/index.ts#L69)*

Deletes an Agent specified by id.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of agent to delete  |

**Returns:** *Promise‹[EmptyResponse](../interfaces/_src_configuration_structures_.emptyresponse.md)›*

___

###  deleteBot

▸ **deleteBot**(`id`: string): *Promise‹[EmptyResponse](../interfaces/_src_configuration_structures_.emptyresponse.md)›*

*Defined in [src/configuration/index.ts:116](https://github.com/livechat/lc-sdk-js/blob/ce4846a/src/configuration/index.ts#L116)*

Deletes bot specified by id.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of bot to delete  |

**Returns:** *Promise‹[EmptyResponse](../interfaces/_src_configuration_structures_.emptyresponse.md)›*

___

###  deleteGroup

▸ **deleteGroup**(`id`: number): *Promise‹[EmptyResponse](../interfaces/_src_configuration_structures_.emptyresponse.md)›*

*Defined in [src/configuration/index.ts:190](https://github.com/livechat/lc-sdk-js/blob/ce4846a/src/configuration/index.ts#L190)*

Deletes group specified by id.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | number | ID of group to delete  |

**Returns:** *Promise‹[EmptyResponse](../interfaces/_src_configuration_structures_.emptyresponse.md)›*

___

###  deleteGroupProperties

▸ **deleteGroupProperties**(`group_id`: number, `properties`: [Properties](../interfaces/_src_objects_index_.properties.md)): *Promise‹[EmptyResponse](../interfaces/_src_configuration_structures_.emptyresponse.md)›*

*Defined in [src/configuration/index.ts:312](https://github.com/livechat/lc-sdk-js/blob/ce4846a/src/configuration/index.ts#L312)*

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

*Defined in [src/configuration/index.ts:278](https://github.com/livechat/lc-sdk-js/blob/ce4846a/src/configuration/index.ts#L278)*

Deletes the properties set within a license.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`properties` | [Properties](../interfaces/_src_objects_index_.properties.md) | properties to delete  |

**Returns:** *Promise‹[EmptyResponse](../interfaces/_src_configuration_structures_.emptyresponse.md)›*

___

###  disableLicenseWebhooks

▸ **disableLicenseWebhooks**(`client_id?`: undefined | string): *Promise‹[EmptyResponse](../interfaces/_src_configuration_structures_.emptyresponse.md)›*

*Defined in [src/configuration/index.ts:365](https://github.com/livechat/lc-sdk-js/blob/ce4846a/src/configuration/index.ts#L365)*

Disables license webhooks for authorization token's clientID

**Parameters:**

Name | Type |
------ | ------ |
`client_id?` | undefined &#124; string |

**Returns:** *Promise‹[EmptyResponse](../interfaces/_src_configuration_structures_.emptyresponse.md)›*

___

###  enableLicenseWebhooks

▸ **enableLicenseWebhooks**(`client_id?`: undefined | string): *Promise‹[EmptyResponse](../interfaces/_src_configuration_structures_.emptyresponse.md)›*

*Defined in [src/configuration/index.ts:357](https://github.com/livechat/lc-sdk-js/blob/ce4846a/src/configuration/index.ts#L357)*

Enables license webhooks for authorization token's clientID

**Parameters:**

Name | Type |
------ | ------ |
`client_id?` | undefined &#124; string |

**Returns:** *Promise‹[EmptyResponse](../interfaces/_src_configuration_structures_.emptyresponse.md)›*

___

###  getAgent

▸ **getAgent**(`id`: string, `fields?`: string[]): *Promise‹[Agent](../interfaces/_src_configuration_structures_.agent.md)›*

*Defined in [src/configuration/index.ts:43](https://github.com/livechat/lc-sdk-js/blob/ce4846a/src/configuration/index.ts#L43)*

It returns the info about an Agent specified by id.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | IF of agent to get |
`fields?` | string[] | additional fields to include  |

**Returns:** *Promise‹[Agent](../interfaces/_src_configuration_structures_.agent.md)›*

___

###  getBot

▸ **getBot**(`id`: string, `fields?`: [BotFields](../interfaces/_src_configuration_structures_.botfields.md)): *Promise‹[Bot](../interfaces/_src_configuration_structures_.bot.md)›*

*Defined in [src/configuration/index.ts:143](https://github.com/livechat/lc-sdk-js/blob/ce4846a/src/configuration/index.ts#L143)*

Gets info about Bot.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | bot ID to get info about |
`fields?` | [BotFields](../interfaces/_src_configuration_structures_.botfields.md) | additional fields to include  |

**Returns:** *Promise‹[Bot](../interfaces/_src_configuration_structures_.bot.md)›*

___

###  getGroup

▸ **getGroup**(`id`: number, `fields?`: string[]): *Promise‹[Group](../interfaces/_src_configuration_structures_.group.md)›*

*Defined in [src/configuration/index.ts:207](https://github.com/livechat/lc-sdk-js/blob/ce4846a/src/configuration/index.ts#L207)*

Returns details about a group specified by its id.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | number | group ID to get info about |
`fields?` | string[] | additiona fields to include  |

**Returns:** *Promise‹[Group](../interfaces/_src_configuration_structures_.group.md)›*

___

###  getLicenseWebhooksState

▸ **getLicenseWebhooksState**(`client_id?`: undefined | string): *Promise‹[WebhooksState](../interfaces/_src_configuration_structures_.webhooksstate.md)›*

*Defined in [src/configuration/index.ts:373](https://github.com/livechat/lc-sdk-js/blob/ce4846a/src/configuration/index.ts#L373)*

Gets license webhooks' state for authorization token's clientID

**Parameters:**

Name | Type |
------ | ------ |
`client_id?` | undefined &#124; string |

**Returns:** *Promise‹[WebhooksState](../interfaces/_src_configuration_structures_.webhooksstate.md)›*

___

###  listAgents

▸ **listAgents**(`group_ids?`: number[], `fields?`: string[]): *Promise‹[Agent](../interfaces/_src_configuration_structures_.agent.md)[]›*

*Defined in [src/configuration/index.ts:52](https://github.com/livechat/lc-sdk-js/blob/ce4846a/src/configuration/index.ts#L52)*

Returns all Agents within a license.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`group_ids?` | number[] | groups to list agents from |
`fields?` | string[] | additional fields to include  |

**Returns:** *Promise‹[Agent](../interfaces/_src_configuration_structures_.agent.md)[]›*

___

###  listBots

▸ **listBots**(`all?`: undefined | false | true, `fields?`: [BotFields](../interfaces/_src_configuration_structures_.botfields.md)): *Promise‹[Bot](../interfaces/_src_configuration_structures_.bot.md)[]›*

*Defined in [src/configuration/index.ts:134](https://github.com/livechat/lc-sdk-js/blob/ce4846a/src/configuration/index.ts#L134)*

Lists all bots within license.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`all?` | undefined &#124; false &#124; true | switch if should return all bots or only caller's bots |
`fields?` | [BotFields](../interfaces/_src_configuration_structures_.botfields.md) | additional fields to include  |

**Returns:** *Promise‹[Bot](../interfaces/_src_configuration_structures_.bot.md)[]›*

___

###  listGroupProperties

▸ **listGroupProperties**(`group_id`: number, `namespace_prefix?`: undefined | string, `name_prefix?`: undefined | string): *Promise‹[Properties](../interfaces/_src_objects_index_.properties.md)›*

*Defined in [src/configuration/index.ts:299](https://github.com/livechat/lc-sdk-js/blob/ce4846a/src/configuration/index.ts#L299)*

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

*Defined in [src/configuration/index.ts:198](https://github.com/livechat/lc-sdk-js/blob/ce4846a/src/configuration/index.ts#L198)*

Lists all existing groups.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`fields?` | string[] | additional fields to include  |

**Returns:** *Promise‹[Group](../interfaces/_src_configuration_structures_.group.md)[]›*

___

###  listLicenseProperties

▸ **listLicenseProperties**(`namespace_prefix?`: undefined | string, `name_prefix?`: undefined | string): *Promise‹[Properties](../interfaces/_src_objects_index_.properties.md)›*

*Defined in [src/configuration/index.ts:267](https://github.com/livechat/lc-sdk-js/blob/ce4846a/src/configuration/index.ts#L267)*

Returns the properties set within a license.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`namespace_prefix?` | undefined &#124; string | namsepace prefix |
`name_prefix?` | undefined &#124; string | name prefix  |

**Returns:** *Promise‹[Properties](../interfaces/_src_objects_index_.properties.md)›*

___

###  listProperties

▸ **listProperties**(`owner_client_id`: string): *Promise‹[PropertiesConfig](../interfaces/_src_configuration_structures_.propertiesconfig.md)›*

*Defined in [src/configuration/index.ts:250](https://github.com/livechat/lc-sdk-js/blob/ce4846a/src/configuration/index.ts#L250)*

Lists properties for given client_id.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`owner_client_id` | string | client_id of property owner  |

**Returns:** *Promise‹[PropertiesConfig](../interfaces/_src_configuration_structures_.propertiesconfig.md)›*

___

###  listWebhookNames

▸ **listWebhookNames**(`version?`: undefined | string): *Promise‹[WebhookData](../interfaces/_src_configuration_structures_.webhookdata.md)[]›*

*Defined in [src/configuration/index.ts:349](https://github.com/livechat/lc-sdk-js/blob/ce4846a/src/configuration/index.ts#L349)*

Lists webhooks available in given API version

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`version?` | undefined &#124; string | version of API for webhooks  |

**Returns:** *Promise‹[WebhookData](../interfaces/_src_configuration_structures_.webhookdata.md)[]›*

___

###  listWebhooks

▸ **listWebhooks**(`owner_client_id?`: undefined | string): *Promise‹[RegisteredWebhook](../interfaces/_src_configuration_structures_.registeredwebhook.md)[]›*

*Defined in [src/configuration/index.ts:332](https://github.com/livechat/lc-sdk-js/blob/ce4846a/src/configuration/index.ts#L332)*

Lists registered webhooks.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`owner_client_id?` | undefined &#124; string | must be provided when authorizing with Personal Access Token  |

**Returns:** *Promise‹[RegisteredWebhook](../interfaces/_src_configuration_structures_.registeredwebhook.md)[]›*

___

###  publishProperty

▸ **publishProperty**(`name`: string, `owner_client_id`: string, `read`: boolean, `write`: boolean): *Promise‹[EmptyResponse](../interfaces/_src_configuration_structures_.emptyresponse.md)›*

*Defined in [src/configuration/index.ts:235](https://github.com/livechat/lc-sdk-js/blob/ce4846a/src/configuration/index.ts#L235)*

Publishes private property.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`name` | string | property name |
`owner_client_id` | string | clientID of property owner |
`read` | boolean | determines whether non-owners can read the property |
`write` | boolean | determines whether non-owners can write the property  |

**Returns:** *Promise‹[EmptyResponse](../interfaces/_src_configuration_structures_.emptyresponse.md)›*

___

###  registerProperty

▸ **registerProperty**(`property`: [PropertyConfig](../interfaces/_src_configuration_structures_.propertyconfig.md)): *Promise‹[EmptyResponse](../interfaces/_src_configuration_structures_.emptyresponse.md)›*

*Defined in [src/configuration/index.ts:215](https://github.com/livechat/lc-sdk-js/blob/ce4846a/src/configuration/index.ts#L215)*

Registers private property.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`property` | [PropertyConfig](../interfaces/_src_configuration_structures_.propertyconfig.md) | property to register  |

**Returns:** *Promise‹[EmptyResponse](../interfaces/_src_configuration_structures_.emptyresponse.md)›*

___

###  registerWebhook

▸ **registerWebhook**(`webhook`: [Webhook](../interfaces/_src_configuration_structures_.webhook.md), `owner_client_id?`: undefined | string): *Promise‹[RegisterWebhookResponse](../interfaces/_src_configuration_structures_.registerwebhookresponse.md)›*

*Defined in [src/configuration/index.ts:324](https://github.com/livechat/lc-sdk-js/blob/ce4846a/src/configuration/index.ts#L324)*

Registers webhook on a license.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`webhook` | [Webhook](../interfaces/_src_configuration_structures_.webhook.md) | webhook to register |
`owner_client_id?` | undefined &#124; string | must be provided when authorizing with Personal Access Token  |

**Returns:** *Promise‹[RegisterWebhookResponse](../interfaces/_src_configuration_structures_.registerwebhookresponse.md)›*

___

###  requestAgentUnsuspension

▸ **requestAgentUnsuspension**(): *Promise‹[EmptyResponse](../interfaces/_src_configuration_structures_.emptyresponse.md)›*

*Defined in [src/configuration/index.ts:92](https://github.com/livechat/lc-sdk-js/blob/ce4846a/src/configuration/index.ts#L92)*

A suspended Agent can send emails to license owners and vice owners with an unsuspension request.

**Returns:** *Promise‹[EmptyResponse](../interfaces/_src_configuration_structures_.emptyresponse.md)›*

___

###  send

▸ **send**(`name`: string, `req`: any): *Promise‹any›*

*Inherited from [WebAPI](_src_internal_index_.webapi.md).[send](_src_internal_index_.webapi.md#send)*

*Defined in [src/internal/index.ts:25](https://github.com/livechat/lc-sdk-js/blob/ce4846a/src/internal/index.ts#L25)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |
`req` | any |

**Returns:** *Promise‹any›*

___

###  suspendAgent

▸ **suspendAgent**(`id`: string): *Promise‹[EmptyResponse](../interfaces/_src_configuration_structures_.emptyresponse.md)›*

*Defined in [src/configuration/index.ts:77](https://github.com/livechat/lc-sdk-js/blob/ce4846a/src/configuration/index.ts#L77)*

Suspends an Agent specified by id.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of agent to suspend  |

**Returns:** *Promise‹[EmptyResponse](../interfaces/_src_configuration_structures_.emptyresponse.md)›*

___

###  unregisterProperty

▸ **unregisterProperty**(`name`: string, `owner_client_id`: string): *Promise‹[EmptyResponse](../interfaces/_src_configuration_structures_.emptyresponse.md)›*

*Defined in [src/configuration/index.ts:224](https://github.com/livechat/lc-sdk-js/blob/ce4846a/src/configuration/index.ts#L224)*

Unregisters private property.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`name` | string | property name |
`owner_client_id` | string | clientID of property owner  |

**Returns:** *Promise‹[EmptyResponse](../interfaces/_src_configuration_structures_.emptyresponse.md)›*

___

###  unregisterWebhook

▸ **unregisterWebhook**(`id`: string, `owner_client_id?`: undefined | string): *Promise‹[EmptyResponse](../interfaces/_src_configuration_structures_.emptyresponse.md)›*

*Defined in [src/configuration/index.ts:341](https://github.com/livechat/lc-sdk-js/blob/ce4846a/src/configuration/index.ts#L341)*

Removes webhook from license.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of webhook to unregister |
`owner_client_id?` | undefined &#124; string | must be provided when authorizing with Personal Access Token  |

**Returns:** *Promise‹[EmptyResponse](../interfaces/_src_configuration_structures_.emptyresponse.md)›*

___

###  unsuspendAgent

▸ **unsuspendAgent**(`id`: string): *Promise‹[EmptyResponse](../interfaces/_src_configuration_structures_.emptyresponse.md)›*

*Defined in [src/configuration/index.ts:85](https://github.com/livechat/lc-sdk-js/blob/ce4846a/src/configuration/index.ts#L85)*

Unsuspends an Agent specified by id.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of agent to unsuspend  |

**Returns:** *Promise‹[EmptyResponse](../interfaces/_src_configuration_structures_.emptyresponse.md)›*

___

###  updateAgent

▸ **updateAgent**(`id`: string, `fields`: [AgentFields](../interfaces/_src_configuration_structures_.agentfields.md)): *Promise‹[EmptyResponse](../interfaces/_src_configuration_structures_.emptyresponse.md)›*

*Defined in [src/configuration/index.ts:61](https://github.com/livechat/lc-sdk-js/blob/ce4846a/src/configuration/index.ts#L61)*

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

*Defined in [src/configuration/index.ts:125](https://github.com/livechat/lc-sdk-js/blob/ce4846a/src/configuration/index.ts#L125)*

Updates the properties of Bot specified by id.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of bot to update |
`fields` | [BotFields](../interfaces/_src_configuration_structures_.botfields.md) | properties to update  |

**Returns:** *Promise‹[EmptyResponse](../interfaces/_src_configuration_structures_.emptyresponse.md)›*

___

###  updateGroup

▸ **updateGroup**(`id`: number, `name?`: undefined | string, `agent_priorities?`: [AgentPriorities](../interfaces/_src_configuration_structures_.agentpriorities.md), `language_code?`: undefined | string): *Promise‹[EmptyResponse](../interfaces/_src_configuration_structures_.emptyresponse.md)›*

*Defined in [src/configuration/index.ts:172](https://github.com/livechat/lc-sdk-js/blob/ce4846a/src/configuration/index.ts#L172)*

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

*Defined in [src/configuration/index.ts:287](https://github.com/livechat/lc-sdk-js/blob/ce4846a/src/configuration/index.ts#L287)*

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

*Defined in [src/configuration/index.ts:258](https://github.com/livechat/lc-sdk-js/blob/ce4846a/src/configuration/index.ts#L258)*

Updates a property value within a license. This operation doesn't overwrite the existing values.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`properties` | [Properties](../interfaces/_src_objects_index_.properties.md) | properties to update  |

**Returns:** *Promise‹[EmptyResponse](../interfaces/_src_configuration_structures_.emptyresponse.md)›*
