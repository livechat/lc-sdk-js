[@livechat/lc-sdk-js](../README.md) / [configuration](../modules/configuration.md) / default

# Class: default

[configuration](../modules/configuration.md).default

## Hierarchy

- [`WebAPI`](internal.WebAPI.md)

  ↳ **`default`**

## Table of contents

### Constructors

- [constructor](configuration.default.md#constructor)

### Properties

- [APIURL](configuration.default.md#apiurl)
- [clientID](configuration.default.md#clientid)
- [tokenGetter](configuration.default.md#tokengetter)
- [type](configuration.default.md#type)
- [version](configuration.default.md#version)

### Methods

- [addAutoAccess](configuration.default.md#addautoaccess)
- [approveAgent](configuration.default.md#approveagent)
- [createAgent](configuration.default.md#createagent)
- [createBot](configuration.default.md#createbot)
- [createGroup](configuration.default.md#creategroup)
- [deleteAgent](configuration.default.md#deleteagent)
- [deleteAutoAccess](configuration.default.md#deleteautoaccess)
- [deleteBot](configuration.default.md#deletebot)
- [deleteGroup](configuration.default.md#deletegroup)
- [deleteGroupProperties](configuration.default.md#deletegroupproperties)
- [deleteLicenseProperties](configuration.default.md#deletelicenseproperties)
- [disableLicenseWebhooks](configuration.default.md#disablelicensewebhooks)
- [enableLicenseWebhooks](configuration.default.md#enablelicensewebhooks)
- [getAgent](configuration.default.md#getagent)
- [getBot](configuration.default.md#getbot)
- [getGroup](configuration.default.md#getgroup)
- [getLicenseWebhooksState](configuration.default.md#getlicensewebhooksstate)
- [listAgents](configuration.default.md#listagents)
- [listAutoAccesses](configuration.default.md#listautoaccesses)
- [listBots](configuration.default.md#listbots)
- [listGroupProperties](configuration.default.md#listgroupproperties)
- [listGroups](configuration.default.md#listgroups)
- [listLicenseProperties](configuration.default.md#listlicenseproperties)
- [listProperties](configuration.default.md#listproperties)
- [listWebhookNames](configuration.default.md#listwebhooknames)
- [listWebhooks](configuration.default.md#listwebhooks)
- [publishProperty](configuration.default.md#publishproperty)
- [registerProperty](configuration.default.md#registerproperty)
- [registerWebhook](configuration.default.md#registerwebhook)
- [requestAgentUnsuspension](configuration.default.md#requestagentunsuspension)
- [send](configuration.default.md#send)
- [suspendAgent](configuration.default.md#suspendagent)
- [unregisterProperty](configuration.default.md#unregisterproperty)
- [unregisterWebhook](configuration.default.md#unregisterwebhook)
- [unsuspendAgent](configuration.default.md#unsuspendagent)
- [updateAgent](configuration.default.md#updateagent)
- [updateAutoAccess](configuration.default.md#updateautoaccess)
- [updateBot](configuration.default.md#updatebot)
- [updateGroup](configuration.default.md#updategroup)
- [updateGroupProperties](configuration.default.md#updategroupproperties)
- [updateLicenseProperties](configuration.default.md#updatelicenseproperties)

## Constructors

### constructor

• **new default**(`clientID`, `tokenGetter`, `options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `clientID` | `string` |
| `tokenGetter` | [`TokenGetter`](../modules/authorization.md#tokengetter) |
| `options?` | [`WebAPIOptions`](../interfaces/objects.WebAPIOptions.md) |

#### Overrides

[WebAPI](internal.WebAPI.md).[constructor](internal.WebAPI.md#constructor)

#### Defined in

[configuration/index.ts:29](https://github.com/livechat/lc-sdk-js/blob/951da85/src/configuration/index.ts#L29)

## Properties

### APIURL

• **APIURL**: `string`

#### Inherited from

[WebAPI](internal.WebAPI.md).[APIURL](internal.WebAPI.md#apiurl)

#### Defined in

[internal/index.ts:11](https://github.com/livechat/lc-sdk-js/blob/951da85/src/internal/index.ts#L11)

___

### clientID

• **clientID**: `string`

#### Inherited from

[WebAPI](internal.WebAPI.md).[clientID](internal.WebAPI.md#clientid)

#### Defined in

[internal/index.ts:12](https://github.com/livechat/lc-sdk-js/blob/951da85/src/internal/index.ts#L12)

___

### tokenGetter

• **tokenGetter**: [`TokenGetter`](../modules/authorization.md#tokengetter)

#### Inherited from

[WebAPI](internal.WebAPI.md).[tokenGetter](internal.WebAPI.md#tokengetter)

#### Defined in

[internal/index.ts:15](https://github.com/livechat/lc-sdk-js/blob/951da85/src/internal/index.ts#L15)

___

### type

• **type**: `apiType`

#### Inherited from

[WebAPI](internal.WebAPI.md).[type](internal.WebAPI.md#type)

#### Defined in

[internal/index.ts:14](https://github.com/livechat/lc-sdk-js/blob/951da85/src/internal/index.ts#L14)

___

### version

• **version**: `string`

#### Inherited from

[WebAPI](internal.WebAPI.md).[version](internal.WebAPI.md#version)

#### Defined in

[internal/index.ts:13](https://github.com/livechat/lc-sdk-js/blob/951da85/src/internal/index.ts#L13)

## Methods

### addAutoAccess

▸ **addAutoAccess**(`opts`): `Promise`<[`AddAutoAccessResponse`](../interfaces/configuration_structures.AddAutoAccessResponse.md)\>

Creates an auto access data structure, which is a set of conditions for the tracking URL and geolocation of a customer.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | [`AddAutoAccessRequest`](../interfaces/configuration_structures.AddAutoAccessRequest.md) | options for auto access like conditions |

#### Returns

`Promise`<[`AddAutoAccessResponse`](../interfaces/configuration_structures.AddAutoAccessResponse.md)\>

#### Defined in

[configuration/index.ts:385](https://github.com/livechat/lc-sdk-js/blob/951da85/src/configuration/index.ts#L385)

___

### approveAgent

▸ **approveAgent**(`id`): `Promise`<[`EmptyResponse`](../interfaces/configuration_structures.EmptyResponse.md)\>

Approves an Agent thus allowing the Agent to use the application.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of agent to approve |

#### Returns

`Promise`<[`EmptyResponse`](../interfaces/configuration_structures.EmptyResponse.md)\>

#### Defined in

[configuration/index.ts:104](https://github.com/livechat/lc-sdk-js/blob/951da85/src/configuration/index.ts#L104)

___

### createAgent

▸ **createAgent**(`id`, `fields`): `Promise`<[`CreateAgentResponse`](../interfaces/configuration_structures.CreateAgentResponse.md)\>

Creates a new Agent with specified parameters within a license.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of an agent to create |
| `fields` | [`AgentFields`](../interfaces/configuration_structures.AgentFields.md) | agent properties |

#### Returns

`Promise`<[`CreateAgentResponse`](../interfaces/configuration_structures.CreateAgentResponse.md)\>

#### Defined in

[configuration/index.ts:38](https://github.com/livechat/lc-sdk-js/blob/951da85/src/configuration/index.ts#L38)

___

### createBot

▸ **createBot**(`fields`): `Promise`<[`CreateBotResponse`](../interfaces/configuration_structures.CreateBotResponse.md)\>

Creates a new Bot with specified parameters within a license.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fields` | [`BotFields`](../interfaces/configuration_structures.BotFields.md) | bot properties |

#### Returns

`Promise`<[`CreateBotResponse`](../interfaces/configuration_structures.CreateBotResponse.md)\>

#### Defined in

[configuration/index.ts:112](https://github.com/livechat/lc-sdk-js/blob/951da85/src/configuration/index.ts#L112)

___

### createGroup

▸ **createGroup**(`name`, `agent_priorities`, `language_code?`): `Promise`<[`CreateGroupResponse`](../interfaces/configuration_structures.CreateGroupResponse.md)\>

Creates new group.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | group name |
| `agent_priorities` | [`AgentPriorities`](../interfaces/configuration_structures.AgentPriorities.md) | agents priorities within a group |
| `language_code?` | `string` | groups language |

#### Returns

`Promise`<[`CreateGroupResponse`](../interfaces/configuration_structures.CreateGroupResponse.md)\>

#### Defined in

[configuration/index.ts:157](https://github.com/livechat/lc-sdk-js/blob/951da85/src/configuration/index.ts#L157)

___

### deleteAgent

▸ **deleteAgent**(`id`): `Promise`<[`EmptyResponse`](../interfaces/configuration_structures.EmptyResponse.md)\>

Deletes an Agent specified by id.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of agent to delete |

#### Returns

`Promise`<[`EmptyResponse`](../interfaces/configuration_structures.EmptyResponse.md)\>

#### Defined in

[configuration/index.ts:73](https://github.com/livechat/lc-sdk-js/blob/951da85/src/configuration/index.ts#L73)

___

### deleteAutoAccess

▸ **deleteAutoAccess**(`id`): `Promise`<[`EmptyResponse`](../interfaces/configuration_structures.EmptyResponse.md)\>

Deletes an existing auto access data structure specified by its ID.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the auto access to remove |

#### Returns

`Promise`<[`EmptyResponse`](../interfaces/configuration_structures.EmptyResponse.md)\>

#### Defined in

[configuration/index.ts:400](https://github.com/livechat/lc-sdk-js/blob/951da85/src/configuration/index.ts#L400)

___

### deleteBot

▸ **deleteBot**(`id`): `Promise`<[`EmptyResponse`](../interfaces/configuration_structures.EmptyResponse.md)\>

Deletes bot specified by id.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of bot to delete |

#### Returns

`Promise`<[`EmptyResponse`](../interfaces/configuration_structures.EmptyResponse.md)\>

#### Defined in

[configuration/index.ts:120](https://github.com/livechat/lc-sdk-js/blob/951da85/src/configuration/index.ts#L120)

___

### deleteGroup

▸ **deleteGroup**(`id`): `Promise`<[`EmptyResponse`](../interfaces/configuration_structures.EmptyResponse.md)\>

Deletes group specified by id.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `number` | ID of group to delete |

#### Returns

`Promise`<[`EmptyResponse`](../interfaces/configuration_structures.EmptyResponse.md)\>

#### Defined in

[configuration/index.ts:194](https://github.com/livechat/lc-sdk-js/blob/951da85/src/configuration/index.ts#L194)

___

### deleteGroupProperties

▸ **deleteGroupProperties**(`id`, `properties`): `Promise`<[`EmptyResponse`](../interfaces/configuration_structures.EmptyResponse.md)\>

Deletes the properties set within a group.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `number` | group ID to delete properties from |
| `properties` | [`Properties`](../interfaces/objects.Properties.md) | properties to delete |

#### Returns

`Promise`<[`EmptyResponse`](../interfaces/configuration_structures.EmptyResponse.md)\>

#### Defined in

[configuration/index.ts:316](https://github.com/livechat/lc-sdk-js/blob/951da85/src/configuration/index.ts#L316)

___

### deleteLicenseProperties

▸ **deleteLicenseProperties**(`properties`): `Promise`<[`EmptyResponse`](../interfaces/configuration_structures.EmptyResponse.md)\>

Deletes the properties set within a license.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `properties` | [`Properties`](../interfaces/objects.Properties.md) | properties to delete |

#### Returns

`Promise`<[`EmptyResponse`](../interfaces/configuration_structures.EmptyResponse.md)\>

#### Defined in

[configuration/index.ts:282](https://github.com/livechat/lc-sdk-js/blob/951da85/src/configuration/index.ts#L282)

___

### disableLicenseWebhooks

▸ **disableLicenseWebhooks**(`client_id?`): `Promise`<[`EmptyResponse`](../interfaces/configuration_structures.EmptyResponse.md)\>

Disables license webhooks for authorization token's clientID

#### Parameters

| Name | Type |
| :------ | :------ |
| `client_id?` | `string` |

#### Returns

`Promise`<[`EmptyResponse`](../interfaces/configuration_structures.EmptyResponse.md)\>

#### Defined in

[configuration/index.ts:369](https://github.com/livechat/lc-sdk-js/blob/951da85/src/configuration/index.ts#L369)

___

### enableLicenseWebhooks

▸ **enableLicenseWebhooks**(`client_id?`): `Promise`<[`EmptyResponse`](../interfaces/configuration_structures.EmptyResponse.md)\>

Enables license webhooks for authorization token's clientID

#### Parameters

| Name | Type |
| :------ | :------ |
| `client_id?` | `string` |

#### Returns

`Promise`<[`EmptyResponse`](../interfaces/configuration_structures.EmptyResponse.md)\>

#### Defined in

[configuration/index.ts:361](https://github.com/livechat/lc-sdk-js/blob/951da85/src/configuration/index.ts#L361)

___

### getAgent

▸ **getAgent**(`id`, `fields?`): `Promise`<[`Agent`](../interfaces/configuration_structures.Agent.md)\>

It returns the info about an Agent specified by id.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | IF of agent to get |
| `fields?` | `string`[] | additional fields to include |

#### Returns

`Promise`<[`Agent`](../interfaces/configuration_structures.Agent.md)\>

#### Defined in

[configuration/index.ts:47](https://github.com/livechat/lc-sdk-js/blob/951da85/src/configuration/index.ts#L47)

___

### getBot

▸ **getBot**(`id`, `fields?`): `Promise`<[`Bot`](../interfaces/configuration_structures.Bot.md)\>

Gets info about Bot.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | bot ID to get info about |
| `fields?` | [`BotFields`](../interfaces/configuration_structures.BotFields.md) | additional fields to include |

#### Returns

`Promise`<[`Bot`](../interfaces/configuration_structures.Bot.md)\>

#### Defined in

[configuration/index.ts:147](https://github.com/livechat/lc-sdk-js/blob/951da85/src/configuration/index.ts#L147)

___

### getGroup

▸ **getGroup**(`id`, `fields?`): `Promise`<[`Group`](../interfaces/configuration_structures.Group.md)\>

Returns details about a group specified by its id.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `number` | group ID to get info about |
| `fields?` | `string`[] | additiona fields to include |

#### Returns

`Promise`<[`Group`](../interfaces/configuration_structures.Group.md)\>

#### Defined in

[configuration/index.ts:211](https://github.com/livechat/lc-sdk-js/blob/951da85/src/configuration/index.ts#L211)

___

### getLicenseWebhooksState

▸ **getLicenseWebhooksState**(`client_id?`): `Promise`<[`WebhooksState`](../interfaces/configuration_structures.WebhooksState.md)\>

Gets license webhooks' state for authorization token's clientID

#### Parameters

| Name | Type |
| :------ | :------ |
| `client_id?` | `string` |

#### Returns

`Promise`<[`WebhooksState`](../interfaces/configuration_structures.WebhooksState.md)\>

#### Defined in

[configuration/index.ts:377](https://github.com/livechat/lc-sdk-js/blob/951da85/src/configuration/index.ts#L377)

___

### listAgents

▸ **listAgents**(`group_ids?`, `fields?`): `Promise`<[`Agent`](../interfaces/configuration_structures.Agent.md)[]\>

Returns all Agents within a license.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `group_ids?` | `number`[] | groups to list agents from |
| `fields?` | `string`[] | additional fields to include |

#### Returns

`Promise`<[`Agent`](../interfaces/configuration_structures.Agent.md)[]\>

#### Defined in

[configuration/index.ts:56](https://github.com/livechat/lc-sdk-js/blob/951da85/src/configuration/index.ts#L56)

___

### listAutoAccesses

▸ **listAutoAccesses**(): `Promise`<[`AutoAccess`](../interfaces/configuration_structures.AutoAccess.md)[]\>

Returns all existing auto access data structures.

#### Returns

`Promise`<[`AutoAccess`](../interfaces/configuration_structures.AutoAccess.md)[]\>

#### Defined in

[configuration/index.ts:392](https://github.com/livechat/lc-sdk-js/blob/951da85/src/configuration/index.ts#L392)

___

### listBots

▸ **listBots**(`all?`, `fields?`): `Promise`<[`Bot`](../interfaces/configuration_structures.Bot.md)[]\>

Lists all bots within license.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `all?` | `boolean` | switch if should return all bots or only caller's bots |
| `fields?` | [`BotFields`](../interfaces/configuration_structures.BotFields.md) | additional fields to include |

#### Returns

`Promise`<[`Bot`](../interfaces/configuration_structures.Bot.md)[]\>

#### Defined in

[configuration/index.ts:138](https://github.com/livechat/lc-sdk-js/blob/951da85/src/configuration/index.ts#L138)

___

### listGroupProperties

▸ **listGroupProperties**(`id`, `namespace_prefix?`, `name_prefix?`): `Promise`<[`Properties`](../interfaces/objects.Properties.md)\>

Returns the properties set within a group.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `number` | group ID to get properties from |
| `namespace_prefix?` | `string` | namespace prefix |
| `name_prefix?` | `string` | name prefix |

#### Returns

`Promise`<[`Properties`](../interfaces/objects.Properties.md)\>

#### Defined in

[configuration/index.ts:303](https://github.com/livechat/lc-sdk-js/blob/951da85/src/configuration/index.ts#L303)

___

### listGroups

▸ **listGroups**(`fields?`): `Promise`<[`Group`](../interfaces/configuration_structures.Group.md)[]\>

Lists all existing groups.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fields?` | `string`[] | additional fields to include |

#### Returns

`Promise`<[`Group`](../interfaces/configuration_structures.Group.md)[]\>

#### Defined in

[configuration/index.ts:202](https://github.com/livechat/lc-sdk-js/blob/951da85/src/configuration/index.ts#L202)

___

### listLicenseProperties

▸ **listLicenseProperties**(`namespace_prefix?`, `name_prefix?`): `Promise`<[`Properties`](../interfaces/objects.Properties.md)\>

Returns the properties set within a license.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `namespace_prefix?` | `string` | namsepace prefix |
| `name_prefix?` | `string` | name prefix |

#### Returns

`Promise`<[`Properties`](../interfaces/objects.Properties.md)\>

#### Defined in

[configuration/index.ts:271](https://github.com/livechat/lc-sdk-js/blob/951da85/src/configuration/index.ts#L271)

___

### listProperties

▸ **listProperties**(`owner_client_id`): `Promise`<[`PropertiesConfig`](../interfaces/configuration_structures.PropertiesConfig.md)\>

Lists properties for given client_id.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner_client_id` | `string` | client_id of property owner |

#### Returns

`Promise`<[`PropertiesConfig`](../interfaces/configuration_structures.PropertiesConfig.md)\>

#### Defined in

[configuration/index.ts:254](https://github.com/livechat/lc-sdk-js/blob/951da85/src/configuration/index.ts#L254)

___

### listWebhookNames

▸ **listWebhookNames**(`version?`): `Promise`<[`WebhookData`](../interfaces/configuration_structures.WebhookData.md)[]\>

Lists webhooks available in given API version

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `version?` | `string` | version of API for webhooks |

#### Returns

`Promise`<[`WebhookData`](../interfaces/configuration_structures.WebhookData.md)[]\>

#### Defined in

[configuration/index.ts:353](https://github.com/livechat/lc-sdk-js/blob/951da85/src/configuration/index.ts#L353)

___

### listWebhooks

▸ **listWebhooks**(`owner_client_id?`): `Promise`<[`RegisteredWebhook`](../interfaces/configuration_structures.RegisteredWebhook.md)[]\>

Lists registered webhooks.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner_client_id?` | `string` | must be provided when authorizing with Personal Access Token |

#### Returns

`Promise`<[`RegisteredWebhook`](../interfaces/configuration_structures.RegisteredWebhook.md)[]\>

#### Defined in

[configuration/index.ts:336](https://github.com/livechat/lc-sdk-js/blob/951da85/src/configuration/index.ts#L336)

___

### publishProperty

▸ **publishProperty**(`name`, `owner_client_id`, `read`, `write`): `Promise`<[`EmptyResponse`](../interfaces/configuration_structures.EmptyResponse.md)\>

Publishes private property.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | property name |
| `owner_client_id` | `string` | clientID of property owner |
| `read` | `boolean` | determines whether non-owners can read the property |
| `write` | `boolean` | determines whether non-owners can write the property |

#### Returns

`Promise`<[`EmptyResponse`](../interfaces/configuration_structures.EmptyResponse.md)\>

#### Defined in

[configuration/index.ts:239](https://github.com/livechat/lc-sdk-js/blob/951da85/src/configuration/index.ts#L239)

___

### registerProperty

▸ **registerProperty**(`property`): `Promise`<[`EmptyResponse`](../interfaces/configuration_structures.EmptyResponse.md)\>

Registers private property.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `property` | [`PropertyConfig`](../interfaces/configuration_structures.PropertyConfig.md) | property to register |

#### Returns

`Promise`<[`EmptyResponse`](../interfaces/configuration_structures.EmptyResponse.md)\>

#### Defined in

[configuration/index.ts:219](https://github.com/livechat/lc-sdk-js/blob/951da85/src/configuration/index.ts#L219)

___

### registerWebhook

▸ **registerWebhook**(`webhook`, `owner_client_id?`): `Promise`<[`RegisterWebhookResponse`](../interfaces/configuration_structures.RegisterWebhookResponse.md)\>

Registers webhook on a license.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `webhook` | [`Webhook`](../interfaces/configuration_structures.Webhook.md) | webhook to register |
| `owner_client_id?` | `string` | must be provided when authorizing with Personal Access Token |

#### Returns

`Promise`<[`RegisterWebhookResponse`](../interfaces/configuration_structures.RegisterWebhookResponse.md)\>

#### Defined in

[configuration/index.ts:328](https://github.com/livechat/lc-sdk-js/blob/951da85/src/configuration/index.ts#L328)

___

### requestAgentUnsuspension

▸ **requestAgentUnsuspension**(): `Promise`<[`EmptyResponse`](../interfaces/configuration_structures.EmptyResponse.md)\>

A suspended Agent can send emails to license owners and vice owners with an unsuspension request.

#### Returns

`Promise`<[`EmptyResponse`](../interfaces/configuration_structures.EmptyResponse.md)\>

#### Defined in

[configuration/index.ts:96](https://github.com/livechat/lc-sdk-js/blob/951da85/src/configuration/index.ts#L96)

___

### send

▸ **send**(`name`, `req`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `req` | `any` |

#### Returns

`Promise`<`any`\>

#### Inherited from

[WebAPI](internal.WebAPI.md).[send](internal.WebAPI.md#send)

#### Defined in

[internal/index.ts:25](https://github.com/livechat/lc-sdk-js/blob/951da85/src/internal/index.ts#L25)

___

### suspendAgent

▸ **suspendAgent**(`id`): `Promise`<[`EmptyResponse`](../interfaces/configuration_structures.EmptyResponse.md)\>

Suspends an Agent specified by id.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of agent to suspend |

#### Returns

`Promise`<[`EmptyResponse`](../interfaces/configuration_structures.EmptyResponse.md)\>

#### Defined in

[configuration/index.ts:81](https://github.com/livechat/lc-sdk-js/blob/951da85/src/configuration/index.ts#L81)

___

### unregisterProperty

▸ **unregisterProperty**(`name`, `owner_client_id`): `Promise`<[`EmptyResponse`](../interfaces/configuration_structures.EmptyResponse.md)\>

Unregisters private property.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | property name |
| `owner_client_id` | `string` | clientID of property owner |

#### Returns

`Promise`<[`EmptyResponse`](../interfaces/configuration_structures.EmptyResponse.md)\>

#### Defined in

[configuration/index.ts:228](https://github.com/livechat/lc-sdk-js/blob/951da85/src/configuration/index.ts#L228)

___

### unregisterWebhook

▸ **unregisterWebhook**(`id`, `owner_client_id?`): `Promise`<[`EmptyResponse`](../interfaces/configuration_structures.EmptyResponse.md)\>

Removes webhook from license.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of webhook to unregister |
| `owner_client_id?` | `string` | must be provided when authorizing with Personal Access Token |

#### Returns

`Promise`<[`EmptyResponse`](../interfaces/configuration_structures.EmptyResponse.md)\>

#### Defined in

[configuration/index.ts:345](https://github.com/livechat/lc-sdk-js/blob/951da85/src/configuration/index.ts#L345)

___

### unsuspendAgent

▸ **unsuspendAgent**(`id`): `Promise`<[`EmptyResponse`](../interfaces/configuration_structures.EmptyResponse.md)\>

Unsuspends an Agent specified by id.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of agent to unsuspend |

#### Returns

`Promise`<[`EmptyResponse`](../interfaces/configuration_structures.EmptyResponse.md)\>

#### Defined in

[configuration/index.ts:89](https://github.com/livechat/lc-sdk-js/blob/951da85/src/configuration/index.ts#L89)

___

### updateAgent

▸ **updateAgent**(`id`, `fields`): `Promise`<[`EmptyResponse`](../interfaces/configuration_structures.EmptyResponse.md)\>

Updates the properties of an Agent specified by id.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of agent to update |
| `fields` | [`AgentFields`](../interfaces/configuration_structures.AgentFields.md) | properties to update |

#### Returns

`Promise`<[`EmptyResponse`](../interfaces/configuration_structures.EmptyResponse.md)\>

#### Defined in

[configuration/index.ts:65](https://github.com/livechat/lc-sdk-js/blob/951da85/src/configuration/index.ts#L65)

___

### updateAutoAccess

▸ **updateAutoAccess**(`id`, `access`): `Promise`<[`EmptyResponse`](../interfaces/configuration_structures.EmptyResponse.md)\>

Updates an existing auto access. Only specified fields are updated (overwritten), leaving unspecified fields unchanged.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the auto access to modify |
| `access` | [`UpdateAutoAccessRequest`](../interfaces/configuration_structures.UpdateAutoAccessRequest.md) | fields of auto access you want to overwrite |

#### Returns

`Promise`<[`EmptyResponse`](../interfaces/configuration_structures.EmptyResponse.md)\>

#### Defined in

[configuration/index.ts:409](https://github.com/livechat/lc-sdk-js/blob/951da85/src/configuration/index.ts#L409)

___

### updateBot

▸ **updateBot**(`id`, `fields`): `Promise`<[`EmptyResponse`](../interfaces/configuration_structures.EmptyResponse.md)\>

Updates the properties of Bot specified by id.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of bot to update |
| `fields` | [`BotFields`](../interfaces/configuration_structures.BotFields.md) | properties to update |

#### Returns

`Promise`<[`EmptyResponse`](../interfaces/configuration_structures.EmptyResponse.md)\>

#### Defined in

[configuration/index.ts:129](https://github.com/livechat/lc-sdk-js/blob/951da85/src/configuration/index.ts#L129)

___

### updateGroup

▸ **updateGroup**(`id`, `name?`, `agent_priorities?`, `language_code?`): `Promise`<[`EmptyResponse`](../interfaces/configuration_structures.EmptyResponse.md)\>

Updates an existing group.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `number` | group id |
| `name?` | `string` | group name |
| `agent_priorities?` | [`AgentPriorities`](../interfaces/configuration_structures.AgentPriorities.md) | agents priorities within a group |
| `language_code?` | `string` | groups language |

#### Returns

`Promise`<[`EmptyResponse`](../interfaces/configuration_structures.EmptyResponse.md)\>

#### Defined in

[configuration/index.ts:176](https://github.com/livechat/lc-sdk-js/blob/951da85/src/configuration/index.ts#L176)

___

### updateGroupProperties

▸ **updateGroupProperties**(`group_id`, `properties`): `Promise`<[`EmptyResponse`](../interfaces/configuration_structures.EmptyResponse.md)\>

Updates a property value within a group as the property location. This operation doesn't overwrite the existing values.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `group_id` | `number` | group ID to update properties |
| `properties` | [`Properties`](../interfaces/objects.Properties.md) | properties to update |

#### Returns

`Promise`<[`EmptyResponse`](../interfaces/configuration_structures.EmptyResponse.md)\>

#### Defined in

[configuration/index.ts:291](https://github.com/livechat/lc-sdk-js/blob/951da85/src/configuration/index.ts#L291)

___

### updateLicenseProperties

▸ **updateLicenseProperties**(`properties`): `Promise`<[`EmptyResponse`](../interfaces/configuration_structures.EmptyResponse.md)\>

Updates a property value within a license. This operation doesn't overwrite the existing values.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `properties` | [`Properties`](../interfaces/objects.Properties.md) | properties to update |

#### Returns

`Promise`<[`EmptyResponse`](../interfaces/configuration_structures.EmptyResponse.md)\>

#### Defined in

[configuration/index.ts:262](https://github.com/livechat/lc-sdk-js/blob/951da85/src/configuration/index.ts#L262)
