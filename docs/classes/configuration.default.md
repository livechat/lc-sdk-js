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
- [createCannedResponse](configuration.default.md#createcannedresponse)
- [createGroup](configuration.default.md#creategroup)
- [createTag](configuration.default.md#createtag)
- [deleteAgent](configuration.default.md#deleteagent)
- [deleteAutoAccess](configuration.default.md#deleteautoaccess)
- [deleteBot](configuration.default.md#deletebot)
- [deleteBotTemplate](configuration.default.md#deletebottemplate)
- [deleteCannedResponse](configuration.default.md#deletecannedresponse)
- [deleteGroup](configuration.default.md#deletegroup)
- [deleteGroupProperties](configuration.default.md#deletegroupproperties)
- [deleteLicenseProperties](configuration.default.md#deletelicenseproperties)
- [deleteTag](configuration.default.md#deletetag)
- [disableLicenseWebhooks](configuration.default.md#disablelicensewebhooks)
- [enableLicenseWebhooks](configuration.default.md#enablelicensewebhooks)
- [getAgent](configuration.default.md#getagent)
- [getBot](configuration.default.md#getbot)
- [getGroup](configuration.default.md#getgroup)
- [getLicenseWebhooksState](configuration.default.md#getlicensewebhooksstate)
- [issueBotToken](configuration.default.md#issuebottoken)
- [listAgents](configuration.default.md#listagents)
- [listAutoAccesses](configuration.default.md#listautoaccesses)
- [listBotTemplates](configuration.default.md#listbottemplates)
- [listBots](configuration.default.md#listbots)
- [listCannedResponses](configuration.default.md#listcannedresponses)
- [listChannels](configuration.default.md#listchannels)
- [listGroups](configuration.default.md#listgroups)
- [listGroupsProperties](configuration.default.md#listgroupsproperties)
- [listLicenseProperties](configuration.default.md#listlicenseproperties)
- [listProperties](configuration.default.md#listproperties)
- [listTags](configuration.default.md#listtags)
- [listWebhookNames](configuration.default.md#listwebhooknames)
- [listWebhooks](configuration.default.md#listwebhooks)
- [publishProperty](configuration.default.md#publishproperty)
- [reactivateEmail](configuration.default.md#reactivateemail)
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
- [updateCannedResponse](configuration.default.md#updatecannedresponse)
- [updateCompanyDetails](configuration.default.md#updatecompanydetails)
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
| `tokenGetter` | [`TokenGetter`](../modules/authorization_token_getter.md#tokengetter) |
| `options?` | [`WebAPIOptions`](../interfaces/configuration_structures_structures.WebAPIOptions.md) |

#### Overrides

[WebAPI](internal.WebAPI.md).[constructor](internal.WebAPI.md#constructor)

#### Defined in

[configuration/index.ts:48](https://github.com/livechat/lc-sdk-js/blob/2ce9409/src/configuration/index.ts#L48)

## Properties

### APIURL

• **APIURL**: `string`

#### Inherited from

[WebAPI](internal.WebAPI.md).[APIURL](internal.WebAPI.md#apiurl)

#### Defined in

[internal/index.ts:13](https://github.com/livechat/lc-sdk-js/blob/2ce9409/src/internal/index.ts#L13)

___

### author\_id

• `Optional` **author\_id**: `string`

#### Inherited from

[WebAPI](internal.WebAPI.md).[author_id](internal.WebAPI.md#author_id)

#### Defined in

[internal/index.ts:15](https://github.com/livechat/lc-sdk-js/blob/2ce9409/src/internal/index.ts#L15)

___

### clientID

• `Protected` `Readonly` **clientID**: `string`

#### Inherited from

[WebAPI](internal.WebAPI.md).[clientID](internal.WebAPI.md#clientid)

#### Defined in

[internal/index.ts:19](https://github.com/livechat/lc-sdk-js/blob/2ce9409/src/internal/index.ts#L19)

___

### tokenGetter

• `Protected` `Readonly` **tokenGetter**: [`TokenGetter`](../modules/authorization_token_getter.md#tokengetter)

#### Inherited from

[WebAPI](internal.WebAPI.md).[tokenGetter](internal.WebAPI.md#tokengetter)

#### Defined in

[internal/index.ts:20](https://github.com/livechat/lc-sdk-js/blob/2ce9409/src/internal/index.ts#L20)

___

### type

• `Protected` `Readonly` **type**: `apiType`

#### Inherited from

[WebAPI](internal.WebAPI.md).[type](internal.WebAPI.md#type)

#### Defined in

[internal/index.ts:21](https://github.com/livechat/lc-sdk-js/blob/2ce9409/src/internal/index.ts#L21)

___

### version

• **version**: `string`

#### Inherited from

[WebAPI](internal.WebAPI.md).[version](internal.WebAPI.md#version)

#### Defined in

[internal/index.ts:14](https://github.com/livechat/lc-sdk-js/blob/2ce9409/src/internal/index.ts#L14)

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

[configuration/index.ts:559](https://github.com/livechat/lc-sdk-js/blob/2ce9409/src/configuration/index.ts#L559)

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

[configuration/index.ts:163](https://github.com/livechat/lc-sdk-js/blob/2ce9409/src/configuration/index.ts#L163)

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

[configuration/index.ts:171](https://github.com/livechat/lc-sdk-js/blob/2ce9409/src/configuration/index.ts#L171)

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

[configuration/index.ts:65](https://github.com/livechat/lc-sdk-js/blob/2ce9409/src/configuration/index.ts#L65)

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

[configuration/index.ts:187](https://github.com/livechat/lc-sdk-js/blob/2ce9409/src/configuration/index.ts#L187)

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

[configuration/index.ts:116](https://github.com/livechat/lc-sdk-js/blob/2ce9409/src/configuration/index.ts#L116)

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

[configuration/index.ts:203](https://github.com/livechat/lc-sdk-js/blob/2ce9409/src/configuration/index.ts#L203)

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

[configuration/index.ts:132](https://github.com/livechat/lc-sdk-js/blob/2ce9409/src/configuration/index.ts#L132)

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

[configuration/index.ts:148](https://github.com/livechat/lc-sdk-js/blob/2ce9409/src/configuration/index.ts#L148)

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

[configuration/index.ts:100](https://github.com/livechat/lc-sdk-js/blob/2ce9409/src/configuration/index.ts#L100)

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

[configuration/index.ts:245](https://github.com/livechat/lc-sdk-js/blob/2ce9409/src/configuration/index.ts#L245)

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

[configuration/index.ts:594](https://github.com/livechat/lc-sdk-js/blob/2ce9409/src/configuration/index.ts#L594)

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

[configuration/index.ts:57](https://github.com/livechat/lc-sdk-js/blob/2ce9409/src/configuration/index.ts#L57)

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

[configuration/index.ts:179](https://github.com/livechat/lc-sdk-js/blob/2ce9409/src/configuration/index.ts#L179)

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

[configuration/index.ts:275](https://github.com/livechat/lc-sdk-js/blob/2ce9409/src/configuration/index.ts#L275)

___

### createCannedResponse

▸ **createCannedResponse**(`request`): `Promise`<[`CreateCannedResponseResponse`](../interfaces/configuration_structures_responses.CreateCannedResponseResponse.md)\>

Creates a new canned response.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `request` | [`CreateCannedResponseRequest`](../interfaces/configuration_structures_structures.CreateCannedResponseRequest.md) | canned response details |

#### Returns

`Promise`<[`CreateCannedResponseResponse`](../interfaces/configuration_structures_responses.CreateCannedResponseResponse.md)\>

#### Defined in

[configuration/index.ts:670](https://github.com/livechat/lc-sdk-js/blob/2ce9409/src/configuration/index.ts#L670)

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

[configuration/index.ts:344](https://github.com/livechat/lc-sdk-js/blob/2ce9409/src/configuration/index.ts#L344)

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

[configuration/index.ts:610](https://github.com/livechat/lc-sdk-js/blob/2ce9409/src/configuration/index.ts#L610)

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

[configuration/index.ts:108](https://github.com/livechat/lc-sdk-js/blob/2ce9409/src/configuration/index.ts#L108)

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

[configuration/index.ts:574](https://github.com/livechat/lc-sdk-js/blob/2ce9409/src/configuration/index.ts#L574)

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

[configuration/index.ts:195](https://github.com/livechat/lc-sdk-js/blob/2ce9409/src/configuration/index.ts#L195)

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

[configuration/index.ts:308](https://github.com/livechat/lc-sdk-js/blob/2ce9409/src/configuration/index.ts#L308)

___

### deleteCannedResponse

▸ **deleteCannedResponse**(`id`): `Promise`<[`EmptyResponse`](../interfaces/configuration_structures_responses.EmptyResponse.md)\>

Deletes a canned response.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `number` | ID of the canned response to delete |

#### Returns

`Promise`<[`EmptyResponse`](../interfaces/configuration_structures_responses.EmptyResponse.md)\>

#### Defined in

[configuration/index.ts:694](https://github.com/livechat/lc-sdk-js/blob/2ce9409/src/configuration/index.ts#L694)

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

[configuration/index.ts:381](https://github.com/livechat/lc-sdk-js/blob/2ce9409/src/configuration/index.ts#L381)

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

[configuration/index.ts:490](https://github.com/livechat/lc-sdk-js/blob/2ce9409/src/configuration/index.ts#L490)

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

[configuration/index.ts:469](https://github.com/livechat/lc-sdk-js/blob/2ce9409/src/configuration/index.ts#L469)

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

[configuration/index.ts:618](https://github.com/livechat/lc-sdk-js/blob/2ce9409/src/configuration/index.ts#L618)

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

[configuration/index.ts:543](https://github.com/livechat/lc-sdk-js/blob/2ce9409/src/configuration/index.ts#L543)

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

[configuration/index.ts:535](https://github.com/livechat/lc-sdk-js/blob/2ce9409/src/configuration/index.ts#L535)

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

[configuration/index.ts:74](https://github.com/livechat/lc-sdk-js/blob/2ce9409/src/configuration/index.ts#L74)

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

[configuration/index.ts:263](https://github.com/livechat/lc-sdk-js/blob/2ce9409/src/configuration/index.ts#L263)

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

[configuration/index.ts:398](https://github.com/livechat/lc-sdk-js/blob/2ce9409/src/configuration/index.ts#L398)

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

[configuration/index.ts:551](https://github.com/livechat/lc-sdk-js/blob/2ce9409/src/configuration/index.ts#L551)

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

[configuration/index.ts:232](https://github.com/livechat/lc-sdk-js/blob/2ce9409/src/configuration/index.ts#L232)

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

[configuration/index.ts:83](https://github.com/livechat/lc-sdk-js/blob/2ce9409/src/configuration/index.ts#L83)

___

### listAutoAccesses

▸ **listAutoAccesses**(): `Promise`<[`AutoAccess`](../interfaces/configuration_structures_structures.AutoAccess.md)[]\>

Returns all existing auto access data structures.

#### Returns

`Promise`<[`AutoAccess`](../interfaces/configuration_structures_structures.AutoAccess.md)[]\>

#### Defined in

[configuration/index.ts:566](https://github.com/livechat/lc-sdk-js/blob/2ce9409/src/configuration/index.ts#L566)

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

[configuration/index.ts:320](https://github.com/livechat/lc-sdk-js/blob/2ce9409/src/configuration/index.ts#L320)

___

### listBots

▸ **listBots**(`all?`, `fields?`): `Promise`<[`Bot`](../interfaces/configuration_structures_structures.Bot.md)[]\>

Lists all bots within license.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `all?` | `boolean` | switch if it should return all bots or only caller's bots |
| `fields?` | [`BotFields`](../interfaces/configuration_structures_structures.BotFields.md) | additional fields to include |

#### Returns

`Promise`<[`Bot`](../interfaces/configuration_structures_structures.Bot.md)[]\>

#### Defined in

[configuration/index.ts:254](https://github.com/livechat/lc-sdk-js/blob/2ce9409/src/configuration/index.ts#L254)

___

### listCannedResponses

▸ **listCannedResponses**(`options?`): `Promise`<[`ListCannedResponsesResponse`](../interfaces/configuration_structures_structures.ListCannedResponsesResponse.md)\>

Returns canned responses with optional filtering and pagination.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | [`ListCannedResponsesRequest`](../interfaces/configuration_structures_structures.ListCannedResponsesRequest.md) | filtering and pagination options |

#### Returns

`Promise`<[`ListCannedResponsesResponse`](../interfaces/configuration_structures_structures.ListCannedResponsesResponse.md)\>

#### Defined in

[configuration/index.ts:678](https://github.com/livechat/lc-sdk-js/blob/2ce9409/src/configuration/index.ts#L678)

___

### listChannels

▸ **listChannels**(): `Promise`<[`ChannelActivity`](../interfaces/configuration_structures_structures.ChannelActivity.md)[]\>

Returns the summary of communication channels for your LiveChat product.

#### Returns

`Promise`<[`ChannelActivity`](../interfaces/configuration_structures_structures.ChannelActivity.md)[]\>

#### Defined in

[configuration/index.ts:601](https://github.com/livechat/lc-sdk-js/blob/2ce9409/src/configuration/index.ts#L601)

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

[configuration/index.ts:389](https://github.com/livechat/lc-sdk-js/blob/2ce9409/src/configuration/index.ts#L389)

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

[configuration/index.ts:645](https://github.com/livechat/lc-sdk-js/blob/2ce9409/src/configuration/index.ts#L645)

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

[configuration/index.ts:458](https://github.com/livechat/lc-sdk-js/blob/2ce9409/src/configuration/index.ts#L458)

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

[configuration/index.ts:441](https://github.com/livechat/lc-sdk-js/blob/2ce9409/src/configuration/index.ts#L441)

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

[configuration/index.ts:626](https://github.com/livechat/lc-sdk-js/blob/2ce9409/src/configuration/index.ts#L626)

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

[configuration/index.ts:527](https://github.com/livechat/lc-sdk-js/blob/2ce9409/src/configuration/index.ts#L527)

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

[configuration/index.ts:510](https://github.com/livechat/lc-sdk-js/blob/2ce9409/src/configuration/index.ts#L510)

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

[configuration/index.ts:426](https://github.com/livechat/lc-sdk-js/blob/2ce9409/src/configuration/index.ts#L426)

___

### reactivateEmail

▸ **reactivateEmail**(`agentID`): `Promise`<[`EmptyResponse`](../interfaces/configuration_structures_responses.EmptyResponse.md)\>

Reactivates bounced email

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `agentID` | `string` | email address of an agent |

#### Returns

`Promise`<[`EmptyResponse`](../interfaces/configuration_structures_responses.EmptyResponse.md)\>

#### Defined in

[configuration/index.ts:653](https://github.com/livechat/lc-sdk-js/blob/2ce9409/src/configuration/index.ts#L653)

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

[configuration/index.ts:406](https://github.com/livechat/lc-sdk-js/blob/2ce9409/src/configuration/index.ts#L406)

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

[configuration/index.ts:502](https://github.com/livechat/lc-sdk-js/blob/2ce9409/src/configuration/index.ts#L502)

___

### requestAgentUnsuspension

▸ **requestAgentUnsuspension**(): `Promise`<[`EmptyResponse`](../interfaces/configuration_structures_responses.EmptyResponse.md)\>

A suspended Agent can send emails to license owners and vice owners with an unsuspension request.

#### Returns

`Promise`<[`EmptyResponse`](../interfaces/configuration_structures_responses.EmptyResponse.md)\>

#### Defined in

[configuration/index.ts:155](https://github.com/livechat/lc-sdk-js/blob/2ce9409/src/configuration/index.ts#L155)

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

[configuration/index.ts:221](https://github.com/livechat/lc-sdk-js/blob/2ce9409/src/configuration/index.ts#L221)

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

[configuration/index.ts:330](https://github.com/livechat/lc-sdk-js/blob/2ce9409/src/configuration/index.ts#L330)

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

[internal/index.ts:30](https://github.com/livechat/lc-sdk-js/blob/2ce9409/src/internal/index.ts#L30)

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

[internal/index.ts:73](https://github.com/livechat/lc-sdk-js/blob/2ce9409/src/internal/index.ts#L73)

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

[configuration/index.ts:124](https://github.com/livechat/lc-sdk-js/blob/2ce9409/src/configuration/index.ts#L124)

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

[configuration/index.ts:415](https://github.com/livechat/lc-sdk-js/blob/2ce9409/src/configuration/index.ts#L415)

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

[configuration/index.ts:519](https://github.com/livechat/lc-sdk-js/blob/2ce9409/src/configuration/index.ts#L519)

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

[configuration/index.ts:140](https://github.com/livechat/lc-sdk-js/blob/2ce9409/src/configuration/index.ts#L140)

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

[configuration/index.ts:92](https://github.com/livechat/lc-sdk-js/blob/2ce9409/src/configuration/index.ts#L92)

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

[configuration/index.ts:583](https://github.com/livechat/lc-sdk-js/blob/2ce9409/src/configuration/index.ts#L583)

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

[configuration/index.ts:212](https://github.com/livechat/lc-sdk-js/blob/2ce9409/src/configuration/index.ts#L212)

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

[configuration/index.ts:292](https://github.com/livechat/lc-sdk-js/blob/2ce9409/src/configuration/index.ts#L292)

___

### updateCannedResponse

▸ **updateCannedResponse**(`request`): `Promise`<[`EmptyResponse`](../interfaces/configuration_structures_responses.EmptyResponse.md)\>

Updates an existing canned response.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `request` | [`UpdateCannedResponseRequest`](../interfaces/configuration_structures_structures.UpdateCannedResponseRequest.md) | canned response update details |

#### Returns

`Promise`<[`EmptyResponse`](../interfaces/configuration_structures_responses.EmptyResponse.md)\>

#### Defined in

[configuration/index.ts:686](https://github.com/livechat/lc-sdk-js/blob/2ce9409/src/configuration/index.ts#L686)

___

### updateCompanyDetails

▸ **updateCompanyDetails**(`companyDetails`, `enrich`): `Promise`<[`EmptyResponse`](../interfaces/configuration_structures_responses.EmptyResponse.md)\>

Updates company details in the license.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `companyDetails` | [`CompanyDetails`](../interfaces/configuration_structures_structures.CompanyDetails.md) | company details to update |
| `enrich` | `boolean` | if true, system will search for company's url or email domain to automatically fill empty fields |

#### Returns

`Promise`<[`EmptyResponse`](../interfaces/configuration_structures_responses.EmptyResponse.md)\>

#### Defined in

[configuration/index.ts:662](https://github.com/livechat/lc-sdk-js/blob/2ce9409/src/configuration/index.ts#L662)

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

[configuration/index.ts:363](https://github.com/livechat/lc-sdk-js/blob/2ce9409/src/configuration/index.ts#L363)

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

[configuration/index.ts:478](https://github.com/livechat/lc-sdk-js/blob/2ce9409/src/configuration/index.ts#L478)

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

[configuration/index.ts:449](https://github.com/livechat/lc-sdk-js/blob/2ce9409/src/configuration/index.ts#L449)

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

[configuration/index.ts:635](https://github.com/livechat/lc-sdk-js/blob/2ce9409/src/configuration/index.ts#L635)
