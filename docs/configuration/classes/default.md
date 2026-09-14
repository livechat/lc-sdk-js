[**@livechat/lc-sdk-js**](../../README.md)

***

[@livechat/lc-sdk-js](../../README.md) / [configuration](../README.md) / default

# Class: default

Defined in: [configuration/index.ts:53](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/configuration/index.ts#L53)

## Extends

- [`WebAPI`](../../internal/classes/WebAPI.md)

## Constructors

### Constructor

> **new default**(`clientID`, `tokenGetter`, `options?`): `ConfigurationAPI`

Defined in: [configuration/index.ts:54](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/configuration/index.ts#L54)

#### Parameters

##### clientID

`string`

##### tokenGetter

[`TokenGetter`](../../authorization/token_getter/type-aliases/TokenGetter.md)

##### options?

[`WebAPIOptions`](../structures/structures/interfaces/WebAPIOptions.md)

#### Returns

`ConfigurationAPI`

#### Overrides

[`WebAPI`](../../internal/classes/WebAPI.md).[`constructor`](../../internal/classes/WebAPI.md#constructor)

## Properties

### APIURL

> **APIURL**: `string`

Defined in: [internal/index.ts:14](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/internal/index.ts#L14)

#### Inherited from

[`WebAPI`](../../internal/classes/WebAPI.md).[`APIURL`](../../internal/classes/WebAPI.md#apiurl)

***

### author\_id?

> `optional` **author\_id?**: `string`

Defined in: [internal/index.ts:16](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/internal/index.ts#L16)

#### Inherited from

[`WebAPI`](../../internal/classes/WebAPI.md).[`author_id`](../../internal/classes/WebAPI.md#author_id)

***

### clientID

> `protected` `readonly` **clientID**: `string`

Defined in: [internal/index.ts:20](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/internal/index.ts#L20)

#### Inherited from

[`WebAPI`](../../internal/classes/WebAPI.md).[`clientID`](../../internal/classes/WebAPI.md#clientid)

***

### tokenGetter

> `protected` `readonly` **tokenGetter**: [`TokenGetter`](../../authorization/token_getter/type-aliases/TokenGetter.md)

Defined in: [internal/index.ts:21](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/internal/index.ts#L21)

#### Inherited from

[`WebAPI`](../../internal/classes/WebAPI.md).[`tokenGetter`](../../internal/classes/WebAPI.md#tokengetter)

***

### type

> `protected` `readonly` **type**: `apiType`

Defined in: [internal/index.ts:22](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/internal/index.ts#L22)

#### Inherited from

[`WebAPI`](../../internal/classes/WebAPI.md).[`type`](../../internal/classes/WebAPI.md#type)

***

### version

> **version**: `string`

Defined in: [internal/index.ts:15](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/internal/index.ts#L15)

#### Inherited from

[`WebAPI`](../../internal/classes/WebAPI.md).[`version`](../../internal/classes/WebAPI.md#version)

## Methods

### addAutoAccess()

> **addAutoAccess**(`opts`): `Promise`\<[`AddAutoAccessResponse`](../structures/responses/interfaces/AddAutoAccessResponse.md)\>

Defined in: [configuration/index.ts:565](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/configuration/index.ts#L565)

Creates an auto access data structure, which is a set of conditions for the tracking URL and geolocation of a customer.

#### Parameters

##### opts

[`AddAutoAccessRequest`](../structures/structures/interfaces/AddAutoAccessRequest.md)

options for auto access like conditions

#### Returns

`Promise`\<[`AddAutoAccessResponse`](../structures/responses/interfaces/AddAutoAccessResponse.md)\>

***

### approveAgent()

> **approveAgent**(`id`): `Promise`\<[`EmptyResponse`](../structures/responses/interfaces/EmptyResponse.md)\>

Defined in: [configuration/index.ts:169](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/configuration/index.ts#L169)

Approves an Agent thus allowing the Agent to use the application.

#### Parameters

##### id

`string`

ID of agent to approve

#### Returns

`Promise`\<[`EmptyResponse`](../structures/responses/interfaces/EmptyResponse.md)\>

***

### batchApproveAgents()

> **batchApproveAgents**(`ids`): `Promise`\<[`BatchResponse`](../structures/responses/interfaces/BatchResponse.md)\<[`EmptyResponse`](../structures/responses/interfaces/EmptyResponse.md)\>\>

Defined in: [configuration/index.ts:177](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/configuration/index.ts#L177)

Approves Agents thus allowing the Agents to use the application.

#### Parameters

##### ids

`string`[]

IDs of agents to approve

#### Returns

`Promise`\<[`BatchResponse`](../structures/responses/interfaces/BatchResponse.md)\<[`EmptyResponse`](../structures/responses/interfaces/EmptyResponse.md)\>\>

***

### batchCreateAgents()

> **batchCreateAgents**(`agents`): `Promise`\<[`BatchResponse`](../structures/responses/interfaces/BatchResponse.md)\<[`CreateAgentResponse`](../structures/responses/interfaces/CreateAgentResponse.md)\>\>

Defined in: [configuration/index.ts:71](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/configuration/index.ts#L71)

Creates new Agents with specified parameters within a license.

#### Parameters

##### agents

[`Agent`](../structures/structures/interfaces/Agent.md)[]

agents to create

#### Returns

`Promise`\<[`BatchResponse`](../structures/responses/interfaces/BatchResponse.md)\<[`CreateAgentResponse`](../structures/responses/interfaces/CreateAgentResponse.md)\>\>

***

### batchCreateBots()

> **batchCreateBots**(`bots`): `Promise`\<[`BatchResponse`](../structures/responses/interfaces/BatchResponse.md)\<[`CreateBotResponse`](../structures/responses/interfaces/CreateBotResponse.md)\>\>

Defined in: [configuration/index.ts:193](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/configuration/index.ts#L193)

Creates new Bots with specified parameters within a license.

#### Parameters

##### bots

[`Bot`](../structures/structures/interfaces/Bot.md)[]

bots to create

#### Returns

`Promise`\<[`BatchResponse`](../structures/responses/interfaces/BatchResponse.md)\<[`CreateBotResponse`](../structures/responses/interfaces/CreateBotResponse.md)\>\>

***

### batchDeleteAgents()

> **batchDeleteAgents**(`ids`): `Promise`\<[`BatchResponse`](../structures/responses/interfaces/BatchResponse.md)\<[`EmptyResponse`](../structures/responses/interfaces/EmptyResponse.md)\>\>

Defined in: [configuration/index.ts:122](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/configuration/index.ts#L122)

Deletes Agents specified by ids.

#### Parameters

##### ids

`string`[]

IDs of agents to delete

#### Returns

`Promise`\<[`BatchResponse`](../structures/responses/interfaces/BatchResponse.md)\<[`EmptyResponse`](../structures/responses/interfaces/EmptyResponse.md)\>\>

***

### batchDeleteBots()

> **batchDeleteBots**(`ids`): `Promise`\<[`BatchResponse`](../structures/responses/interfaces/BatchResponse.md)\<[`EmptyResponse`](../structures/responses/interfaces/EmptyResponse.md)\>\>

Defined in: [configuration/index.ts:209](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/configuration/index.ts#L209)

Deletes Bots specified by ids.

#### Parameters

##### ids

`string`[]

IDs of bots to delete

#### Returns

`Promise`\<[`BatchResponse`](../structures/responses/interfaces/BatchResponse.md)\<[`EmptyResponse`](../structures/responses/interfaces/EmptyResponse.md)\>\>

***

### batchSuspendAgents()

> **batchSuspendAgents**(`ids`): `Promise`\<[`BatchResponse`](../structures/responses/interfaces/BatchResponse.md)\<[`EmptyResponse`](../structures/responses/interfaces/EmptyResponse.md)\>\>

Defined in: [configuration/index.ts:138](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/configuration/index.ts#L138)

Suspends Agents specified by ids.

#### Parameters

##### ids

`string`[]

IDs of agents to suspend

#### Returns

`Promise`\<[`BatchResponse`](../structures/responses/interfaces/BatchResponse.md)\<[`EmptyResponse`](../structures/responses/interfaces/EmptyResponse.md)\>\>

***

### batchUnsuspendAgents()

> **batchUnsuspendAgents**(`ids`): `Promise`\<[`BatchResponse`](../structures/responses/interfaces/BatchResponse.md)\<[`EmptyResponse`](../structures/responses/interfaces/EmptyResponse.md)\>\>

Defined in: [configuration/index.ts:154](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/configuration/index.ts#L154)

Unsuspends Agents specified by ids.

#### Parameters

##### ids

`string`[]

IDs of agents to unsuspend

#### Returns

`Promise`\<[`BatchResponse`](../structures/responses/interfaces/BatchResponse.md)\<[`EmptyResponse`](../structures/responses/interfaces/EmptyResponse.md)\>\>

***

### batchUpdateAgents()

> **batchUpdateAgents**(`agents`): `Promise`\<[`BatchResponse`](../structures/responses/interfaces/BatchResponse.md)\<[`EmptyResponse`](../structures/responses/interfaces/EmptyResponse.md)\>\>

Defined in: [configuration/index.ts:106](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/configuration/index.ts#L106)

Updates the properties of Agents specified by ids.

#### Parameters

##### agents

[`Agent`](../structures/structures/interfaces/Agent.md)[]

agents to update

#### Returns

`Promise`\<[`BatchResponse`](../structures/responses/interfaces/BatchResponse.md)\<[`EmptyResponse`](../structures/responses/interfaces/EmptyResponse.md)\>\>

***

### batchUpdateBots()

> **batchUpdateBots**(`bots`): `Promise`\<[`BatchResponse`](../structures/responses/interfaces/BatchResponse.md)\<[`EmptyResponse`](../structures/responses/interfaces/EmptyResponse.md)\>\>

Defined in: [configuration/index.ts:251](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/configuration/index.ts#L251)

Updates the properties of Bots specified by ids.

#### Parameters

##### bots

[`Bot`](../structures/structures/interfaces/Bot.md)[]

bots to update

#### Returns

`Promise`\<[`BatchResponse`](../structures/responses/interfaces/BatchResponse.md)\<[`EmptyResponse`](../structures/responses/interfaces/EmptyResponse.md)\>\>

***

### checkProductLimitsForPlan()

> **checkProductLimitsForPlan**(`plan`): `Promise`\<[`PlanLimit`](../structures/structures/interfaces/PlanLimit.md)[]\>

Defined in: [configuration/index.ts:600](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/configuration/index.ts#L600)

Compares your organization's current resources with a given plan and returns those which exceeded the called plan's limits.

#### Parameters

##### plan

`string`

`plan` must be one of: 'starter', 'team', 'enterprise' or 'enterpriseplus'

#### Returns

`Promise`\<[`PlanLimit`](../structures/structures/interfaces/PlanLimit.md)[]\>

***

### createAgent()

> **createAgent**(`id`, `fields`): `Promise`\<[`CreateAgentResponse`](../structures/responses/interfaces/CreateAgentResponse.md)\>

Defined in: [configuration/index.ts:63](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/configuration/index.ts#L63)

Creates a new Agent with specified parameters within a license.

#### Parameters

##### id

`string`

ID of an agent to create

##### fields

[`AgentFields`](../structures/structures/interfaces/AgentFields.md)

agent properties

#### Returns

`Promise`\<[`CreateAgentResponse`](../structures/responses/interfaces/CreateAgentResponse.md)\>

***

### createBot()

> **createBot**(`fields`): `Promise`\<[`CreateBotResponse`](../structures/responses/interfaces/CreateBotResponse.md)\>

Defined in: [configuration/index.ts:185](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/configuration/index.ts#L185)

Creates a new Bot with specified parameters within a license.

#### Parameters

##### fields

[`BotFields`](../structures/structures/interfaces/BotFields.md)

bot properties

#### Returns

`Promise`\<[`CreateBotResponse`](../structures/responses/interfaces/CreateBotResponse.md)\>

***

### createBotTemplate()

> **createBotTemplate**(`name`, `fields`, `affect_existing_installations?`, `owner_client_id?`): `Promise`\<[`CreateBotTemplateResponse`](../structures/responses/interfaces/CreateBotTemplateResponse.md)\>

Defined in: [configuration/index.ts:281](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/configuration/index.ts#L281)

Creates a new Bot Template with specified parameters.

#### Parameters

##### name

`string`

display name

##### fields

[`BotTemplateFieldsCreate`](../structures/structures/interfaces/BotTemplateFieldsCreate.md)

bot template properties

##### affect\_existing\_installations?

`boolean`

if true, bots based on this template will be created on all licenses
   that have given application installed. Otherwise, only new installations will trigger bot creation

##### owner\_client\_id?

`string`

clientID the bot template is assigned to

#### Returns

`Promise`\<[`CreateBotTemplateResponse`](../structures/responses/interfaces/CreateBotTemplateResponse.md)\>

***

### createCannedResponse()

> **createCannedResponse**(`request`): `Promise`\<[`CreateCannedResponseResponse`](../structures/responses/interfaces/CreateCannedResponseResponse.md)\>

Defined in: [configuration/index.ts:676](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/configuration/index.ts#L676)

Creates a new canned response.

#### Parameters

##### request

[`CreateCannedResponseRequest`](../structures/structures/interfaces/CreateCannedResponseRequest.md)

canned response details

#### Returns

`Promise`\<[`CreateCannedResponseResponse`](../structures/responses/interfaces/CreateCannedResponseResponse.md)\>

***

### createGreeting()

> **createGreeting**(`request`): `Promise`\<[`CreateGreetingResponse`](../structures/responses/interfaces/CreateGreetingResponse.md)\>

Defined in: [configuration/index.ts:708](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/configuration/index.ts#L708)

Creates a new greeting and returns its ID.

#### Parameters

##### request

[`CreateGreetingRequest`](../structures/structures/interfaces/CreateGreetingRequest.md)

greeting details including type, active status, name, group, and rules

#### Returns

`Promise`\<[`CreateGreetingResponse`](../structures/responses/interfaces/CreateGreetingResponse.md)\>

***

### createGroup()

> **createGroup**(`name`, `agent_priorities`, `language_code?`): `Promise`\<[`CreateGroupResponse`](../structures/responses/interfaces/CreateGroupResponse.md)\>

Defined in: [configuration/index.ts:350](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/configuration/index.ts#L350)

Creates new group.

#### Parameters

##### name

`string`

group name

##### agent\_priorities

[`AgentPriorities`](../structures/structures/interfaces/AgentPriorities.md)

agents priorities within a group

##### language\_code?

`string`

groups language

#### Returns

`Promise`\<[`CreateGroupResponse`](../structures/responses/interfaces/CreateGroupResponse.md)\>

***

### createTag()

> **createTag**(`name`, `groupIDs?`): `Promise`\<[`EmptyResponse`](../structures/responses/interfaces/EmptyResponse.md)\>

Defined in: [configuration/index.ts:616](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/configuration/index.ts#L616)

Creates a new tag.

#### Parameters

##### name

`string`

name of the created tag

##### groupIDs?

`number`[]

list of groups where tag will be assigned

#### Returns

`Promise`\<[`EmptyResponse`](../structures/responses/interfaces/EmptyResponse.md)\>

***

### deleteAgent()

> **deleteAgent**(`id`): `Promise`\<[`EmptyResponse`](../structures/responses/interfaces/EmptyResponse.md)\>

Defined in: [configuration/index.ts:114](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/configuration/index.ts#L114)

Deletes an Agent specified by id.

#### Parameters

##### id

`string`

ID of agent to delete

#### Returns

`Promise`\<[`EmptyResponse`](../structures/responses/interfaces/EmptyResponse.md)\>

***

### deleteAutoAccess()

> **deleteAutoAccess**(`id`): `Promise`\<[`EmptyResponse`](../structures/responses/interfaces/EmptyResponse.md)\>

Defined in: [configuration/index.ts:580](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/configuration/index.ts#L580)

Deletes an existing auto access data structure specified by its ID.

#### Parameters

##### id

`string`

ID of the auto access to remove

#### Returns

`Promise`\<[`EmptyResponse`](../structures/responses/interfaces/EmptyResponse.md)\>

***

### deleteBot()

> **deleteBot**(`id`): `Promise`\<[`EmptyResponse`](../structures/responses/interfaces/EmptyResponse.md)\>

Defined in: [configuration/index.ts:201](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/configuration/index.ts#L201)

Deletes bot specified by id.

#### Parameters

##### id

`string`

ID of bot to delete

#### Returns

`Promise`\<[`EmptyResponse`](../structures/responses/interfaces/EmptyResponse.md)\>

***

### deleteBotTemplate()

> **deleteBotTemplate**(`id`, `affect_existing_installations?`, `owner_client_id?`): `Promise`\<[`EmptyResponse`](../structures/responses/interfaces/EmptyResponse.md)\>

Defined in: [configuration/index.ts:314](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/configuration/index.ts#L314)

Deletes the bot template specified by id.

#### Parameters

##### id

`string`

ID of bot template to delete

##### affect\_existing\_installations?

`boolean`

if true, bots based on this template will be deleted from all licenses
   that have given application installed

##### owner\_client\_id?

`string`

clientID the bot template is assigned to

#### Returns

`Promise`\<[`EmptyResponse`](../structures/responses/interfaces/EmptyResponse.md)\>

***

### deleteCannedResponse()

> **deleteCannedResponse**(`id`): `Promise`\<[`EmptyResponse`](../structures/responses/interfaces/EmptyResponse.md)\>

Defined in: [configuration/index.ts:700](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/configuration/index.ts#L700)

Deletes a canned response.

#### Parameters

##### id

`number`

ID of the canned response to delete

#### Returns

`Promise`\<[`EmptyResponse`](../structures/responses/interfaces/EmptyResponse.md)\>

***

### deleteGreeting()

> **deleteGreeting**(`id`): `Promise`\<[`EmptyResponse`](../structures/responses/interfaces/EmptyResponse.md)\>

Defined in: [configuration/index.ts:724](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/configuration/index.ts#L724)

Deletes an existing greeting.

#### Parameters

##### id

`number`

ID of the greeting to delete

#### Returns

`Promise`\<[`EmptyResponse`](../structures/responses/interfaces/EmptyResponse.md)\>

***

### deleteGroup()

> **deleteGroup**(`id`): `Promise`\<[`EmptyResponse`](../structures/responses/interfaces/EmptyResponse.md)\>

Defined in: [configuration/index.ts:387](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/configuration/index.ts#L387)

Deletes group specified by id.

#### Parameters

##### id

`number`

ID of group to delete

#### Returns

`Promise`\<[`EmptyResponse`](../structures/responses/interfaces/EmptyResponse.md)\>

***

### deleteGroupProperties()

> **deleteGroupProperties**(`id`, `properties`): `Promise`\<[`EmptyResponse`](../structures/responses/interfaces/EmptyResponse.md)\>

Defined in: [configuration/index.ts:496](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/configuration/index.ts#L496)

Deletes the properties set within a group.

#### Parameters

##### id

`number`

group ID to delete properties from

##### properties

[`Properties`](../structures/structures/interfaces/Properties.md)

properties to delete

#### Returns

`Promise`\<[`EmptyResponse`](../structures/responses/interfaces/EmptyResponse.md)\>

***

### deleteLicenseProperties()

> **deleteLicenseProperties**(`properties`): `Promise`\<[`EmptyResponse`](../structures/responses/interfaces/EmptyResponse.md)\>

Defined in: [configuration/index.ts:475](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/configuration/index.ts#L475)

Deletes the properties set within a license.

#### Parameters

##### properties

[`Properties`](../structures/structures/interfaces/Properties.md)

properties to delete

#### Returns

`Promise`\<[`EmptyResponse`](../structures/responses/interfaces/EmptyResponse.md)\>

***

### deleteTag()

> **deleteTag**(`name`): `Promise`\<[`EmptyResponse`](../structures/responses/interfaces/EmptyResponse.md)\>

Defined in: [configuration/index.ts:624](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/configuration/index.ts#L624)

Deletes an existing tag.

#### Parameters

##### name

`string`

name of the tag to be deleted

#### Returns

`Promise`\<[`EmptyResponse`](../structures/responses/interfaces/EmptyResponse.md)\>

***

### disableLicenseWebhooks()

> **disableLicenseWebhooks**(`client_id?`): `Promise`\<[`EmptyResponse`](../structures/responses/interfaces/EmptyResponse.md)\>

Defined in: [configuration/index.ts:549](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/configuration/index.ts#L549)

Disables license webhooks for authorization token's clientID

#### Parameters

##### client\_id?

`string`

clientID when authorizing via Personal Access Token

#### Returns

`Promise`\<[`EmptyResponse`](../structures/responses/interfaces/EmptyResponse.md)\>

***

### enableLicenseWebhooks()

> **enableLicenseWebhooks**(`client_id?`): `Promise`\<[`EmptyResponse`](../structures/responses/interfaces/EmptyResponse.md)\>

Defined in: [configuration/index.ts:541](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/configuration/index.ts#L541)

Enables license webhooks for authorization token's clientID

#### Parameters

##### client\_id?

`string`

clientID when authorizing via Personal Access Token

#### Returns

`Promise`\<[`EmptyResponse`](../structures/responses/interfaces/EmptyResponse.md)\>

***

### getAgent()

> **getAgent**(`id`, `fields?`): `Promise`\<[`Agent`](../structures/structures/interfaces/Agent.md)\>

Defined in: [configuration/index.ts:80](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/configuration/index.ts#L80)

It returns the info about an Agent specified by id.

#### Parameters

##### id

`string`

ID of agent to get

##### fields?

`string`[]

additional fields to include

#### Returns

`Promise`\<[`Agent`](../structures/structures/interfaces/Agent.md)\>

***

### getBot()

> **getBot**(`id`, `fields?`): `Promise`\<[`Bot`](../structures/structures/interfaces/Bot.md)\>

Defined in: [configuration/index.ts:269](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/configuration/index.ts#L269)

Gets info about Bot.

#### Parameters

##### id

`string`

bot ID to get info about

##### fields?

[`BotFields`](../structures/structures/interfaces/BotFields.md)

additional fields to include

#### Returns

`Promise`\<[`Bot`](../structures/structures/interfaces/Bot.md)\>

***

### getGreeting()

> **getGreeting**(`id`): `Promise`\<[`Greeting`](../structures/structures/interfaces/Greeting.md)\>

Defined in: [configuration/index.ts:732](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/configuration/index.ts#L732)

Returns a greeting by ID.

#### Parameters

##### id

`number`

ID of the greeting to retrieve

#### Returns

`Promise`\<[`Greeting`](../structures/structures/interfaces/Greeting.md)\>

***

### getGroup()

> **getGroup**(`id`, `fields?`): `Promise`\<[`Group`](../structures/structures/interfaces/Group.md)\>

Defined in: [configuration/index.ts:404](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/configuration/index.ts#L404)

Returns details about a group specified by its id.

#### Parameters

##### id

`number`

group ID to get info about

##### fields?

`string`[]

additional fields to include

#### Returns

`Promise`\<[`Group`](../structures/structures/interfaces/Group.md)\>

***

### getLicenseWebhooksState()

> **getLicenseWebhooksState**(`client_id?`): `Promise`\<[`WebhooksState`](../structures/structures/interfaces/WebhooksState.md)\>

Defined in: [configuration/index.ts:557](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/configuration/index.ts#L557)

Gets license webhooks' state for authorization token's clientID

#### Parameters

##### client\_id?

`string`

clientID when authorizing via Personal Access Token

#### Returns

`Promise`\<[`WebhooksState`](../structures/structures/interfaces/WebhooksState.md)\>

***

### issueBotToken()

> **issueBotToken**(`bot_id`, `client_id`, `bot_secret`, `organization_id`): `Promise`\<[`IssueBotTokenResponse`](../structures/responses/interfaces/IssueBotTokenResponse.md)\>

Defined in: [configuration/index.ts:238](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/configuration/index.ts#L238)

Issues authorization token for Bot.

#### Parameters

##### bot\_id

`string`

ID of bot to issue token

##### client\_id

`string`

clientID the bot is assigned to

##### bot\_secret

`string`

bot secret

##### organization\_id

`string`

organization ID to issue token for

#### Returns

`Promise`\<[`IssueBotTokenResponse`](../structures/responses/interfaces/IssueBotTokenResponse.md)\>

***

### listAgents()

> **listAgents**(`group_ids?`, `fields?`): `Promise`\<[`Agent`](../structures/structures/interfaces/Agent.md)[]\>

Defined in: [configuration/index.ts:89](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/configuration/index.ts#L89)

Returns all Agents within a license.

#### Parameters

##### group\_ids?

`number`[]

groups to list agents from

##### fields?

`string`[]

additional fields to include

#### Returns

`Promise`\<[`Agent`](../structures/structures/interfaces/Agent.md)[]\>

***

### listAutoAccesses()

> **listAutoAccesses**(): `Promise`\<[`AutoAccess`](../structures/structures/interfaces/AutoAccess.md)[]\>

Defined in: [configuration/index.ts:572](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/configuration/index.ts#L572)

Returns all existing auto access data structures.

#### Returns

`Promise`\<[`AutoAccess`](../structures/structures/interfaces/AutoAccess.md)[]\>

***

### listBots()

> **listBots**(`all?`, `fields?`): `Promise`\<[`Bot`](../structures/structures/interfaces/Bot.md)[]\>

Defined in: [configuration/index.ts:260](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/configuration/index.ts#L260)

Lists all bots within license.

#### Parameters

##### all?

`boolean`

switch if it should return all bots or only caller's bots

##### fields?

[`BotFields`](../structures/structures/interfaces/BotFields.md)

additional fields to include

#### Returns

`Promise`\<[`Bot`](../structures/structures/interfaces/Bot.md)[]\>

***

### listBotTemplates()

> **listBotTemplates**(`owner_client_id?`): `Promise`\<[`BotTemplate`](../structures/structures/interfaces/BotTemplate.md)[]\>

Defined in: [configuration/index.ts:326](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/configuration/index.ts#L326)

Lists bot templates.

#### Parameters

##### owner\_client\_id?

`string`

clientID the bot templates are assigned to

#### Returns

`Promise`\<[`BotTemplate`](../structures/structures/interfaces/BotTemplate.md)[]\>

***

### listCannedResponses()

> **listCannedResponses**(`options?`): `Promise`\<[`ListCannedResponsesResponse`](../structures/structures/interfaces/ListCannedResponsesResponse.md)\>

Defined in: [configuration/index.ts:684](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/configuration/index.ts#L684)

Returns canned responses with optional filtering and pagination.

#### Parameters

##### options?

[`ListCannedResponsesRequest`](../structures/structures/interfaces/ListCannedResponsesRequest.md)

filtering and pagination options

#### Returns

`Promise`\<[`ListCannedResponsesResponse`](../structures/structures/interfaces/ListCannedResponsesResponse.md)\>

***

### listChannels()

> **listChannels**(): `Promise`\<[`ChannelActivity`](../structures/structures/interfaces/ChannelActivity.md)[]\>

Defined in: [configuration/index.ts:607](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/configuration/index.ts#L607)

Returns the summary of communication channels for your LiveChat product.

#### Returns

`Promise`\<[`ChannelActivity`](../structures/structures/interfaces/ChannelActivity.md)[]\>

***

### listGreetings()

> **listGreetings**(`options?`): `Promise`\<[`ListGreetingsResponse`](../structures/structures/interfaces/ListGreetingsResponse.md)\>

Defined in: [configuration/index.ts:740](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/configuration/index.ts#L740)

Returns a list of greetings, optionally filtered by groups.

#### Parameters

##### options?

[`ListGreetingsRequest`](../structures/structures/interfaces/ListGreetingsRequest.md)

optional filtering by group IDs

#### Returns

`Promise`\<[`ListGreetingsResponse`](../structures/structures/interfaces/ListGreetingsResponse.md)\>

***

### listGroups()

> **listGroups**(`fields?`): `Promise`\<[`Group`](../structures/structures/interfaces/Group.md)[]\>

Defined in: [configuration/index.ts:395](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/configuration/index.ts#L395)

Lists all existing groups.

#### Parameters

##### fields?

`string`[]

additional fields to include

#### Returns

`Promise`\<[`Group`](../structures/structures/interfaces/Group.md)[]\>

***

### listGroupsProperties()

> **listGroupsProperties**(`groupIDs?`, `namespace?`, `namePrefix?`): `Promise`\<[`GroupProperties`](../structures/structures/interfaces/GroupProperties.md)[]\>

Defined in: [configuration/index.ts:651](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/configuration/index.ts#L651)

Lists groups' properties

#### Parameters

##### groupIDs?

`number`[]

list of groups whose properties will be returned

##### namespace?

`string`

namespace

##### namePrefix?

`string`

name prefix

#### Returns

`Promise`\<[`GroupProperties`](../structures/structures/interfaces/GroupProperties.md)[]\>

***

### listLicenseProperties()

> **listLicenseProperties**(`namespace_prefix?`, `name_prefix?`): `Promise`\<[`Properties`](../structures/structures/interfaces/Properties.md)\>

Defined in: [configuration/index.ts:464](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/configuration/index.ts#L464)

Returns the properties set within a license.

#### Parameters

##### namespace\_prefix?

`string`

namespace prefix

##### name\_prefix?

`string`

name prefix

#### Returns

`Promise`\<[`Properties`](../structures/structures/interfaces/Properties.md)\>

***

### listProperties()

> **listProperties**(`owner_client_id?`): `Promise`\<[`PropertiesConfig`](../structures/structures/interfaces/PropertiesConfig.md)\>

Defined in: [configuration/index.ts:447](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/configuration/index.ts#L447)

Lists properties for given client_id.

#### Parameters

##### owner\_client\_id?

`string` = `""`

client_id of property owner

#### Returns

`Promise`\<[`PropertiesConfig`](../structures/structures/interfaces/PropertiesConfig.md)\>

***

### listTags()

> **listTags**(`groupIDs?`): `Promise`\<[`Tag`](../structures/structures/interfaces/Tag.md)[]\>

Defined in: [configuration/index.ts:632](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/configuration/index.ts#L632)

Returns tags assigned to requested groups.

#### Parameters

##### groupIDs?

`number`[]

filter tags by groups where there are assigned

#### Returns

`Promise`\<[`Tag`](../structures/structures/interfaces/Tag.md)[]\>

***

### listWebhookNames()

> **listWebhookNames**(`version?`): `Promise`\<[`WebhookData`](../structures/structures/interfaces/WebhookData.md)[]\>

Defined in: [configuration/index.ts:533](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/configuration/index.ts#L533)

Lists webhooks available in given API version

#### Parameters

##### version?

`string`

version of API for webhooks

#### Returns

`Promise`\<[`WebhookData`](../structures/structures/interfaces/WebhookData.md)[]\>

***

### listWebhooks()

> **listWebhooks**(`owner_client_id?`): `Promise`\<[`RegisteredWebhook`](../structures/structures/interfaces/RegisteredWebhook.md)[]\>

Defined in: [configuration/index.ts:516](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/configuration/index.ts#L516)

Lists registered webhooks.

#### Parameters

##### owner\_client\_id?

`string` = `""`

must be provided when authorizing with Personal Access Token

#### Returns

`Promise`\<[`RegisteredWebhook`](../structures/structures/interfaces/RegisteredWebhook.md)[]\>

***

### publishProperty()

> **publishProperty**(`name`, `owner_client_id?`, `read`, `write`): `Promise`\<[`EmptyResponse`](../structures/responses/interfaces/EmptyResponse.md)\>

Defined in: [configuration/index.ts:432](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/configuration/index.ts#L432)

Publishes private property.

#### Parameters

##### name

`string`

property name

##### owner\_client\_id?

`string` = `""`

clientID of property owner

##### read

`boolean`

determines whether non-owners can read the property

##### write

`boolean`

determines whether non-owners can write the property

#### Returns

`Promise`\<[`EmptyResponse`](../structures/responses/interfaces/EmptyResponse.md)\>

***

### reactivateEmail()

> **reactivateEmail**(`agentID`): `Promise`\<[`EmptyResponse`](../structures/responses/interfaces/EmptyResponse.md)\>

Defined in: [configuration/index.ts:659](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/configuration/index.ts#L659)

Reactivates bounced email

#### Parameters

##### agentID

`string`

email address of an agent

#### Returns

`Promise`\<[`EmptyResponse`](../structures/responses/interfaces/EmptyResponse.md)\>

***

### registerProperty()

> **registerProperty**(`property`): `Promise`\<[`EmptyResponse`](../structures/responses/interfaces/EmptyResponse.md)\>

Defined in: [configuration/index.ts:412](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/configuration/index.ts#L412)

Registers private property.

#### Parameters

##### property

[`PropertyConfig`](../structures/structures/interfaces/PropertyConfig.md)

property to register

#### Returns

`Promise`\<[`EmptyResponse`](../structures/responses/interfaces/EmptyResponse.md)\>

***

### registerWebhook()

> **registerWebhook**(`webhook`, `owner_client_id?`): `Promise`\<[`RegisterWebhookResponse`](../structures/responses/interfaces/RegisterWebhookResponse.md)\>

Defined in: [configuration/index.ts:508](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/configuration/index.ts#L508)

Registers webhook on a license.

#### Parameters

##### webhook

[`Webhook`](../structures/structures/interfaces/Webhook.md)

webhook to register

##### owner\_client\_id?

`string` = `""`

must be provided when authorizing with Personal Access Token

#### Returns

`Promise`\<[`RegisterWebhookResponse`](../structures/responses/interfaces/RegisterWebhookResponse.md)\>

***

### requestAgentUnsuspension()

> **requestAgentUnsuspension**(): `Promise`\<[`EmptyResponse`](../structures/responses/interfaces/EmptyResponse.md)\>

Defined in: [configuration/index.ts:161](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/configuration/index.ts#L161)

A suspended Agent can send emails to license owners and vice owners with an unsuspension request.

#### Returns

`Promise`\<[`EmptyResponse`](../structures/responses/interfaces/EmptyResponse.md)\>

***

### resetBotSecret()

> **resetBotSecret**(`id`, `owner_client_id?`): `Promise`\<[`ResetBotSecretResponse`](../structures/responses/interfaces/ResetBotSecretResponse.md)\>

Defined in: [configuration/index.ts:227](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/configuration/index.ts#L227)

Resets secret of Bot specified by id.

#### Parameters

##### id

`string`

ID of bot to reset secret

##### owner\_client\_id?

`string`

clientID the bot is assigned to

#### Returns

`Promise`\<[`ResetBotSecretResponse`](../structures/responses/interfaces/ResetBotSecretResponse.md)\>

***

### resetBotTemplateSecret()

> **resetBotTemplateSecret**(`id`, `affect_existing_installations?`, `owner_client_id?`): `Promise`\<[`ResetBotTemplateSecretResponse`](../structures/responses/interfaces/ResetBotTemplateSecretResponse.md)\>

Defined in: [configuration/index.ts:336](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/configuration/index.ts#L336)

Resets bot template secret specified by id.

#### Parameters

##### id

`string`

ID of bot template to reset secret

##### affect\_existing\_installations?

`boolean`

if true, new secret is set to for all existing bots based on this template

##### owner\_client\_id?

`string`

clientID the bot template is assigned to

#### Returns

`Promise`\<[`ResetBotTemplateSecretResponse`](../structures/responses/interfaces/ResetBotTemplateSecretResponse.md)\>

***

### send()

> **send**\<`T`\>(`name`, `req`): `Promise`\<`T`\>

Defined in: [internal/index.ts:31](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/internal/index.ts#L31)

#### Type Parameters

##### T

`T` = `unknown`

#### Parameters

##### name

`string`

##### req

`any`

#### Returns

`Promise`\<`T`\>

#### Inherited from

[`WebAPI`](../../internal/classes/WebAPI.md).[`send`](../../internal/classes/WebAPI.md#send)

***

### setAuthorId()

> **setAuthorId**(`author_id?`): `void`

Defined in: [internal/index.ts:74](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/internal/index.ts#L74)

#### Parameters

##### author\_id?

`string`

#### Returns

`void`

#### Inherited from

[`WebAPI`](../../internal/classes/WebAPI.md).[`setAuthorId`](../../internal/classes/WebAPI.md#setauthorid)

***

### suspendAgent()

> **suspendAgent**(`id`): `Promise`\<[`EmptyResponse`](../structures/responses/interfaces/EmptyResponse.md)\>

Defined in: [configuration/index.ts:130](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/configuration/index.ts#L130)

Suspends an Agent specified by id.

#### Parameters

##### id

`string`

ID of agent to suspend

#### Returns

`Promise`\<[`EmptyResponse`](../structures/responses/interfaces/EmptyResponse.md)\>

***

### unregisterProperty()

> **unregisterProperty**(`name`, `owner_client_id?`): `Promise`\<[`EmptyResponse`](../structures/responses/interfaces/EmptyResponse.md)\>

Defined in: [configuration/index.ts:421](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/configuration/index.ts#L421)

Unregisters private property.

#### Parameters

##### name

`string`

property name

##### owner\_client\_id?

`string` = `""`

clientID of property owner

#### Returns

`Promise`\<[`EmptyResponse`](../structures/responses/interfaces/EmptyResponse.md)\>

***

### unregisterWebhook()

> **unregisterWebhook**(`id`, `owner_client_id?`): `Promise`\<[`EmptyResponse`](../structures/responses/interfaces/EmptyResponse.md)\>

Defined in: [configuration/index.ts:525](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/configuration/index.ts#L525)

Removes webhook from license.

#### Parameters

##### id

`string`

ID of webhook to unregister

##### owner\_client\_id?

`string` = `""`

must be provided when authorizing with Personal Access Token

#### Returns

`Promise`\<[`EmptyResponse`](../structures/responses/interfaces/EmptyResponse.md)\>

***

### unsuspendAgent()

> **unsuspendAgent**(`id`): `Promise`\<[`EmptyResponse`](../structures/responses/interfaces/EmptyResponse.md)\>

Defined in: [configuration/index.ts:146](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/configuration/index.ts#L146)

Unsuspends an Agent specified by id.

#### Parameters

##### id

`string`

ID of agent to unsuspend

#### Returns

`Promise`\<[`EmptyResponse`](../structures/responses/interfaces/EmptyResponse.md)\>

***

### updateAgent()

> **updateAgent**(`id`, `fields`): `Promise`\<[`EmptyResponse`](../structures/responses/interfaces/EmptyResponse.md)\>

Defined in: [configuration/index.ts:98](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/configuration/index.ts#L98)

Updates the properties of an Agent specified by id.

#### Parameters

##### id

`string`

ID of agent to update

##### fields

[`AgentFields`](../structures/structures/interfaces/AgentFields.md)

properties to update

#### Returns

`Promise`\<[`EmptyResponse`](../structures/responses/interfaces/EmptyResponse.md)\>

***

### updateAutoAccess()

> **updateAutoAccess**(`id`, `access`): `Promise`\<[`EmptyResponse`](../structures/responses/interfaces/EmptyResponse.md)\>

Defined in: [configuration/index.ts:589](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/configuration/index.ts#L589)

Updates an existing auto access. Only specified fields are updated (overwritten), leaving unspecified fields unchanged.

#### Parameters

##### id

`string`

ID of the auto access to modify

##### access

[`UpdateAutoAccessRequest`](../structures/structures/interfaces/UpdateAutoAccessRequest.md)

fields of auto access you want to overwrite

#### Returns

`Promise`\<[`EmptyResponse`](../structures/responses/interfaces/EmptyResponse.md)\>

***

### updateBot()

> **updateBot**(`id`, `fields`): `Promise`\<[`EmptyResponse`](../structures/responses/interfaces/EmptyResponse.md)\>

Defined in: [configuration/index.ts:218](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/configuration/index.ts#L218)

Updates the properties of Bot specified by id.

#### Parameters

##### id

`string`

ID of bot to update

##### fields

[`BotFields`](../structures/structures/interfaces/BotFields.md)

properties to update

#### Returns

`Promise`\<[`EmptyResponse`](../structures/responses/interfaces/EmptyResponse.md)\>

***

### updateBotTemplate()

> **updateBotTemplate**(`id`, `fields`, `affect_existing_installations?`, `owner_client_id?`): `Promise`\<[`EmptyResponse`](../structures/responses/interfaces/EmptyResponse.md)\>

Defined in: [configuration/index.ts:298](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/configuration/index.ts#L298)

Updates the properties of the Bot Template specified by id.

#### Parameters

##### id

`string`

ID of bot template to update

##### fields

[`BotTemplateFieldsUpdate`](../structures/structures/interfaces/BotTemplateFieldsUpdate.md)

bot template properties

##### affect\_existing\_installations?

`boolean`

if true, bots based on this template will be updated on all licenses
   that have given application installed

##### owner\_client\_id?

`string`

clientID the bot template is assigned to

#### Returns

`Promise`\<[`EmptyResponse`](../structures/responses/interfaces/EmptyResponse.md)\>

***

### updateCannedResponse()

> **updateCannedResponse**(`request`): `Promise`\<[`EmptyResponse`](../structures/responses/interfaces/EmptyResponse.md)\>

Defined in: [configuration/index.ts:692](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/configuration/index.ts#L692)

Updates an existing canned response.

#### Parameters

##### request

[`UpdateCannedResponseRequest`](../structures/structures/interfaces/UpdateCannedResponseRequest.md)

canned response update details

#### Returns

`Promise`\<[`EmptyResponse`](../structures/responses/interfaces/EmptyResponse.md)\>

***

### updateCompanyDetails()

> **updateCompanyDetails**(`companyDetails`, `enrich`): `Promise`\<[`EmptyResponse`](../structures/responses/interfaces/EmptyResponse.md)\>

Defined in: [configuration/index.ts:668](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/configuration/index.ts#L668)

Updates company details in the license.

#### Parameters

##### companyDetails

[`CompanyDetails`](../structures/structures/interfaces/CompanyDetails.md)

company details to update

##### enrich

`boolean`

if true, system will search for company's url or email domain to automatically fill empty fields

#### Returns

`Promise`\<[`EmptyResponse`](../structures/responses/interfaces/EmptyResponse.md)\>

***

### updateGreeting()

> **updateGreeting**(`request`): `Promise`\<[`EmptyResponse`](../structures/responses/interfaces/EmptyResponse.md)\>

Defined in: [configuration/index.ts:716](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/configuration/index.ts#L716)

Updates an existing greeting.

#### Parameters

##### request

[`UpdateGreetingRequest`](../structures/structures/interfaces/UpdateGreetingRequest.md)

greeting update details including id and optional fields to update

#### Returns

`Promise`\<[`EmptyResponse`](../structures/responses/interfaces/EmptyResponse.md)\>

***

### updateGroup()

> **updateGroup**(`id`, `name?`, `agent_priorities?`, `language_code?`): `Promise`\<[`EmptyResponse`](../structures/responses/interfaces/EmptyResponse.md)\>

Defined in: [configuration/index.ts:369](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/configuration/index.ts#L369)

Updates an existing group.

#### Parameters

##### id

`number`

group id

##### name?

`string`

group name

##### agent\_priorities?

[`AgentPriorities`](../structures/structures/interfaces/AgentPriorities.md)

agents priorities within a group

##### language\_code?

`string`

groups language

#### Returns

`Promise`\<[`EmptyResponse`](../structures/responses/interfaces/EmptyResponse.md)\>

***

### updateGroupProperties()

> **updateGroupProperties**(`group_id`, `properties`): `Promise`\<[`EmptyResponse`](../structures/responses/interfaces/EmptyResponse.md)\>

Defined in: [configuration/index.ts:484](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/configuration/index.ts#L484)

Updates a property value within a group as the property location. This operation doesn't overwrite the existing values.

#### Parameters

##### group\_id

`number`

group ID to update properties

##### properties

[`Properties`](../structures/structures/interfaces/Properties.md)

properties to update

#### Returns

`Promise`\<[`EmptyResponse`](../structures/responses/interfaces/EmptyResponse.md)\>

***

### updateLicenseProperties()

> **updateLicenseProperties**(`properties`): `Promise`\<[`EmptyResponse`](../structures/responses/interfaces/EmptyResponse.md)\>

Defined in: [configuration/index.ts:455](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/configuration/index.ts#L455)

Updates a property value within a license. This operation doesn't overwrite the existing values.

#### Parameters

##### properties

[`Properties`](../structures/structures/interfaces/Properties.md)

properties to update

#### Returns

`Promise`\<[`EmptyResponse`](../structures/responses/interfaces/EmptyResponse.md)\>

***

### updateTag()

> **updateTag**(`name`, `groupIDs?`): `Promise`\<[`EmptyResponse`](../structures/responses/interfaces/EmptyResponse.md)\>

Defined in: [configuration/index.ts:641](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/configuration/index.ts#L641)

Updates an existing tag.

#### Parameters

##### name

`string`

name of the updated tag

##### groupIDs?

`number`[]

list of groups where tag will be assigned

#### Returns

`Promise`\<[`EmptyResponse`](../structures/responses/interfaces/EmptyResponse.md)\>
