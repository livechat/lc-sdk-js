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
| `options?` | [`WebAPIOptions`](../interfaces/objects.WebAPIOptions.md) |

#### Overrides

[WebAPI](internal.WebAPI.md).[constructor](internal.WebAPI.md#constructor)

#### Defined in

[customer/web.ts:32](https://github.com/livechat/lc-sdk-js/blob/4da1eb6/src/customer/web.ts#L32)

## Properties

### APIURL

• **APIURL**: `string`

#### Inherited from

[WebAPI](internal.WebAPI.md).[APIURL](internal.WebAPI.md#apiurl)

#### Defined in

[internal/index.ts:15](https://github.com/livechat/lc-sdk-js/blob/4da1eb6/src/internal/index.ts#L15)

___

### clientID

• `Protected` `Readonly` **clientID**: `string`

#### Inherited from

[WebAPI](internal.WebAPI.md).[clientID](internal.WebAPI.md#clientid)

#### Defined in

[internal/index.ts:28](https://github.com/livechat/lc-sdk-js/blob/4da1eb6/src/internal/index.ts#L28)

___

### tokenGetter

• `Protected` `Readonly` **tokenGetter**: [`TokenGetter`](../modules/authorization.md#tokengetter)

#### Inherited from

[WebAPI](internal.WebAPI.md).[tokenGetter](internal.WebAPI.md#tokengetter)

#### Defined in

[internal/index.ts:29](https://github.com/livechat/lc-sdk-js/blob/4da1eb6/src/internal/index.ts#L29)

___

### type

• `Protected` `Readonly` **type**: `apiType`

#### Inherited from

[WebAPI](internal.WebAPI.md).[type](internal.WebAPI.md#type)

#### Defined in

[internal/index.ts:30](https://github.com/livechat/lc-sdk-js/blob/4da1eb6/src/internal/index.ts#L30)

___

### version

• **version**: `string`

#### Inherited from

[WebAPI](internal.WebAPI.md).[version](internal.WebAPI.md#version)

#### Defined in

[internal/index.ts:16](https://github.com/livechat/lc-sdk-js/blob/4da1eb6/src/internal/index.ts#L16)

## Methods

### acceptGreeting

▸ **acceptGreeting**(`greeting_id`, `unique_id`): `Promise`<[`EmptyResponse`](../interfaces/customer_structures.EmptyResponse.md)\>

Marks an incoming greeting as seen.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `greeting_id` | `number` | number representing type of a greeting |
| `unique_id` | `string` | specific greeting event ID |

#### Returns

`Promise`<[`EmptyResponse`](../interfaces/customer_structures.EmptyResponse.md)\>

#### Defined in

[customer/web.ts:337](https://github.com/livechat/lc-sdk-js/blob/4da1eb6/src/customer/web.ts#L337)

___

### cancelGreeting

▸ **cancelGreeting**(`unique_id`): `Promise`<[`EmptyResponse`](../interfaces/customer_structures.EmptyResponse.md)\>

Cancels a greeting (an invitation to the chat).
For example, Customers could cancel greetings by minimalizing the chat widget with a greeting.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `unique_id` | `string` | specific greeting ID |

#### Returns

`Promise`<[`EmptyResponse`](../interfaces/customer_structures.EmptyResponse.md)\>

#### Defined in

[customer/web.ts:346](https://github.com/livechat/lc-sdk-js/blob/4da1eb6/src/customer/web.ts#L346)

___

### checkGoals

▸ **checkGoals**(`session_fields`, `group_id`, `page_url`): `Promise`<[`EmptyResponse`](../interfaces/customer_structures.EmptyResponse.md)\>

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

`Promise`<[`EmptyResponse`](../interfaces/customer_structures.EmptyResponse.md)\>

#### Defined in

[customer/web.ts:291](https://github.com/livechat/lc-sdk-js/blob/4da1eb6/src/customer/web.ts#L291)

___

### deactivateChat

▸ **deactivateChat**(`id`): `Promise`<[`EmptyResponse`](../interfaces/customer_structures.EmptyResponse.md)\>

Deactivates a chat by closing the currently open thread. Sending messages to this thread will no longer be possible.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | chat ID to deactivate |

#### Returns

`Promise`<[`EmptyResponse`](../interfaces/customer_structures.EmptyResponse.md)\>

#### Defined in

[customer/web.ts:83](https://github.com/livechat/lc-sdk-js/blob/4da1eb6/src/customer/web.ts#L83)

___

### deleteChatProperties

▸ **deleteChatProperties**(`id`, `properties`): `Promise`<[`EmptyResponse`](../interfaces/customer_structures.EmptyResponse.md)\>

Deletes chat properties

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | chat to delete properties |
| `properties` | [`Properties`](../interfaces/objects.Properties.md) | properties to delete |

#### Returns

`Promise`<[`EmptyResponse`](../interfaces/customer_structures.EmptyResponse.md)\>

#### Defined in

[customer/web.ts:150](https://github.com/livechat/lc-sdk-js/blob/4da1eb6/src/customer/web.ts#L150)

___

### deleteEventProperties

▸ **deleteEventProperties**(`chat_id`, `thread_id`, `event_id`, `properties`): `Promise`<[`EmptyResponse`](../interfaces/customer_structures.EmptyResponse.md)\>

Deletes event properties

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `chat_id` | `string` | chat ID of event to delete |
| `thread_id` | `string` | thread ID of event to delete |
| `event_id` | `string` | event to delete properties |
| `properties` | [`Properties`](../interfaces/objects.Properties.md) | properties to delete |

#### Returns

`Promise`<[`EmptyResponse`](../interfaces/customer_structures.EmptyResponse.md)\>

#### Defined in

[customer/web.ts:210](https://github.com/livechat/lc-sdk-js/blob/4da1eb6/src/customer/web.ts#L210)

___

### deleteThreadProperties

▸ **deleteThreadProperties**(`chat_id`, `thread_id`, `properties`): `Promise`<[`EmptyResponse`](../interfaces/customer_structures.EmptyResponse.md)\>

Deletes thread properties

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `chat_id` | `string` | chat ID of thread to delete |
| `thread_id` | `string` | thread to delete properties |
| `properties` | [`Properties`](../interfaces/objects.Properties.md) | properties to delete |

#### Returns

`Promise`<[`EmptyResponse`](../interfaces/customer_structures.EmptyResponse.md)\>

#### Defined in

[customer/web.ts:174](https://github.com/livechat/lc-sdk-js/blob/4da1eb6/src/customer/web.ts#L174)

___

### getChat

▸ **getChat**(`chat_id`, `thread_id?`): `Promise`<[`GetChatResponse`](../interfaces/customer_structures.GetChatResponse.md)\>

It returns a thread that the current Customer has access to in a given chat.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `chat_id` | `string` | ID of a chat to get |
| `thread_id?` | `string` | thread ID to get (if not provided, last thread is returned) |

#### Returns

`Promise`<[`GetChatResponse`](../interfaces/customer_structures.GetChatResponse.md)\>

#### Defined in

[customer/web.ts:58](https://github.com/livechat/lc-sdk-js/blob/4da1eb6/src/customer/web.ts#L58)

___

### getConfiguration

▸ **getConfiguration**(`group_id`, `version`): `Promise`<[`GroupConfiguration`](../interfaces/customer_structures.GroupConfiguration.md)\>

Returns the configuration of a given group in a given version.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `group_id` | `string` | the ID of group that you want to get configuration for |
| `version` | `string` | the version that you want to get a configuration for |

#### Returns

`Promise`<[`GroupConfiguration`](../interfaces/customer_structures.GroupConfiguration.md)\>

#### Defined in

[customer/web.ts:371](https://github.com/livechat/lc-sdk-js/blob/4da1eb6/src/customer/web.ts#L371)

___

### getCustomer

▸ **getCustomer**(): `Promise`<[`CustomerParameters`](../interfaces/customer_structures.CustomerParameters.md)\>

Returns the info about the Customer requesting it.

#### Returns

`Promise`<[`CustomerParameters`](../interfaces/customer_structures.CustomerParameters.md)\>

#### Defined in

[customer/web.ts:269](https://github.com/livechat/lc-sdk-js/blob/4da1eb6/src/customer/web.ts#L269)

___

### getDynamicConfiguration

▸ **getDynamicConfiguration**(`opts?`): `Promise`<[`GetDynamicConfigurationResponse`](../interfaces/customer_structures.GetDynamicConfigurationResponse.md)\>

Returns the dynamic configuration of a given group.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | [`GetDynamicConfigurationRequest`](../interfaces/customer_structures.GetDynamicConfigurationRequest.md) | properties used to find matching group |

#### Returns

`Promise`<[`GetDynamicConfigurationResponse`](../interfaces/customer_structures.GetDynamicConfigurationResponse.md)\>

#### Defined in

[customer/web.ts:362](https://github.com/livechat/lc-sdk-js/blob/4da1eb6/src/customer/web.ts#L362)

___

### getForm

▸ **getForm**(`group_id`, `type`): `Promise`<[`GetFormResponse`](../interfaces/customer_structures.GetFormResponse.md)\>

Returns an empty ticket form of a prechat or postchat survey.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `group_id` | `number` | group id to get form for |
| `type` | `string` | prechat or postchat |

#### Returns

`Promise`<[`GetFormResponse`](../interfaces/customer_structures.GetFormResponse.md)\>

#### Defined in

[customer/web.ts:303](https://github.com/livechat/lc-sdk-js/blob/4da1eb6/src/customer/web.ts#L303)

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

[customer/web.ts:384](https://github.com/livechat/lc-sdk-js/blob/4da1eb6/src/customer/web.ts#L384)

___

### getPredictedAgent

▸ **getPredictedAgent**(): `Promise`<[`GetPredictedAgentResponse`](../interfaces/customer_structures.GetPredictedAgentResponse.md)\>

Gets the predicted Agent - the one the Customer will chat with when the chat starts.
To use this method, the Customer needs to be logged in, which can be done via the login method.

#### Returns

`Promise`<[`GetPredictedAgentResponse`](../interfaces/customer_structures.GetPredictedAgentResponse.md)\>

#### Defined in

[customer/web.ts:311](https://github.com/livechat/lc-sdk-js/blob/4da1eb6/src/customer/web.ts#L311)

___

### getURLInfo

▸ **getURLInfo**(`url`): `Promise`<[`GetURLInfoResponse`](../interfaces/customer_structures.GetURLInfoResponse.md)\>

It returns the info on a given URL.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | URL to get info about |

#### Returns

`Promise`<[`GetURLInfoResponse`](../interfaces/customer_structures.GetURLInfoResponse.md)\>

#### Defined in

[customer/web.ts:319](https://github.com/livechat/lc-sdk-js/blob/4da1eb6/src/customer/web.ts#L319)

___

### listChats

▸ **listChats**(`opts?`): `Promise`<[`ListChatsResponse`](../interfaces/customer_structures.ListChatsResponse.md)\>

It returns summaries of the chats a Customer participated in.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | [`ListChatParameters`](../interfaces/customer_structures.ListChatParameters.md) | set of filters and pagination to limit returned entries |

#### Returns

`Promise`<[`ListChatsResponse`](../interfaces/customer_structures.ListChatsResponse.md)\>

#### Defined in

[customer/web.ts:40](https://github.com/livechat/lc-sdk-js/blob/4da1eb6/src/customer/web.ts#L40)

___

### listGroupProperties

▸ **listGroupProperties**(`id`, `namespace?`, `name?`): `Promise`<[`Properties`](../interfaces/objects.Properties.md)\>

Returns the properties of a given group. It only returns the properties a Customer has access to.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `number` | ID of group to return properties of |
| `namespace?` | `string` | property namespace |
| `name?` | `string` | property name |

#### Returns

`Promise`<[`Properties`](../interfaces/objects.Properties.md)\>

#### Defined in

[customer/web.ts:242](https://github.com/livechat/lc-sdk-js/blob/4da1eb6/src/customer/web.ts#L242)

___

### listGroupStatuses

▸ **listGroupStatuses**(`param`): `Promise`<[`ListGroupStatusesResponse`](../interfaces/customer_structures.ListGroupStatusesResponse.md)\>

Lists statuses of groups.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `param` | `boolean` \| `number`[] | either boolean switch for all groups or list of group ID's to check |

#### Returns

`Promise`<[`ListGroupStatusesResponse`](../interfaces/customer_structures.ListGroupStatusesResponse.md)\>

#### Defined in

[customer/web.ts:277](https://github.com/livechat/lc-sdk-js/blob/4da1eb6/src/customer/web.ts#L277)

___

### listLicenseProperties

▸ **listLicenseProperties**(`namespace?`, `name?`): `Promise`<[`Properties`](../interfaces/objects.Properties.md)\>

Returns the properties of a given license. It only returns the properties a Customer has access to.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `namespace?` | `string` | property namespace |
| `name?` | `string` | property name |

#### Returns

`Promise`<[`Properties`](../interfaces/objects.Properties.md)\>

#### Defined in

[customer/web.ts:229](https://github.com/livechat/lc-sdk-js/blob/4da1eb6/src/customer/web.ts#L229)

___

### listThreads

▸ **listThreads**(`chat_id`, `opts?`): `Promise`<[`ListThreadsResponse`](../interfaces/customer_structures.ListThreadsResponse.md)\>

Returns threads that the current Customer has access to in a given chat.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `chat_id` | `string` | chat ID to get threads from |
| `opts?` | [`ListThreadsParameters`](../interfaces/customer_structures.ListThreadsParameters.md) | additional options like pagination and sorting |

#### Returns

`Promise`<[`ListThreadsResponse`](../interfaces/customer_structures.ListThreadsResponse.md)\>

#### Defined in

[customer/web.ts:49](https://github.com/livechat/lc-sdk-js/blob/4da1eb6/src/customer/web.ts#L49)

___

### markEventsAsSeen

▸ **markEventsAsSeen**(`chat_id`, `seen_up_to`): `Promise`<[`EmptyResponse`](../interfaces/customer_structures.EmptyResponse.md)\>

Marks events as seen by Agent.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `chat_id` | `string` | chat to mark events |
| `seen_up_to` | `string` | date up to which mark events |

#### Returns

`Promise`<[`EmptyResponse`](../interfaces/customer_structures.EmptyResponse.md)\>

#### Defined in

[customer/web.ts:328](https://github.com/livechat/lc-sdk-js/blob/4da1eb6/src/customer/web.ts#L328)

___

### requestEmailVerification

▸ **requestEmailVerification**(`callback_uri`): `Promise`<[`EmptyResponse`](../interfaces/customer_structures.EmptyResponse.md)\>

Requests customer to verify email.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callback_uri` | `string` | URI to send webhook when customer confirms identity |

#### Returns

`Promise`<[`EmptyResponse`](../interfaces/customer_structures.EmptyResponse.md)\>

#### Defined in

[customer/web.ts:354](https://github.com/livechat/lc-sdk-js/blob/4da1eb6/src/customer/web.ts#L354)

___

### resumeChat

▸ **resumeChat**(`param`): `Promise`<[`ResumeChatResponse`](../interfaces/customer_structures.ResumeChatResponse.md)\>

Restarts an archived chat

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `param` | `string` \| [`ResumeChatParameters`](../interfaces/customer_structures.ResumeChatParameters.md) | either string ID of a chat to activate or full initial chat object |

#### Returns

`Promise`<[`ResumeChatResponse`](../interfaces/customer_structures.ResumeChatResponse.md)\>

#### Defined in

[customer/web.ts:74](https://github.com/livechat/lc-sdk-js/blob/4da1eb6/src/customer/web.ts#L74)

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

[internal/index.ts:37](https://github.com/livechat/lc-sdk-js/blob/4da1eb6/src/internal/index.ts#L37)

___

### sendEvent

▸ **sendEvent**(`chat_id`, `event`, `attach_to_last_thread?`): `Promise`<[`SendEventResponse`](../interfaces/customer_structures.SendEventResponse.md)\>

Sends an Event object. Use this method to send a message by specifing the Message event type in the request.
It's possible to write to a chat without joining it. The user sending an event will be automatically added to the chat
with the present parameter set to false.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `chat_id` | `string` | chat to send event to |
| `event` | [`Event`](../modules/objects.md#event) | Event object |
| `attach_to_last_thread?` | `boolean` | if true, adds event to last inactive thread |

#### Returns

`Promise`<[`SendEventResponse`](../interfaces/customer_structures.SendEventResponse.md)\>

#### Defined in

[customer/web.ts:95](https://github.com/livechat/lc-sdk-js/blob/4da1eb6/src/customer/web.ts#L95)

___

### sendRichMessagePostback

▸ **sendRichMessagePostback**(`opts`): `Promise`<[`EmptyResponse`](../interfaces/customer_structures.EmptyResponse.md)\>

Sends postback for rich message

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | [`SendRichMessagePostbackParameters`](../interfaces/customer_structures.SendRichMessagePostbackParameters.md) | postback data |

#### Returns

`Promise`<[`EmptyResponse`](../interfaces/customer_structures.EmptyResponse.md)\>

#### Defined in

[customer/web.ts:122](https://github.com/livechat/lc-sdk-js/blob/4da1eb6/src/customer/web.ts#L122)

___

### sendSneakPeek

▸ **sendSneakPeek**(`chat_id`, `sneak_peek_text`): `Promise`<[`EmptyResponse`](../interfaces/customer_structures.EmptyResponse.md)\>

Sends a sneak peek to a chat.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `chat_id` | `string` | chat to send sneak peek to |
| `sneak_peek_text` | `string` | text to sneak peek |

#### Returns

`Promise`<[`EmptyResponse`](../interfaces/customer_structures.EmptyResponse.md)\>

#### Defined in

[customer/web.ts:132](https://github.com/livechat/lc-sdk-js/blob/4da1eb6/src/customer/web.ts#L132)

___

### setCustomerSessionFields

▸ **setCustomerSessionFields**(`session_fields`): `Promise`<[`EmptyResponse`](../interfaces/customer_structures.EmptyResponse.md)\>

Sets session fields for Customer.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `session_fields` | `object`[] | fields to set in form of object enclosed key:value pairs |

#### Returns

`Promise`<[`EmptyResponse`](../interfaces/customer_structures.EmptyResponse.md)\>

#### Defined in

[customer/web.ts:262](https://github.com/livechat/lc-sdk-js/blob/4da1eb6/src/customer/web.ts#L262)

___

### startChat

▸ **startChat**(`opts?`): `Promise`<[`StartChatResponse`](../interfaces/customer_structures.StartChatResponse.md)\>

Starts a chat

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | [`StartChatParameters`](../interfaces/customer_structures.StartChatParameters.md) | options like initial chat data or continuous switch |

#### Returns

`Promise`<[`StartChatResponse`](../interfaces/customer_structures.StartChatResponse.md)\>

#### Defined in

[customer/web.ts:66](https://github.com/livechat/lc-sdk-js/blob/4da1eb6/src/customer/web.ts#L66)

___

### updateChatProperties

▸ **updateChatProperties**(`id`, `properties`): `Promise`<[`EmptyResponse`](../interfaces/customer_structures.EmptyResponse.md)\>

Updates chat properties

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | chat to update properties |
| `properties` | [`Properties`](../interfaces/objects.Properties.md) | properties to update |

#### Returns

`Promise`<[`EmptyResponse`](../interfaces/customer_structures.EmptyResponse.md)\>

#### Defined in

[customer/web.ts:141](https://github.com/livechat/lc-sdk-js/blob/4da1eb6/src/customer/web.ts#L141)

___

### updateCustomer

▸ **updateCustomer**(`opts`): `Promise`<[`EmptyResponse`](../interfaces/customer_structures.EmptyResponse.md)\>

Updates Customer's properties.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | [`CustomerParameters`](../interfaces/customer_structures.CustomerParameters.md) | properties to update |

#### Returns

`Promise`<[`EmptyResponse`](../interfaces/customer_structures.EmptyResponse.md)\>

#### Defined in

[customer/web.ts:254](https://github.com/livechat/lc-sdk-js/blob/4da1eb6/src/customer/web.ts#L254)

___

### updateEventProperties

▸ **updateEventProperties**(`chat_id`, `thread_id`, `event_id`, `properties`): `Promise`<[`EmptyResponse`](../interfaces/customer_structures.EmptyResponse.md)\>

Updates event properties

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `chat_id` | `string` | chat ID of event to update |
| `thread_id` | `string` | thread ID of event to update |
| `event_id` | `string` | event to update properties |
| `properties` | [`Properties`](../interfaces/objects.Properties.md) | properties to update |

#### Returns

`Promise`<[`EmptyResponse`](../interfaces/customer_structures.EmptyResponse.md)\>

#### Defined in

[customer/web.ts:189](https://github.com/livechat/lc-sdk-js/blob/4da1eb6/src/customer/web.ts#L189)

___

### updateThreadProperties

▸ **updateThreadProperties**(`chat_id`, `thread_id`, `properties`): `Promise`<[`EmptyResponse`](../interfaces/customer_structures.EmptyResponse.md)\>

Updates thread properties

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `chat_id` | `string` | chat ID of thread to update |
| `thread_id` | `string` | thread to update properties |
| `properties` | [`Properties`](../interfaces/objects.Properties.md) | properties to update |

#### Returns

`Promise`<[`EmptyResponse`](../interfaces/customer_structures.EmptyResponse.md)\>

#### Defined in

[customer/web.ts:160](https://github.com/livechat/lc-sdk-js/blob/4da1eb6/src/customer/web.ts#L160)

___

### uploadFile

▸ **uploadFile**(`file`, `filename`): `Promise`<[`UploadFileResponse`](../interfaces/customer_structures.UploadFileResponse.md)\>

Uploads a file to the server as a temporary file. It returns a URL that expires after 24 hours unless the URL is used in send_event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `file` | `string` \| `Buffer` | path of file to upload or Buffer with content |
| `filename` | `string` | filename for uploaded file |

#### Returns

`Promise`<[`UploadFileResponse`](../interfaces/customer_structures.UploadFileResponse.md)\>

#### Defined in

[customer/web.ts:108](https://github.com/livechat/lc-sdk-js/blob/4da1eb6/src/customer/web.ts#L108)