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
- [getLicenseID](configuration.default.md#getlicenseid)
- [getLicenseWebhooksState](configuration.default.md#getlicensewebhooksstate)
- [getOrganizationID](configuration.default.md#getorganizationid)
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

[configuration/index.ts:31](https://github.com/livechat/lc-sdk-js/blob/11cc290/src/configuration/index.ts#L31)

## Properties

### APIURL

• **APIURL**: `string`

#### Inherited from

[WebAPI](internal.WebAPI.md).[APIURL](internal.WebAPI.md#apiurl)

#### Defined in

[internal/index.ts:15](https://github.com/livechat/lc-sdk-js/blob/11cc290/src/internal/index.ts#L15)

___

### clientID

• `Protected` `Readonly` **clientID**: `string`

#### Inherited from

[WebAPI](internal.WebAPI.md).[clientID](internal.WebAPI.md#clientid)

#### Defined in

[internal/index.ts:28](https://github.com/livechat/lc-sdk-js/blob/11cc290/src/internal/index.ts#L28)

___

### tokenGetter

• `Protected` `Readonly` **tokenGetter**: [`TokenGetter`](../modules/authorization.md#tokengetter)

#### Inherited from

[WebAPI](internal.WebAPI.md).[tokenGetter](internal.WebAPI.md#tokengetter)

#### Defined in

[internal/index.ts:29](https://github.com/livechat/lc-sdk-js/blob/11cc290/src/internal/index.ts#L29)

___

### type

• `Protected` `Readonly` **type**: `apiType`

#### Inherited from

[WebAPI](internal.WebAPI.md).[type](internal.WebAPI.md#type)

#### Defined in

[internal/index.ts:30](https://github.com/livechat/lc-sdk-js/blob/11cc290/src/internal/index.ts#L30)

___

### version

• **version**: `string`

#### Inherited from

[WebAPI](internal.WebAPI.md).[version](internal.WebAPI.md#version)

#### Defined in

[internal/index.ts:16](https://github.com/livechat/lc-sdk-js/blob/11cc290/src/internal/index.ts#L16)

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

[configuration/index.ts:387](https://github.com/livechat/lc-sdk-js/blob/11cc290/src/configuration/index.ts#L387)

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

[configuration/index.ts:106](https://github.com/livechat/lc-sdk-js/blob/11cc290/src/configuration/index.ts#L106)

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

[configuration/index.ts:40](https://github.com/livechat/lc-sdk-js/blob/11cc290/src/configuration/index.ts#L40)

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

[configuration/index.ts:114](https://github.com/livechat/lc-sdk-js/blob/11cc290/src/configuration/index.ts#L114)

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

[configuration/index.ts:159](https://github.com/livechat/lc-sdk-js/blob/11cc290/src/configuration/index.ts#L159)

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

[configuration/index.ts:75](https://github.com/livechat/lc-sdk-js/blob/11cc290/src/configuration/index.ts#L75)

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

[configuration/index.ts:402](https://github.com/livechat/lc-sdk-js/blob/11cc290/src/configuration/index.ts#L402)

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

[configuration/index.ts:122](https://github.com/livechat/lc-sdk-js/blob/11cc290/src/configuration/index.ts#L122)

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

[configuration/index.ts:196](https://github.com/livechat/lc-sdk-js/blob/11cc290/src/configuration/index.ts#L196)

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

[configuration/index.ts:318](https://github.com/livechat/lc-sdk-js/blob/11cc290/src/configuration/index.ts#L318)

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

[configuration/index.ts:284](https://github.com/livechat/lc-sdk-js/blob/11cc290/src/configuration/index.ts#L284)

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

[configuration/index.ts:371](https://github.com/livechat/lc-sdk-js/blob/11cc290/src/configuration/index.ts#L371)

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

[configuration/index.ts:363](https://github.com/livechat/lc-sdk-js/blob/11cc290/src/configuration/index.ts#L363)

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

[configuration/index.ts:49](https://github.com/livechat/lc-sdk-js/blob/11cc290/src/configuration/index.ts#L49)

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

[configuration/index.ts:149](https://github.com/livechat/lc-sdk-js/blob/11cc290/src/configuration/index.ts#L149)

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

[configuration/index.ts:213](https://github.com/livechat/lc-sdk-js/blob/11cc290/src/configuration/index.ts#L213)

___

### getLicenseID

▸ **getLicenseID**(`organizationID`): `Promise`<[`GetLicenseIDResponse`](../interfaces/configuration_structures.GetLicenseIDResponse.md)\>

Returns license ID for given organizationID.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `organizationID` | `string` | UUID of the organization |

#### Returns

`Promise`<[`GetLicenseIDResponse`](../interfaces/configuration_structures.GetLicenseIDResponse.md)\>

#### Defined in

[configuration/index.ts:430](https://github.com/livechat/lc-sdk-js/blob/11cc290/src/configuration/index.ts#L430)

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

[configuration/index.ts:379](https://github.com/livechat/lc-sdk-js/blob/11cc290/src/configuration/index.ts#L379)

___

### getOrganizationID

▸ **getOrganizationID**(`licenseID`): `Promise`<[`GetOrganizationIDResponse`](../interfaces/configuration_structures.GetOrganizationIDResponse.md)\>

Returns organization ID for given license ID.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `licenseID` | `number` | ID of the license |

#### Returns

`Promise`<[`GetOrganizationIDResponse`](../interfaces/configuration_structures.GetOrganizationIDResponse.md)\>

#### Defined in

[configuration/index.ts:422](https://github.com/livechat/lc-sdk-js/blob/11cc290/src/configuration/index.ts#L422)

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

[configuration/index.ts:58](https://github.com/livechat/lc-sdk-js/blob/11cc290/src/configuration/index.ts#L58)

___

### listAutoAccesses

▸ **listAutoAccesses**(): `Promise`<[`AutoAccess`](../interfaces/configuration_structures.AutoAccess.md)[]\>

Returns all existing auto access data structures.

#### Returns

`Promise`<[`AutoAccess`](../interfaces/configuration_structures.AutoAccess.md)[]\>

#### Defined in

[configuration/index.ts:394](https://github.com/livechat/lc-sdk-js/blob/11cc290/src/configuration/index.ts#L394)

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

[configuration/index.ts:140](https://github.com/livechat/lc-sdk-js/blob/11cc290/src/configuration/index.ts#L140)

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

[configuration/index.ts:305](https://github.com/livechat/lc-sdk-js/blob/11cc290/src/configuration/index.ts#L305)

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

[configuration/index.ts:204](https://github.com/livechat/lc-sdk-js/blob/11cc290/src/configuration/index.ts#L204)

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

[configuration/index.ts:273](https://github.com/livechat/lc-sdk-js/blob/11cc290/src/configuration/index.ts#L273)

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

[configuration/index.ts:256](https://github.com/livechat/lc-sdk-js/blob/11cc290/src/configuration/index.ts#L256)

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

[configuration/index.ts:355](https://github.com/livechat/lc-sdk-js/blob/11cc290/src/configuration/index.ts#L355)

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

[configuration/index.ts:338](https://github.com/livechat/lc-sdk-js/blob/11cc290/src/configuration/index.ts#L338)

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

[configuration/index.ts:241](https://github.com/livechat/lc-sdk-js/blob/11cc290/src/configuration/index.ts#L241)

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

[configuration/index.ts:221](https://github.com/livechat/lc-sdk-js/blob/11cc290/src/configuration/index.ts#L221)

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

[configuration/index.ts:330](https://github.com/livechat/lc-sdk-js/blob/11cc290/src/configuration/index.ts#L330)

___

### requestAgentUnsuspension

▸ **requestAgentUnsuspension**(): `Promise`<[`EmptyResponse`](../interfaces/configuration_structures.EmptyResponse.md)\>

A suspended Agent can send emails to license owners and vice owners with an unsuspension request.

#### Returns

`Promise`<[`EmptyResponse`](../interfaces/configuration_structures.EmptyResponse.md)\>

#### Defined in

[configuration/index.ts:98](https://github.com/livechat/lc-sdk-js/blob/11cc290/src/configuration/index.ts#L98)

___

### send

▸ **send**<`T`\>(`name`, `req`): `Promise`<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `req` | `any` |

#### Returns

`Promise`<`T`\>

#### Inherited from

[WebAPI](internal.WebAPI.md).[send](internal.WebAPI.md#send)

#### Defined in

[internal/index.ts:37](https://github.com/livechat/lc-sdk-js/blob/11cc290/src/internal/index.ts#L37)

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

[configuration/index.ts:83](https://github.com/livechat/lc-sdk-js/blob/11cc290/src/configuration/index.ts#L83)

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

[configuration/index.ts:230](https://github.com/livechat/lc-sdk-js/blob/11cc290/src/configuration/index.ts#L230)

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

[configuration/index.ts:347](https://github.com/livechat/lc-sdk-js/blob/11cc290/src/configuration/index.ts#L347)

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

[configuration/index.ts:91](https://github.com/livechat/lc-sdk-js/blob/11cc290/src/configuration/index.ts#L91)

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

[configuration/index.ts:67](https://github.com/livechat/lc-sdk-js/blob/11cc290/src/configuration/index.ts#L67)

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

[configuration/index.ts:411](https://github.com/livechat/lc-sdk-js/blob/11cc290/src/configuration/index.ts#L411)

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

[configuration/index.ts:131](https://github.com/livechat/lc-sdk-js/blob/11cc290/src/configuration/index.ts#L131)

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

[configuration/index.ts:178](https://github.com/livechat/lc-sdk-js/blob/11cc290/src/configuration/index.ts#L178)

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

[configuration/index.ts:293](https://github.com/livechat/lc-sdk-js/blob/11cc290/src/configuration/index.ts#L293)

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

[configuration/index.ts:264](https://github.com/livechat/lc-sdk-js/blob/11cc290/src/configuration/index.ts#L264)
