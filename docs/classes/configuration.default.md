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
- [createGreeting](configuration.default.md#creategreeting)
- [createGroup](configuration.default.md#creategroup)
- [createTag](configuration.default.md#createtag)
- [deleteAgent](configuration.default.md#deleteagent)
- [deleteAutoAccess](configuration.default.md#deleteautoaccess)
- [deleteBot](configuration.default.md#deletebot)
- [deleteBotTemplate](configuration.default.md#deletebottemplate)
- [deleteCannedResponse](configuration.default.md#deletecannedresponse)
- [deleteGreeting](configuration.default.md#deletegreeting)
- [deleteGroup](configuration.default.md#deletegroup)
- [deleteGroupProperties](configuration.default.md#deletegroupproperties)
- [deleteLicenseProperties](configuration.default.md#deletelicenseproperties)
- [deleteTag](configuration.default.md#deletetag)
- [disableLicenseWebhooks](configuration.default.md#disablelicensewebhooks)
- [enableLicenseWebhooks](configuration.default.md#enablelicensewebhooks)
- [getAgent](configuration.default.md#getagent)
- [getBot](configuration.default.md#getbot)
- [getGreeting](configuration.default.md#getgreeting)
- [getGroup](configuration.default.md#getgroup)
- [getLicenseWebhooksState](configuration.default.md#getlicensewebhooksstate)
- [issueBotToken](configuration.default.md#issuebottoken)
- [listAgents](configuration.default.md#listagents)
- [listAutoAccesses](configuration.default.md#listautoaccesses)
- [listBotTemplates](configuration.default.md#listbottemplates)
- [listBots](configuration.default.md#listbots)
- [listCannedResponses](configuration.default.md#listcannedresponses)
- [listChannels](configuration.default.md#listchannels)
- [listGreetings](configuration.default.md#listgreetings)
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
- [updateGreeting](configuration.default.md#updategreeting)
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

[configuration/index.ts:54](https://github.com/livechat/lc-sdk-js/blob/7985816/src/configuration/index.ts#L54)

## Properties

### APIURL

• **APIURL**: `string`

#### Inherited from

[WebAPI](internal.WebAPI.md).[APIURL](internal.WebAPI.md#apiurl)

#### Defined in

[internal/index.ts:14](https://github.com/livechat/lc-sdk-js/blob/7985816/src/internal/index.ts#L14)

___

### author\_id

• `Optional` **author\_id**: `string`

#### Inherited from

[WebAPI](internal.WebAPI.md).[author_id](internal.WebAPI.md#author_id)

#### Defined in

[internal/index.ts:16](https://github.com/livechat/lc-sdk-js/blob/7985816/src/internal/index.ts#L16)

___

### clientID

• `Protected` `Readonly` **clientID**: `string`

#### Inherited from

[WebAPI](internal.WebAPI.md).[clientID](internal.WebAPI.md#clientid)

#### Defined in

[internal/index.ts:20](https://github.com/livechat/lc-sdk-js/blob/7985816/src/internal/index.ts#L20)

___

### tokenGetter

• `Protected` `Readonly` **tokenGetter**: [`TokenGetter`](../modules/authorization_token_getter.md#tokengetter)

#### Inherited from

[WebAPI](internal.WebAPI.md).[tokenGetter](internal.WebAPI.md#tokengetter)

#### Defined in

[internal/index.ts:21](https://github.com/livechat/lc-sdk-js/blob/7985816/src/internal/index.ts#L21)

___

### type

• `Protected` `Readonly` **type**: `apiType`

#### Inherited from

[WebAPI](internal.WebAPI.md).[type](internal.WebAPI.md#type)

#### Defined in

[internal/index.ts:22](https://github.com/livechat/lc-sdk-js/blob/7985816/src/internal/index.ts#L22)

___

### version

• **version**: `string`

#### Inherited from

[WebAPI](internal.WebAPI.md).[version](internal.WebAPI.md#version)

#### Defined in

[internal/index.ts:15](https://github.com/livechat/lc-sdk-js/blob/7985816/src/internal/index.ts#L15)

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

[configuration/index.ts:565](https://github.com/livechat/lc-sdk-js/blob/7985816/src/configuration/index.ts#L565)

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

[configuration/index.ts:169](https://github.com/livechat/lc-sdk-js/blob/7985816/src/configuration/index.ts#L169)

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

[configuration/index.ts:177](https://github.com/livechat/lc-sdk-js/blob/7985816/src/configuration/index.ts#L177)

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

[configuration/index.ts:71](https://github.com/livechat/lc-sdk-js/blob/7985816/src/configuration/index.ts#L71)

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

[configuration/index.ts:193](https://github.com/livechat/lc-sdk-js/blob/7985816/src/configuration/index.ts#L193)

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

[configuration/index.ts:122](https://github.com/livechat/lc-sdk-js/blob/7985816/src/configuration/index.ts#L122)

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

[configuration/index.ts:209](https://github.com/livechat/lc-sdk-js/blob/7985816/src/configuration/index.ts#L209)

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

[configuration/index.ts:138](https://github.com/livechat/lc-sdk-js/blob/7985816/src/configuration/index.ts#L138)

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

[configuration/index.ts:154](https://github.com/livechat/lc-sdk-js/blob/7985816/src/configuration/index.ts#L154)

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

[configuration/index.ts:106](https://github.com/livechat/lc-sdk-js/blob/7985816/src/configuration/index.ts#L106)

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

[configuration/index.ts:251](https://github.com/livechat/lc-sdk-js/blob/7985816/src/configuration/index.ts#L251)

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

[configuration/index.ts:600](https://github.com/livechat/lc-sdk-js/blob/7985816/src/configuration/index.ts#L600)

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

[configuration/index.ts:63](https://github.com/livechat/lc-sdk-js/blob/7985816/src/configuration/index.ts#L63)

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

[configuration/index.ts:185](https://github.com/livechat/lc-sdk-js/blob/7985816/src/configuration/index.ts#L185)

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

[configuration/index.ts:281](https://github.com/livechat/lc-sdk-js/blob/7985816/src/configuration/index.ts#L281)

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

[configuration/index.ts:676](https://github.com/livechat/lc-sdk-js/blob/7985816/src/configuration/index.ts#L676)

___

### createGreeting

▸ **createGreeting**(`request`): `Promise`<[`CreateGreetingResponse`](../interfaces/configuration_structures_responses.CreateGreetingResponse.md)\>

Creates a new greeting and returns its ID.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `request` | [`CreateGreetingRequest`](../interfaces/configuration_structures_structures.CreateGreetingRequest.md) | greeting details including type, active status, name, group, and rules |

#### Returns

`Promise`<[`CreateGreetingResponse`](../interfaces/configuration_structures_responses.CreateGreetingResponse.md)\>

#### Defined in

[configuration/index.ts:708](https://github.com/livechat/lc-sdk-js/blob/7985816/src/configuration/index.ts#L708)

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

[configuration/index.ts:350](https://github.com/livechat/lc-sdk-js/blob/7985816/src/configuration/index.ts#L350)

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

[configuration/index.ts:616](https://github.com/livechat/lc-sdk-js/blob/7985816/src/configuration/index.ts#L616)

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

[configuration/index.ts:114](https://github.com/livechat/lc-sdk-js/blob/7985816/src/configuration/index.ts#L114)

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

[configuration/index.ts:580](https://github.com/livechat/lc-sdk-js/blob/7985816/src/configuration/index.ts#L580)

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

[configuration/index.ts:201](https://github.com/livechat/lc-sdk-js/blob/7985816/src/configuration/index.ts#L201)

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

[configuration/index.ts:314](https://github.com/livechat/lc-sdk-js/blob/7985816/src/configuration/index.ts#L314)

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

[configuration/index.ts:700](https://github.com/livechat/lc-sdk-js/blob/7985816/src/configuration/index.ts#L700)

___

### deleteGreeting

▸ **deleteGreeting**(`id`): `Promise`<[`EmptyResponse`](../interfaces/configuration_structures_responses.EmptyResponse.md)\>

Deletes an existing greeting.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `number` | ID of the greeting to delete |

#### Returns

`Promise`<[`EmptyResponse`](../interfaces/configuration_structures_responses.EmptyResponse.md)\>

#### Defined in

[configuration/index.ts:724](https://github.com/livechat/lc-sdk-js/blob/7985816/src/configuration/index.ts#L724)

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

[configuration/index.ts:387](https://github.com/livechat/lc-sdk-js/blob/7985816/src/configuration/index.ts#L387)

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

[configuration/index.ts:496](https://github.com/livechat/lc-sdk-js/blob/7985816/src/configuration/index.ts#L496)

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

[configuration/index.ts:475](https://github.com/livechat/lc-sdk-js/blob/7985816/src/configuration/index.ts#L475)

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

[configuration/index.ts:624](https://github.com/livechat/lc-sdk-js/blob/7985816/src/configuration/index.ts#L624)

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

[configuration/index.ts:549](https://github.com/livechat/lc-sdk-js/blob/7985816/src/configuration/index.ts#L549)

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

[configuration/index.ts:541](https://github.com/livechat/lc-sdk-js/blob/7985816/src/configuration/index.ts#L541)

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

[configuration/index.ts:80](https://github.com/livechat/lc-sdk-js/blob/7985816/src/configuration/index.ts#L80)

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

[configuration/index.ts:269](https://github.com/livechat/lc-sdk-js/blob/7985816/src/configuration/index.ts#L269)

___

### getGreeting

▸ **getGreeting**(`id`): `Promise`<[`Greeting`](../interfaces/configuration_structures_structures.Greeting.md)\>

Returns a greeting by ID.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `number` | ID of the greeting to retrieve |

#### Returns

`Promise`<[`Greeting`](../interfaces/configuration_structures_structures.Greeting.md)\>

#### Defined in

[configuration/index.ts:732](https://github.com/livechat/lc-sdk-js/blob/7985816/src/configuration/index.ts#L732)

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

[configuration/index.ts:404](https://github.com/livechat/lc-sdk-js/blob/7985816/src/configuration/index.ts#L404)

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

[configuration/index.ts:557](https://github.com/livechat/lc-sdk-js/blob/7985816/src/configuration/index.ts#L557)

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

[configuration/index.ts:238](https://github.com/livechat/lc-sdk-js/blob/7985816/src/configuration/index.ts#L238)

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

[configuration/index.ts:89](https://github.com/livechat/lc-sdk-js/blob/7985816/src/configuration/index.ts#L89)

___

### listAutoAccesses

▸ **listAutoAccesses**(): `Promise`<[`AutoAccess`](../interfaces/configuration_structures_structures.AutoAccess.md)[]\>

Returns all existing auto access data structures.

#### Returns

`Promise`<[`AutoAccess`](../interfaces/configuration_structures_structures.AutoAccess.md)[]\>

#### Defined in

[configuration/index.ts:572](https://github.com/livechat/lc-sdk-js/blob/7985816/src/configuration/index.ts#L572)

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

[configuration/index.ts:326](https://github.com/livechat/lc-sdk-js/blob/7985816/src/configuration/index.ts#L326)

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

[configuration/index.ts:260](https://github.com/livechat/lc-sdk-js/blob/7985816/src/configuration/index.ts#L260)

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

[configuration/index.ts:684](https://github.com/livechat/lc-sdk-js/blob/7985816/src/configuration/index.ts#L684)

___

### listChannels

▸ **listChannels**(): `Promise`<[`ChannelActivity`](../interfaces/configuration_structures_structures.ChannelActivity.md)[]\>

Returns the summary of communication channels for your LiveChat product.

#### Returns

`Promise`<[`ChannelActivity`](../interfaces/configuration_structures_structures.ChannelActivity.md)[]\>

#### Defined in

[configuration/index.ts:607](https://github.com/livechat/lc-sdk-js/blob/7985816/src/configuration/index.ts#L607)

___

### listGreetings

▸ **listGreetings**(`options?`): `Promise`<[`ListGreetingsResponse`](../interfaces/configuration_structures_structures.ListGreetingsResponse.md)\>

Returns a list of greetings, optionally filtered by groups.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | [`ListGreetingsRequest`](../interfaces/configuration_structures_structures.ListGreetingsRequest.md) | optional filtering by group IDs |

#### Returns

`Promise`<[`ListGreetingsResponse`](../interfaces/configuration_structures_structures.ListGreetingsResponse.md)\>

#### Defined in

[configuration/index.ts:740](https://github.com/livechat/lc-sdk-js/blob/7985816/src/configuration/index.ts#L740)

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

[configuration/index.ts:395](https://github.com/livechat/lc-sdk-js/blob/7985816/src/configuration/index.ts#L395)

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

[configuration/index.ts:651](https://github.com/livechat/lc-sdk-js/blob/7985816/src/configuration/index.ts#L651)

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

[configuration/index.ts:464](https://github.com/livechat/lc-sdk-js/blob/7985816/src/configuration/index.ts#L464)

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

[configuration/index.ts:447](https://github.com/livechat/lc-sdk-js/blob/7985816/src/configuration/index.ts#L447)

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

[configuration/index.ts:632](https://github.com/livechat/lc-sdk-js/blob/7985816/src/configuration/index.ts#L632)

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

[configuration/index.ts:533](https://github.com/livechat/lc-sdk-js/blob/7985816/src/configuration/index.ts#L533)

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

[configuration/index.ts:516](https://github.com/livechat/lc-sdk-js/blob/7985816/src/configuration/index.ts#L516)

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

[configuration/index.ts:432](https://github.com/livechat/lc-sdk-js/blob/7985816/src/configuration/index.ts#L432)

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

[configuration/index.ts:659](https://github.com/livechat/lc-sdk-js/blob/7985816/src/configuration/index.ts#L659)

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

[configuration/index.ts:412](https://github.com/livechat/lc-sdk-js/blob/7985816/src/configuration/index.ts#L412)

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

[configuration/index.ts:508](https://github.com/livechat/lc-sdk-js/blob/7985816/src/configuration/index.ts#L508)

___

### requestAgentUnsuspension

▸ **requestAgentUnsuspension**(): `Promise`<[`EmptyResponse`](../interfaces/configuration_structures_responses.EmptyResponse.md)\>

A suspended Agent can send emails to license owners and vice owners with an unsuspension request.

#### Returns

`Promise`<[`EmptyResponse`](../interfaces/configuration_structures_responses.EmptyResponse.md)\>

#### Defined in

[configuration/index.ts:161](https://github.com/livechat/lc-sdk-js/blob/7985816/src/configuration/index.ts#L161)

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

[configuration/index.ts:227](https://github.com/livechat/lc-sdk-js/blob/7985816/src/configuration/index.ts#L227)

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

[configuration/index.ts:336](https://github.com/livechat/lc-sdk-js/blob/7985816/src/configuration/index.ts#L336)

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

[internal/index.ts:31](https://github.com/livechat/lc-sdk-js/blob/7985816/src/internal/index.ts#L31)

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

[internal/index.ts:74](https://github.com/livechat/lc-sdk-js/blob/7985816/src/internal/index.ts#L74)

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

[configuration/index.ts:130](https://github.com/livechat/lc-sdk-js/blob/7985816/src/configuration/index.ts#L130)

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

[configuration/index.ts:421](https://github.com/livechat/lc-sdk-js/blob/7985816/src/configuration/index.ts#L421)

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

[configuration/index.ts:525](https://github.com/livechat/lc-sdk-js/blob/7985816/src/configuration/index.ts#L525)

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

[configuration/index.ts:146](https://github.com/livechat/lc-sdk-js/blob/7985816/src/configuration/index.ts#L146)

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

[configuration/index.ts:98](https://github.com/livechat/lc-sdk-js/blob/7985816/src/configuration/index.ts#L98)

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

[configuration/index.ts:589](https://github.com/livechat/lc-sdk-js/blob/7985816/src/configuration/index.ts#L589)

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

[configuration/index.ts:218](https://github.com/livechat/lc-sdk-js/blob/7985816/src/configuration/index.ts#L218)

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

[configuration/index.ts:298](https://github.com/livechat/lc-sdk-js/blob/7985816/src/configuration/index.ts#L298)

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

[configuration/index.ts:692](https://github.com/livechat/lc-sdk-js/blob/7985816/src/configuration/index.ts#L692)

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

[configuration/index.ts:668](https://github.com/livechat/lc-sdk-js/blob/7985816/src/configuration/index.ts#L668)

___

### updateGreeting

▸ **updateGreeting**(`request`): `Promise`<[`EmptyResponse`](../interfaces/configuration_structures_responses.EmptyResponse.md)\>

Updates an existing greeting.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `request` | [`UpdateGreetingRequest`](../interfaces/configuration_structures_structures.UpdateGreetingRequest.md) | greeting update details including id and optional fields to update |

#### Returns

`Promise`<[`EmptyResponse`](../interfaces/configuration_structures_responses.EmptyResponse.md)\>

#### Defined in

[configuration/index.ts:716](https://github.com/livechat/lc-sdk-js/blob/7985816/src/configuration/index.ts#L716)

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

[configuration/index.ts:369](https://github.com/livechat/lc-sdk-js/blob/7985816/src/configuration/index.ts#L369)

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

[configuration/index.ts:484](https://github.com/livechat/lc-sdk-js/blob/7985816/src/configuration/index.ts#L484)

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

[configuration/index.ts:455](https://github.com/livechat/lc-sdk-js/blob/7985816/src/configuration/index.ts#L455)

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

[configuration/index.ts:641](https://github.com/livechat/lc-sdk-js/blob/7985816/src/configuration/index.ts#L641)
