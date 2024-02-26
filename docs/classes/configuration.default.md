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
- [author\_id](configuration.default.md#author_id)
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
- [createBotTemplate](configuration.default.md#createbottemplate)
- [createGroup](configuration.default.md#creategroup)
- [createTag](configuration.default.md#createtag)
- [deleteAgent](configuration.default.md#deleteagent)
- [deleteAutoAccess](configuration.default.md#deleteautoaccess)
- [deleteBot](configuration.default.md#deletebot)
- [deleteBotTemplate](configuration.default.md#deletebottemplate)
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
- [issueBotToken](configuration.default.md#issuebottoken)
- [listAgents](configuration.default.md#listagents)
- [listAutoAccesses](configuration.default.md#listautoaccesses)
- [listBotTemplates](configuration.default.md#listbottemplates)
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
- [resetBotSecret](configuration.default.md#resetbotsecret)
- [resetBotTemplateSecret](configuration.default.md#resetbottemplatesecret)
- [send](configuration.default.md#send)
- [setAuthorId](configuration.default.md#setauthorid)
- [suspendAgent](configuration.default.md#suspendagent)
- [unregisterProperty](configuration.default.md#unregisterproperty)
- [unregisterWebhook](configuration.default.md#unregisterwebhook)
- [unsuspendAgent](configuration.default.md#unsuspendagent)
- [updateAgent](configuration.default.md#updateagent)
- [updateAutoAccess](configuration.default.md#updateautoaccess)
- [updateBot](configuration.default.md#updatebot)
- [updateBotTemplate](configuration.default.md#updatebottemplate)
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
| `options?` | [`WebAPIOptions`](../interfaces/configuration_structures_structures.WebAPIOptions.md) |

#### Overrides

[WebAPI](internal.WebAPI.md).[constructor](internal.WebAPI.md#constructor)

#### Defined in

[configuration/index.ts:44](https://github.com/livechat/lc-sdk-js/blob/25e113d/src/configuration/index.ts#L44)

## Properties

### APIURL

• **APIURL**: `string`

#### Inherited from

[WebAPI](internal.WebAPI.md).[APIURL](internal.WebAPI.md#apiurl)

#### Defined in

[internal/index.ts:13](https://github.com/livechat/lc-sdk-js/blob/25e113d/src/internal/index.ts#L13)

___

### author\_id

• `Optional` **author\_id**: `string`

#### Inherited from

[WebAPI](internal.WebAPI.md).[author_id](internal.WebAPI.md#author_id)

#### Defined in

[internal/index.ts:15](https://github.com/livechat/lc-sdk-js/blob/25e113d/src/internal/index.ts#L15)

___

### clientID

• `Protected` `Readonly` **clientID**: `string`

#### Inherited from

[WebAPI](internal.WebAPI.md).[clientID](internal.WebAPI.md#clientid)

#### Defined in

[internal/index.ts:27](https://github.com/livechat/lc-sdk-js/blob/25e113d/src/internal/index.ts#L27)

___

### tokenGetter

• `Protected` `Readonly` **tokenGetter**: [`TokenGetter`](../modules/authorization.md#tokengetter)

#### Inherited from

[WebAPI](internal.WebAPI.md).[tokenGetter](internal.WebAPI.md#tokengetter)

#### Defined in

[internal/index.ts:28](https://github.com/livechat/lc-sdk-js/blob/25e113d/src/internal/index.ts#L28)

___

### type

• `Protected` `Readonly` **type**: `apiType`

#### Inherited from

[WebAPI](internal.WebAPI.md).[type](internal.WebAPI.md#type)

#### Defined in

[internal/index.ts:29](https://github.com/livechat/lc-sdk-js/blob/25e113d/src/internal/index.ts#L29)

___

### version

• **version**: `string`

#### Inherited from

[WebAPI](internal.WebAPI.md).[version](internal.WebAPI.md#version)

#### Defined in

[internal/index.ts:14](https://github.com/livechat/lc-sdk-js/blob/25e113d/src/internal/index.ts#L14)

## Methods

### addAutoAccess

▸ **addAutoAccess**(`opts`): `Promise`<[`AddAutoAccessResponse`](../interfaces/configuration_structures_responses.AddAutoAccessResponse.md)\>

Creates an auto access data structure, which is a set of conditions for the tracking URL and geolocation of a customer.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | [`AddAutoAccessRequest`](../interfaces/configuration_structures_structures.AddAutoAccessRequest.md) | options for auto access like conditions |

#### Returns

`Promise`<[`AddAutoAccessResponse`](../interfaces/configuration_structures_responses.AddAutoAccessResponse.md)\>

#### Defined in

[configuration/index.ts:555](https://github.com/livechat/lc-sdk-js/blob/25e113d/src/configuration/index.ts#L555)

___

### approveAgent

▸ **approveAgent**(`id`): `Promise`<[`EmptyResponse`](../interfaces/configuration_structures_responses.EmptyResponse.md)\>

Approves an Agent thus allowing the Agent to use the application.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of agent to approve |

#### Returns

`Promise`<[`EmptyResponse`](../interfaces/configuration_structures_responses.EmptyResponse.md)\>

#### Defined in

[configuration/index.ts:159](https://github.com/livechat/lc-sdk-js/blob/25e113d/src/configuration/index.ts#L159)

___

### batchApproveAgents

▸ **batchApproveAgents**(`ids`): `Promise`<[`BatchResponse`](../interfaces/configuration_structures_responses.BatchResponse.md)<[`EmptyResponse`](../interfaces/configuration_structures_responses.EmptyResponse.md)\>\>

Approves Agents thus allowing the Agents to use the application.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ids` | `string`[] | IDs of agents to approve |

#### Returns

`Promise`<[`BatchResponse`](../interfaces/configuration_structures_responses.BatchResponse.md)<[`EmptyResponse`](../interfaces/configuration_structures_responses.EmptyResponse.md)\>\>

#### Defined in

[configuration/index.ts:167](https://github.com/livechat/lc-sdk-js/blob/25e113d/src/configuration/index.ts#L167)

___

### batchCreateAgents

▸ **batchCreateAgents**(`agents`): `Promise`<[`BatchResponse`](../interfaces/configuration_structures_responses.BatchResponse.md)<[`CreateAgentResponse`](../interfaces/configuration_structures_responses.CreateAgentResponse.md)\>\>

Creates new Agents with specified parameters within a license.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `agents` | [`Agent`](../interfaces/configuration_structures_structures.Agent.md)[] | agents to create |

#### Returns

`Promise`<[`BatchResponse`](../interfaces/configuration_structures_responses.BatchResponse.md)<[`CreateAgentResponse`](../interfaces/configuration_structures_responses.CreateAgentResponse.md)\>\>

#### Defined in

[configuration/index.ts:61](https://github.com/livechat/lc-sdk-js/blob/25e113d/src/configuration/index.ts#L61)

___

### batchCreateBots

▸ **batchCreateBots**(`bots`): `Promise`<[`BatchResponse`](../interfaces/configuration_structures_responses.BatchResponse.md)<[`CreateBotResponse`](../interfaces/configuration_structures_responses.CreateBotResponse.md)\>\>

Creates new Bots with specified parameters within a license.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `bots` | [`Bot`](../interfaces/configuration_structures_structures.Bot.md)[] | bots to create |

#### Returns

`Promise`<[`BatchResponse`](../interfaces/configuration_structures_responses.BatchResponse.md)<[`CreateBotResponse`](../interfaces/configuration_structures_responses.CreateBotResponse.md)\>\>

#### Defined in

[configuration/index.ts:183](https://github.com/livechat/lc-sdk-js/blob/25e113d/src/configuration/index.ts#L183)

___

### batchDeleteAgents

▸ **batchDeleteAgents**(`ids`): `Promise`<[`BatchResponse`](../interfaces/configuration_structures_responses.BatchResponse.md)<[`EmptyResponse`](../interfaces/configuration_structures_responses.EmptyResponse.md)\>\>

Deletes Agents specified by ids.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ids` | `string`[] | IDs of agents to delete |

#### Returns

`Promise`<[`BatchResponse`](../interfaces/configuration_structures_responses.BatchResponse.md)<[`EmptyResponse`](../interfaces/configuration_structures_responses.EmptyResponse.md)\>\>

#### Defined in

[configuration/index.ts:112](https://github.com/livechat/lc-sdk-js/blob/25e113d/src/configuration/index.ts#L112)

___

### batchDeleteBots

▸ **batchDeleteBots**(`ids`): `Promise`<[`BatchResponse`](../interfaces/configuration_structures_responses.BatchResponse.md)<[`EmptyResponse`](../interfaces/configuration_structures_responses.EmptyResponse.md)\>\>

Deletes Bots specified by ids.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ids` | `string`[] | IDs of bots to delete |

#### Returns

`Promise`<[`BatchResponse`](../interfaces/configuration_structures_responses.BatchResponse.md)<[`EmptyResponse`](../interfaces/configuration_structures_responses.EmptyResponse.md)\>\>

#### Defined in

[configuration/index.ts:199](https://github.com/livechat/lc-sdk-js/blob/25e113d/src/configuration/index.ts#L199)

___

### batchSuspendAgents

▸ **batchSuspendAgents**(`ids`): `Promise`<[`BatchResponse`](../interfaces/configuration_structures_responses.BatchResponse.md)<[`EmptyResponse`](../interfaces/configuration_structures_responses.EmptyResponse.md)\>\>

Suspends Agents specified by ids.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ids` | `string`[] | IDs of agents to suspend |

#### Returns

`Promise`<[`BatchResponse`](../interfaces/configuration_structures_responses.BatchResponse.md)<[`EmptyResponse`](../interfaces/configuration_structures_responses.EmptyResponse.md)\>\>

#### Defined in

[configuration/index.ts:128](https://github.com/livechat/lc-sdk-js/blob/25e113d/src/configuration/index.ts#L128)

___

### batchUnsuspendAgents

▸ **batchUnsuspendAgents**(`ids`): `Promise`<[`BatchResponse`](../interfaces/configuration_structures_responses.BatchResponse.md)<[`EmptyResponse`](../interfaces/configuration_structures_responses.EmptyResponse.md)\>\>

Unsuspends Agents specified by ids.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ids` | `string`[] | IDs of agents to unsuspend |

#### Returns

`Promise`<[`BatchResponse`](../interfaces/configuration_structures_responses.BatchResponse.md)<[`EmptyResponse`](../interfaces/configuration_structures_responses.EmptyResponse.md)\>\>

#### Defined in

[configuration/index.ts:144](https://github.com/livechat/lc-sdk-js/blob/25e113d/src/configuration/index.ts#L144)

___

### batchUpdateAgents

▸ **batchUpdateAgents**(`agents`): `Promise`<[`BatchResponse`](../interfaces/configuration_structures_responses.BatchResponse.md)<[`EmptyResponse`](../interfaces/configuration_structures_responses.EmptyResponse.md)\>\>

Updates the properties of Agents specified by ids.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `agents` | [`Agent`](../interfaces/configuration_structures_structures.Agent.md)[] | agents to update |

#### Returns

`Promise`<[`BatchResponse`](../interfaces/configuration_structures_responses.BatchResponse.md)<[`EmptyResponse`](../interfaces/configuration_structures_responses.EmptyResponse.md)\>\>

#### Defined in

[configuration/index.ts:96](https://github.com/livechat/lc-sdk-js/blob/25e113d/src/configuration/index.ts#L96)

___

### batchUpdateBots

▸ **batchUpdateBots**(`bots`): `Promise`<[`BatchResponse`](../interfaces/configuration_structures_responses.BatchResponse.md)<[`EmptyResponse`](../interfaces/configuration_structures_responses.EmptyResponse.md)\>\>

Updates the properties of Bots specified by ids.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `bots` | [`Bot`](../interfaces/configuration_structures_structures.Bot.md)[] | bots to update |

#### Returns

`Promise`<[`BatchResponse`](../interfaces/configuration_structures_responses.BatchResponse.md)<[`EmptyResponse`](../interfaces/configuration_structures_responses.EmptyResponse.md)\>\>

#### Defined in

[configuration/index.ts:241](https://github.com/livechat/lc-sdk-js/blob/25e113d/src/configuration/index.ts#L241)

___

### checkProductLimitsForPlan

▸ **checkProductLimitsForPlan**(`plan`): `Promise`<[`PlanLimit`](../interfaces/configuration_structures_structures.PlanLimit.md)[]\>

Compares your organization's current resources with a given plan and returns those which exceeded the called plan's limits.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `plan` | `string` | `plan` must be one of: 'starter', 'team', 'enterprise' or 'enterpriseplus' |

#### Returns

`Promise`<[`PlanLimit`](../interfaces/configuration_structures_structures.PlanLimit.md)[]\>

#### Defined in

[configuration/index.ts:606](https://github.com/livechat/lc-sdk-js/blob/25e113d/src/configuration/index.ts#L606)

___

### createAgent

▸ **createAgent**(`id`, `fields`): `Promise`<[`CreateAgentResponse`](../interfaces/configuration_structures_responses.CreateAgentResponse.md)\>

Creates a new Agent with specified parameters within a license.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of an agent to create |
| `fields` | [`AgentFields`](../interfaces/configuration_structures_structures.AgentFields.md) | agent properties |

#### Returns

`Promise`<[`CreateAgentResponse`](../interfaces/configuration_structures_responses.CreateAgentResponse.md)\>

#### Defined in

[configuration/index.ts:53](https://github.com/livechat/lc-sdk-js/blob/25e113d/src/configuration/index.ts#L53)

___

### createBot

▸ **createBot**(`fields`): `Promise`<[`CreateBotResponse`](../interfaces/configuration_structures_responses.CreateBotResponse.md)\>

Creates a new Bot with specified parameters within a license.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fields` | [`BotFields`](../interfaces/configuration_structures_structures.BotFields.md) | bot properties |

#### Returns

`Promise`<[`CreateBotResponse`](../interfaces/configuration_structures_responses.CreateBotResponse.md)\>

#### Defined in

[configuration/index.ts:175](https://github.com/livechat/lc-sdk-js/blob/25e113d/src/configuration/index.ts#L175)

___

### createBotTemplate

▸ **createBotTemplate**(`name`, `fields`, `affect_existing_installations?`, `owner_client_id?`): `Promise`<[`CreateBotTemplateResponse`](../interfaces/configuration_structures_responses.CreateBotTemplateResponse.md)\>

Creates a new Bot Template with specified parameters.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | display name |
| `fields` | [`BotTemplateFieldsCreate`](../interfaces/configuration_structures_structures.BotTemplateFieldsCreate.md) | bot template properties |
| `affect_existing_installations?` | `boolean` | if true, bots based on this template will be created on all licenses that have given application installed. Otherwise, only new installations will trigger bot creation |
| `owner_client_id?` | `string` | clientID the bot template is assigned to |

#### Returns

`Promise`<[`CreateBotTemplateResponse`](../interfaces/configuration_structures_responses.CreateBotTemplateResponse.md)\>

#### Defined in

[configuration/index.ts:271](https://github.com/livechat/lc-sdk-js/blob/25e113d/src/configuration/index.ts#L271)

___

### createGroup

▸ **createGroup**(`name`, `agent_priorities`, `language_code?`): `Promise`<[`CreateGroupResponse`](../interfaces/configuration_structures_responses.CreateGroupResponse.md)\>

Creates new group.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | group name |
| `agent_priorities` | [`AgentPriorities`](../interfaces/configuration_structures_structures.AgentPriorities.md) | agents priorities within a group |
| `language_code?` | `string` | groups language |

#### Returns

`Promise`<[`CreateGroupResponse`](../interfaces/configuration_structures_responses.CreateGroupResponse.md)\>

#### Defined in

[configuration/index.ts:340](https://github.com/livechat/lc-sdk-js/blob/25e113d/src/configuration/index.ts#L340)

___

### createTag

▸ **createTag**(`name`, `groupIDs?`): `Promise`<[`EmptyResponse`](../interfaces/configuration_structures_responses.EmptyResponse.md)\>

Creates a new tag.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | name of the created tag |
| `groupIDs?` | `number`[] | list of groups where tag will be assigned |

#### Returns

`Promise`<[`EmptyResponse`](../interfaces/configuration_structures_responses.EmptyResponse.md)\>

#### Defined in

[configuration/index.ts:622](https://github.com/livechat/lc-sdk-js/blob/25e113d/src/configuration/index.ts#L622)

___

### deleteAgent

▸ **deleteAgent**(`id`): `Promise`<[`EmptyResponse`](../interfaces/configuration_structures_responses.EmptyResponse.md)\>

Deletes an Agent specified by id.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of agent to delete |

#### Returns

`Promise`<[`EmptyResponse`](../interfaces/configuration_structures_responses.EmptyResponse.md)\>

#### Defined in

[configuration/index.ts:104](https://github.com/livechat/lc-sdk-js/blob/25e113d/src/configuration/index.ts#L104)

___

### deleteAutoAccess

▸ **deleteAutoAccess**(`id`): `Promise`<[`EmptyResponse`](../interfaces/configuration_structures_responses.EmptyResponse.md)\>

Deletes an existing auto access data structure specified by its ID.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the auto access to remove |

#### Returns

`Promise`<[`EmptyResponse`](../interfaces/configuration_structures_responses.EmptyResponse.md)\>

#### Defined in

[configuration/index.ts:570](https://github.com/livechat/lc-sdk-js/blob/25e113d/src/configuration/index.ts#L570)

___

### deleteBot

▸ **deleteBot**(`id`): `Promise`<[`EmptyResponse`](../interfaces/configuration_structures_responses.EmptyResponse.md)\>

Deletes bot specified by id.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of bot to delete |

#### Returns

`Promise`<[`EmptyResponse`](../interfaces/configuration_structures_responses.EmptyResponse.md)\>

#### Defined in

[configuration/index.ts:191](https://github.com/livechat/lc-sdk-js/blob/25e113d/src/configuration/index.ts#L191)

___

### deleteBotTemplate

▸ **deleteBotTemplate**(`id`, `affect_existing_installations?`, `owner_client_id?`): `Promise`<[`EmptyResponse`](../interfaces/configuration_structures_responses.EmptyResponse.md)\>

Deletes the bot template specified by id.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of bot template to delete |
| `affect_existing_installations?` | `boolean` | if true, bots based on this template will be deleted from all licenses that have given application installed |
| `owner_client_id?` | `string` | clientID the bot template is assigned to |

#### Returns

`Promise`<[`EmptyResponse`](../interfaces/configuration_structures_responses.EmptyResponse.md)\>

#### Defined in

[configuration/index.ts:304](https://github.com/livechat/lc-sdk-js/blob/25e113d/src/configuration/index.ts#L304)

___

### deleteGroup

▸ **deleteGroup**(`id`): `Promise`<[`EmptyResponse`](../interfaces/configuration_structures_responses.EmptyResponse.md)\>

Deletes group specified by id.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `number` | ID of group to delete |

#### Returns

`Promise`<[`EmptyResponse`](../interfaces/configuration_structures_responses.EmptyResponse.md)\>

#### Defined in

[configuration/index.ts:377](https://github.com/livechat/lc-sdk-js/blob/25e113d/src/configuration/index.ts#L377)

___

### deleteGroupProperties

▸ **deleteGroupProperties**(`id`, `properties`): `Promise`<[`EmptyResponse`](../interfaces/configuration_structures_responses.EmptyResponse.md)\>

Deletes the properties set within a group.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `number` | group ID to delete properties from |
| `properties` | [`Properties`](../interfaces/configuration_structures_structures.Properties.md) | properties to delete |

#### Returns

`Promise`<[`EmptyResponse`](../interfaces/configuration_structures_responses.EmptyResponse.md)\>

#### Defined in

[configuration/index.ts:486](https://github.com/livechat/lc-sdk-js/blob/25e113d/src/configuration/index.ts#L486)

___

### deleteLicenseProperties

▸ **deleteLicenseProperties**(`properties`): `Promise`<[`EmptyResponse`](../interfaces/configuration_structures_responses.EmptyResponse.md)\>

Deletes the properties set within a license.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `properties` | [`Properties`](../interfaces/configuration_structures_structures.Properties.md) | properties to delete |

#### Returns

`Promise`<[`EmptyResponse`](../interfaces/configuration_structures_responses.EmptyResponse.md)\>

#### Defined in

[configuration/index.ts:465](https://github.com/livechat/lc-sdk-js/blob/25e113d/src/configuration/index.ts#L465)

___

### deleteTag

▸ **deleteTag**(`name`): `Promise`<[`EmptyResponse`](../interfaces/configuration_structures_responses.EmptyResponse.md)\>

Deletes an existing tag.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | name of the tag to be deleted |

#### Returns

`Promise`<[`EmptyResponse`](../interfaces/configuration_structures_responses.EmptyResponse.md)\>

#### Defined in

[configuration/index.ts:630](https://github.com/livechat/lc-sdk-js/blob/25e113d/src/configuration/index.ts#L630)

___

### disableLicenseWebhooks

▸ **disableLicenseWebhooks**(`client_id?`): `Promise`<[`EmptyResponse`](../interfaces/configuration_structures_responses.EmptyResponse.md)\>

Disables license webhooks for authorization token's clientID

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `client_id?` | `string` | clientID when authorizing via Personal Access Token |

#### Returns

`Promise`<[`EmptyResponse`](../interfaces/configuration_structures_responses.EmptyResponse.md)\>

#### Defined in

[configuration/index.ts:539](https://github.com/livechat/lc-sdk-js/blob/25e113d/src/configuration/index.ts#L539)

___

### enableLicenseWebhooks

▸ **enableLicenseWebhooks**(`client_id?`): `Promise`<[`EmptyResponse`](../interfaces/configuration_structures_responses.EmptyResponse.md)\>

Enables license webhooks for authorization token's clientID

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `client_id?` | `string` | clientID when authorizing via Personal Access Token |

#### Returns

`Promise`<[`EmptyResponse`](../interfaces/configuration_structures_responses.EmptyResponse.md)\>

#### Defined in

[configuration/index.ts:531](https://github.com/livechat/lc-sdk-js/blob/25e113d/src/configuration/index.ts#L531)

___

### getAgent

▸ **getAgent**(`id`, `fields?`): `Promise`<[`Agent`](../interfaces/configuration_structures_structures.Agent.md)\>

It returns the info about an Agent specified by id.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of agent to get |
| `fields?` | `string`[] | additional fields to include |

#### Returns

`Promise`<[`Agent`](../interfaces/configuration_structures_structures.Agent.md)\>

#### Defined in

[configuration/index.ts:70](https://github.com/livechat/lc-sdk-js/blob/25e113d/src/configuration/index.ts#L70)

___

### getBot

▸ **getBot**(`id`, `fields?`): `Promise`<[`Bot`](../interfaces/configuration_structures_structures.Bot.md)\>

Gets info about Bot.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | bot ID to get info about |
| `fields?` | [`BotFields`](../interfaces/configuration_structures_structures.BotFields.md) | additional fields to include |

#### Returns

`Promise`<[`Bot`](../interfaces/configuration_structures_structures.Bot.md)\>

#### Defined in

[configuration/index.ts:259](https://github.com/livechat/lc-sdk-js/blob/25e113d/src/configuration/index.ts#L259)

___

### getGroup

▸ **getGroup**(`id`, `fields?`): `Promise`<[`Group`](../interfaces/configuration_structures_structures.Group.md)\>

Returns details about a group specified by its id.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `number` | group ID to get info about |
| `fields?` | `string`[] | additional fields to include |

#### Returns

`Promise`<[`Group`](../interfaces/configuration_structures_structures.Group.md)\>

#### Defined in

[configuration/index.ts:394](https://github.com/livechat/lc-sdk-js/blob/25e113d/src/configuration/index.ts#L394)

___

### getLicenseID

▸ **getLicenseID**(`organizationID`): `Promise`<[`GetLicenseIDResponse`](../interfaces/configuration_structures_responses.GetLicenseIDResponse.md)\>

Returns license ID for given organizationID.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `organizationID` | `string` | UUID of the organization |

#### Returns

`Promise`<[`GetLicenseIDResponse`](../interfaces/configuration_structures_responses.GetLicenseIDResponse.md)\>

#### Defined in

[configuration/index.ts:598](https://github.com/livechat/lc-sdk-js/blob/25e113d/src/configuration/index.ts#L598)

___

### getLicenseWebhooksState

▸ **getLicenseWebhooksState**(`client_id?`): `Promise`<[`WebhooksState`](../interfaces/configuration_structures_structures.WebhooksState.md)\>

Gets license webhooks' state for authorization token's clientID

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `client_id?` | `string` | clientID when authorizing via Personal Access Token |

#### Returns

`Promise`<[`WebhooksState`](../interfaces/configuration_structures_structures.WebhooksState.md)\>

#### Defined in

[configuration/index.ts:547](https://github.com/livechat/lc-sdk-js/blob/25e113d/src/configuration/index.ts#L547)

___

### getOrganizationID

▸ **getOrganizationID**(`licenseID`): `Promise`<[`GetOrganizationIDResponse`](../interfaces/configuration_structures_responses.GetOrganizationIDResponse.md)\>

Returns organization ID for given license ID.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `licenseID` | `number` | ID of the license |

#### Returns

`Promise`<[`GetOrganizationIDResponse`](../interfaces/configuration_structures_responses.GetOrganizationIDResponse.md)\>

#### Defined in

[configuration/index.ts:590](https://github.com/livechat/lc-sdk-js/blob/25e113d/src/configuration/index.ts#L590)

___

### issueBotToken

▸ **issueBotToken**(`bot_id`, `client_id`, `bot_secret`, `organization_id`): `Promise`<[`IssueBotTokenResponse`](../interfaces/configuration_structures_responses.IssueBotTokenResponse.md)\>

Issues authorization token for Bot.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `bot_id` | `string` | ID of bot to issue token |
| `client_id` | `string` | clientID the bot is assigned to |
| `bot_secret` | `string` | bot secret |
| `organization_id` | `string` | organization ID to issue token for |

#### Returns

`Promise`<[`IssueBotTokenResponse`](../interfaces/configuration_structures_responses.IssueBotTokenResponse.md)\>

#### Defined in

[configuration/index.ts:228](https://github.com/livechat/lc-sdk-js/blob/25e113d/src/configuration/index.ts#L228)

___

### listAgents

▸ **listAgents**(`group_ids?`, `fields?`): `Promise`<[`Agent`](../interfaces/configuration_structures_structures.Agent.md)[]\>

Returns all Agents within a license.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `group_ids?` | `number`[] | groups to list agents from |
| `fields?` | `string`[] | additional fields to include |

#### Returns

`Promise`<[`Agent`](../interfaces/configuration_structures_structures.Agent.md)[]\>

#### Defined in

[configuration/index.ts:79](https://github.com/livechat/lc-sdk-js/blob/25e113d/src/configuration/index.ts#L79)

___

### listAutoAccesses

▸ **listAutoAccesses**(): `Promise`<[`AutoAccess`](../interfaces/configuration_structures_structures.AutoAccess.md)[]\>

Returns all existing auto access data structures.

#### Returns

`Promise`<[`AutoAccess`](../interfaces/configuration_structures_structures.AutoAccess.md)[]\>

#### Defined in

[configuration/index.ts:562](https://github.com/livechat/lc-sdk-js/blob/25e113d/src/configuration/index.ts#L562)

___

### listBotTemplates

▸ **listBotTemplates**(`owner_client_id?`): `Promise`<[`BotTemplate`](../interfaces/configuration_structures_structures.BotTemplate.md)[]\>

Lists bot templates.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner_client_id?` | `string` | clientID the bot templates are assigned to |

#### Returns

`Promise`<[`BotTemplate`](../interfaces/configuration_structures_structures.BotTemplate.md)[]\>

#### Defined in

[configuration/index.ts:316](https://github.com/livechat/lc-sdk-js/blob/25e113d/src/configuration/index.ts#L316)

___

### listBots

▸ **listBots**(`all?`, `fields?`): `Promise`<[`Bot`](../interfaces/configuration_structures_structures.Bot.md)[]\>

Lists all bots within license.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `all?` | `boolean` | switch if should return all bots or only caller's bots |
| `fields?` | [`BotFields`](../interfaces/configuration_structures_structures.BotFields.md) | additional fields to include |

#### Returns

`Promise`<[`Bot`](../interfaces/configuration_structures_structures.Bot.md)[]\>

#### Defined in

[configuration/index.ts:250](https://github.com/livechat/lc-sdk-js/blob/25e113d/src/configuration/index.ts#L250)

___

### listChannels

▸ **listChannels**(): `Promise`<[`ChannelActivity`](../interfaces/configuration_structures_structures.ChannelActivity.md)[]\>

Returns the summary of communication channels for your LiveChat product.

#### Returns

`Promise`<[`ChannelActivity`](../interfaces/configuration_structures_structures.ChannelActivity.md)[]\>

#### Defined in

[configuration/index.ts:613](https://github.com/livechat/lc-sdk-js/blob/25e113d/src/configuration/index.ts#L613)

___

### listGroups

▸ **listGroups**(`fields?`): `Promise`<[`Group`](../interfaces/configuration_structures_structures.Group.md)[]\>

Lists all existing groups.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fields?` | `string`[] | additional fields to include |

#### Returns

`Promise`<[`Group`](../interfaces/configuration_structures_structures.Group.md)[]\>

#### Defined in

[configuration/index.ts:385](https://github.com/livechat/lc-sdk-js/blob/25e113d/src/configuration/index.ts#L385)

___

### listGroupsProperties

▸ **listGroupsProperties**(`groupIDs?`, `namespace?`, `namePrefix?`): `Promise`<[`GroupProperties`](../interfaces/configuration_structures_structures.GroupProperties.md)[]\>

Lists groups' properties

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `groupIDs?` | `number`[] | list of groups whose properties will be returned |
| `namespace?` | `string` | namespace |
| `namePrefix?` | `string` | name prefix |

#### Returns

`Promise`<[`GroupProperties`](../interfaces/configuration_structures_structures.GroupProperties.md)[]\>

#### Defined in

[configuration/index.ts:657](https://github.com/livechat/lc-sdk-js/blob/25e113d/src/configuration/index.ts#L657)

___

### listLicenseProperties

▸ **listLicenseProperties**(`namespace_prefix?`, `name_prefix?`): `Promise`<[`Properties`](../interfaces/configuration_structures_structures.Properties.md)\>

Returns the properties set within a license.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `namespace_prefix?` | `string` | namespace prefix |
| `name_prefix?` | `string` | name prefix |

#### Returns

`Promise`<[`Properties`](../interfaces/configuration_structures_structures.Properties.md)\>

#### Defined in

[configuration/index.ts:454](https://github.com/livechat/lc-sdk-js/blob/25e113d/src/configuration/index.ts#L454)

___

### listProperties

▸ **listProperties**(`owner_client_id?`): `Promise`<[`PropertiesConfig`](../interfaces/configuration_structures_structures.PropertiesConfig.md)\>

Lists properties for given client_id.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `owner_client_id` | `string` | `""` | client_id of property owner |

#### Returns

`Promise`<[`PropertiesConfig`](../interfaces/configuration_structures_structures.PropertiesConfig.md)\>

#### Defined in

[configuration/index.ts:437](https://github.com/livechat/lc-sdk-js/blob/25e113d/src/configuration/index.ts#L437)

___

### listTags

▸ **listTags**(`groupIDs?`): `Promise`<[`Tag`](../interfaces/configuration_structures_structures.Tag.md)[]\>

Returns tags assigned to requested groups.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `groupIDs?` | `number`[] | filter tags by groups where there are assigned |

#### Returns

`Promise`<[`Tag`](../interfaces/configuration_structures_structures.Tag.md)[]\>

#### Defined in

[configuration/index.ts:638](https://github.com/livechat/lc-sdk-js/blob/25e113d/src/configuration/index.ts#L638)

___

### listWebhookNames

▸ **listWebhookNames**(`version?`): `Promise`<[`WebhookData`](../interfaces/configuration_structures_structures.WebhookData.md)[]\>

Lists webhooks available in given API version

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `version?` | `string` | version of API for webhooks |

#### Returns

`Promise`<[`WebhookData`](../interfaces/configuration_structures_structures.WebhookData.md)[]\>

#### Defined in

[configuration/index.ts:523](https://github.com/livechat/lc-sdk-js/blob/25e113d/src/configuration/index.ts#L523)

___

### listWebhooks

▸ **listWebhooks**(`owner_client_id?`): `Promise`<[`RegisteredWebhook`](../interfaces/configuration_structures_structures.RegisteredWebhook.md)[]\>

Lists registered webhooks.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `owner_client_id` | `string` | `""` | must be provided when authorizing with Personal Access Token |

#### Returns

`Promise`<[`RegisteredWebhook`](../interfaces/configuration_structures_structures.RegisteredWebhook.md)[]\>

#### Defined in

[configuration/index.ts:506](https://github.com/livechat/lc-sdk-js/blob/25e113d/src/configuration/index.ts#L506)

___

### publishProperty

▸ **publishProperty**(`name`, `owner_client_id?`, `read`, `write`): `Promise`<[`EmptyResponse`](../interfaces/configuration_structures_responses.EmptyResponse.md)\>

Publishes private property.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `name` | `string` | `undefined` | property name |
| `owner_client_id` | `string` | `""` | clientID of property owner |
| `read` | `boolean` | `undefined` | determines whether non-owners can read the property |
| `write` | `boolean` | `undefined` | determines whether non-owners can write the property |

#### Returns

`Promise`<[`EmptyResponse`](../interfaces/configuration_structures_responses.EmptyResponse.md)\>

#### Defined in

[configuration/index.ts:422](https://github.com/livechat/lc-sdk-js/blob/25e113d/src/configuration/index.ts#L422)

___

### registerProperty

▸ **registerProperty**(`property`): `Promise`<[`EmptyResponse`](../interfaces/configuration_structures_responses.EmptyResponse.md)\>

Registers private property.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `property` | [`PropertyConfig`](../interfaces/configuration_structures_structures.PropertyConfig.md) | property to register |

#### Returns

`Promise`<[`EmptyResponse`](../interfaces/configuration_structures_responses.EmptyResponse.md)\>

#### Defined in

[configuration/index.ts:402](https://github.com/livechat/lc-sdk-js/blob/25e113d/src/configuration/index.ts#L402)

___

### registerWebhook

▸ **registerWebhook**(`webhook`, `owner_client_id?`): `Promise`<[`RegisterWebhookResponse`](../interfaces/configuration_structures_responses.RegisterWebhookResponse.md)\>

Registers webhook on a license.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `webhook` | [`Webhook`](../interfaces/configuration_structures_structures.Webhook.md) | `undefined` | webhook to register |
| `owner_client_id` | `string` | `""` | must be provided when authorizing with Personal Access Token |

#### Returns

`Promise`<[`RegisterWebhookResponse`](../interfaces/configuration_structures_responses.RegisterWebhookResponse.md)\>

#### Defined in

[configuration/index.ts:498](https://github.com/livechat/lc-sdk-js/blob/25e113d/src/configuration/index.ts#L498)

___

### requestAgentUnsuspension

▸ **requestAgentUnsuspension**(): `Promise`<[`EmptyResponse`](../interfaces/configuration_structures_responses.EmptyResponse.md)\>

A suspended Agent can send emails to license owners and vice owners with an unsuspension request.

#### Returns

`Promise`<[`EmptyResponse`](../interfaces/configuration_structures_responses.EmptyResponse.md)\>

#### Defined in

[configuration/index.ts:151](https://github.com/livechat/lc-sdk-js/blob/25e113d/src/configuration/index.ts#L151)

___

### resetBotSecret

▸ **resetBotSecret**(`id`, `owner_client_id?`): `Promise`<[`ResetBotSecretResponse`](../interfaces/configuration_structures_responses.ResetBotSecretResponse.md)\>

Resets secret of Bot specified by id.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of bot to reset secret |
| `owner_client_id?` | `string` | clientID the bot is assigned to |

#### Returns

`Promise`<[`ResetBotSecretResponse`](../interfaces/configuration_structures_responses.ResetBotSecretResponse.md)\>

#### Defined in

[configuration/index.ts:217](https://github.com/livechat/lc-sdk-js/blob/25e113d/src/configuration/index.ts#L217)

___

### resetBotTemplateSecret

▸ **resetBotTemplateSecret**(`id`, `affect_existing_installations?`, `owner_client_id?`): `Promise`<[`ResetBotTemplateSecretResponse`](../interfaces/configuration_structures_responses.ResetBotTemplateSecretResponse.md)\>

Resets bot template secret specified by id.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of bot template to reset secret |
| `affect_existing_installations?` | `boolean` | if true, new secret is set to for all existing bots based on this template |
| `owner_client_id?` | `string` | clientID the bot template is assigned to |

#### Returns

`Promise`<[`ResetBotTemplateSecretResponse`](../interfaces/configuration_structures_responses.ResetBotTemplateSecretResponse.md)\>

#### Defined in

[configuration/index.ts:326](https://github.com/livechat/lc-sdk-js/blob/25e113d/src/configuration/index.ts#L326)

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

[internal/index.ts:36](https://github.com/livechat/lc-sdk-js/blob/25e113d/src/internal/index.ts#L36)

___

### setAuthorId

▸ **setAuthorId**(`author_id?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `author_id?` | `string` |

#### Returns

`void`

#### Inherited from

[WebAPI](internal.WebAPI.md).[setAuthorId](internal.WebAPI.md#setauthorid)

#### Defined in

[internal/index.ts:79](https://github.com/livechat/lc-sdk-js/blob/25e113d/src/internal/index.ts#L79)

___

### suspendAgent

▸ **suspendAgent**(`id`): `Promise`<[`EmptyResponse`](../interfaces/configuration_structures_responses.EmptyResponse.md)\>

Suspends an Agent specified by id.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of agent to suspend |

#### Returns

`Promise`<[`EmptyResponse`](../interfaces/configuration_structures_responses.EmptyResponse.md)\>

#### Defined in

[configuration/index.ts:120](https://github.com/livechat/lc-sdk-js/blob/25e113d/src/configuration/index.ts#L120)

___

### unregisterProperty

▸ **unregisterProperty**(`name`, `owner_client_id?`): `Promise`<[`EmptyResponse`](../interfaces/configuration_structures_responses.EmptyResponse.md)\>

Unregisters private property.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `name` | `string` | `undefined` | property name |
| `owner_client_id` | `string` | `""` | clientID of property owner |

#### Returns

`Promise`<[`EmptyResponse`](../interfaces/configuration_structures_responses.EmptyResponse.md)\>

#### Defined in

[configuration/index.ts:411](https://github.com/livechat/lc-sdk-js/blob/25e113d/src/configuration/index.ts#L411)

___

### unregisterWebhook

▸ **unregisterWebhook**(`id`, `owner_client_id?`): `Promise`<[`EmptyResponse`](../interfaces/configuration_structures_responses.EmptyResponse.md)\>

Removes webhook from license.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `id` | `string` | `undefined` | ID of webhook to unregister |
| `owner_client_id` | `string` | `""` | must be provided when authorizing with Personal Access Token |

#### Returns

`Promise`<[`EmptyResponse`](../interfaces/configuration_structures_responses.EmptyResponse.md)\>

#### Defined in

[configuration/index.ts:515](https://github.com/livechat/lc-sdk-js/blob/25e113d/src/configuration/index.ts#L515)

___

### unsuspendAgent

▸ **unsuspendAgent**(`id`): `Promise`<[`EmptyResponse`](../interfaces/configuration_structures_responses.EmptyResponse.md)\>

Unsuspends an Agent specified by id.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of agent to unsuspend |

#### Returns

`Promise`<[`EmptyResponse`](../interfaces/configuration_structures_responses.EmptyResponse.md)\>

#### Defined in

[configuration/index.ts:136](https://github.com/livechat/lc-sdk-js/blob/25e113d/src/configuration/index.ts#L136)

___

### updateAgent

▸ **updateAgent**(`id`, `fields`): `Promise`<[`EmptyResponse`](../interfaces/configuration_structures_responses.EmptyResponse.md)\>

Updates the properties of an Agent specified by id.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of agent to update |
| `fields` | [`AgentFields`](../interfaces/configuration_structures_structures.AgentFields.md) | properties to update |

#### Returns

`Promise`<[`EmptyResponse`](../interfaces/configuration_structures_responses.EmptyResponse.md)\>

#### Defined in

[configuration/index.ts:88](https://github.com/livechat/lc-sdk-js/blob/25e113d/src/configuration/index.ts#L88)

___

### updateAutoAccess

▸ **updateAutoAccess**(`id`, `access`): `Promise`<[`EmptyResponse`](../interfaces/configuration_structures_responses.EmptyResponse.md)\>

Updates an existing auto access. Only specified fields are updated (overwritten), leaving unspecified fields unchanged.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of the auto access to modify |
| `access` | [`UpdateAutoAccessRequest`](../interfaces/configuration_structures_structures.UpdateAutoAccessRequest.md) | fields of auto access you want to overwrite |

#### Returns

`Promise`<[`EmptyResponse`](../interfaces/configuration_structures_responses.EmptyResponse.md)\>

#### Defined in

[configuration/index.ts:579](https://github.com/livechat/lc-sdk-js/blob/25e113d/src/configuration/index.ts#L579)

___

### updateBot

▸ **updateBot**(`id`, `fields`): `Promise`<[`EmptyResponse`](../interfaces/configuration_structures_responses.EmptyResponse.md)\>

Updates the properties of Bot specified by id.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of bot to update |
| `fields` | [`BotFields`](../interfaces/configuration_structures_structures.BotFields.md) | properties to update |

#### Returns

`Promise`<[`EmptyResponse`](../interfaces/configuration_structures_responses.EmptyResponse.md)\>

#### Defined in

[configuration/index.ts:208](https://github.com/livechat/lc-sdk-js/blob/25e113d/src/configuration/index.ts#L208)

___

### updateBotTemplate

▸ **updateBotTemplate**(`id`, `fields`, `affect_existing_installations?`, `owner_client_id?`): `Promise`<[`EmptyResponse`](../interfaces/configuration_structures_responses.EmptyResponse.md)\>

Updates the properties of the Bot Template specified by id.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of bot template to update |
| `fields` | [`BotTemplateFieldsUpdate`](../interfaces/configuration_structures_structures.BotTemplateFieldsUpdate.md) | bot template properties |
| `affect_existing_installations?` | `boolean` | if true, bots based on this template will be updated on all licenses that have given application installed |
| `owner_client_id?` | `string` | clientID the bot template is assigned to |

#### Returns

`Promise`<[`EmptyResponse`](../interfaces/configuration_structures_responses.EmptyResponse.md)\>

#### Defined in

[configuration/index.ts:288](https://github.com/livechat/lc-sdk-js/blob/25e113d/src/configuration/index.ts#L288)

___

### updateGroup

▸ **updateGroup**(`id`, `name?`, `agent_priorities?`, `language_code?`): `Promise`<[`EmptyResponse`](../interfaces/configuration_structures_responses.EmptyResponse.md)\>

Updates an existing group.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `number` | group id |
| `name?` | `string` | group name |
| `agent_priorities?` | [`AgentPriorities`](../interfaces/configuration_structures_structures.AgentPriorities.md) | agents priorities within a group |
| `language_code?` | `string` | groups language |

#### Returns

`Promise`<[`EmptyResponse`](../interfaces/configuration_structures_responses.EmptyResponse.md)\>

#### Defined in

[configuration/index.ts:359](https://github.com/livechat/lc-sdk-js/blob/25e113d/src/configuration/index.ts#L359)

___

### updateGroupProperties

▸ **updateGroupProperties**(`group_id`, `properties`): `Promise`<[`EmptyResponse`](../interfaces/configuration_structures_responses.EmptyResponse.md)\>

Updates a property value within a group as the property location. This operation doesn't overwrite the existing values.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `group_id` | `number` | group ID to update properties |
| `properties` | [`Properties`](../interfaces/configuration_structures_structures.Properties.md) | properties to update |

#### Returns

`Promise`<[`EmptyResponse`](../interfaces/configuration_structures_responses.EmptyResponse.md)\>

#### Defined in

[configuration/index.ts:474](https://github.com/livechat/lc-sdk-js/blob/25e113d/src/configuration/index.ts#L474)

___

### updateLicenseProperties

▸ **updateLicenseProperties**(`properties`): `Promise`<[`EmptyResponse`](../interfaces/configuration_structures_responses.EmptyResponse.md)\>

Updates a property value within a license. This operation doesn't overwrite the existing values.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `properties` | [`Properties`](../interfaces/configuration_structures_structures.Properties.md) | properties to update |

#### Returns

`Promise`<[`EmptyResponse`](../interfaces/configuration_structures_responses.EmptyResponse.md)\>

#### Defined in

[configuration/index.ts:445](https://github.com/livechat/lc-sdk-js/blob/25e113d/src/configuration/index.ts#L445)

___

### updateTag

▸ **updateTag**(`name`, `groupIDs?`): `Promise`<[`EmptyResponse`](../interfaces/configuration_structures_responses.EmptyResponse.md)\>

Updates an existing tag.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | name of the updated tag |
| `groupIDs?` | `number`[] | list of groups where tag will be assigned |

#### Returns

`Promise`<[`EmptyResponse`](../interfaces/configuration_structures_responses.EmptyResponse.md)\>

#### Defined in

[configuration/index.ts:647](https://github.com/livechat/lc-sdk-js/blob/25e113d/src/configuration/index.ts#L647)
