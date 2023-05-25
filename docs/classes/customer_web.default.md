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

[customer/web.ts:32](https://github.com/livechat/lc-sdk-js/blob/d267eeb/src/customer/web.ts#L32)

## Properties

### APIURL

• **APIURL**: `string`

#### Inherited from

[WebAPI](internal.WebAPI.md).[APIURL](internal.WebAPI.md#apiurl)

#### Defined in

[internal/index.ts:9](https://github.com/livechat/lc-sdk-js/blob/d267eeb/src/internal/index.ts#L9)

___

### author\_id

• `Optional` **author\_id**: `string`

#### Inherited from

[WebAPI](internal.WebAPI.md).[author_id](internal.WebAPI.md#author_id)

#### Defined in

[internal/index.ts:14](https://github.com/livechat/lc-sdk-js/blob/d267eeb/src/internal/index.ts#L14)

___

### clientID

• **clientID**: `string`

#### Inherited from

[WebAPI](internal.WebAPI.md).[clientID](internal.WebAPI.md#clientid)

#### Defined in

[internal/index.ts:10](https://github.com/livechat/lc-sdk-js/blob/d267eeb/src/internal/index.ts#L10)

___

### tokenGetter

• **tokenGetter**: [`TokenGetter`](../modules/authorization.md#tokengetter)

#### Inherited from

[WebAPI](internal.WebAPI.md).[tokenGetter](internal.WebAPI.md#tokengetter)

#### Defined in

[internal/index.ts:13](https://github.com/livechat/lc-sdk-js/blob/d267eeb/src/internal/index.ts#L13)

___

### type

• **type**: `apiType`

#### Inherited from

[WebAPI](internal.WebAPI.md).[type](internal.WebAPI.md#type)

#### Defined in

[internal/index.ts:12](https://github.com/livechat/lc-sdk-js/blob/d267eeb/src/internal/index.ts#L12)

___

### version

• **version**: `string`

#### Inherited from

[WebAPI](internal.WebAPI.md).[version](internal.WebAPI.md#version)

#### Defined in

[internal/index.ts:11](https://github.com/livechat/lc-sdk-js/blob/d267eeb/src/internal/index.ts#L11)

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

[customer/web.ts:338](https://github.com/livechat/lc-sdk-js/blob/d267eeb/src/customer/web.ts#L338)

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

[customer/web.ts:347](https://github.com/livechat/lc-sdk-js/blob/d267eeb/src/customer/web.ts#L347)

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

[customer/web.ts:291](https://github.com/livechat/lc-sdk-js/blob/d267eeb/src/customer/web.ts#L291)

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

[customer/web.ts:83](https://github.com/livechat/lc-sdk-js/blob/d267eeb/src/customer/web.ts#L83)

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

[customer/web.ts:150](https://github.com/livechat/lc-sdk-js/blob/d267eeb/src/customer/web.ts#L150)

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

[customer/web.ts:210](https://github.com/livechat/lc-sdk-js/blob/d267eeb/src/customer/web.ts#L210)

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

[customer/web.ts:174](https://github.com/livechat/lc-sdk-js/blob/d267eeb/src/customer/web.ts#L174)

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

[customer/web.ts:58](https://github.com/livechat/lc-sdk-js/blob/d267eeb/src/customer/web.ts#L58)

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

[customer/web.ts:372](https://github.com/livechat/lc-sdk-js/blob/d267eeb/src/customer/web.ts#L372)

___

### getCustomer

▸ **getCustomer**(): `Promise`<[`CustomerParameters`](../interfaces/customer_structures_structures.CustomerParameters.md)\>

Returns the info about the Customer requesting it.

#### Returns

`Promise`<[`CustomerParameters`](../interfaces/customer_structures_structures.CustomerParameters.md)\>

#### Defined in

[customer/web.ts:269](https://github.com/livechat/lc-sdk-js/blob/d267eeb/src/customer/web.ts#L269)

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

[customer/web.ts:363](https://github.com/livechat/lc-sdk-js/blob/d267eeb/src/customer/web.ts#L363)

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

[customer/web.ts:304](https://github.com/livechat/lc-sdk-js/blob/d267eeb/src/customer/web.ts#L304)

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

[customer/web.ts:385](https://github.com/livechat/lc-sdk-js/blob/d267eeb/src/customer/web.ts#L385)

___

### getPredictedAgent

▸ **getPredictedAgent**(): `Promise`<[`GetPredictedAgentResponse`](../interfaces/customer_structures_responses.GetPredictedAgentResponse.md)\>

Gets the predicted Agent - the one the Customer will chat with when the chat starts.
To use this method, the Customer needs to be logged in, which can be done via the login method.

#### Returns

`Promise`<[`GetPredictedAgentResponse`](../interfaces/customer_structures_responses.GetPredictedAgentResponse.md)\>

#### Defined in

[customer/web.ts:312](https://github.com/livechat/lc-sdk-js/blob/d267eeb/src/customer/web.ts#L312)

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

[customer/web.ts:320](https://github.com/livechat/lc-sdk-js/blob/d267eeb/src/customer/web.ts#L320)

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

[customer/web.ts:40](https://github.com/livechat/lc-sdk-js/blob/d267eeb/src/customer/web.ts#L40)

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

[customer/web.ts:242](https://github.com/livechat/lc-sdk-js/blob/d267eeb/src/customer/web.ts#L242)

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

[customer/web.ts:277](https://github.com/livechat/lc-sdk-js/blob/d267eeb/src/customer/web.ts#L277)

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

[customer/web.ts:229](https://github.com/livechat/lc-sdk-js/blob/d267eeb/src/customer/web.ts#L229)

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

[customer/web.ts:49](https://github.com/livechat/lc-sdk-js/blob/d267eeb/src/customer/web.ts#L49)

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

[customer/web.ts:329](https://github.com/livechat/lc-sdk-js/blob/d267eeb/src/customer/web.ts#L329)

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

[customer/web.ts:355](https://github.com/livechat/lc-sdk-js/blob/d267eeb/src/customer/web.ts#L355)

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

[customer/web.ts:74](https://github.com/livechat/lc-sdk-js/blob/d267eeb/src/customer/web.ts#L74)

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

[internal/index.ts:24](https://github.com/livechat/lc-sdk-js/blob/d267eeb/src/internal/index.ts#L24)

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

[customer/web.ts:95](https://github.com/livechat/lc-sdk-js/blob/d267eeb/src/customer/web.ts#L95)

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

[customer/web.ts:122](https://github.com/livechat/lc-sdk-js/blob/d267eeb/src/customer/web.ts#L122)

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

[customer/web.ts:132](https://github.com/livechat/lc-sdk-js/blob/d267eeb/src/customer/web.ts#L132)

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

[internal/index.ts:74](https://github.com/livechat/lc-sdk-js/blob/d267eeb/src/internal/index.ts#L74)

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

[customer/web.ts:262](https://github.com/livechat/lc-sdk-js/blob/d267eeb/src/customer/web.ts#L262)

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

[customer/web.ts:66](https://github.com/livechat/lc-sdk-js/blob/d267eeb/src/customer/web.ts#L66)

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

[customer/web.ts:141](https://github.com/livechat/lc-sdk-js/blob/d267eeb/src/customer/web.ts#L141)

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

[customer/web.ts:254](https://github.com/livechat/lc-sdk-js/blob/d267eeb/src/customer/web.ts#L254)

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

[customer/web.ts:189](https://github.com/livechat/lc-sdk-js/blob/d267eeb/src/customer/web.ts#L189)

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

[customer/web.ts:160](https://github.com/livechat/lc-sdk-js/blob/d267eeb/src/customer/web.ts#L160)

___

### uploadFile

▸ **uploadFile**(`data`, `config`): `Promise`<[`UploadFileResponse`](../interfaces/customer_structures_responses.UploadFileResponse.md)\>

Note: the browser and Node.js may use different implementations of the file upload logic.
This method is just an axios wrapper pointing to the upload file URL - you have to provide your own form data
and headers in the config object.
See [Customer Chat API - upload file][https://developers.livechat.com/docs/messaging/customer-chat-api#upload-file](https://developers.livechat.com/docs/messaging/customer-chat-api#upload-file)

Uploads a file to the server as a temporary file. It returns a URL that expires after 24 hours unless the URL is used in send_event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `any` | axios data parameter |
| `config` | `any` | axios config parameter |

#### Returns

`Promise`<[`UploadFileResponse`](../interfaces/customer_structures_responses.UploadFileResponse.md)\>

#### Defined in

[customer/web.ts:113](https://github.com/livechat/lc-sdk-js/blob/d267eeb/src/customer/web.ts#L113)
