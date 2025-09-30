[@livechat/lc-sdk-js](../README.md) / [agent/rtm](../modules/agent_rtm.md) / default

# Class: default

[agent/rtm](../modules/agent_rtm.md).default

## Hierarchy

- [`RTMAPI`](internal.RTMAPI.md)

  ↳ **`default`**

## Table of contents

### Constructors

- [constructor](agent_rtm.default.md#constructor)

### Properties

- [APIURL](agent_rtm.default.md#apiurl)
- [author\_id](agent_rtm.default.md#author_id)
- [heartbeatInterval](agent_rtm.default.md#heartbeatinterval)
- [requestsQueue](agent_rtm.default.md#requestsqueue)
- [socket](agent_rtm.default.md#socket)
- [subscribedPushes](agent_rtm.default.md#subscribedpushes)
- [tokenGetter](agent_rtm.default.md#tokengetter)
- [type](agent_rtm.default.md#type)
- [version](agent_rtm.default.md#version)
- [webSocketClass](agent_rtm.default.md#websocketclass)

### Methods

- [addUserToChat](agent_rtm.default.md#addusertochat)
- [banCustomer](agent_rtm.default.md#bancustomer)
- [changePushNotifications](agent_rtm.default.md#changepushnotifications)
- [connect](agent_rtm.default.md#connect)
- [deactivateChat](agent_rtm.default.md#deactivatechat)
- [deleteChatProperties](agent_rtm.default.md#deletechatproperties)
- [deleteEventProperties](agent_rtm.default.md#deleteeventproperties)
- [deleteThreadProperties](agent_rtm.default.md#deletethreadproperties)
- [followChat](agent_rtm.default.md#followchat)
- [followCustomer](agent_rtm.default.md#followcustomer)
- [getChat](agent_rtm.default.md#getchat)
- [getCustomer](agent_rtm.default.md#getcustomer)
- [listAgentsForTransfer](agent_rtm.default.md#listagentsfortransfer)
- [listArchives](agent_rtm.default.md#listarchives)
- [listChats](agent_rtm.default.md#listchats)
- [listRoutingStatuses](agent_rtm.default.md#listroutingstatuses)
- [listThreads](agent_rtm.default.md#listthreads)
- [login](agent_rtm.default.md#login)
- [logout](agent_rtm.default.md#logout)
- [markEventsAsSeen](agent_rtm.default.md#markeventsasseen)
- [multicast](agent_rtm.default.md#multicast)
- [on](agent_rtm.default.md#on)
- [removeUserFromChat](agent_rtm.default.md#removeuserfromchat)
- [requestThreadSummary](agent_rtm.default.md#requestthreadsummary)
- [resumeChat](agent_rtm.default.md#resumechat)
- [send](agent_rtm.default.md#send)
- [sendEvent](agent_rtm.default.md#sendevent)
- [sendEventPreview](agent_rtm.default.md#sendeventpreview)
- [sendRichMessagePostback](agent_rtm.default.md#sendrichmessagepostback)
- [sendThinkingIndicator](agent_rtm.default.md#sendthinkingindicator)
- [sendTypingIndicator](agent_rtm.default.md#sendtypingindicator)
- [setAuthorId](agent_rtm.default.md#setauthorid)
- [setAwayStatus](agent_rtm.default.md#setawaystatus)
- [setRoutingStatus](agent_rtm.default.md#setroutingstatus)
- [startChat](agent_rtm.default.md#startchat)
- [subscribePush](agent_rtm.default.md#subscribepush)
- [tagThread](agent_rtm.default.md#tagthread)
- [transferChat](agent_rtm.default.md#transferchat)
- [unfollowChat](agent_rtm.default.md#unfollowchat)
- [unfollowCustomer](agent_rtm.default.md#unfollowcustomer)
- [unsubscribePush](agent_rtm.default.md#unsubscribepush)
- [untagThread](agent_rtm.default.md#untagthread)
- [updateChatProperties](agent_rtm.default.md#updatechatproperties)
- [updateCustomer](agent_rtm.default.md#updatecustomer)
- [updateEventProperties](agent_rtm.default.md#updateeventproperties)
- [updateSession](agent_rtm.default.md#updatesession)
- [updateThreadProperties](agent_rtm.default.md#updatethreadproperties)

## Constructors

### constructor

• **new default**(`webSocketClass`, `tokenGetter`, `options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `webSocketClass` | `any` |
| `tokenGetter` | [`TokenGetter`](../modules/authorization_token_getter.md#tokengetter) |
| `options?` | [`RTMAPIOptions`](../interfaces/agent_structures_structures.RTMAPIOptions.md) |

#### Overrides

[RTMAPI](internal.RTMAPI.md).[constructor](internal.RTMAPI.md#constructor)

#### Defined in

[agent/rtm.ts:36](https://github.com/livechat/lc-sdk-js/blob/ea531c7/src/agent/rtm.ts#L36)

## Properties

### APIURL

• **APIURL**: `string`

#### Inherited from

[RTMAPI](internal.RTMAPI.md).[APIURL](internal.RTMAPI.md#apiurl)

#### Defined in

[internal/index.ts:79](https://github.com/livechat/lc-sdk-js/blob/ea531c7/src/internal/index.ts#L79)

___

### author\_id

• `Optional` **author\_id**: `string`

#### Inherited from

[RTMAPI](internal.RTMAPI.md).[author_id](internal.RTMAPI.md#author_id)

#### Defined in

[internal/index.ts:86](https://github.com/livechat/lc-sdk-js/blob/ea531c7/src/internal/index.ts#L86)

___

### heartbeatInterval

• `Optional` **heartbeatInterval**: `number`

#### Inherited from

[RTMAPI](internal.RTMAPI.md).[heartbeatInterval](internal.RTMAPI.md#heartbeatinterval)

#### Defined in

[internal/index.ts:83](https://github.com/livechat/lc-sdk-js/blob/ea531c7/src/internal/index.ts#L83)

___

### requestsQueue

• **requestsQueue**: `any` = `{}`

#### Inherited from

[RTMAPI](internal.RTMAPI.md).[requestsQueue](internal.RTMAPI.md#requestsqueue)

#### Defined in

[internal/index.ts:84](https://github.com/livechat/lc-sdk-js/blob/ea531c7/src/internal/index.ts#L84)

___

### socket

• `Optional` **socket**: `any`

#### Inherited from

[RTMAPI](internal.RTMAPI.md).[socket](internal.RTMAPI.md#socket)

#### Defined in

[internal/index.ts:82](https://github.com/livechat/lc-sdk-js/blob/ea531c7/src/internal/index.ts#L82)

___

### subscribedPushes

• **subscribedPushes**: `any` = `{}`

#### Inherited from

[RTMAPI](internal.RTMAPI.md).[subscribedPushes](internal.RTMAPI.md#subscribedpushes)

#### Defined in

[internal/index.ts:85](https://github.com/livechat/lc-sdk-js/blob/ea531c7/src/internal/index.ts#L85)

___

### tokenGetter

• `Protected` **tokenGetter**: [`TokenGetter`](../modules/authorization_token_getter.md#tokengetter)

#### Inherited from

[RTMAPI](internal.RTMAPI.md).[tokenGetter](internal.RTMAPI.md#tokengetter)

#### Defined in

[internal/index.ts:90](https://github.com/livechat/lc-sdk-js/blob/ea531c7/src/internal/index.ts#L90)

___

### type

• **type**: `apiType`

#### Inherited from

[RTMAPI](internal.RTMAPI.md).[type](internal.RTMAPI.md#type)

#### Defined in

[internal/index.ts:81](https://github.com/livechat/lc-sdk-js/blob/ea531c7/src/internal/index.ts#L81)

___

### version

• **version**: `string`

#### Inherited from

[RTMAPI](internal.RTMAPI.md).[version](internal.RTMAPI.md#version)

#### Defined in

[internal/index.ts:80](https://github.com/livechat/lc-sdk-js/blob/ea531c7/src/internal/index.ts#L80)

___

### webSocketClass

• `Protected` `Readonly` **webSocketClass**: `any`

#### Inherited from

[RTMAPI](internal.RTMAPI.md).[webSocketClass](internal.RTMAPI.md#websocketclass)

#### Defined in

[internal/index.ts:89](https://github.com/livechat/lc-sdk-js/blob/ea531c7/src/internal/index.ts#L89)

## Methods

### addUserToChat

▸ **addUserToChat**(`chat_id`, `user_id`, `user_type`, `visibility`, `ignore_requester_presence?`): `Promise`<[`EmptyResponse`](../interfaces/agent_structures_responses.EmptyResponse.md)\>

Adds a user to the chat. You can't add more than one customer user type to the chat.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `chat_id` | `string` | chat to add user to |
| `user_id` | `string` | user to add |
| `user_type` | `string` | customer or agent |
| `visibility` | `string` | possible values: all, agents |
| `ignore_requester_presence?` | `boolean` | if true, allows to add user to chat even if the requester is not present in the chat |

#### Returns

`Promise`<[`EmptyResponse`](../interfaces/agent_structures_responses.EmptyResponse.md)\>

#### Defined in

[agent/rtm.ts:195](https://github.com/livechat/lc-sdk-js/blob/ea531c7/src/agent/rtm.ts#L195)

___

### banCustomer

▸ **banCustomer**(`id`, `days`): `Promise`<[`EmptyResponse`](../interfaces/agent_structures_responses.EmptyResponse.md)\>

Bans the customer for a specific period of time. It immediately disconnects all active sessions of this customer
and does not accept new ones during the ban lifespan.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of customer to ban |
| `days` | `number` | ban duration in days |

#### Returns

`Promise`<[`EmptyResponse`](../interfaces/agent_structures_responses.EmptyResponse.md)\>

#### Defined in

[agent/rtm.ts:407](https://github.com/livechat/lc-sdk-js/blob/ea531c7/src/agent/rtm.ts#L407)

___

### changePushNotifications

▸ **changePushNotifications**(`change`): `Promise`<[`EmptyResponse`](../interfaces/agent_structures_responses.EmptyResponse.md)\>

Change the firebase push notifications properties.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `change` | [`ChangePushNotificationsRequest`](../interfaces/agent_structures_structures.ChangePushNotificationsRequest.md) | properties to change |

#### Returns

`Promise`<[`EmptyResponse`](../interfaces/agent_structures_responses.EmptyResponse.md)\>

#### Defined in

[agent/rtm.ts:72](https://github.com/livechat/lc-sdk-js/blob/ea531c7/src/agent/rtm.ts#L72)

___

### connect

▸ **connect**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Inherited from

[RTMAPI](internal.RTMAPI.md).[connect](internal.RTMAPI.md#connect)

#### Defined in

[internal/index.ts:101](https://github.com/livechat/lc-sdk-js/blob/ea531c7/src/internal/index.ts#L101)

___

### deactivateChat

▸ **deactivateChat**(`id`, `ignore_requester_presence?`): `Promise`<[`EmptyResponse`](../interfaces/agent_structures_responses.EmptyResponse.md)\>

Deactivates a chat by closing the currently open thread. Sending messages to this thread will no longer be possible.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | chat ID to deactivate |
| `ignore_requester_presence?` | `boolean` | if true, allows to deactivate the chat even if the requester is not present in the chat |

#### Returns

`Promise`<[`EmptyResponse`](../interfaces/agent_structures_responses.EmptyResponse.md)\>

#### Defined in

[agent/rtm.ts:153](https://github.com/livechat/lc-sdk-js/blob/ea531c7/src/agent/rtm.ts#L153)

___

### deleteChatProperties

▸ **deleteChatProperties**(`id`, `properties`): `Promise`<[`EmptyResponse`](../interfaces/agent_structures_responses.EmptyResponse.md)\>

Deletes chat properties

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | chat to delete properties |
| `properties` | [`Properties`](../interfaces/agent_structures_structures.Properties.md) | properties to delete |

#### Returns

`Promise`<[`EmptyResponse`](../interfaces/agent_structures_responses.EmptyResponse.md)\>

#### Defined in

[agent/rtm.ts:281](https://github.com/livechat/lc-sdk-js/blob/ea531c7/src/agent/rtm.ts#L281)

___

### deleteEventProperties

▸ **deleteEventProperties**(`chat_id`, `thread_id`, `event_id`, `properties`): `Promise`<[`EmptyResponse`](../interfaces/agent_structures_responses.EmptyResponse.md)\>

Deletes event properties

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `chat_id` | `string` | chat ID of event to delete |
| `thread_id` | `string` | thread ID of event to delete |
| `event_id` | `string` | event to delete properties |
| `properties` | [`Properties`](../interfaces/agent_structures_structures.Properties.md) | properties to delete |

#### Returns

`Promise`<[`EmptyResponse`](../interfaces/agent_structures_responses.EmptyResponse.md)\>

#### Defined in

[agent/rtm.ts:341](https://github.com/livechat/lc-sdk-js/blob/ea531c7/src/agent/rtm.ts#L341)

___

### deleteThreadProperties

▸ **deleteThreadProperties**(`chat_id`, `thread_id`, `properties`): `Promise`<[`EmptyResponse`](../interfaces/agent_structures_responses.EmptyResponse.md)\>

Deletes thread properties

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `chat_id` | `string` | chat ID of thread to delete |
| `thread_id` | `string` | thread to delete properties |
| `properties` | [`Properties`](../interfaces/agent_structures_structures.Properties.md) | properties to delete |

#### Returns

`Promise`<[`EmptyResponse`](../interfaces/agent_structures_responses.EmptyResponse.md)\>

#### Defined in

[agent/rtm.ts:305](https://github.com/livechat/lc-sdk-js/blob/ea531c7/src/agent/rtm.ts#L305)

___

### followChat

▸ **followChat**(`id`): `Promise`<[`EmptyResponse`](../interfaces/agent_structures_responses.EmptyResponse.md)\>

Marks a chat as followed. All changes to the chat will be sent to the requester until the chat is reactivated or unfollowed.
Chat members don't need to follow their chats. They receive all chat pushes regardless of their follower status.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | chat ID to follow |

#### Returns

`Promise`<[`EmptyResponse`](../interfaces/agent_structures_responses.EmptyResponse.md)\>

#### Defined in

[agent/rtm.ts:165](https://github.com/livechat/lc-sdk-js/blob/ea531c7/src/agent/rtm.ts#L165)

___

### followCustomer

▸ **followCustomer**(`id`): `Promise`<[`EmptyResponse`](../interfaces/agent_structures_responses.EmptyResponse.md)\>

Marks a customer as followed. As a result, the requester (an agent) will receive
the info about all the changes related to that customer via pushes.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of customer to follow |

#### Returns

`Promise`<[`EmptyResponse`](../interfaces/agent_structures_responses.EmptyResponse.md)\>

#### Defined in

[agent/rtm.ts:479](https://github.com/livechat/lc-sdk-js/blob/ea531c7/src/agent/rtm.ts#L479)

___

### getChat

▸ **getChat**(`chat_id`, `thread_id?`): `Promise`<[`GetChatResponse`](../interfaces/agent_structures_responses.GetChatResponse.md)\>

It returns a thread that the current Agent has access to in a given chat.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `chat_id` | `string` | ID of a chat to get |
| `thread_id?` | `string` | thread ID to get (if not provided, last thread is returned) |

#### Returns

`Promise`<[`GetChatResponse`](../interfaces/agent_structures_responses.GetChatResponse.md)\>

#### Defined in

[agent/rtm.ts:116](https://github.com/livechat/lc-sdk-js/blob/ea531c7/src/agent/rtm.ts#L116)

___

### getCustomer

▸ **getCustomer**(`id`): `Promise`<[`GetCustomerResponse`](../interfaces/agent_structures_responses.GetCustomerResponse.md)\>

Returns the info about the Customer with a given id.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | customer ID to get |

#### Returns

`Promise`<[`GetCustomerResponse`](../interfaces/agent_structures_responses.GetCustomerResponse.md)\>

#### Defined in

[agent/rtm.ts:388](https://github.com/livechat/lc-sdk-js/blob/ea531c7/src/agent/rtm.ts#L388)

___

### listAgentsForTransfer

▸ **listAgentsForTransfer**(`chat_id`): `Promise`<[`AgentForTransfer`](../interfaces/agent_structures_structures.AgentForTransfer.md)[]\>

It returns the Agents you can transfer a chat to. Agents are sorted ascendingly by the total number of active chats they have. Note that:
- The method only returns Agents with statuses online and not accepting chats. Offline Agents aren't returned.
- Only chats with Customers are taken into account in total_active_chats.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `chat_id` | `string` | chat ID you want to transfer |

#### Returns

`Promise`<[`AgentForTransfer`](../interfaces/agent_structures_structures.AgentForTransfer.md)[]\>

#### Defined in

[agent/rtm.ts:470](https://github.com/livechat/lc-sdk-js/blob/ea531c7/src/agent/rtm.ts#L470)

___

### listArchives

▸ **listArchives**(`opts?`): `Promise`<[`ListArchivesResponse`](../interfaces/agent_structures_responses.ListArchivesResponse.md)\>

It returns a list of the chats an Agent has access to. Together with a chat, the events of one thread from this chat are returned.

The list classification is based on threads; 1 chat per 1 thread. Thus, the same chat object may appear on the list several times,
but each time with a different thread. The returned chat is a complete object, not only a chat summary.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | [`ListArchivesParameters`](../interfaces/agent_structures_structures.ListArchivesParameters.md) | options like filters or pagination |

#### Returns

`Promise`<[`ListArchivesResponse`](../interfaces/agent_structures_responses.ListArchivesResponse.md)\>

#### Defined in

[agent/rtm.ts:127](https://github.com/livechat/lc-sdk-js/blob/ea531c7/src/agent/rtm.ts#L127)

___

### listChats

▸ **listChats**(`opts?`): `Promise`<[`ListChatsResponse`](../interfaces/agent_structures_responses.ListChatsResponse.md)\>

It returns summaries of the chats an Agent has access to.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | [`ListChatParameters`](../interfaces/agent_structures_structures.ListChatParameters.md) | set of filters and pagination to limit returned entries |

#### Returns

`Promise`<[`ListChatsResponse`](../interfaces/agent_structures_responses.ListChatsResponse.md)\>

#### Defined in

[agent/rtm.ts:98](https://github.com/livechat/lc-sdk-js/blob/ea531c7/src/agent/rtm.ts#L98)

___

### listRoutingStatuses

▸ **listRoutingStatuses**(`group_ids?`): `Promise`<[`SetRoutingStatusResponse`](../interfaces/agent_structures_responses.SetRoutingStatusResponse.md)[]\>

Returns the current routing status of each agent.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `group_ids?` | `number`[] | groups to list agent routing statuses from |

#### Returns

`Promise`<[`SetRoutingStatusResponse`](../interfaces/agent_structures_responses.SetRoutingStatusResponse.md)[]\>

#### Defined in

[agent/rtm.ts:495](https://github.com/livechat/lc-sdk-js/blob/ea531c7/src/agent/rtm.ts#L495)

___

### listThreads

▸ **listThreads**(`chat_id`, `opts?`): `Promise`<[`ListThreadsResponse`](../interfaces/agent_structures_responses.ListThreadsResponse.md)\>

Returns threads that the current Agent has access to in a given chat.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `chat_id` | `string` | chat ID to get threads from |
| `opts?` | [`ListThreadsParameters`](../interfaces/agent_structures_structures.ListThreadsParameters.md) | additional options like pagination and sorting |

#### Returns

`Promise`<[`ListThreadsResponse`](../interfaces/agent_structures_responses.ListThreadsResponse.md)\>

#### Defined in

[agent/rtm.ts:107](https://github.com/livechat/lc-sdk-js/blob/ea531c7/src/agent/rtm.ts#L107)

___

### login

▸ **login**(`loginData?`): `Promise`<[`LoginResponse`](../interfaces/agent_structures_responses.LoginResponse.md)\>

It returns the initial state of the current Agent.
Note: uses the access token from TokenGetter provided in the constructor.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `loginData?` | [`LoginRequest`](../interfaces/agent_structures_structures.LoginRequest.md) | optional object with login parameters |

#### Returns

`Promise`<[`LoginResponse`](../interfaces/agent_structures_responses.LoginResponse.md)\>

#### Defined in

[agent/rtm.ts:56](https://github.com/livechat/lc-sdk-js/blob/ea531c7/src/agent/rtm.ts#L56)

___

### logout

▸ **logout**(`agent_id?`): `Promise`<[`EmptyResponse`](../interfaces/agent_structures_responses.EmptyResponse.md)\>

Logs the Agent out.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `agent_id?` | `string` | specifies agent to be logged out. If empty, logs out the current agent. |

#### Returns

`Promise`<[`EmptyResponse`](../interfaces/agent_structures_responses.EmptyResponse.md)\>

#### Defined in

[agent/rtm.ts:90](https://github.com/livechat/lc-sdk-js/blob/ea531c7/src/agent/rtm.ts#L90)

___

### markEventsAsSeen

▸ **markEventsAsSeen**(`chat_id`, `seen_up_to`): `Promise`<[`EmptyResponse`](../interfaces/agent_structures_responses.EmptyResponse.md)\>

Marks events as seen by Agent.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `chat_id` | `string` | chat to mark events |
| `seen_up_to` | `string` | date up to which mark events |

#### Returns

`Promise`<[`EmptyResponse`](../interfaces/agent_structures_responses.EmptyResponse.md)\>

#### Defined in

[agent/rtm.ts:425](https://github.com/livechat/lc-sdk-js/blob/ea531c7/src/agent/rtm.ts#L425)

___

### multicast

▸ **multicast**(`recipients`, `content`, `type?`): `Promise`<[`EmptyResponse`](../interfaces/agent_structures_responses.EmptyResponse.md)\>

This method serves for the chat-unrelated communication. Messages sent using multicast are not being saved.
For example, it could be used in an app that sends notifications to Agents or Customers,
when a certain condition is met (e.g. an important Customer started the chat).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `recipients` | [`MulticastRecipients`](../interfaces/agent_structures_structures.MulticastRecipients.md) | who should receive multicast |
| `content` | `object` | = JSON content to send |
| `type?` | `string` | message type |

#### Returns

`Promise`<[`EmptyResponse`](../interfaces/agent_structures_responses.EmptyResponse.md)\>

#### Defined in

[agent/rtm.ts:460](https://github.com/livechat/lc-sdk-js/blob/ea531c7/src/agent/rtm.ts#L460)

___

### on

▸ **on**<`P`\>(`push`, `handler`): () => `void`

Allows to subscribe a handler for a given push. Returns function to unsubscribe.
Note: multiple subscriptions for the same push are not allowed in single websocket connection.

#### Type parameters

| Name |
| :------ |
| `P` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `push` | [`Pushes`](../enums/agent_structures_pushes.Pushes.md) | push name to subscribe to |
| `handler` | (`payload`: `P`) => `void` | function receiving push payload |

#### Returns

`fn`

▸ (): `void`

Allows to subscribe a handler for a given push. Returns function to unsubscribe.
Note: multiple subscriptions for the same push are not allowed in single websocket connection.

##### Returns

`void`

#### Defined in

[agent/rtm.ts:46](https://github.com/livechat/lc-sdk-js/blob/ea531c7/src/agent/rtm.ts#L46)

___

### removeUserFromChat

▸ **removeUserFromChat**(`chat_id`, `user_id`, `ignore_requester_presence?`): `Promise`<[`EmptyResponse`](../interfaces/agent_structures_responses.EmptyResponse.md)\>

Removes a user from chat. Removing customer user type is not allowed. It's always possible to remove the requester from the chat.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `chat_id` | `string` | chat to remove user from |
| `user_id` | `string` | user to remove |
| `ignore_requester_presence?` | `boolean` | if true, allows to remove user from chat even if the requester is not present in the chat |

#### Returns

`Promise`<[`EmptyResponse`](../interfaces/agent_structures_responses.EmptyResponse.md)\>

#### Defined in

[agent/rtm.ts:217](https://github.com/livechat/lc-sdk-js/blob/ea531c7/src/agent/rtm.ts#L217)

___

### requestThreadSummary

▸ **requestThreadSummary**(`chat_id`, `thread_id`): `Promise`<[`EmptyResponse`](../interfaces/agent_structures_responses.EmptyResponse.md)\>

Requests thread summary

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `chat_id` | `string` | chat ID of thread to request summary for |
| `thread_id` | `string` | thread to request summary for |

#### Returns

`Promise`<[`EmptyResponse`](../interfaces/agent_structures_responses.EmptyResponse.md)\>

#### Defined in

[agent/rtm.ts:380](https://github.com/livechat/lc-sdk-js/blob/ea531c7/src/agent/rtm.ts#L380)

___

### resumeChat

▸ **resumeChat**(`param`): `Promise`<[`ResumeChatResponse`](../interfaces/agent_structures_responses.ResumeChatResponse.md)\>

Restarts an archived chat

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `param` | `string` \| [`ResumeChatParameters`](../interfaces/agent_structures_structures.ResumeChatParameters.md) | either string ID of a chat to activate or full initial chat object |

#### Returns

`Promise`<[`ResumeChatResponse`](../interfaces/agent_structures_responses.ResumeChatResponse.md)\>

#### Defined in

[agent/rtm.ts:143](https://github.com/livechat/lc-sdk-js/blob/ea531c7/src/agent/rtm.ts#L143)

___

### send

▸ **send**(`action`, `payload`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `action` | `string` |
| `payload` | `any` |

#### Returns

`Promise`<`any`\>

#### Inherited from

[RTMAPI](internal.RTMAPI.md).[send](internal.RTMAPI.md#send)

#### Defined in

[internal/index.ts:155](https://github.com/livechat/lc-sdk-js/blob/ea531c7/src/internal/index.ts#L155)

___

### sendEvent

▸ **sendEvent**(`chat_id`, `event`, `attach_to_last_thread?`): `Promise`<[`SendEventResponse`](../interfaces/agent_structures_responses.SendEventResponse.md)\>

Sends an Event object. Use this method to send a message by specifing the Message event type in the request.
It's possible to write to a chat without joining it. The user sending an event will be automatically added to the chat
with the present parameter set to false.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `chat_id` | `string` | chat to send event to |
| `event` | [`RequestEvent`](../modules/agent_structures_events.md#requestevent) | Event request object |
| `attach_to_last_thread?` | `boolean` | if true, adds event to last inactive thread |

#### Returns

`Promise`<[`SendEventResponse`](../interfaces/agent_structures_responses.SendEventResponse.md)\>

#### Defined in

[agent/rtm.ts:251](https://github.com/livechat/lc-sdk-js/blob/ea531c7/src/agent/rtm.ts#L251)

___

### sendEventPreview

▸ **sendEventPreview**(`chat_id`, `event`): `Promise`<[`EmptyResponse`](../interfaces/agent_structures_responses.EmptyResponse.md)\>

Sends an Event object. Use this method to send a message preview by specifing the Message event type in the request.
This event is not saved in the chat.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `chat_id` | `string` | chat to send event to |
| `event` | [`RequestEvent`](../modules/agent_structures_events.md#requestevent) | Event request object |

#### Returns

`Promise`<[`EmptyResponse`](../interfaces/agent_structures_responses.EmptyResponse.md)\>

#### Defined in

[agent/rtm.ts:236](https://github.com/livechat/lc-sdk-js/blob/ea531c7/src/agent/rtm.ts#L236)

___

### sendRichMessagePostback

▸ **sendRichMessagePostback**(`opts`): `Promise`<[`EmptyResponse`](../interfaces/agent_structures_responses.EmptyResponse.md)\>

Sends postback for rich message

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts` | [`SendRichMessagePostbackParameters`](../interfaces/agent_structures_structures.SendRichMessagePostbackParameters.md) | postback data |

#### Returns

`Promise`<[`EmptyResponse`](../interfaces/agent_structures_responses.EmptyResponse.md)\>

#### Defined in

[agent/rtm.ts:263](https://github.com/livechat/lc-sdk-js/blob/ea531c7/src/agent/rtm.ts#L263)

___

### sendThinkingIndicator

▸ **sendThinkingIndicator**(`chat_id`, `opts?`): `Promise`<[`EmptyResponse`](../interfaces/agent_structures_responses.EmptyResponse.md)\>

Sends thinking indicator

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `chat_id` | `string` | chat for thinking indicator |
| `opts?` | [`SendThinkingIndicatorParameters`](../interfaces/agent_structures_structures.SendThinkingIndicatorParameters.md) | thinking indicator options like title, description, visibility and custom ID |

#### Returns

`Promise`<[`EmptyResponse`](../interfaces/agent_structures_responses.EmptyResponse.md)\>

#### Defined in

[agent/rtm.ts:434](https://github.com/livechat/lc-sdk-js/blob/ea531c7/src/agent/rtm.ts#L434)

___

### sendTypingIndicator

▸ **sendTypingIndicator**(`chat_id`, `is_typing`, `visibility?`): `Promise`<[`EmptyResponse`](../interfaces/agent_structures_responses.EmptyResponse.md)\>

Sends typing indicator

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `chat_id` | `string` | chat for typing indicator |
| `is_typing` | `boolean` | status of typing |
| `visibility?` | `string` | possible values: all, agents |

#### Returns

`Promise`<[`EmptyResponse`](../interfaces/agent_structures_responses.EmptyResponse.md)\>

#### Defined in

[agent/rtm.ts:444](https://github.com/livechat/lc-sdk-js/blob/ea531c7/src/agent/rtm.ts#L444)

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

[RTMAPI](internal.RTMAPI.md).[setAuthorId](internal.RTMAPI.md#setauthorid)

#### Defined in

[internal/index.ts:186](https://github.com/livechat/lc-sdk-js/blob/ea531c7/src/internal/index.ts#L186)

___

### setAwayStatus

▸ **setAwayStatus**(`away`): `Promise`<[`EmptyResponse`](../interfaces/agent_structures_responses.EmptyResponse.md)\>

Sets an Agent's connection to the away state. You can use this method to manipulate the Agent's status.
The method works per connection - all connections an Agent has (desktop, mobile, etc) must be in the away state
for the Agent's status to be changed to not_accepting_chats.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `away` | `boolean` | away status |

#### Returns

`Promise`<[`EmptyResponse`](../interfaces/agent_structures_responses.EmptyResponse.md)\>

#### Defined in

[agent/rtm.ts:82](https://github.com/livechat/lc-sdk-js/blob/ea531c7/src/agent/rtm.ts#L82)

___

### setRoutingStatus

▸ **setRoutingStatus**(`status`, `agent_id?`): `Promise`<[`EmptyResponse`](../interfaces/agent_structures_responses.EmptyResponse.md)\>

Changes the status of an Agent or a Bot Agent.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `status` | [`RoutingStatus`](../enums/agent_structures_structures.RoutingStatus.md) | status to set |
| `agent_id?` | `string` | ID of agent to update status |

#### Returns

`Promise`<[`EmptyResponse`](../interfaces/agent_structures_responses.EmptyResponse.md)\>

#### Defined in

[agent/rtm.ts:416](https://github.com/livechat/lc-sdk-js/blob/ea531c7/src/agent/rtm.ts#L416)

___

### startChat

▸ **startChat**(`opts?`): `Promise`<[`StartChatResponse`](../interfaces/agent_structures_responses.StartChatResponse.md)\>

Starts a chat

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opts?` | [`StartChatParameters`](../interfaces/agent_structures_structures.StartChatParameters.md) | options like initial chat data or continuous switch |

#### Returns

`Promise`<[`StartChatResponse`](../interfaces/agent_structures_responses.StartChatResponse.md)\>

#### Defined in

[agent/rtm.ts:135](https://github.com/livechat/lc-sdk-js/blob/ea531c7/src/agent/rtm.ts#L135)

___

### subscribePush

▸ **subscribePush**<`P`\>(`push`, `callback`): `void`

#### Type parameters

| Name |
| :------ |
| `P` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `push` | `string` |
| `callback` | (`payload`: `P`) => `void` |

#### Returns

`void`

#### Inherited from

[RTMAPI](internal.RTMAPI.md).[subscribePush](internal.RTMAPI.md#subscribepush)

#### Defined in

[internal/index.ts:175](https://github.com/livechat/lc-sdk-js/blob/ea531c7/src/internal/index.ts#L175)

___

### tagThread

▸ **tagThread**(`chat_id`, `thread_id`, `tag`): `Promise`<[`EmptyResponse`](../interfaces/agent_structures_responses.EmptyResponse.md)\>

Tags thread with given tag

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `chat_id` | `string` | chat ID of thread to tag |
| `thread_id` | `string` | thread to tag |
| `tag` | `string` | tag to add |

#### Returns

`Promise`<[`EmptyResponse`](../interfaces/agent_structures_responses.EmptyResponse.md)\>

#### Defined in

[agent/rtm.ts:361](https://github.com/livechat/lc-sdk-js/blob/ea531c7/src/agent/rtm.ts#L361)

___

### transferChat

▸ **transferChat**(`id`, `opts?`): `Promise`<[`EmptyResponse`](../interfaces/agent_structures_responses.EmptyResponse.md)\>

Transfers a chat to an Agent or a group.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | chat to transfer |
| `opts?` | [`TransferChatParameters`](../interfaces/agent_structures_structures.TransferChatParameters.md) | specific request flags |

#### Returns

`Promise`<[`EmptyResponse`](../interfaces/agent_structures_responses.EmptyResponse.md)\>

#### Defined in

[agent/rtm.ts:183](https://github.com/livechat/lc-sdk-js/blob/ea531c7/src/agent/rtm.ts#L183)

___

### unfollowChat

▸ **unfollowChat**(`id`): `Promise`<[`EmptyResponse`](../interfaces/agent_structures_responses.EmptyResponse.md)\>

Removes the requester from the chat followers. After that, only key changes to the chat (like transfer_chat or close_active_thread)
will be sent to the requester. Chat members cannot unfollow the chat.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | chat ID to unfollow |

#### Returns

`Promise`<[`EmptyResponse`](../interfaces/agent_structures_responses.EmptyResponse.md)\>

#### Defined in

[agent/rtm.ts:174](https://github.com/livechat/lc-sdk-js/blob/ea531c7/src/agent/rtm.ts#L174)

___

### unfollowCustomer

▸ **unfollowCustomer**(`id`): `Promise`<[`EmptyResponse`](../interfaces/agent_structures_responses.EmptyResponse.md)\>

Removes the agent from the list of customer's followers.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of customer to unfollow |

#### Returns

`Promise`<[`EmptyResponse`](../interfaces/agent_structures_responses.EmptyResponse.md)\>

#### Defined in

[agent/rtm.ts:487](https://github.com/livechat/lc-sdk-js/blob/ea531c7/src/agent/rtm.ts#L487)

___

### unsubscribePush

▸ **unsubscribePush**(`push`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `push` | `string` |

#### Returns

`void`

#### Inherited from

[RTMAPI](internal.RTMAPI.md).[unsubscribePush](internal.RTMAPI.md#unsubscribepush)

#### Defined in

[internal/index.ts:182](https://github.com/livechat/lc-sdk-js/blob/ea531c7/src/internal/index.ts#L182)

___

### untagThread

▸ **untagThread**(`chat_id`, `thread_id`, `tag`): `Promise`<[`EmptyResponse`](../interfaces/agent_structures_responses.EmptyResponse.md)\>

Removes tag from thread

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `chat_id` | `string` | chat ID of thread to untag |
| `thread_id` | `string` | thread to untag |
| `tag` | `string` | tag to remove |

#### Returns

`Promise`<[`EmptyResponse`](../interfaces/agent_structures_responses.EmptyResponse.md)\>

#### Defined in

[agent/rtm.ts:371](https://github.com/livechat/lc-sdk-js/blob/ea531c7/src/agent/rtm.ts#L371)

___

### updateChatProperties

▸ **updateChatProperties**(`id`, `properties`): `Promise`<[`EmptyResponse`](../interfaces/agent_structures_responses.EmptyResponse.md)\>

Updates chat properties

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | chat to update properties |
| `properties` | [`Properties`](../interfaces/agent_structures_structures.Properties.md) | properties to update |

#### Returns

`Promise`<[`EmptyResponse`](../interfaces/agent_structures_responses.EmptyResponse.md)\>

#### Defined in

[agent/rtm.ts:272](https://github.com/livechat/lc-sdk-js/blob/ea531c7/src/agent/rtm.ts#L272)

___

### updateCustomer

▸ **updateCustomer**(`id`, `opts`): `Promise`<[`EmptyResponse`](../interfaces/agent_structures_responses.EmptyResponse.md)\>

Updates Customer's properties.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID of a customer to update |
| `opts` | [`CustomerParameters`](../interfaces/agent_structures_structures.CustomerParameters.md) | properties to update |

#### Returns

`Promise`<[`EmptyResponse`](../interfaces/agent_structures_responses.EmptyResponse.md)\>

#### Defined in

[agent/rtm.ts:397](https://github.com/livechat/lc-sdk-js/blob/ea531c7/src/agent/rtm.ts#L397)

___

### updateEventProperties

▸ **updateEventProperties**(`chat_id`, `thread_id`, `event_id`, `properties`): `Promise`<[`EmptyResponse`](../interfaces/agent_structures_responses.EmptyResponse.md)\>

Updates event properties

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `chat_id` | `string` | chat ID of event to update |
| `thread_id` | `string` | thread ID of event to update |
| `event_id` | `string` | event to update properties |
| `properties` | [`Properties`](../interfaces/agent_structures_structures.Properties.md) | properties to update |

#### Returns

`Promise`<[`EmptyResponse`](../interfaces/agent_structures_responses.EmptyResponse.md)\>

#### Defined in

[agent/rtm.ts:320](https://github.com/livechat/lc-sdk-js/blob/ea531c7/src/agent/rtm.ts#L320)

___

### updateSession

▸ **updateSession**(`accessToken`, `tokenType`): `Promise`<[`EmptyResponse`](../interfaces/agent_structures_responses.EmptyResponse.md)\>

Replaces the token used in the login request with a new one. This allows the websocket connection to remain open
after the former token expires as its lifetime is now tied to the new token.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `accessToken` | `string` | OAuth token from the Agent's account |
| `tokenType` | [`TokenType`](../modules/authorization_token_getter.md#tokentype) | Bearer or Basic |

#### Returns

`Promise`<[`EmptyResponse`](../interfaces/agent_structures_responses.EmptyResponse.md)\>

#### Defined in

[agent/rtm.ts:505](https://github.com/livechat/lc-sdk-js/blob/ea531c7/src/agent/rtm.ts#L505)

___

### updateThreadProperties

▸ **updateThreadProperties**(`chat_id`, `thread_id`, `properties`): `Promise`<[`EmptyResponse`](../interfaces/agent_structures_responses.EmptyResponse.md)\>

Updates thread properties

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `chat_id` | `string` | chat ID of thread to update |
| `thread_id` | `string` | thread to update properties |
| `properties` | [`Properties`](../interfaces/agent_structures_structures.Properties.md) | properties to update |

#### Returns

`Promise`<[`EmptyResponse`](../interfaces/agent_structures_responses.EmptyResponse.md)\>

#### Defined in

[agent/rtm.ts:291](https://github.com/livechat/lc-sdk-js/blob/ea531c7/src/agent/rtm.ts#L291)
