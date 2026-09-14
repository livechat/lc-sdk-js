[**@livechat/lc-sdk-js**](../../../README.md)

***

[@livechat/lc-sdk-js](../../../README.md) / [customer/web](../README.md) / default

# Class: default

Defined in: [customer/web.ts:32](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/customer/web.ts#L32)

## Extends

- [`WebAPI`](../../../internal/classes/WebAPI.md)

## Constructors

### Constructor

> **new default**(`clientID`, `tokenGetter`, `options?`): `Web`

Defined in: [customer/web.ts:33](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/customer/web.ts#L33)

#### Parameters

##### clientID

`string`

##### tokenGetter

[`TokenGetter`](../../../authorization/token_getter/type-aliases/TokenGetter.md)

##### options?

[`WebAPIOptions`](../../structures/structures/interfaces/WebAPIOptions.md)

#### Returns

`Web`

#### Overrides

[`WebAPI`](../../../internal/classes/WebAPI.md).[`constructor`](../../../internal/classes/WebAPI.md#constructor)

## Properties

### APIURL

> **APIURL**: `string`

Defined in: [internal/index.ts:14](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/internal/index.ts#L14)

#### Inherited from

[`WebAPI`](../../../internal/classes/WebAPI.md).[`APIURL`](../../../internal/classes/WebAPI.md#apiurl)

***

### author\_id?

> `optional` **author\_id?**: `string`

Defined in: [internal/index.ts:16](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/internal/index.ts#L16)

#### Inherited from

[`WebAPI`](../../../internal/classes/WebAPI.md).[`author_id`](../../../internal/classes/WebAPI.md#author_id)

***

### clientID

> `protected` `readonly` **clientID**: `string`

Defined in: [internal/index.ts:20](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/internal/index.ts#L20)

#### Inherited from

[`WebAPI`](../../../internal/classes/WebAPI.md).[`clientID`](../../../internal/classes/WebAPI.md#clientid)

***

### tokenGetter

> `protected` `readonly` **tokenGetter**: [`TokenGetter`](../../../authorization/token_getter/type-aliases/TokenGetter.md)

Defined in: [internal/index.ts:21](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/internal/index.ts#L21)

#### Inherited from

[`WebAPI`](../../../internal/classes/WebAPI.md).[`tokenGetter`](../../../internal/classes/WebAPI.md#tokengetter)

***

### type

> `protected` `readonly` **type**: `apiType`

Defined in: [internal/index.ts:22](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/internal/index.ts#L22)

#### Inherited from

[`WebAPI`](../../../internal/classes/WebAPI.md).[`type`](../../../internal/classes/WebAPI.md#type)

***

### version

> **version**: `string`

Defined in: [internal/index.ts:15](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/internal/index.ts#L15)

#### Inherited from

[`WebAPI`](../../../internal/classes/WebAPI.md).[`version`](../../../internal/classes/WebAPI.md#version)

## Methods

### acceptGreeting()

> **acceptGreeting**(`greeting_id`, `unique_id`): `Promise`\<[`EmptyResponse`](../../structures/responses/interfaces/EmptyResponse.md)\>

Defined in: [customer/web.ts:327](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/customer/web.ts#L327)

Marks an incoming greeting as seen.

#### Parameters

##### greeting\_id

`number`

number representing type of a greeting

##### unique\_id

`string`

specific greeting event ID

#### Returns

`Promise`\<[`EmptyResponse`](../../structures/responses/interfaces/EmptyResponse.md)\>

***

### cancelGreeting()

> **cancelGreeting**(`unique_id`): `Promise`\<[`EmptyResponse`](../../structures/responses/interfaces/EmptyResponse.md)\>

Defined in: [customer/web.ts:336](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/customer/web.ts#L336)

Cancels a greeting (an invitation to the chat).
For example, Customers could cancel greetings by minimalizing the chat widget with a greeting.

#### Parameters

##### unique\_id

`string`

specific greeting ID

#### Returns

`Promise`\<[`EmptyResponse`](../../structures/responses/interfaces/EmptyResponse.md)\>

***

### checkGoals()

> **checkGoals**(`session_fields`, `group_id`, `page_url`): `Promise`\<[`EmptyResponse`](../../structures/responses/interfaces/EmptyResponse.md)\>

Defined in: [customer/web.ts:280](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/customer/web.ts#L280)

Customer can use this method to trigger checking if goals were achieved.
Then, Agents receive the information. You should call this method to provide goals
parameters for the server when the customers limit is reached. Works only for offline Customers.

#### Parameters

##### session\_fields

`object`[]

object enclosed key:value pairs

##### group\_id

`number`

group id to check goals in

##### page\_url

`number`

page URL

#### Returns

`Promise`\<[`EmptyResponse`](../../structures/responses/interfaces/EmptyResponse.md)\>

***

### deactivateChat()

> **deactivateChat**(`id`): `Promise`\<[`EmptyResponse`](../../structures/responses/interfaces/EmptyResponse.md)\>

Defined in: [customer/web.ts:84](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/customer/web.ts#L84)

Deactivates a chat by closing the currently open thread. Sending messages to this thread will no longer be possible.

#### Parameters

##### id

`string`

chat ID to deactivate

#### Returns

`Promise`\<[`EmptyResponse`](../../structures/responses/interfaces/EmptyResponse.md)\>

***

### deleteChatProperties()

> **deleteChatProperties**(`id`, `properties`): `Promise`\<[`EmptyResponse`](../../structures/responses/interfaces/EmptyResponse.md)\>

Defined in: [customer/web.ts:151](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/customer/web.ts#L151)

Deletes chat properties

#### Parameters

##### id

`string`

chat to delete properties

##### properties

[`Properties`](../../structures/structures/interfaces/Properties.md)

properties to delete

#### Returns

`Promise`\<[`EmptyResponse`](../../structures/responses/interfaces/EmptyResponse.md)\>

***

### deleteEvent()

> **deleteEvent**(`chat_id`, `thread_id`, `event_id`): `Promise`\<[`EmptyResponse`](../../structures/responses/interfaces/EmptyResponse.md)\>

Defined in: [customer/web.ts:231](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/customer/web.ts#L231)

Deletes event

#### Parameters

##### chat\_id

`string`

chat ID of event to delete

##### thread\_id

`string`

thread ID of event to delete

##### event\_id

`string`

ID of event to delete

#### Returns

`Promise`\<[`EmptyResponse`](../../structures/responses/interfaces/EmptyResponse.md)\>

***

### deleteEventProperties()

> **deleteEventProperties**(`chat_id`, `thread_id`, `event_id`, `properties`): `Promise`\<[`EmptyResponse`](../../structures/responses/interfaces/EmptyResponse.md)\>

Defined in: [customer/web.ts:211](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/customer/web.ts#L211)

Deletes event properties

#### Parameters

##### chat\_id

`string`

chat ID of event to delete

##### thread\_id

`string`

thread ID of event to delete

##### event\_id

`string`

event to delete properties

##### properties

[`Properties`](../../structures/structures/interfaces/Properties.md)

properties to delete

#### Returns

`Promise`\<[`EmptyResponse`](../../structures/responses/interfaces/EmptyResponse.md)\>

***

### deleteThreadProperties()

> **deleteThreadProperties**(`chat_id`, `thread_id`, `properties`): `Promise`\<[`EmptyResponse`](../../structures/responses/interfaces/EmptyResponse.md)\>

Defined in: [customer/web.ts:175](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/customer/web.ts#L175)

Deletes thread properties

#### Parameters

##### chat\_id

`string`

chat ID of thread to delete

##### thread\_id

`string`

thread to delete properties

##### properties

[`Properties`](../../structures/structures/interfaces/Properties.md)

properties to delete

#### Returns

`Promise`\<[`EmptyResponse`](../../structures/responses/interfaces/EmptyResponse.md)\>

***

### getChat()

> **getChat**(`chat_id`, `thread_id?`): `Promise`\<[`GetChatResponse`](../../structures/responses/interfaces/GetChatResponse.md)\>

Defined in: [customer/web.ts:59](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/customer/web.ts#L59)

It returns a thread that the current Customer has access to in a given chat.

#### Parameters

##### chat\_id

`string`

ID of a chat to get

##### thread\_id?

`string`

thread ID to get (if not provided, last thread is returned)

#### Returns

`Promise`\<[`GetChatResponse`](../../structures/responses/interfaces/GetChatResponse.md)\>

***

### getConfiguration()

> **getConfiguration**(`group_id`, `version`): `Promise`\<[`GroupConfiguration`](../../structures/structures/interfaces/GroupConfiguration.md)\>

Defined in: [customer/web.ts:361](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/customer/web.ts#L361)

Returns the configuration of a given group in a given version.

#### Parameters

##### group\_id

`string`

the ID of group that you want to get configuration for

##### version

`string`

the version that you want to get a configuration for

#### Returns

`Promise`\<[`GroupConfiguration`](../../structures/structures/interfaces/GroupConfiguration.md)\>

***

### getCustomer()

> **getCustomer**(): `Promise`\<[`CustomerParameters`](../../structures/structures/interfaces/CustomerParameters.md)\>

Defined in: [customer/web.ts:258](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/customer/web.ts#L258)

Returns the info about the Customer requesting it.

#### Returns

`Promise`\<[`CustomerParameters`](../../structures/structures/interfaces/CustomerParameters.md)\>

***

### getDynamicConfiguration()

> **getDynamicConfiguration**(`opts?`): `Promise`\<[`GetDynamicConfigurationResponse`](../../structures/responses/interfaces/GetDynamicConfigurationResponse.md)\>

Defined in: [customer/web.ts:352](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/customer/web.ts#L352)

Returns the dynamic configuration of a given group.

#### Parameters

##### opts?

[`GetDynamicConfigurationRequest`](../../structures/structures/interfaces/GetDynamicConfigurationRequest.md)

properties used to find matching group

#### Returns

`Promise`\<[`GetDynamicConfigurationResponse`](../../structures/responses/interfaces/GetDynamicConfigurationResponse.md)\>

***

### getForm()

> **getForm**(`group_id`, `type`): `Promise`\<[`GetFormResponse`](../../structures/responses/interfaces/GetFormResponse.md)\>

Defined in: [customer/web.ts:293](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/customer/web.ts#L293)

Returns an empty ticket form of a prechat or postchat survey.

#### Parameters

##### group\_id

`number`

group id to get form for

##### type

`string`

prechat or postchat

#### Returns

`Promise`\<[`GetFormResponse`](../../structures/responses/interfaces/GetFormResponse.md)\>

***

### getLocalization()

> **getLocalization**(`group_id`, `language`, `version`): `Promise`\<`Record`\<`string`, `string`\>\>

Defined in: [customer/web.ts:374](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/customer/web.ts#L374)

Returns the localization of a given language and group in a given version.

#### Parameters

##### group\_id

`string`

the ID of the group that you want to get a localization for

##### language

`string`

the language that you want to get a localization for

##### version

`string`

the version that you want to get a localization for

#### Returns

`Promise`\<`Record`\<`string`, `string`\>\>

***

### getURLInfo()

> **getURLInfo**(`url`): `Promise`\<[`GetURLInfoResponse`](../../structures/responses/interfaces/GetURLInfoResponse.md)\>

Defined in: [customer/web.ts:309](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/customer/web.ts#L309)

It returns the info on a given URL.

#### Parameters

##### url

`string`

URL to get info about

#### Returns

`Promise`\<[`GetURLInfoResponse`](../../structures/responses/interfaces/GetURLInfoResponse.md)\>

***

### listChats()

> **listChats**(`opts?`): `Promise`\<[`ListChatsResponse`](../../structures/responses/interfaces/ListChatsResponse.md)\>

Defined in: [customer/web.ts:41](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/customer/web.ts#L41)

It returns chat info for the chats a Customer participated in.

#### Parameters

##### opts?

[`ListChatParameters`](../../structures/structures/interfaces/ListChatParameters.md)

set of filters and pagination to limit returned entries

#### Returns

`Promise`\<[`ListChatsResponse`](../../structures/responses/interfaces/ListChatsResponse.md)\>

***

### listGroupStatuses()

> **listGroupStatuses**(`param`): `Promise`\<[`ListGroupStatusesResponse`](../../structures/responses/interfaces/ListGroupStatusesResponse.md)\>

Defined in: [customer/web.ts:266](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/customer/web.ts#L266)

Lists statuses of groups.

#### Parameters

##### param

`boolean` \| `number`[]

either boolean switch for all groups or list of group ID's to check

#### Returns

`Promise`\<[`ListGroupStatusesResponse`](../../structures/responses/interfaces/ListGroupStatusesResponse.md)\>

***

### listThreads()

> **listThreads**(`chat_id`, `opts?`): `Promise`\<[`ListThreadsResponse`](../../structures/responses/interfaces/ListThreadsResponse.md)\>

Defined in: [customer/web.ts:50](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/customer/web.ts#L50)

Returns threads that the current Customer has access to in a given chat.

#### Parameters

##### chat\_id

`string`

chat ID to get threads from

##### opts?

[`ListThreadsParameters`](../../structures/structures/interfaces/ListThreadsParameters.md)

additional options like pagination and sorting

#### Returns

`Promise`\<[`ListThreadsResponse`](../../structures/responses/interfaces/ListThreadsResponse.md)\>

***

### markEventsAsSeen()

> **markEventsAsSeen**(`chat_id`, `seen_up_to`): `Promise`\<[`EmptyResponse`](../../structures/responses/interfaces/EmptyResponse.md)\>

Defined in: [customer/web.ts:318](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/customer/web.ts#L318)

Marks events as seen by Agent.

#### Parameters

##### chat\_id

`string`

chat to mark events

##### seen\_up\_to

`string`

date up to which mark events

#### Returns

`Promise`\<[`EmptyResponse`](../../structures/responses/interfaces/EmptyResponse.md)\>

***

### requestEmailVerification()

> **requestEmailVerification**(`callback_uri`): `Promise`\<[`EmptyResponse`](../../structures/responses/interfaces/EmptyResponse.md)\>

Defined in: [customer/web.ts:344](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/customer/web.ts#L344)

Requests customer to verify email.

#### Parameters

##### callback\_uri

`string`

URI to send webhook when customer confirms identity

#### Returns

`Promise`\<[`EmptyResponse`](../../structures/responses/interfaces/EmptyResponse.md)\>

***

### requestWelcomeMessage()

> **requestWelcomeMessage**(`opts?`): `Promise`\<[`RequestWelcomeMessageResponse`](../../structures/responses/interfaces/RequestWelcomeMessageResponse.md)\>

Defined in: [customer/web.ts:301](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/customer/web.ts#L301)

Requests a welcome message.

#### Parameters

##### opts?

[`RequestWelcomeMessageParameters`](../../structures/structures/interfaces/RequestWelcomeMessageParameters.md)

options like id of previous welcome message or group id

#### Returns

`Promise`\<[`RequestWelcomeMessageResponse`](../../structures/responses/interfaces/RequestWelcomeMessageResponse.md)\>

***

### resumeChat()

> **resumeChat**(`param`): `Promise`\<[`ResumeChatResponse`](../../structures/responses/interfaces/ResumeChatResponse.md)\>

Defined in: [customer/web.ts:75](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/customer/web.ts#L75)

Restarts an archived chat

#### Parameters

##### param

`string` \| [`ResumeChatParameters`](../../structures/structures/interfaces/ResumeChatParameters.md)

either string ID of a chat to activate or full initial chat object

#### Returns

`Promise`\<[`ResumeChatResponse`](../../structures/responses/interfaces/ResumeChatResponse.md)\>

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

[`WebAPI`](../../../internal/classes/WebAPI.md).[`send`](../../../internal/classes/WebAPI.md#send)

***

### sendEvent()

> **sendEvent**(`chat_id`, `event`, `attach_to_last_thread?`): `Promise`\<[`SendEventResponse`](../../structures/responses/interfaces/SendEventResponse.md)\>

Defined in: [customer/web.ts:96](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/customer/web.ts#L96)

Sends an Event object. Use this method to send a message by specifing the Message event type in the request.
It's possible to write to a chat without joining it. The user sending an event will be automatically added to the chat
with the present parameter set to false.

#### Parameters

##### chat\_id

`string`

chat to send event to

##### event

[`RequestEvent`](../../structures/events/type-aliases/RequestEvent.md)

Event request object

##### attach\_to\_last\_thread?

`boolean`

if true, adds event to last inactive thread

#### Returns

`Promise`\<[`SendEventResponse`](../../structures/responses/interfaces/SendEventResponse.md)\>

***

### sendRichMessagePostback()

> **sendRichMessagePostback**(`opts`): `Promise`\<[`EmptyResponse`](../../structures/responses/interfaces/EmptyResponse.md)\>

Defined in: [customer/web.ts:123](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/customer/web.ts#L123)

Sends postback for rich message

#### Parameters

##### opts

[`SendRichMessagePostbackParameters`](../../structures/structures/interfaces/SendRichMessagePostbackParameters.md)

postback data

#### Returns

`Promise`\<[`EmptyResponse`](../../structures/responses/interfaces/EmptyResponse.md)\>

***

### sendSneakPeek()

> **sendSneakPeek**(`chat_id`, `sneak_peek_text`): `Promise`\<[`EmptyResponse`](../../structures/responses/interfaces/EmptyResponse.md)\>

Defined in: [customer/web.ts:133](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/customer/web.ts#L133)

Sends a sneak peek to a chat.

#### Parameters

##### chat\_id

`string`

chat to send sneak peek to

##### sneak\_peek\_text

`string`

text to sneak peek

#### Returns

`Promise`\<[`EmptyResponse`](../../structures/responses/interfaces/EmptyResponse.md)\>

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

[`WebAPI`](../../../internal/classes/WebAPI.md).[`setAuthorId`](../../../internal/classes/WebAPI.md#setauthorid)

***

### setCustomerSessionFields()

> **setCustomerSessionFields**(`session_fields`): `Promise`\<[`EmptyResponse`](../../structures/responses/interfaces/EmptyResponse.md)\>

Defined in: [customer/web.ts:251](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/customer/web.ts#L251)

Sets session fields for Customer.

#### Parameters

##### session\_fields

`object`[]

fields to set in form of object enclosed key:value pairs

#### Returns

`Promise`\<[`EmptyResponse`](../../structures/responses/interfaces/EmptyResponse.md)\>

***

### startChat()

> **startChat**(`opts?`): `Promise`\<[`StartChatResponse`](../../structures/responses/interfaces/StartChatResponse.md)\>

Defined in: [customer/web.ts:67](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/customer/web.ts#L67)

Starts a chat

#### Parameters

##### opts?

[`StartChatParameters`](../../structures/structures/interfaces/StartChatParameters.md)

options like initial chat data or continuous switch

#### Returns

`Promise`\<[`StartChatResponse`](../../structures/responses/interfaces/StartChatResponse.md)\>

***

### updateChatProperties()

> **updateChatProperties**(`id`, `properties`): `Promise`\<[`EmptyResponse`](../../structures/responses/interfaces/EmptyResponse.md)\>

Defined in: [customer/web.ts:142](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/customer/web.ts#L142)

Updates chat properties

#### Parameters

##### id

`string`

chat to update properties

##### properties

[`Properties`](../../structures/structures/interfaces/Properties.md)

properties to update

#### Returns

`Promise`\<[`EmptyResponse`](../../structures/responses/interfaces/EmptyResponse.md)\>

***

### updateCustomer()

> **updateCustomer**(`opts`): `Promise`\<[`EmptyResponse`](../../structures/responses/interfaces/EmptyResponse.md)\>

Defined in: [customer/web.ts:243](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/customer/web.ts#L243)

Updates Customer's properties.

#### Parameters

##### opts

[`CustomerParameters`](../../structures/structures/interfaces/CustomerParameters.md)

properties to update

#### Returns

`Promise`\<[`EmptyResponse`](../../structures/responses/interfaces/EmptyResponse.md)\>

***

### updateEventProperties()

> **updateEventProperties**(`chat_id`, `thread_id`, `event_id`, `properties`): `Promise`\<[`EmptyResponse`](../../structures/responses/interfaces/EmptyResponse.md)\>

Defined in: [customer/web.ts:190](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/customer/web.ts#L190)

Updates event properties

#### Parameters

##### chat\_id

`string`

chat ID of event to update

##### thread\_id

`string`

thread ID of event to update

##### event\_id

`string`

event to update properties

##### properties

[`Properties`](../../structures/structures/interfaces/Properties.md)

properties to update

#### Returns

`Promise`\<[`EmptyResponse`](../../structures/responses/interfaces/EmptyResponse.md)\>

***

### updateThreadProperties()

> **updateThreadProperties**(`chat_id`, `thread_id`, `properties`): `Promise`\<[`EmptyResponse`](../../structures/responses/interfaces/EmptyResponse.md)\>

Defined in: [customer/web.ts:161](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/customer/web.ts#L161)

Updates thread properties

#### Parameters

##### chat\_id

`string`

chat ID of thread to update

##### thread\_id

`string`

thread to update properties

##### properties

[`Properties`](../../structures/structures/interfaces/Properties.md)

properties to update

#### Returns

`Promise`\<[`EmptyResponse`](../../structures/responses/interfaces/EmptyResponse.md)\>

***

### uploadFile()

> **uploadFile**(`data`, `config`): `Promise`\<[`UploadFileResponse`](../../structures/responses/interfaces/UploadFileResponse.md)\>

Defined in: [customer/web.ts:114](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/customer/web.ts#L114)

Note: the browser and Node.js may use different implementations of the file upload logic.
This method is just an axios wrapper pointing to the upload file URL - you have to provide your own form data
and headers in the config object.
See [Customer Chat API - upload file][https://developers.livechat.com/docs/messaging/customer-chat-api#upload-file](https://developers.livechat.com/docs/messaging/customer-chat-api#upload-file)

Uploads a file to the server as a temporary file. It returns a URL that expires after 24 hours unless the URL is used in send_event.

#### Parameters

##### data

`any`

axios data parameter

##### config

`any`

axios config parameter

#### Returns

`Promise`\<[`UploadFileResponse`](../../structures/responses/interfaces/UploadFileResponse.md)\>
