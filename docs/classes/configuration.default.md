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
- [batchApproveAgents](configuration.default.md#batchapproveagents)
- [batchCreateAgents](configuration.default.md#batchcreateagents)
- [batchCreateBots](configuration.default.md#batchcreatebots)
- [batchDeleteAgents](configuration.default.md#batchdeleteagents)
- [batchDeleteBots](configuration.default.md#batchdeletebots)
- [batchSuspendAgents](configuration.default.md#batchsuspendagents)
- [batchUnsuspendAgents](configuration.default.md#batchunsuspendagents)
- [batchUpdateAgents](configuration.default.md#batchupdateagents)
- [batchUpdateBots](configuration.default.md#batchupdatebots)
- [checkProductLimitsForPlan](configuration.default.md#checkproductlimitsforplan)
- [createAgent](configuration.default.md#createagent)
- [createBot](configuration.default.md#createbot)
- [createGroup](configuration.default.md#creategroup)
- [createTag](configuration.default.md#createtag)
- [deleteAgent](configuration.default.md#deleteagent)
- [deleteAutoAccess](configuration.default.md#deleteautoaccess)
- [deleteBot](configuration.default.md#deletebot)
- [deleteGroup](configuration.default.md#deletegroup)
- [deleteGroupProperties](configuration.default.md#deletegroupproperties)
- [deleteLicenseProperties](configuration.default.md#deletelicenseproperties)
- [deleteTag](configuration.default.md#deletetag)
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
- [listChannels](configuration.default.md#listchannels)
- [listGroups](configuration.default.md#listgroups)
- [listGroupsProperties](configuration.default.md#listgroupsproperties)
- [listLicenseProperties](configuration.default.md#listlicenseproperties)
- [listProperties](configuration.default.md#listproperties)
- [listTags](configuration.default.md#listtags)
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
- [updateTag](configuration.default.md#updatetag)

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

[configuration/index.ts:36](https://github.com/livechat/lc-sdk-js/blob/a3fdde0/src/configuration/index.ts#L36)

## Properties

### APIURL

• **APIURL**: `string`

#### Inherited from

[WebAPI](internal.WebAPI.md).[APIURL](internal.WebAPI.md#apiurl)

#### Defined in

[internal/index.ts:15](https://github.com/livechat/lc-sdk-js/blob/a3fdde0/src/internal/index.ts#L15)

___

### clientID

• `Protected` `Readonly` **clientID**: `string`

#### Inherited from

[WebAPI](internal.WebAPI.md).[clientID](internal.WebAPI.md#clientid)

#### Defined in

[internal/index.ts:28](https://github.com/livechat/lc-sdk-js/blob/a3fdde0/src/internal/index.ts#L28)

___

### tokenGetter

• `Protected` `Readonly` **tokenGetter**: [`TokenGetter`](../modules/authorization.md#tokengetter)

#### Inherited from

[WebAPI](internal.WebAPI.md).[tokenGetter](internal.WebAPI.md#tokengetter)

#### Defined in

[internal/index.ts:29](https://github.com/livechat/lc-sdk-js/blob/a3fdde0/src/internal/index.ts#L29)

___

### type

• `Protected` `Readonly` **type**: `apiType`

#### Inherited from

[WebAPI](internal.WebAPI.md).[type](internal.WebAPI.md#type)

#### Defined in

[internal/index.ts:30](https://github.com/livechat/lc-sdk-js/blob/a3fdde0/src/internal/index.ts#L30)

___

### version

• **version**: `string`

#### Inherited from

[WebAPI](internal.WebAPI.md).[version](internal.WebAPI.md#version)

#### Defined in

[internal/index.ts:16](https://github.com/livechat/lc-sdk-js/blob/a3fdde0/src/internal/index.ts#L16)

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

[configuration/index.ts:451](https://github.com/livechat/lc-sdk-js/blob/a3fdde0/src/configuration/index.ts#L451)

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

[configuration/index.ts:151](https://github.com/livechat/lc-sdk-js/blob/a3fdde0/src/configuration/index.ts#L151)

___

### batchApproveAgents

▸ **batchApproveAgents**(`ids`): `Promise`<[`BatchResponse`](../interfaces/configuration_structures.BatchResponse.md)<[`EmptyResponse`](../interfaces/configuration_structures.EmptyResponse.md)\>\>

Approves Agents thus allowing the Agents to use the application.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ids` | `string`[] | IDs of agents to approve |

#### Returns

`Promise`<[`BatchResponse`](../interfaces/configuration_structures.BatchResponse.md)<[`EmptyResponse`](../interfaces/configuration_structures.EmptyResponse.md)\>\>

#### Defined in

[configuration/index.ts:159](https://github.com/livechat/lc-sdk-js/blob/a3fdde0/src/configuration/index.ts#L159)

___

### batchCreateAgents

▸ **batchCreateAgents**(`agents`): `Promise`<[`BatchResponse`](../interfaces/configuration_structures.BatchResponse.md)<[`CreateAgentResponse`](../interfaces/configuration_structures.CreateAgentResponse.md)\>\>

Creates new Agents with specified parameters within a license.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `agents` | [`Agent`](../interfaces/configuration_structures.Agent.md)[] | agents to create |

#### Returns

`Promise`<[`BatchResponse`](../interfaces/configuration_structures.BatchResponse.md)<[`CreateAgentResponse`](../interfaces/configuration_structures.CreateAgentResponse.md)\>\>

#### Defined in

[configuration/index.ts:53](https://github.com/livechat/lc-sdk-js/blob/a3fdde0/src/configuration/index.ts#L53)

___

### batchCreateBots

▸ **batchCreateBots**(`bots`): `Promise`<[`BatchResponse`](../interfaces/configuration_structures.BatchResponse.md)<[`CreateBotResponse`](../interfaces/configuration_structures.CreateBotResponse.md)\>\>

Creates new Bots with specified parameters within a license.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `bots` | [`Bot`](../interfaces/configuration_structures.Bot.md)[] | bots to create |

#### Returns

`Promise`<[`BatchResponse`](../interfaces/configuration_structures.BatchResponse.md)<[`CreateBotResponse`](../interfaces/configuration_structures.CreateBotResponse.md)\>\>

#### Defined in

[configuration/index.ts:175](https://github.com/livechat/lc-sdk-js/blob/a3fdde0/src/configuration/index.ts#L175)

___

### batchDeleteAgents

▸ **batchDeleteAgents**(`ids`): `Promise`<[`BatchResponse`](../interfaces/configuration_structures.BatchResponse.md)<[`EmptyResponse`](../interfaces/configuration_structures.EmptyResponse.md)\>\>

Deletes Agents specified by ids.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ids` | `string`[] | IDs of agents to delete |

#### Returns

`Promise`<[`BatchResponse`](../interfaces/configuration_structures.BatchResponse.md)<[`EmptyResponse`](../interfaces/configuration_structures.EmptyResponse.md)\>\>

#### Defined in

[configuration/index.ts:104](https://github.com/livechat/lc-sdk-js/blob/a3fdde0/src/configuration/index.ts#L104)

___

### batchDeleteBots

▸ **batchDeleteBots**(`ids`): `Promise`<[`BatchResponse`](../interfaces/configuration_structures.BatchResponse.md)<[`EmptyResponse`](../interfaces/configuration_structures.EmptyResponse.md)\>\>

Deletes Bots specified by ids.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ids` | `string`[] | IDs of bots to delete |

#### Returns

`Promise`<[`BatchResponse`](../interfaces/configuration_structures.BatchResponse.md)<[`EmptyResponse`](../interfaces/configuration_structures.EmptyResponse.md)\>\>

#### Defined in

[configuration/index.ts:191](https://github.com/livechat/lc-sdk-js/blob/a3fdde0/src/configuration/index.ts#L191)

___

### batchSuspendAgents

▸ **batchSuspendAgents**(`ids`): `Promise`<[`BatchResponse`](../interfaces/configuration_structures.BatchResponse.md)<[`EmptyResponse`](../interfaces/configuration_structures.EmptyResponse.md)\>\>

Suspends Agents specified by ids.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ids` | `string`[] | IDs of agents to suspend |

#### Returns

`Promise`<[`BatchResponse`](../interfaces/configuration_structures.BatchResponse.md)<[`EmptyResponse`](../interfaces/configuration_structures.EmptyResponse.md)\>\>

#### Defined in

[configuration/index.ts:120](https://github.com/livechat/lc-sdk-js/blob/a3fdde0/src/configuration/index.ts#L120)

___

### batchUnsuspendAgents

▸ **batchUnsuspendAgents**(`ids`): `Promise`<[`BatchResponse`](../interfaces/configuration_structures.BatchResponse.md)<[`EmptyResponse`](../interfaces/configuration_structures.EmptyResponse.md)\>\>

Unsuspends Agents specified by ids.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ids` | `string`[] | IDs of agents to unsuspend |

#### Returns

`Promise`<[`BatchResponse`](../interfaces/configuration_structures.BatchResponse.md)<[`EmptyResponse`](../interfaces/configuration_structures.EmptyResponse.md)\>\>

#### Defined in

[configuration/index.ts:136](https://github.com/livechat/lc-sdk-js/blob/a3fdde0/src/configuration/index.ts#L136)

___

### batchUpdateAgents

▸ **batchUpdateAgents**(`agents`): `Promise`<[`BatchResponse`](../interfaces/configuration_structures.BatchResponse.md)<[`EmptyResponse`](../interfaces/configuration_structures.EmptyResponse.md)\>\>

Updates the properties of Agents specified by ids.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `agents` | [`Agent`](../interfaces/configuration_structures.Agent.md)[] | agents to update |

#### Returns

`Promise`<[`BatchResponse`](../interfaces/configuration_structures.BatchResponse.md)<[`EmptyResponse`](../interfaces/configuration_structures.EmptyResponse.md)\>\>

#### Defined in

[configuration/index.ts:88](https://github.com/livechat/lc-sdk-js/blob/a3fdde0/src/configuration/index.ts#L88)

___

### batchUpdateBots

▸ **batchUpdateBots**(`bots`): `Promise`<[`BatchResponse`](../interfaces/configuration_structures.BatchResponse.md)<[`EmptyResponse`](../interfaces/configuration_structures.EmptyResponse.md)\>\>

Updates the properties of Bots specified by ids.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `bots` | [`Bot`](../interfaces/configuration_structures.Bot.md)[] | bots to update |

#### Returns

`Promise`<[`BatchResponse`](../interfaces/configuration_structures.BatchResponse.md)<[`EmptyResponse`](../interfaces/configuration_structures.EmptyResponse.md)\>\>

#### Defined in

[configuration/index.ts:208](https://github.com/livechat/lc-sdk-js/blob/a3fdde0/src/configuration/index.ts#L208)

___

### checkProductLimitsForPlan

▸ **checkProductLimitsForPlan**(`plan`): `Promise`<[`PlanLimit`](../interfaces/configuration_structures.PlanLimit.md)[]\>

Compares your organization's current resources with a given plan and returns those which exceeded the called plan's limits.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `plan` | `string` | `plan` must be one of: 'starter', 'team', 'enterprise' or 'enterpriseplus' |

#### Returns

`Promise`<[`PlanLimit`](../interfaces/configuration_structures.PlanLimit.md)[]\>

#### Defined in

[configuration/index.ts:502](https://github.com/livechat/lc-sdk-js/blob/a3fdde0/src/configuration/index.ts#L502)

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

[configuration/index.ts:45](https://github.com/livechat/lc-sdk-js/blob/a3fdde0/src/configuration/index.ts#L45)

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

[configuration/index.ts:167](https://github.com/livechat/lc-sdk-js/blob/a3fdde0/src/configuration/index.ts#L167)

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

[configuration/index.ts:236](https://github.com/livechat/lc-sdk-js/blob/a3fdde0/src/configuration/index.ts#L236)

___

### createTag

▸ **createTag**(`name`, `groupIDs?`): `Promise`<`void`\>

Creates a new tag.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | name of the created tag |
| `groupIDs?` | `number`[] | list of groups where tag will be assigned |

#### Returns

`Promise`<`void`\>

#### Defined in

[configuration/index.ts:518](https://github.com/livechat/lc-sdk-js/blob/a3fdde0/src/configuration/index.ts#L518)

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

[configuration/index.ts:96](https://github.com/livechat/lc-sdk-js/blob/a3fdde0/src/configuration/index.ts#L96)

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

[configuration/index.ts:466](https://github.com/livechat/lc-sdk-js/blob/a3fdde0/src/configuration/index.ts#L466)

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

[configuration/index.ts:183](https://github.com/livechat/lc-sdk-js/blob/a3fdde0/src/configuration/index.ts#L183)

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

[configuration/index.ts:273](https://github.com/livechat/lc-sdk-js/blob/a3fdde0/src/configuration/index.ts#L273)

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

[configuration/index.ts:382](https://github.com/livechat/lc-sdk-js/blob/a3fdde0/src/configuration/index.ts#L382)

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

[configuration/index.ts:361](https://github.com/livechat/lc-sdk-js/blob/a3fdde0/src/configuration/index.ts#L361)

___

### deleteTag

▸ **deleteTag**(`name`): `Promise`<`void`\>

Deletes an existing tag.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | name of the tag to be deleted |

#### Returns

`Promise`<`void`\>

#### Defined in

[configuration/index.ts:526](https://github.com/livechat/lc-sdk-js/blob/a3fdde0/src/configuration/index.ts#L526)

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

[configuration/index.ts:435](https://github.com/livechat/lc-sdk-js/blob/a3fdde0/src/configuration/index.ts#L435)

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

[configuration/index.ts:427](https://github.com/livechat/lc-sdk-js/blob/a3fdde0/src/configuration/index.ts#L427)

___

### getAgent

▸ **getAgent**(`id`, `fields?`): `Promise`<[`Agent`](../interfaces/configuration_structures.Agent.md)\>

It returns the info about an Agent specified by id.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of agent to get |
| `fields?` | `string`[] | additional fields to include |

#### Returns

`Promise`<[`Agent`](../interfaces/configuration_structures.Agent.md)\>

#### Defined in

[configuration/index.ts:62](https://github.com/livechat/lc-sdk-js/blob/a3fdde0/src/configuration/index.ts#L62)

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

[configuration/index.ts:226](https://github.com/livechat/lc-sdk-js/blob/a3fdde0/src/configuration/index.ts#L226)

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

[configuration/index.ts:290](https://github.com/livechat/lc-sdk-js/blob/a3fdde0/src/configuration/index.ts#L290)

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

[configuration/index.ts:494](https://github.com/livechat/lc-sdk-js/blob/a3fdde0/src/configuration/index.ts#L494)

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

[configuration/index.ts:443](https://github.com/livechat/lc-sdk-js/blob/a3fdde0/src/configuration/index.ts#L443)

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

[configuration/index.ts:486](https://github.com/livechat/lc-sdk-js/blob/a3fdde0/src/configuration/index.ts#L486)

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

[configuration/index.ts:71](https://github.com/livechat/lc-sdk-js/blob/a3fdde0/src/configuration/index.ts#L71)

___

### listAutoAccesses

▸ **listAutoAccesses**(): `Promise`<[`AutoAccess`](../interfaces/configuration_structures.AutoAccess.md)[]\>

Returns all existing auto access data structures.

#### Returns

`Promise`<[`AutoAccess`](../interfaces/configuration_structures.AutoAccess.md)[]\>

#### Defined in

[configuration/index.ts:458](https://github.com/livechat/lc-sdk-js/blob/a3fdde0/src/configuration/index.ts#L458)

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

[configuration/index.ts:217](https://github.com/livechat/lc-sdk-js/blob/a3fdde0/src/configuration/index.ts#L217)

___

### listChannels

▸ **listChannels**(): `Promise`<[`ChannelActivity`](../interfaces/configuration_structures.ChannelActivity.md)[]\>

Returns the summary of communication channels for your LiveChat product.

#### Returns

`Promise`<[`ChannelActivity`](../interfaces/configuration_structures.ChannelActivity.md)[]\>

#### Defined in

[configuration/index.ts:509](https://github.com/livechat/lc-sdk-js/blob/a3fdde0/src/configuration/index.ts#L509)

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

[configuration/index.ts:281](https://github.com/livechat/lc-sdk-js/blob/a3fdde0/src/configuration/index.ts#L281)

___

### listGroupsProperties

▸ **listGroupsProperties**(`groupIDs?`, `namespace?`, `namePrefix?`): `Promise`<[`GroupsProperties`](../modules/configuration_structures.md#groupsproperties)\>

Lists groups' properties

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `groupIDs?` | `number`[] | list of groups whose properties will be returned |
| `namespace?` | `string` | namespace |
| `namePrefix?` | `string` | name prefix |

#### Returns

`Promise`<[`GroupsProperties`](../modules/configuration_structures.md#groupsproperties)\>

#### Defined in

[configuration/index.ts:553](https://github.com/livechat/lc-sdk-js/blob/a3fdde0/src/configuration/index.ts#L553)

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

[configuration/index.ts:350](https://github.com/livechat/lc-sdk-js/blob/a3fdde0/src/configuration/index.ts#L350)

___

### listProperties

▸ **listProperties**(`owner_client_id?`): `Promise`<[`PropertiesConfig`](../interfaces/configuration_structures.PropertiesConfig.md)\>

Lists properties for given client_id.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `owner_client_id` | `string` | `""` | client_id of property owner |

#### Returns

`Promise`<[`PropertiesConfig`](../interfaces/configuration_structures.PropertiesConfig.md)\>

#### Defined in

[configuration/index.ts:333](https://github.com/livechat/lc-sdk-js/blob/a3fdde0/src/configuration/index.ts#L333)

___

### listTags

▸ **listTags**(`groupIDs?`): `Promise`<[`Tag`](../interfaces/configuration_structures.Tag.md)[]\>

Returns tags assigned to requested groups.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `groupIDs?` | `number`[] | filter tags by groups where there are assigned |

#### Returns

`Promise`<[`Tag`](../interfaces/configuration_structures.Tag.md)[]\>

#### Defined in

[configuration/index.ts:534](https://github.com/livechat/lc-sdk-js/blob/a3fdde0/src/configuration/index.ts#L534)

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

[configuration/index.ts:419](https://github.com/livechat/lc-sdk-js/blob/a3fdde0/src/configuration/index.ts#L419)

___

### listWebhooks

▸ **listWebhooks**(`owner_client_id?`): `Promise`<[`RegisteredWebhook`](../interfaces/configuration_structures.RegisteredWebhook.md)[]\>

Lists registered webhooks.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `owner_client_id` | `string` | `""` | must be provided when authorizing with Personal Access Token |

#### Returns

`Promise`<[`RegisteredWebhook`](../interfaces/configuration_structures.RegisteredWebhook.md)[]\>

#### Defined in

[configuration/index.ts:402](https://github.com/livechat/lc-sdk-js/blob/a3fdde0/src/configuration/index.ts#L402)

___

### publishProperty

▸ **publishProperty**(`name`, `owner_client_id?`, `read`, `write`): `Promise`<[`EmptyResponse`](../interfaces/configuration_structures.EmptyResponse.md)\>

Publishes private property.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `name` | `string` | `undefined` | property name |
| `owner_client_id` | `string` | `""` | clientID of property owner |
| `read` | `boolean` | `undefined` | determines whether non-owners can read the property |
| `write` | `boolean` | `undefined` | determines whether non-owners can write the property |

#### Returns

`Promise`<[`EmptyResponse`](../interfaces/configuration_structures.EmptyResponse.md)\>

#### Defined in

[configuration/index.ts:318](https://github.com/livechat/lc-sdk-js/blob/a3fdde0/src/configuration/index.ts#L318)

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

[configuration/index.ts:298](https://github.com/livechat/lc-sdk-js/blob/a3fdde0/src/configuration/index.ts#L298)

___

### registerWebhook

▸ **registerWebhook**(`webhook`, `owner_client_id?`): `Promise`<[`RegisterWebhookResponse`](../interfaces/configuration_structures.RegisterWebhookResponse.md)\>

Registers webhook on a license.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `webhook` | [`Webhook`](../interfaces/configuration_structures.Webhook.md) | `undefined` | webhook to register |
| `owner_client_id` | `string` | `""` | must be provided when authorizing with Personal Access Token |

#### Returns

`Promise`<[`RegisterWebhookResponse`](../interfaces/configuration_structures.RegisterWebhookResponse.md)\>

#### Defined in

[configuration/index.ts:394](https://github.com/livechat/lc-sdk-js/blob/a3fdde0/src/configuration/index.ts#L394)

___

### requestAgentUnsuspension

▸ **requestAgentUnsuspension**(): `Promise`<[`EmptyResponse`](../interfaces/configuration_structures.EmptyResponse.md)\>

A suspended Agent can send emails to license owners and vice owners with an unsuspension request.

#### Returns

`Promise`<[`EmptyResponse`](../interfaces/configuration_structures.EmptyResponse.md)\>

#### Defined in

[configuration/index.ts:143](https://github.com/livechat/lc-sdk-js/blob/a3fdde0/src/configuration/index.ts#L143)

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

[internal/index.ts:37](https://github.com/livechat/lc-sdk-js/blob/a3fdde0/src/internal/index.ts#L37)

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

[configuration/index.ts:112](https://github.com/livechat/lc-sdk-js/blob/a3fdde0/src/configuration/index.ts#L112)

___

### unregisterProperty

▸ **unregisterProperty**(`name`, `owner_client_id?`): `Promise`<[`EmptyResponse`](../interfaces/configuration_structures.EmptyResponse.md)\>

Unregisters private property.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `name` | `string` | `undefined` | property name |
| `owner_client_id` | `string` | `""` | clientID of property owner |

#### Returns

`Promise`<[`EmptyResponse`](../interfaces/configuration_structures.EmptyResponse.md)\>

#### Defined in

[configuration/index.ts:307](https://github.com/livechat/lc-sdk-js/blob/a3fdde0/src/configuration/index.ts#L307)

___

### unregisterWebhook

▸ **unregisterWebhook**(`id`, `owner_client_id?`): `Promise`<[`EmptyResponse`](../interfaces/configuration_structures.EmptyResponse.md)\>

Removes webhook from license.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `id` | `string` | `undefined` | ID of webhook to unregister |
| `owner_client_id` | `string` | `""` | must be provided when authorizing with Personal Access Token |

#### Returns

`Promise`<[`EmptyResponse`](../interfaces/configuration_structures.EmptyResponse.md)\>

#### Defined in

[configuration/index.ts:411](https://github.com/livechat/lc-sdk-js/blob/a3fdde0/src/configuration/index.ts#L411)

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

[configuration/index.ts:128](https://github.com/livechat/lc-sdk-js/blob/a3fdde0/src/configuration/index.ts#L128)

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

[configuration/index.ts:80](https://github.com/livechat/lc-sdk-js/blob/a3fdde0/src/configuration/index.ts#L80)

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

[configuration/index.ts:475](https://github.com/livechat/lc-sdk-js/blob/a3fdde0/src/configuration/index.ts#L475)

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

[configuration/index.ts:200](https://github.com/livechat/lc-sdk-js/blob/a3fdde0/src/configuration/index.ts#L200)

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

[configuration/index.ts:255](https://github.com/livechat/lc-sdk-js/blob/a3fdde0/src/configuration/index.ts#L255)

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

[configuration/index.ts:370](https://github.com/livechat/lc-sdk-js/blob/a3fdde0/src/configuration/index.ts#L370)

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

[configuration/index.ts:341](https://github.com/livechat/lc-sdk-js/blob/a3fdde0/src/configuration/index.ts#L341)

___

### updateTag

▸ **updateTag**(`name`, `groupIDs?`): `Promise`<`void`\>

Updates an existing tag.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | name of the updated tag |
| `groupIDs?` | `number`[] | list of groups where tag will be assigned |

#### Returns

`Promise`<`void`\>

#### Defined in

[configuration/index.ts:543](https://github.com/livechat/lc-sdk-js/blob/a3fdde0/src/configuration/index.ts#L543)
