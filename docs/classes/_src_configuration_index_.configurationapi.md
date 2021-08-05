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

* [addAutoAccess](_src_configuration_index_.configurationapi.md#addautoaccess)
* [approveAgent](_src_configuration_index_.configurationapi.md#approveagent)
* [createAgent](_src_configuration_index_.configurationapi.md#createagent)
* [createBot](_src_configuration_index_.configurationapi.md#createbot)
* [createGroup](_src_configuration_index_.configurationapi.md#creategroup)
* [deleteAgent](_src_configuration_index_.configurationapi.md#deleteagent)
* [deleteAutoAccess](_src_configuration_index_.configurationapi.md#deleteautoaccess)
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
* [listAutoAccesses](_src_configuration_index_.configurationapi.md#listautoaccesses)
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
* [updateAutoAccess](_src_configuration_index_.configurationapi.md#updateautoaccess)
* [updateBot](_src_configuration_index_.configurationapi.md#updatebot)
* [updateGroup](_src_configuration_index_.configurationapi.md#updategroup)
* [updateGroupProperties](_src_configuration_index_.configurationapi.md#updategroupproperties)
* [updateLicenseProperties](_src_configuration_index_.configurationapi.md#updatelicenseproperties)

## Constructors

###  constructor

\+ **new ConfigurationAPI**(`clientID`: string, `tokenGetter`: [TokenGetter](../modules/_src_authorization_index_.md#tokengetter), `options?`: [WebAPIOptions](../interfaces/_src_objects_index_.webapioptions.md)): *[ConfigurationAPI](_src_configuration_index_.configurationapi.md)*

*Overrides [WebAPI](_src_internal_index_.webapi.md).[constructor](_src_internal_index_.webapi.md#constructor)*

*Defined in [src/configuration/index.ts:28](https://github.com/livechat/lc-sdk-js/blob/de56f05/src/configuration/index.ts#L28)*

**Parameters:**

Name | Type |
------ | ------ |
`clientID` | string |
`tokenGetter` | [TokenGetter](../modules/_src_authorization_index_.md#tokengetter) |
`options?` | [WebAPIOptions](../interfaces/_src_objects_index_.webapioptions.md) |

**Returns:** *[ConfigurationAPI](_src_configuration_index_.configurationapi.md)*

## Properties

###  APIURL

• **APIURL**: *string*

*Inherited from [WebAPI](_src_internal_index_.webapi.md).[APIURL](_src_internal_index_.webapi.md#apiurl)*

*Defined in [src/internal/index.ts:11](https://github.com/livechat/lc-sdk-js/blob/de56f05/src/internal/index.ts#L11)*

___

###  clientID

• **clientID**: *string*

*Inherited from [WebAPI](_src_internal_index_.webapi.md).[clientID](_src_internal_index_.webapi.md#clientid)*

*Defined in [src/internal/index.ts:12](https://github.com/livechat/lc-sdk-js/blob/de56f05/src/internal/index.ts#L12)*

___

###  tokenGetter

• **tokenGetter**: *[TokenGetter](../modules/_src_authorization_index_.md#tokengetter)*

*Inherited from [WebAPI](_src_internal_index_.webapi.md).[tokenGetter](_src_internal_index_.webapi.md#tokengetter)*

*Defined in [src/internal/index.ts:15](https://github.com/livechat/lc-sdk-js/blob/de56f05/src/internal/index.ts#L15)*

___

###  type

• **type**: *[apiType](../modules/_src_internal_index_.md#apitype)*

*Inherited from [WebAPI](_src_internal_index_.webapi.md).[type](_src_internal_index_.webapi.md#type)*

*Defined in [src/internal/index.ts:14](https://github.com/livechat/lc-sdk-js/blob/de56f05/src/internal/index.ts#L14)*

___

###  version

• **version**: *string*

*Inherited from [WebAPI](_src_internal_index_.webapi.md).[version](_src_internal_index_.webapi.md#version)*

*Defined in [src/internal/index.ts:13](https://github.com/livechat/lc-sdk-js/blob/de56f05/src/internal/index.ts#L13)*

## Methods

###  addAutoAccess

▸ **addAutoAccess**(`opts`: [AddAutoAccessRequest](../interfaces/_src_configuration_structures_.addautoaccessrequest.md)): *Promise‹[AddAutoAccessResponse](../interfaces/_src_configuration_structures_.addautoaccessresponse.md)›*

*Defined in [src/configuration/index.ts:385](https://github.com/livechat/lc-sdk-js/blob/de56f05/src/configuration/index.ts#L385)*

Creates an auto access data structure, which is a set of conditions for the tracking URL and geolocation of a customer.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`opts` | [AddAutoAccessRequest](../interfaces/_src_configuration_structures_.addautoaccessrequest.md) | options for auto access like conditions  |

**Returns:** *Promise‹[AddAutoAccessResponse](../interfaces/_src_configuration_structures_.addautoaccessresponse.md)›*

___

###  approveAgent

▸ **approveAgent**(`id`: string): *Promise‹[EmptyResponse](../interfaces/_src_configuration_structures_.emptyresponse.md)›*

*Defined in [src/configuration/index.ts:104](https://github.com/livechat/lc-sdk-js/blob/de56f05/src/configuration/index.ts#L104)*

Approves an Agent thus allowing the Agent to use the application.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of agent to approve  |

**Returns:** *Promise‹[EmptyResponse](../interfaces/_src_configuration_structures_.emptyresponse.md)›*

___

###  createAgent

▸ **createAgent**(`id`: string, `fields`: [AgentFields](../interfaces/_src_configuration_structures_.agentfields.md)): *Promise‹[CreateAgentResponse](../interfaces/_src_configuration_structures_.createagentresponse.md)›*

*Defined in [src/configuration/index.ts:38](https://github.com/livechat/lc-sdk-js/blob/de56f05/src/configuration/index.ts#L38)*

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

*Defined in [src/configuration/index.ts:112](https://github.com/livechat/lc-sdk-js/blob/de56f05/src/configuration/index.ts#L112)*

Creates a new Bot with specified parameters within a license.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`fields` | [BotFields](../interfaces/_src_configuration_structures_.botfields.md) | bot properties  |

**Returns:** *Promise‹[CreateBotResponse](../interfaces/_src_configuration_structures_.createbotresponse.md)›*

___

###  createGroup

▸ **createGroup**(`name`: string, `agent_priorities`: [AgentPriorities](../interfaces/_src_configuration_structures_.agentpriorities.md), `language_code?`: undefined | string): *Promise‹[CreateGroupResponse](../interfaces/_src_configuration_structures_.creategroupresponse.md)›*

*Defined in [src/configuration/index.ts:157](https://github.com/livechat/lc-sdk-js/blob/de56f05/src/configuration/index.ts#L157)*

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

*Defined in [src/configuration/index.ts:73](https://github.com/livechat/lc-sdk-js/blob/de56f05/src/configuration/index.ts#L73)*

Deletes an Agent specified by id.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of agent to delete  |

**Returns:** *Promise‹[EmptyResponse](../interfaces/_src_configuration_structures_.emptyresponse.md)›*

___

###  deleteAutoAccess

▸ **deleteAutoAccess**(`id`: string): *Promise‹[EmptyResponse](../interfaces/_src_configuration_structures_.emptyresponse.md)›*

*Defined in [src/configuration/index.ts:400](https://github.com/livechat/lc-sdk-js/blob/de56f05/src/configuration/index.ts#L400)*

Deletes an existing auto access data structure specified by its ID.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the auto access to remove  |

**Returns:** *Promise‹[EmptyResponse](../interfaces/_src_configuration_structures_.emptyresponse.md)›*

___

###  deleteBot

▸ **deleteBot**(`id`: string): *Promise‹[EmptyResponse](../interfaces/_src_configuration_structures_.emptyresponse.md)›*

*Defined in [src/configuration/index.ts:120](https://github.com/livechat/lc-sdk-js/blob/de56f05/src/configuration/index.ts#L120)*

Deletes bot specified by id.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of bot to delete  |

**Returns:** *Promise‹[EmptyResponse](../interfaces/_src_configuration_structures_.emptyresponse.md)›*

___

###  deleteGroup

▸ **deleteGroup**(`id`: number): *Promise‹[EmptyResponse](../interfaces/_src_configuration_structures_.emptyresponse.md)›*

*Defined in [src/configuration/index.ts:194](https://github.com/livechat/lc-sdk-js/blob/de56f05/src/configuration/index.ts#L194)*

Deletes group specified by id.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | number | ID of group to delete  |

**Returns:** *Promise‹[EmptyResponse](../interfaces/_src_configuration_structures_.emptyresponse.md)›*

___

###  deleteGroupProperties

▸ **deleteGroupProperties**(`id`: number, `properties`: [Properties](../interfaces/_src_objects_index_.properties.md)): *Promise‹[EmptyResponse](../interfaces/_src_configuration_structures_.emptyresponse.md)›*

*Defined in [src/configuration/index.ts:316](https://github.com/livechat/lc-sdk-js/blob/de56f05/src/configuration/index.ts#L316)*

Deletes the properties set within a group.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | number | group ID to delete properties from |
`properties` | [Properties](../interfaces/_src_objects_index_.properties.md) | properties to delete  |

**Returns:** *Promise‹[EmptyResponse](../interfaces/_src_configuration_structures_.emptyresponse.md)›*

___

###  deleteLicenseProperties

▸ **deleteLicenseProperties**(`properties`: [Properties](../interfaces/_src_objects_index_.properties.md)): *Promise‹[EmptyResponse](../interfaces/_src_configuration_structures_.emptyresponse.md)›*

*Defined in [src/configuration/index.ts:282](https://github.com/livechat/lc-sdk-js/blob/de56f05/src/configuration/index.ts#L282)*

Deletes the properties set within a license.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`properties` | [Properties](../interfaces/_src_objects_index_.properties.md) | properties to delete  |

**Returns:** *Promise‹[EmptyResponse](../interfaces/_src_configuration_structures_.emptyresponse.md)›*

___

###  disableLicenseWebhooks

▸ **disableLicenseWebhooks**(`client_id?`: undefined | string): *Promise‹[EmptyResponse](../interfaces/_src_configuration_structures_.emptyresponse.md)›*

*Defined in [src/configuration/index.ts:369](https://github.com/livechat/lc-sdk-js/blob/de56f05/src/configuration/index.ts#L369)*

Disables license webhooks for authorization token's clientID

**Parameters:**

Name | Type |
------ | ------ |
`client_id?` | undefined &#124; string |

**Returns:** *Promise‹[EmptyResponse](../interfaces/_src_configuration_structures_.emptyresponse.md)›*

___

###  enableLicenseWebhooks

▸ **enableLicenseWebhooks**(`client_id?`: undefined | string): *Promise‹[EmptyResponse](../interfaces/_src_configuration_structures_.emptyresponse.md)›*

*Defined in [src/configuration/index.ts:361](https://github.com/livechat/lc-sdk-js/blob/de56f05/src/configuration/index.ts#L361)*

Enables license webhooks for authorization token's clientID

**Parameters:**

Name | Type |
------ | ------ |
`client_id?` | undefined &#124; string |

**Returns:** *Promise‹[EmptyResponse](../interfaces/_src_configuration_structures_.emptyresponse.md)›*

___

###  getAgent

▸ **getAgent**(`id`: string, `fields?`: string[]): *Promise‹[Agent](../interfaces/_src_configuration_structures_.agent.md)›*

*Defined in [src/configuration/index.ts:47](https://github.com/livechat/lc-sdk-js/blob/de56f05/src/configuration/index.ts#L47)*

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

*Defined in [src/configuration/index.ts:147](https://github.com/livechat/lc-sdk-js/blob/de56f05/src/configuration/index.ts#L147)*

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

*Defined in [src/configuration/index.ts:211](https://github.com/livechat/lc-sdk-js/blob/de56f05/src/configuration/index.ts#L211)*

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

*Defined in [src/configuration/index.ts:377](https://github.com/livechat/lc-sdk-js/blob/de56f05/src/configuration/index.ts#L377)*

Gets license webhooks' state for authorization token's clientID

**Parameters:**

Name | Type |
------ | ------ |
`client_id?` | undefined &#124; string |

**Returns:** *Promise‹[WebhooksState](../interfaces/_src_configuration_structures_.webhooksstate.md)›*

___

###  listAgents

▸ **listAgents**(`group_ids?`: number[], `fields?`: string[]): *Promise‹[Agent](../interfaces/_src_configuration_structures_.agent.md)[]›*

*Defined in [src/configuration/index.ts:56](https://github.com/livechat/lc-sdk-js/blob/de56f05/src/configuration/index.ts#L56)*

Returns all Agents within a license.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`group_ids?` | number[] | groups to list agents from |
`fields?` | string[] | additional fields to include  |

**Returns:** *Promise‹[Agent](../interfaces/_src_configuration_structures_.agent.md)[]›*

___

###  listAutoAccesses

▸ **listAutoAccesses**(): *Promise‹[AutoAccess](../interfaces/_src_configuration_structures_.autoaccess.md)[]›*

*Defined in [src/configuration/index.ts:392](https://github.com/livechat/lc-sdk-js/blob/de56f05/src/configuration/index.ts#L392)*

Returns all existing auto access data structures.

**Returns:** *Promise‹[AutoAccess](../interfaces/_src_configuration_structures_.autoaccess.md)[]›*

___

###  listBots

▸ **listBots**(`all?`: undefined | false | true, `fields?`: [BotFields](../interfaces/_src_configuration_structures_.botfields.md)): *Promise‹[Bot](../interfaces/_src_configuration_structures_.bot.md)[]›*

*Defined in [src/configuration/index.ts:138](https://github.com/livechat/lc-sdk-js/blob/de56f05/src/configuration/index.ts#L138)*

Lists all bots within license.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`all?` | undefined &#124; false &#124; true | switch if should return all bots or only caller's bots |
`fields?` | [BotFields](../interfaces/_src_configuration_structures_.botfields.md) | additional fields to include  |

**Returns:** *Promise‹[Bot](../interfaces/_src_configuration_structures_.bot.md)[]›*

___

###  listGroupProperties

▸ **listGroupProperties**(`id`: number, `namespace_prefix?`: undefined | string, `name_prefix?`: undefined | string): *Promise‹[Properties](../interfaces/_src_objects_index_.properties.md)›*

*Defined in [src/configuration/index.ts:303](https://github.com/livechat/lc-sdk-js/blob/de56f05/src/configuration/index.ts#L303)*

Returns the properties set within a group.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | number | group ID to get properties from |
`namespace_prefix?` | undefined &#124; string | namespace prefix |
`name_prefix?` | undefined &#124; string | name prefix  |

**Returns:** *Promise‹[Properties](../interfaces/_src_objects_index_.properties.md)›*

___

###  listGroups

▸ **listGroups**(`fields?`: string[]): *Promise‹[Group](../interfaces/_src_configuration_structures_.group.md)[]›*

*Defined in [src/configuration/index.ts:202](https://github.com/livechat/lc-sdk-js/blob/de56f05/src/configuration/index.ts#L202)*

Lists all existing groups.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`fields?` | string[] | additional fields to include  |

**Returns:** *Promise‹[Group](../interfaces/_src_configuration_structures_.group.md)[]›*

___

###  listLicenseProperties

▸ **listLicenseProperties**(`namespace_prefix?`: undefined | string, `name_prefix?`: undefined | string): *Promise‹[Properties](../interfaces/_src_objects_index_.properties.md)›*

*Defined in [src/configuration/index.ts:271](https://github.com/livechat/lc-sdk-js/blob/de56f05/src/configuration/index.ts#L271)*

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

*Defined in [src/configuration/index.ts:254](https://github.com/livechat/lc-sdk-js/blob/de56f05/src/configuration/index.ts#L254)*

Lists properties for given client_id.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`owner_client_id` | string | client_id of property owner  |

**Returns:** *Promise‹[PropertiesConfig](../interfaces/_src_configuration_structures_.propertiesconfig.md)›*

___

###  listWebhookNames

▸ **listWebhookNames**(`version?`: undefined | string): *Promise‹[WebhookData](../interfaces/_src_configuration_structures_.webhookdata.md)[]›*

*Defined in [src/configuration/index.ts:353](https://github.com/livechat/lc-sdk-js/blob/de56f05/src/configuration/index.ts#L353)*

Lists webhooks available in given API version

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`version?` | undefined &#124; string | version of API for webhooks  |

**Returns:** *Promise‹[WebhookData](../interfaces/_src_configuration_structures_.webhookdata.md)[]›*

___

###  listWebhooks

▸ **listWebhooks**(`owner_client_id?`: undefined | string): *Promise‹[RegisteredWebhook](../interfaces/_src_configuration_structures_.registeredwebhook.md)[]›*

*Defined in [src/configuration/index.ts:336](https://github.com/livechat/lc-sdk-js/blob/de56f05/src/configuration/index.ts#L336)*

Lists registered webhooks.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`owner_client_id?` | undefined &#124; string | must be provided when authorizing with Personal Access Token  |

**Returns:** *Promise‹[RegisteredWebhook](../interfaces/_src_configuration_structures_.registeredwebhook.md)[]›*

___

###  publishProperty

▸ **publishProperty**(`name`: string, `owner_client_id`: string, `read`: boolean, `write`: boolean): *Promise‹[EmptyResponse](../interfaces/_src_configuration_structures_.emptyresponse.md)›*

*Defined in [src/configuration/index.ts:239](https://github.com/livechat/lc-sdk-js/blob/de56f05/src/configuration/index.ts#L239)*

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

*Defined in [src/configuration/index.ts:219](https://github.com/livechat/lc-sdk-js/blob/de56f05/src/configuration/index.ts#L219)*

Registers private property.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`property` | [PropertyConfig](../interfaces/_src_configuration_structures_.propertyconfig.md) | property to register  |

**Returns:** *Promise‹[EmptyResponse](../interfaces/_src_configuration_structures_.emptyresponse.md)›*

___

###  registerWebhook

▸ **registerWebhook**(`webhook`: [Webhook](../interfaces/_src_configuration_structures_.webhook.md), `owner_client_id?`: undefined | string): *Promise‹[RegisterWebhookResponse](../interfaces/_src_configuration_structures_.registerwebhookresponse.md)›*

*Defined in [src/configuration/index.ts:328](https://github.com/livechat/lc-sdk-js/blob/de56f05/src/configuration/index.ts#L328)*

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

*Defined in [src/configuration/index.ts:96](https://github.com/livechat/lc-sdk-js/blob/de56f05/src/configuration/index.ts#L96)*

A suspended Agent can send emails to license owners and vice owners with an unsuspension request.

**Returns:** *Promise‹[EmptyResponse](../interfaces/_src_configuration_structures_.emptyresponse.md)›*

___

###  send

▸ **send**(`name`: string, `req`: any): *Promise‹any›*

*Inherited from [WebAPI](_src_internal_index_.webapi.md).[send](_src_internal_index_.webapi.md#send)*

*Defined in [src/internal/index.ts:25](https://github.com/livechat/lc-sdk-js/blob/de56f05/src/internal/index.ts#L25)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |
`req` | any |

**Returns:** *Promise‹any›*

___

###  suspendAgent

▸ **suspendAgent**(`id`: string): *Promise‹[EmptyResponse](../interfaces/_src_configuration_structures_.emptyresponse.md)›*

*Defined in [src/configuration/index.ts:81](https://github.com/livechat/lc-sdk-js/blob/de56f05/src/configuration/index.ts#L81)*

Suspends an Agent specified by id.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of agent to suspend  |

**Returns:** *Promise‹[EmptyResponse](../interfaces/_src_configuration_structures_.emptyresponse.md)›*

___

###  unregisterProperty

▸ **unregisterProperty**(`name`: string, `owner_client_id`: string): *Promise‹[EmptyResponse](../interfaces/_src_configuration_structures_.emptyresponse.md)›*

*Defined in [src/configuration/index.ts:228](https://github.com/livechat/lc-sdk-js/blob/de56f05/src/configuration/index.ts#L228)*

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

*Defined in [src/configuration/index.ts:345](https://github.com/livechat/lc-sdk-js/blob/de56f05/src/configuration/index.ts#L345)*

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

*Defined in [src/configuration/index.ts:89](https://github.com/livechat/lc-sdk-js/blob/de56f05/src/configuration/index.ts#L89)*

Unsuspends an Agent specified by id.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of agent to unsuspend  |

**Returns:** *Promise‹[EmptyResponse](../interfaces/_src_configuration_structures_.emptyresponse.md)›*

___

###  updateAgent

▸ **updateAgent**(`id`: string, `fields`: [AgentFields](../interfaces/_src_configuration_structures_.agentfields.md)): *Promise‹[EmptyResponse](../interfaces/_src_configuration_structures_.emptyresponse.md)›*

*Defined in [src/configuration/index.ts:65](https://github.com/livechat/lc-sdk-js/blob/de56f05/src/configuration/index.ts#L65)*

Updates the properties of an Agent specified by id.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of agent to update |
`fields` | [AgentFields](../interfaces/_src_configuration_structures_.agentfields.md) | properties to update  |

**Returns:** *Promise‹[EmptyResponse](../interfaces/_src_configuration_structures_.emptyresponse.md)›*

___

###  updateAutoAccess

▸ **updateAutoAccess**(`id`: string, `access`: [UpdateAutoAccessRequest](../interfaces/_src_configuration_structures_.updateautoaccessrequest.md)): *Promise‹[EmptyResponse](../interfaces/_src_configuration_structures_.emptyresponse.md)›*

*Defined in [src/configuration/index.ts:409](https://github.com/livechat/lc-sdk-js/blob/de56f05/src/configuration/index.ts#L409)*

Updates an existing auto access. Only specified fields are updated (overwritten), leaving unspecified fields unchanged.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | ID of the auto access to modify |
`access` | [UpdateAutoAccessRequest](../interfaces/_src_configuration_structures_.updateautoaccessrequest.md) | fields of auto access you want to overwrite  |

**Returns:** *Promise‹[EmptyResponse](../interfaces/_src_configuration_structures_.emptyresponse.md)›*

___

###  updateBot

▸ **updateBot**(`id`: string, `fields`: [BotFields](../interfaces/_src_configuration_structures_.botfields.md)): *Promise‹[EmptyResponse](../interfaces/_src_configuration_structures_.emptyresponse.md)›*

*Defined in [src/configuration/index.ts:129](https://github.com/livechat/lc-sdk-js/blob/de56f05/src/configuration/index.ts#L129)*

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

*Defined in [src/configuration/index.ts:176](https://github.com/livechat/lc-sdk-js/blob/de56f05/src/configuration/index.ts#L176)*

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

*Defined in [src/configuration/index.ts:291](https://github.com/livechat/lc-sdk-js/blob/de56f05/src/configuration/index.ts#L291)*

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

*Defined in [src/configuration/index.ts:262](https://github.com/livechat/lc-sdk-js/blob/de56f05/src/configuration/index.ts#L262)*

Updates a property value within a license. This operation doesn't overwrite the existing values.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`properties` | [Properties](../interfaces/_src_objects_index_.properties.md) | properties to update  |

**Returns:** *Promise‹[EmptyResponse](../interfaces/_src_configuration_structures_.emptyresponse.md)›*
