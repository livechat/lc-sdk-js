[@livechat/lc-sdk-js](../README.md) / [customer/web](../modules/customer_web.md) / default

# Class: default

[customer/web](../modules/customer_web.md).default

## Hierarchy

- [`WebAPI`](internal.WebAPI.md)

  ↳ **`default`**

## Table of contents

### Constructors

- [constructor](customer_web.default.md#constructor)

### Properties

- [APIURL](customer_web.default.md#apiurl)
- [author\_id](customer_web.default.md#author_id)
- [clientID](customer_web.default.md#clientid)
- [tokenGetter](customer_web.default.md#tokengetter)
- [type](customer_web.default.md#type)
- [version](customer_web.default.md#version)

### Methods

- [acceptGreeting](customer_web.default.md#acceptgreeting)
- [cancelGreeting](customer_web.default.md#cancelgreeting)
- [checkGoals](customer_web.default.md#checkgoals)
- [deactivateChat](customer_web.default.md#deactivatechat)
- [deleteChatProperties](customer_web.default.md#deletechatproperties)
- [deleteEventProperties](customer_web.default.md#deleteeventproperties)
- [deleteThreadProperties](customer_web.default.md#deletethreadproperties)
- [getChat](customer_web.default.md#getchat)
- [getConfiguration](customer_web.default.md#getconfiguration)
- [getCustomer](customer_web.default.md#getcustomer)
- [getDynamicConfiguration](customer_web.default.md#getdynamicconfiguration)
- [getForm](customer_web.default.md#getform)
- [getLocalization](customer_web.default.md#getlocalization)
- [getPredictedAgent](customer_web.default.md#getpredictedagent)
- [getURLInfo](customer_web.default.md#geturlinfo)
- [listChats](customer_web.default.md#listchats)
- [listGroupProperties](customer_web.default.md#listgroupproperties)
- [listGroupStatuses](customer_web.default.md#listgroupstatuses)
- [listLicenseProperties](customer_web.default.md#listlicenseproperties)
- [listThreads](customer_web.default.md#listthreads)
- [markEventsAsSeen](customer_web.default.md#markeventsasseen)
- [requestEmailVerification](customer_web.default.md#requestemailverification)
- [resumeChat](customer_web.default.md#resumechat)
- [send](customer_web.default.md#send)
- [sendEvent](customer_web.default.md#sendevent)
- [sendRichMessagePostback](customer_web.default.md#sendrichmessagepostback)
- [sendSneakPeek](customer_web.default.md#sendsneakpeek)
- [setAuthorId](customer_web.default.md#setauthorid)
- [setCustomerSessionFields](customer_web.default.md#setcustomersessionfields)
- [startChat](customer_web.default.md#startchat)
- [updateChatProperties](customer_web.default.md#updatechatproperties)
- [updateCustomer](customer_web.default.md#updatecustomer)
- [updateEventProperties](customer_web.default.md#updateeventproperties)
- [updateThreadProperties](customer_web.default.md#updatethreadproperties)
- [uploadFile](customer_web.default.md#uploadfile)

## Constructors

### constructor

• **new default**(`clientID`, `tokenGetter`, `options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `clientID` | `string` |
| `tokenGetter` | [`TokenGetter`](../modules/authorization.md#tokengetter) |
| `options?` | [`WebAPIOptions`](../interfaces/customer_structures_structures.WebAPIOptions.md) |

#### Overrides

[WebAPI](internal.WebAPI.md).[constructor](internal.WebAPI.md#constructor)

#### Defined in

[customer/web.ts:34](https://github.com/livechat/lc-sdk-js/blob/1fa827f/src/customer/web.ts#L34)

## Properties

### APIURL

• **APIURL**: `string`

#### Inherited from

[WebAPI](internal.WebAPI.md).[APIURL](internal.WebAPI.md#apiurl)

#### Defined in

[internal/index.ts:14](https://github.com/livechat/lc-sdk-js/blob/1fa827f/src/internal/index.ts#L14)

___

### author\_id

• `Optional` **author\_id**: `string`

#### Inherited from

[WebAPI](internal.WebAPI.md).[author_id](internal.WebAPI.md#author_id)

#### Defined in

[internal/index.ts:16](https://github.com/livechat/lc-sdk-js/blob/1fa827f/src/internal/index.ts#L16)

___

### clientID

• `Protected` `Readonly` **clientID**: `string`

#### Inherited from

[WebAPI](internal.WebAPI.md).[clientID](internal.WebAPI.md#clientid)

#### Defined in

[internal/index.ts:28](https://github.com/livechat/lc-sdk-js/blob/1fa827f/src/internal/index.ts#L28)

___

### tokenGetter

• `Protected` `Readonly` **tokenGetter**: [`TokenGetter`](../modules/authorization.md#tokengetter)

#### Inherited from

[WebAPI](internal.WebAPI.md).[tokenGetter](internal.WebAPI.md#tokengetter)

#### Defined in

[internal/index.ts:29](https://github.com/livechat/lc-sdk-js/blob/1fa827f/src/internal/index.ts#L29)

___

### type

• `Protected` `Readonly` **type**: `apiType`

#### Inherited from

[WebAPI](internal.WebAPI.md).[type](internal.WebAPI.md#type)

#### Defined in

[internal/index.ts:30](https://github.com/livechat/lc-sdk-js/blob/1fa827f/src/internal/index.ts#L30)

___

### version

• **version**: `string`

#### Inherited from

[WebAPI](internal.WebAPI.md).[version](internal.WebAPI.md#version)

#### Defined in

[internal/index.ts:15](https://github.com/livechat/lc-sdk-js/blob/1fa827f/src/internal/index.ts#L15)

## Methods

### acceptGreeting

▸ **acceptGreeting**(`greeting_id`, `unique_id`): `Promise`<[`EmptyResponse`](../interfaces/customer_structures_responses.EmptyResponse.md)\>

Marks an incoming greeting as seen.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `greeting_id` | `number` | number representing type of a greeting |
| `unique_id` | `string` | specific greeting event ID |

#### Returns

`Promise`<[`EmptyResponse`](../interfaces/customer_structures_responses.EmptyResponse.md)\>

#### Defined in

[customer/web.ts:340](https://github.com/livechat/lc-sdk-js/blob/1fa827f/src/customer/web.ts#L340)

___

### cancelGreeting

▸ **cancelGreeting**(`unique_id`): `Promise`<[`EmptyResponse`](../interfaces/customer_structures_responses.EmptyResponse.md)\>

Cancels a greeting (an invitation to the chat).
For example, Customers could cancel greetings by minimalizing the chat widget with a greeting.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `unique_id` | `string` | specific greeting ID |

#### Returns

`Promise`<[`EmptyResponse`](../interfaces/customer_structures_responses.EmptyResponse.md)\>

#### Defined in

[customer/web.ts:349](https://github.com/livechat/lc-sdk-js/blob/1fa827f/src/customer/web.ts#L349)

___

### checkGoals

▸ **checkGoals**(`session_fields`, `group_id`, `page_url`): `Promise`<[`EmptyResponse`](../interfaces/customer_structures_responses.EmptyResponse.md)\>

Customer can use this method to trigger checking if goals were achieved.
Then, Agents receive the information. You should call this method to provide goals
parameters for the server when the customers limit is reached. Works only for offline Customers.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `session_fields` | `object`[] | object enclosed key:value pairs |
| `group_id` | `number` | group id to check goals in |
| `page_url` | `number` | page URL |

#### Returns

`Promise`<[`EmptyResponse`](../interfaces/customer_structures_responses.EmptyResponse.md)\>

#### Defined in

[customer/web.ts:293](https://github.com/livechat/lc-sdk-js/blob/1fa827f/src/customer/web.ts#L293)

___

### deactivateChat

▸ **deactivateChat**(`id`): `Promise`<[`EmptyResponse`](../interfaces/customer_structures_responses.EmptyResponse.md)\>

Deactivates a chat by closing the currently open thread. Sending messages to this thread will no longer be possible.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | chat ID to deactivate |

#### Returns

`Promise`<[`EmptyResponse`](../interfaces/customer_structures_responses.EmptyResponse.md)\>

#### Defined in

[customer/web.ts:85](https://github.com/livechat/lc-sdk-js/blob/1fa827f/src/customer/web.ts#L85)

___

### deleteChatProperties

▸ **deleteChatProperties**(`id`, `properties`): `Promise`<[`EmptyResponse`](../interfaces/customer_structures_responses.EmptyResponse.md)\>

Deletes chat properties

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | chat to delete properties |
| `properties` | [`Properties`](../interfaces/customer_structures_structures.Properties.md) | properties to delete |

#### Returns

`Promise`<[`EmptyResponse`](../interfaces/customer_structures_responses.EmptyResponse.md)\>

#### Defined in

[customer/web.ts:152](https://github.com/livechat/lc-sdk-js/blob/1fa827f/src/customer/web.ts#L152)

___

### deleteEventProperties

▸ **deleteEventProperties**(`chat_id`, `thread_id`, `event_id`, `properties`): `Promise`<[`EmptyResponse`](../interfaces/customer_structures_responses.EmptyResponse.md)\>

Deletes event properties

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `chat_id` | `string` | chat ID of event to delete |
| `thread_id` | `string` | thread ID of event to delete |
| `event_id` | `string` | event to delete properties |
| `properties` | [`Properties`](../interfaces/customer_structures_structures.Properties.md) | properties to delete |

#### Returns

`Promise`<[`EmptyResponse`](../interfaces/customer_structures_responses.EmptyResponse.md)\>

#### Defined in

[customer/web.ts:212](https://github.com/livechat/lc-sdk-js/blob/1fa827f/src/customer/web.ts#L212)

___

### deleteThreadProperties

▸ **deleteThreadProperties**(`chat_id`, `thread_id`, `properties`): `Promise`<[`EmptyResponse`](../interfaces/customer_structures_responses.EmptyResponse.md)\>

Deletes thread properties

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `chat_id` | `string` | chat ID of thread to delete |
| `thread_id` | `string` | thread to delete properties |
| `properties` | [`Properties`](../interfaces/customer_structures_structures.Properties.md) | properties to delete |

#### Returns

`Promise`<[`EmptyResponse`](../interfaces/customer_structures_responses.EmptyResponse.md)\>

#### Defined in

[customer/web.ts:176](https://github.com/livechat/lc-sdk-js/blob/1fa827f/src/customer/web.ts#L176)

___

### getChat

▸ **getChat**(`chat_id`, `thread_id?`): `Promise`<[`GetChatResponse`](../interfaces/customer_structures_responses.GetChatResponse.md)\>

It returns a thread that the current Customer has access to in a given chat.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `chat_id` | `string` | ID of a chat to get |
| `thread_id?` | `string` | thread ID to get (if not provided, last thread is returned) |

#### Returns

`Promise`<[`GetChatResponse`](../interfaces/customer_structures_responses.GetChatResponse.md)\>

#### Defined in

[customer/web.ts:60](https://github.com/livechat/lc-sdk-js/blob/1fa827f/src/customer/web.ts#L60)

___

### getConfiguration

▸ **getConfiguration**(`group_id`, `version`): `Promise`<[`GroupConfiguration`](../interfaces/customer_structures_structures.GroupConfiguration.md)\>

Returns the configuration of a given group in a given version.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `group_id` | `string` | the ID of group that you want to get configuration for |
| `version` | `string` | the version that you want to get a configuration for |

#### Returns

`Promise`<[`GroupConfiguration`](../interfaces/customer_structures_structures.GroupConfiguration.md)\>

#### Defined in

[customer/web.ts:374](https://github.com/livechat/lc-sdk-js/blob/1fa827f/src/customer/web.ts#L374)

___

### getCustomer

▸ **getCustomer**(): `Promise`<[`CustomerParameters`](../interfaces/customer_structures_structures.CustomerParameters.md)\>

Returns the info about the Customer requesting it.

#### Returns

`Promise`<[`CustomerParameters`](../interfaces/customer_structures_structures.CustomerParameters.md)\>

#### Defined in

[customer/web.ts:271](https://github.com/livechat/lc-sdk-js/blob/1fa827f/src/customer/web.ts#L271)

___

### getDynamicConfiguration

▸ **getDynamicConfiguration**(`opts?`): `Promise`<[`GetDynamicConfigurationResponse`](../interfaces/customer_structures_responses.GetDynamicConfigurationResponse.md)\>

Returns the dynamic configuration of a given group.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | [`GetDynamicConfigurationRequest`](../interfaces/customer_structures_structures.GetDynamicConfigurationRequest.md) | properties used to find matching group |

#### Returns

`Promise`<[`GetDynamicConfigurationResponse`](../interfaces/customer_structures_responses.GetDynamicConfigurationResponse.md)\>

#### Defined in

[customer/web.ts:365](https://github.com/livechat/lc-sdk-js/blob/1fa827f/src/customer/web.ts#L365)

___

### getForm

▸ **getForm**(`group_id`, `type`): `Promise`<[`GetFormResponse`](../interfaces/customer_structures_responses.GetFormResponse.md)\>

Returns an empty ticket form of a prechat or postchat survey.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `group_id` | `number` | group id to get form for |
| `type` | `string` | prechat or postchat |

#### Returns

`Promise`<[`GetFormResponse`](../interfaces/customer_structures_responses.GetFormResponse.md)\>

#### Defined in

[customer/web.ts:306](https://github.com/livechat/lc-sdk-js/blob/1fa827f/src/customer/web.ts#L306)

___

### getLocalization

▸ **getLocalization**(`group_id`, `language`, `version`): `Promise`<`Record`<`string`, `string`\>\>

Returns the localization of a given language and group in a given version.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `group_id` | `string` | the ID of the group that you want to get a localization for |
| `language` | `string` | the language that you want to get a localization for |
| `version` | `string` | the version that you want to get a localization for |

#### Returns

`Promise`<`Record`<`string`, `string`\>\>

#### Defined in

[customer/web.ts:387](https://github.com/livechat/lc-sdk-js/blob/1fa827f/src/customer/web.ts#L387)

___

### getPredictedAgent

▸ **getPredictedAgent**(): `Promise`<[`GetPredictedAgentResponse`](../interfaces/customer_structures_responses.GetPredictedAgentResponse.md)\>

Gets the predicted Agent - the one the Customer will chat with when the chat starts.
To use this method, the Customer needs to be logged in, which can be done via the login method.

#### Returns

`Promise`<[`GetPredictedAgentResponse`](../interfaces/customer_structures_responses.GetPredictedAgentResponse.md)\>

#### Defined in

[customer/web.ts:314](https://github.com/livechat/lc-sdk-js/blob/1fa827f/src/customer/web.ts#L314)

___

### getURLInfo

▸ **getURLInfo**(`url`): `Promise`<[`GetURLInfoResponse`](../interfaces/customer_structures_responses.GetURLInfoResponse.md)\>

It returns the info on a given URL.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | URL to get info about |

#### Returns

`Promise`<[`GetURLInfoResponse`](../interfaces/customer_structures_responses.GetURLInfoResponse.md)\>

#### Defined in

[customer/web.ts:322](https://github.com/livechat/lc-sdk-js/blob/1fa827f/src/customer/web.ts#L322)

___

### listChats

▸ **listChats**(`opts?`): `Promise`<[`ListChatsResponse`](../interfaces/customer_structures_responses.ListChatsResponse.md)\>

It returns summaries of the chats a Customer participated in.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | [`ListChatParameters`](../interfaces/customer_structures_structures.ListChatParameters.md) | set of filters and pagination to limit returned entries |

#### Returns

`Promise`<[`ListChatsResponse`](../interfaces/customer_structures_responses.ListChatsResponse.md)\>

#### Defined in

[customer/web.ts:42](https://github.com/livechat/lc-sdk-js/blob/1fa827f/src/customer/web.ts#L42)

___

### listGroupProperties

▸ **listGroupProperties**(`id`, `namespace?`, `name?`): `Promise`<[`Properties`](../interfaces/customer_structures_structures.Properties.md)\>

Returns the properties of a given group. It only returns the properties a Customer has access to.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `number` | ID of group to return properties of |
| `namespace?` | `string` | property namespace |
| `name?` | `string` | property name |

#### Returns

`Promise`<[`Properties`](../interfaces/customer_structures_structures.Properties.md)\>

#### Defined in

[customer/web.ts:244](https://github.com/livechat/lc-sdk-js/blob/1fa827f/src/customer/web.ts#L244)

___

### listGroupStatuses

▸ **listGroupStatuses**(`param`): `Promise`<[`ListGroupStatusesResponse`](../interfaces/customer_structures_responses.ListGroupStatusesResponse.md)\>

Lists statuses of groups.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `param` | `boolean` \| `number`[] | either boolean switch for all groups or list of group ID's to check |

#### Returns

`Promise`<[`ListGroupStatusesResponse`](../interfaces/customer_structures_responses.ListGroupStatusesResponse.md)\>

#### Defined in

[customer/web.ts:279](https://github.com/livechat/lc-sdk-js/blob/1fa827f/src/customer/web.ts#L279)

___

### listLicenseProperties

▸ **listLicenseProperties**(`namespace?`, `name?`): `Promise`<[`Properties`](../interfaces/customer_structures_structures.Properties.md)\>

Returns the properties of a given license. It only returns the properties a Customer has access to.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `namespace?` | `string` | property namespace |
| `name?` | `string` | property name |

#### Returns

`Promise`<[`Properties`](../interfaces/customer_structures_structures.Properties.md)\>

#### Defined in

[customer/web.ts:231](https://github.com/livechat/lc-sdk-js/blob/1fa827f/src/customer/web.ts#L231)

___

### listThreads

▸ **listThreads**(`chat_id`, `opts?`): `Promise`<[`ListThreadsResponse`](../interfaces/customer_structures_responses.ListThreadsResponse.md)\>

Returns threads that the current Customer has access to in a given chat.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `chat_id` | `string` | chat ID to get threads from |
| `opts?` | [`ListThreadsParameters`](../interfaces/customer_structures_structures.ListThreadsParameters.md) | additional options like pagination and sorting |

#### Returns

`Promise`<[`ListThreadsResponse`](../interfaces/customer_structures_responses.ListThreadsResponse.md)\>

#### Defined in

[customer/web.ts:51](https://github.com/livechat/lc-sdk-js/blob/1fa827f/src/customer/web.ts#L51)

___

### markEventsAsSeen

▸ **markEventsAsSeen**(`chat_id`, `seen_up_to`): `Promise`<[`EmptyResponse`](../interfaces/customer_structures_responses.EmptyResponse.md)\>

Marks events as seen by Agent.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `chat_id` | `string` | chat to mark events |
| `seen_up_to` | `string` | date up to which mark events |

#### Returns

`Promise`<[`EmptyResponse`](../interfaces/customer_structures_responses.EmptyResponse.md)\>

#### Defined in

[customer/web.ts:331](https://github.com/livechat/lc-sdk-js/blob/1fa827f/src/customer/web.ts#L331)

___

### requestEmailVerification

▸ **requestEmailVerification**(`callback_uri`): `Promise`<[`EmptyResponse`](../interfaces/customer_structures_responses.EmptyResponse.md)\>

Requests customer to verify email.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callback_uri` | `string` | URI to send webhook when customer confirms identity |

#### Returns

`Promise`<[`EmptyResponse`](../interfaces/customer_structures_responses.EmptyResponse.md)\>

#### Defined in

[customer/web.ts:357](https://github.com/livechat/lc-sdk-js/blob/1fa827f/src/customer/web.ts#L357)

___

### resumeChat

▸ **resumeChat**(`param`): `Promise`<[`ResumeChatResponse`](../interfaces/customer_structures_responses.ResumeChatResponse.md)\>

Restarts an archived chat

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `param` | `string` \| [`ResumeChatParameters`](../interfaces/customer_structures_structures.ResumeChatParameters.md) | either string ID of a chat to activate or full initial chat object |

#### Returns

`Promise`<[`ResumeChatResponse`](../interfaces/customer_structures_responses.ResumeChatResponse.md)\>

#### Defined in

[customer/web.ts:76](https://github.com/livechat/lc-sdk-js/blob/1fa827f/src/customer/web.ts#L76)

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

[internal/index.ts:37](https://github.com/livechat/lc-sdk-js/blob/1fa827f/src/internal/index.ts#L37)

___

### sendEvent

▸ **sendEvent**(`chat_id`, `event`, `attach_to_last_thread?`): `Promise`<[`SendEventResponse`](../interfaces/customer_structures_responses.SendEventResponse.md)\>

Sends an Event object. Use this method to send a message by specifing the Message event type in the request.
It's possible to write to a chat without joining it. The user sending an event will be automatically added to the chat
with the present parameter set to false.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `chat_id` | `string` | chat to send event to |
| `event` | [`RequestEvent`](../modules/customer_structures_events.md#requestevent) | Event request object |
| `attach_to_last_thread?` | `boolean` | if true, adds event to last inactive thread |

#### Returns

`Promise`<[`SendEventResponse`](../interfaces/customer_structures_responses.SendEventResponse.md)\>

#### Defined in

[customer/web.ts:97](https://github.com/livechat/lc-sdk-js/blob/1fa827f/src/customer/web.ts#L97)

___

### sendRichMessagePostback

▸ **sendRichMessagePostback**(`opts`): `Promise`<[`EmptyResponse`](../interfaces/customer_structures_responses.EmptyResponse.md)\>

Sends postback for rich message

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | [`SendRichMessagePostbackParameters`](../interfaces/customer_structures_structures.SendRichMessagePostbackParameters.md) | postback data |

#### Returns

`Promise`<[`EmptyResponse`](../interfaces/customer_structures_responses.EmptyResponse.md)\>

#### Defined in

[customer/web.ts:124](https://github.com/livechat/lc-sdk-js/blob/1fa827f/src/customer/web.ts#L124)

___

### sendSneakPeek

▸ **sendSneakPeek**(`chat_id`, `sneak_peek_text`): `Promise`<[`EmptyResponse`](../interfaces/customer_structures_responses.EmptyResponse.md)\>

Sends a sneak peek to a chat.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `chat_id` | `string` | chat to send sneak peek to |
| `sneak_peek_text` | `string` | text to sneak peek |

#### Returns

`Promise`<[`EmptyResponse`](../interfaces/customer_structures_responses.EmptyResponse.md)\>

#### Defined in

[customer/web.ts:134](https://github.com/livechat/lc-sdk-js/blob/1fa827f/src/customer/web.ts#L134)

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

[internal/index.ts:80](https://github.com/livechat/lc-sdk-js/blob/1fa827f/src/internal/index.ts#L80)

___

### setCustomerSessionFields

▸ **setCustomerSessionFields**(`session_fields`): `Promise`<[`EmptyResponse`](../interfaces/customer_structures_responses.EmptyResponse.md)\>

Sets session fields for Customer.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `session_fields` | `object`[] | fields to set in form of object enclosed key:value pairs |

#### Returns

`Promise`<[`EmptyResponse`](../interfaces/customer_structures_responses.EmptyResponse.md)\>

#### Defined in

[customer/web.ts:264](https://github.com/livechat/lc-sdk-js/blob/1fa827f/src/customer/web.ts#L264)

___

### startChat

▸ **startChat**(`opts?`): `Promise`<[`StartChatResponse`](../interfaces/customer_structures_responses.StartChatResponse.md)\>

Starts a chat

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | [`StartChatParameters`](../interfaces/customer_structures_structures.StartChatParameters.md) | options like initial chat data or continuous switch |

#### Returns

`Promise`<[`StartChatResponse`](../interfaces/customer_structures_responses.StartChatResponse.md)\>

#### Defined in

[customer/web.ts:68](https://github.com/livechat/lc-sdk-js/blob/1fa827f/src/customer/web.ts#L68)

___

### updateChatProperties

▸ **updateChatProperties**(`id`, `properties`): `Promise`<[`EmptyResponse`](../interfaces/customer_structures_responses.EmptyResponse.md)\>

Updates chat properties

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | chat to update properties |
| `properties` | [`Properties`](../interfaces/customer_structures_structures.Properties.md) | properties to update |

#### Returns

`Promise`<[`EmptyResponse`](../interfaces/customer_structures_responses.EmptyResponse.md)\>

#### Defined in

[customer/web.ts:143](https://github.com/livechat/lc-sdk-js/blob/1fa827f/src/customer/web.ts#L143)

___

### updateCustomer

▸ **updateCustomer**(`opts`): `Promise`<[`EmptyResponse`](../interfaces/customer_structures_responses.EmptyResponse.md)\>

Updates Customer's properties.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | [`CustomerParameters`](../interfaces/customer_structures_structures.CustomerParameters.md) | properties to update |

#### Returns

`Promise`<[`EmptyResponse`](../interfaces/customer_structures_responses.EmptyResponse.md)\>

#### Defined in

[customer/web.ts:256](https://github.com/livechat/lc-sdk-js/blob/1fa827f/src/customer/web.ts#L256)

___

### updateEventProperties

▸ **updateEventProperties**(`chat_id`, `thread_id`, `event_id`, `properties`): `Promise`<[`EmptyResponse`](../interfaces/customer_structures_responses.EmptyResponse.md)\>

Updates event properties

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `chat_id` | `string` | chat ID of event to update |
| `thread_id` | `string` | thread ID of event to update |
| `event_id` | `string` | event to update properties |
| `properties` | [`Properties`](../interfaces/customer_structures_structures.Properties.md) | properties to update |

#### Returns

`Promise`<[`EmptyResponse`](../interfaces/customer_structures_responses.EmptyResponse.md)\>

#### Defined in

[customer/web.ts:191](https://github.com/livechat/lc-sdk-js/blob/1fa827f/src/customer/web.ts#L191)

___

### updateThreadProperties

▸ **updateThreadProperties**(`chat_id`, `thread_id`, `properties`): `Promise`<[`EmptyResponse`](../interfaces/customer_structures_responses.EmptyResponse.md)\>

Updates thread properties

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `chat_id` | `string` | chat ID of thread to update |
| `thread_id` | `string` | thread to update properties |
| `properties` | [`Properties`](../interfaces/customer_structures_structures.Properties.md) | properties to update |

#### Returns

`Promise`<[`EmptyResponse`](../interfaces/customer_structures_responses.EmptyResponse.md)\>

#### Defined in

[customer/web.ts:162](https://github.com/livechat/lc-sdk-js/blob/1fa827f/src/customer/web.ts#L162)

___

### uploadFile

▸ **uploadFile**(`file`, `filename`): `Promise`<[`UploadFileResponse`](../interfaces/customer_structures_responses.UploadFileResponse.md)\>

Uploads a file to the server as a temporary file. It returns a URL that expires after 24 hours unless the URL is used in send_event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `file` | `string` \| `Buffer` | path of file to upload or Buffer with content |
| `filename` | `string` | filename for uploaded file |

#### Returns

`Promise`<[`UploadFileResponse`](../interfaces/customer_structures_responses.UploadFileResponse.md)\>

#### Defined in

[customer/web.ts:110](https://github.com/livechat/lc-sdk-js/blob/1fa827f/src/customer/web.ts#L110)
