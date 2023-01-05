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

- [approveAgent](configuration.default.md#approveagent)
- [createAgent](configuration.default.md#createagent)
- [createBot](configuration.default.md#createbot)
- [createGroup](configuration.default.md#creategroup)
- [deleteAgent](configuration.default.md#deleteagent)
- [deleteBot](configuration.default.md#deletebot)
- [deleteGroup](configuration.default.md#deletegroup)
- [deleteGroupProperties](configuration.default.md#deletegroupproperties)
- [deleteLicenseProperties](configuration.default.md#deletelicenseproperties)
- [getAgent](configuration.default.md#getagent)
- [getBot](configuration.default.md#getbot)
- [getGroup](configuration.default.md#getgroup)
- [listAgents](configuration.default.md#listagents)
- [listBots](configuration.default.md#listbots)
- [listGroupProperties](configuration.default.md#listgroupproperties)
- [listGroups](configuration.default.md#listgroups)
- [listLicenseProperties](configuration.default.md#listlicenseproperties)
- [listRegisteredProperties](configuration.default.md#listregisteredproperties)
- [listRegisteredWebhooks](configuration.default.md#listregisteredwebhooks)
- [registerProperties](configuration.default.md#registerproperties)
- [registerWebhook](configuration.default.md#registerwebhook)
- [requestAgentUnsuspension](configuration.default.md#requestagentunsuspension)
- [send](configuration.default.md#send)
- [suspendAgent](configuration.default.md#suspendagent)
- [unregister\_webhook](configuration.default.md#unregister_webhook)
- [unsuspendAgent](configuration.default.md#unsuspendagent)
- [updateAgent](configuration.default.md#updateagent)
- [updateBot](configuration.default.md#updatebot)
- [updateGroup](configuration.default.md#updategroup)
- [updateGroupProperties](configuration.default.md#updategroupproperties)
- [updateLicenseProperties](configuration.default.md#updatelicenseproperties)

## Constructors

### constructor

• **new default**(`clientID`, `tokenGetter`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `clientID` | `string` |
| `tokenGetter` | [`TokenGetter`](../modules/authorization.md#tokengetter) |

#### Overrides

[WebAPI](internal.WebAPI.md).[constructor](internal.WebAPI.md#constructor)

#### Defined in

[configuration/index.ts:23](https://github.com/livechat/lc-sdk-js/blob/7431f2f/src/configuration/index.ts#L23)

## Properties

### APIURL

• **APIURL**: `string`

#### Inherited from

[WebAPI](internal.WebAPI.md).[APIURL](internal.WebAPI.md#apiurl)

#### Defined in

[internal/index.ts:11](https://github.com/livechat/lc-sdk-js/blob/7431f2f/src/internal/index.ts#L11)

___

### clientID

• **clientID**: `string`

#### Inherited from

[WebAPI](internal.WebAPI.md).[clientID](internal.WebAPI.md#clientid)

#### Defined in

[internal/index.ts:12](https://github.com/livechat/lc-sdk-js/blob/7431f2f/src/internal/index.ts#L12)

___

### tokenGetter

• **tokenGetter**: [`TokenGetter`](../modules/authorization.md#tokengetter)

#### Inherited from

[WebAPI](internal.WebAPI.md).[tokenGetter](internal.WebAPI.md#tokengetter)

#### Defined in

[internal/index.ts:15](https://github.com/livechat/lc-sdk-js/blob/7431f2f/src/internal/index.ts#L15)

___

### type

• **type**: `apiType`

#### Inherited from

[WebAPI](internal.WebAPI.md).[type](internal.WebAPI.md#type)

#### Defined in

[internal/index.ts:14](https://github.com/livechat/lc-sdk-js/blob/7431f2f/src/internal/index.ts#L14)

___

### version

• **version**: `string`

#### Inherited from

[WebAPI](internal.WebAPI.md).[version](internal.WebAPI.md#version)

#### Defined in

[internal/index.ts:13](https://github.com/livechat/lc-sdk-js/blob/7431f2f/src/internal/index.ts#L13)

## Methods

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

[configuration/index.ts:98](https://github.com/livechat/lc-sdk-js/blob/7431f2f/src/configuration/index.ts#L98)

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

[configuration/index.ts:32](https://github.com/livechat/lc-sdk-js/blob/7431f2f/src/configuration/index.ts#L32)

___

### createBot

▸ **createBot**(`fields`): `Promise`<[`CreateBotResponse`](../interfaces/configuration_structures.CreateBotResponse.md)\>

Creates a new Bot Agent with specified parameters within a license.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fields` | [`BotFields`](../interfaces/configuration_structures.BotFields.md) | bot agent properties |

#### Returns

`Promise`<[`CreateBotResponse`](../interfaces/configuration_structures.CreateBotResponse.md)\>

#### Defined in

[configuration/index.ts:106](https://github.com/livechat/lc-sdk-js/blob/7431f2f/src/configuration/index.ts#L106)

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

[configuration/index.ts:149](https://github.com/livechat/lc-sdk-js/blob/7431f2f/src/configuration/index.ts#L149)

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

[configuration/index.ts:67](https://github.com/livechat/lc-sdk-js/blob/7431f2f/src/configuration/index.ts#L67)

___

### deleteBot

▸ **deleteBot**(`bot_agent_id`): `Promise`<[`EmptyResponse`](../interfaces/configuration_structures.EmptyResponse.md)\>

Deletes bot specified by id.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `bot_agent_id` | `string` | ID of bot to delete |

#### Returns

`Promise`<[`EmptyResponse`](../interfaces/configuration_structures.EmptyResponse.md)\>

#### Defined in

[configuration/index.ts:114](https://github.com/livechat/lc-sdk-js/blob/7431f2f/src/configuration/index.ts#L114)

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

[configuration/index.ts:186](https://github.com/livechat/lc-sdk-js/blob/7431f2f/src/configuration/index.ts#L186)

___

### deleteGroupProperties

▸ **deleteGroupProperties**(`group_id`, `properties`): `Promise`<[`EmptyResponse`](../interfaces/configuration_structures.EmptyResponse.md)\>

Deletes the properties set within a group.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `group_id` | `number` | group ID to delete properties from |
| `properties` | [`Properties`](../interfaces/objects.Properties.md) | properties to delete |

#### Returns

`Promise`<[`EmptyResponse`](../interfaces/configuration_structures.EmptyResponse.md)\>

#### Defined in

[configuration/index.ts:281](https://github.com/livechat/lc-sdk-js/blob/7431f2f/src/configuration/index.ts#L281)

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

[configuration/index.ts:247](https://github.com/livechat/lc-sdk-js/blob/7431f2f/src/configuration/index.ts#L247)

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

[configuration/index.ts:41](https://github.com/livechat/lc-sdk-js/blob/7431f2f/src/configuration/index.ts#L41)

___

### getBot

▸ **getBot**(`bot_agent_id`): `Promise`<[`GetBotResponse`](../interfaces/configuration_structures.GetBotResponse.md)\>

Gets info about Bot Agent.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `bot_agent_id` | `string` | bot agent ID to get info about |

#### Returns

`Promise`<[`GetBotResponse`](../interfaces/configuration_structures.GetBotResponse.md)\>

#### Defined in

[configuration/index.ts:139](https://github.com/livechat/lc-sdk-js/blob/7431f2f/src/configuration/index.ts#L139)

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

[configuration/index.ts:203](https://github.com/livechat/lc-sdk-js/blob/7431f2f/src/configuration/index.ts#L203)

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

[configuration/index.ts:50](https://github.com/livechat/lc-sdk-js/blob/7431f2f/src/configuration/index.ts#L50)

___

### listBots

▸ **listBots**(`all?`): `Promise`<[`ListBotsResponse`](../interfaces/configuration_structures.ListBotsResponse.md)\>

Lists all bot agents within license.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `all?` | `boolean` | switch if should return all bots or only caller's bots |

#### Returns

`Promise`<[`ListBotsResponse`](../interfaces/configuration_structures.ListBotsResponse.md)\>

#### Defined in

[configuration/index.ts:131](https://github.com/livechat/lc-sdk-js/blob/7431f2f/src/configuration/index.ts#L131)

___

### listGroupProperties

▸ **listGroupProperties**(`group_id`, `namespace_prefix?`, `name_prefix?`): `Promise`<[`Properties`](../interfaces/objects.Properties.md)\>

Returns the properties set within a group.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `group_id` | `number` | group ID to get properties from |
| `namespace_prefix?` | `string` | namespace prefix |
| `name_prefix?` | `string` | name prefix |

#### Returns

`Promise`<[`Properties`](../interfaces/objects.Properties.md)\>

#### Defined in

[configuration/index.ts:268](https://github.com/livechat/lc-sdk-js/blob/7431f2f/src/configuration/index.ts#L268)

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

[configuration/index.ts:194](https://github.com/livechat/lc-sdk-js/blob/7431f2f/src/configuration/index.ts#L194)

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

[configuration/index.ts:236](https://github.com/livechat/lc-sdk-js/blob/7431f2f/src/configuration/index.ts#L236)

___

### listRegisteredProperties

▸ **listRegisteredProperties**(`all?`): `Promise`<[`PropertiesConfig`](../interfaces/configuration_structures.PropertiesConfig.md)\>

Lists registered properties.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `all?` | `boolean` | if should return all properties within license |

#### Returns

`Promise`<[`PropertiesConfig`](../interfaces/configuration_structures.PropertiesConfig.md)\>

#### Defined in

[configuration/index.ts:219](https://github.com/livechat/lc-sdk-js/blob/7431f2f/src/configuration/index.ts#L219)

___

### listRegisteredWebhooks

▸ **listRegisteredWebhooks**(): `Promise`<[`RegisteredWebhook`](../interfaces/configuration_structures.RegisteredWebhook.md)[]\>

Lists registered webhooks.

#### Returns

`Promise`<[`RegisteredWebhook`](../interfaces/configuration_structures.RegisteredWebhook.md)[]\>

#### Defined in

[configuration/index.ts:299](https://github.com/livechat/lc-sdk-js/blob/7431f2f/src/configuration/index.ts#L299)

___

### registerProperties

▸ **registerProperties**(`properties`): `Promise`<[`EmptyResponse`](../interfaces/configuration_structures.EmptyResponse.md)\>

Registers properties.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `properties` | [`PropertiesConfig`](../interfaces/configuration_structures.PropertiesConfig.md) | properties to register |

#### Returns

`Promise`<[`EmptyResponse`](../interfaces/configuration_structures.EmptyResponse.md)\>

#### Defined in

[configuration/index.ts:211](https://github.com/livechat/lc-sdk-js/blob/7431f2f/src/configuration/index.ts#L211)

___

### registerWebhook

▸ **registerWebhook**(`webhook`): `Promise`<[`RegisterWebhookResponse`](../interfaces/configuration_structures.RegisterWebhookResponse.md)\>

Registers webhook on a license.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `webhook` | [`Webhook`](../interfaces/configuration_structures.Webhook.md) | webhook to register |

#### Returns

`Promise`<[`RegisterWebhookResponse`](../interfaces/configuration_structures.RegisterWebhookResponse.md)\>

#### Defined in

[configuration/index.ts:292](https://github.com/livechat/lc-sdk-js/blob/7431f2f/src/configuration/index.ts#L292)

___

### requestAgentUnsuspension

▸ **requestAgentUnsuspension**(): `Promise`<[`EmptyResponse`](../interfaces/configuration_structures.EmptyResponse.md)\>

A suspended Agent can send emails to license owners and vice owners with an unsuspension request.

#### Returns

`Promise`<[`EmptyResponse`](../interfaces/configuration_structures.EmptyResponse.md)\>

#### Defined in

[configuration/index.ts:90](https://github.com/livechat/lc-sdk-js/blob/7431f2f/src/configuration/index.ts#L90)

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

[internal/index.ts:25](https://github.com/livechat/lc-sdk-js/blob/7431f2f/src/internal/index.ts#L25)

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

[configuration/index.ts:75](https://github.com/livechat/lc-sdk-js/blob/7431f2f/src/configuration/index.ts#L75)

___

### unregister\_webhook

▸ **unregister_webhook**(`webhook_id`): `Promise`<[`EmptyResponse`](../interfaces/configuration_structures.EmptyResponse.md)\>

Removes webhook from license.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `webhook_id` | `string` | webhook to unregister |

#### Returns

`Promise`<[`EmptyResponse`](../interfaces/configuration_structures.EmptyResponse.md)\>

#### Defined in

[configuration/index.ts:307](https://github.com/livechat/lc-sdk-js/blob/7431f2f/src/configuration/index.ts#L307)

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

[configuration/index.ts:83](https://github.com/livechat/lc-sdk-js/blob/7431f2f/src/configuration/index.ts#L83)

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

[configuration/index.ts:59](https://github.com/livechat/lc-sdk-js/blob/7431f2f/src/configuration/index.ts#L59)

___

### updateBot

▸ **updateBot**(`id`, `fields`): `Promise`<[`EmptyResponse`](../interfaces/configuration_structures.EmptyResponse.md)\>

Updates the properties of Bot Agent specified by id.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of bot agent to update |
| `fields` | [`BotFields`](../interfaces/configuration_structures.BotFields.md) | properties to update |

#### Returns

`Promise`<[`EmptyResponse`](../interfaces/configuration_structures.EmptyResponse.md)\>

#### Defined in

[configuration/index.ts:123](https://github.com/livechat/lc-sdk-js/blob/7431f2f/src/configuration/index.ts#L123)

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

[configuration/index.ts:168](https://github.com/livechat/lc-sdk-js/blob/7431f2f/src/configuration/index.ts#L168)

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

[configuration/index.ts:256](https://github.com/livechat/lc-sdk-js/blob/7431f2f/src/configuration/index.ts#L256)

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

[configuration/index.ts:227](https://github.com/livechat/lc-sdk-js/blob/7431f2f/src/configuration/index.ts#L227)
