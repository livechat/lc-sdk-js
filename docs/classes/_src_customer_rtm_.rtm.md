[lc-sdk-js](../README.md) › [Globals](../globals.md) › ["src/customer/rtm"](../modules/_src_customer_rtm_.md) › [RTM](_src_customer_rtm_.rtm.md)

# Class: RTM

## Hierarchy

* [RTMAPI](_src_internal_index_.rtmapi.md)

  ↳ **RTM**

## Index

### Constructors

* [constructor](_src_customer_rtm_.rtm.md#constructor)

### Properties

* [APIURL](_src_customer_rtm_.rtm.md#apiurl)
* [heartbeatInterval](_src_customer_rtm_.rtm.md#optional-heartbeatinterval)
* [license](_src_customer_rtm_.rtm.md#optional-license)
* [requestsQueue](_src_customer_rtm_.rtm.md#requestsqueue)
* [socket](_src_customer_rtm_.rtm.md#optional-socket)
* [subscribedPushes](_src_customer_rtm_.rtm.md#subscribedpushes)
* [type](_src_customer_rtm_.rtm.md#type)
* [version](_src_customer_rtm_.rtm.md#version)

### Methods

* [acceptGreeting](_src_customer_rtm_.rtm.md#acceptgreeting)
* [activateChat](_src_customer_rtm_.rtm.md#activatechat)
* [cancelGreeting](_src_customer_rtm_.rtm.md#cancelgreeting)
* [checkGoals](_src_customer_rtm_.rtm.md#checkgoals)
* [connect](_src_customer_rtm_.rtm.md#connect)
* [deactivateChat](_src_customer_rtm_.rtm.md#deactivatechat)
* [deleteChatProperties](_src_customer_rtm_.rtm.md#deletechatproperties)
* [deleteEventProperties](_src_customer_rtm_.rtm.md#deleteeventproperties)
* [deleteThreadProperties](_src_customer_rtm_.rtm.md#deletethreadproperties)
* [getChat](_src_customer_rtm_.rtm.md#getchat)
* [getCustomer](_src_customer_rtm_.rtm.md#getcustomer)
* [getForm](_src_customer_rtm_.rtm.md#getform)
* [getPredictedAgent](_src_customer_rtm_.rtm.md#getpredictedagent)
* [getURLInfo](_src_customer_rtm_.rtm.md#geturlinfo)
* [listChats](_src_customer_rtm_.rtm.md#listchats)
* [listGroupProperties](_src_customer_rtm_.rtm.md#listgroupproperties)
* [listGroupStatuses](_src_customer_rtm_.rtm.md#listgroupstatuses)
* [listLicenseProperties](_src_customer_rtm_.rtm.md#listlicenseproperties)
* [listThreads](_src_customer_rtm_.rtm.md#listthreads)
* [login](_src_customer_rtm_.rtm.md#login)
* [markEventsAsSeen](_src_customer_rtm_.rtm.md#markeventsasseen)
* [send](_src_customer_rtm_.rtm.md#send)
* [sendEvent](_src_customer_rtm_.rtm.md#sendevent)
* [sendRichMessagePostback](_src_customer_rtm_.rtm.md#sendrichmessagepostback)
* [sendSneakPeek](_src_customer_rtm_.rtm.md#sendsneakpeek)
* [setCustomerSessionFields](_src_customer_rtm_.rtm.md#setcustomersessionfields)
* [startChat](_src_customer_rtm_.rtm.md#startchat)
* [subscribeChatDeactivated](_src_customer_rtm_.rtm.md#subscribechatdeactivated)
* [subscribeChatPropertiesDeleted](_src_customer_rtm_.rtm.md#subscribechatpropertiesdeleted)
* [subscribeChatPropertiesUpdated](_src_customer_rtm_.rtm.md#subscribechatpropertiesupdated)
* [subscribeChatTransferred](_src_customer_rtm_.rtm.md#subscribechattransferred)
* [subscribeCustomerDisconnected](_src_customer_rtm_.rtm.md#subscribecustomerdisconnected)
* [subscribeCustomerPageUpdated](_src_customer_rtm_.rtm.md#subscribecustomerpageupdated)
* [subscribeCustomerSideStorageUpdated](_src_customer_rtm_.rtm.md#subscribecustomersidestorageupdated)
* [subscribeCustomerUpdated](_src_customer_rtm_.rtm.md#subscribecustomerupdated)
* [subscribeEventPropertiesDeleted](_src_customer_rtm_.rtm.md#subscribeeventpropertiesdeleted)
* [subscribeEventPropertiesUpdated](_src_customer_rtm_.rtm.md#subscribeeventpropertiesupdated)
* [subscribeEventUpdated](_src_customer_rtm_.rtm.md#subscribeeventupdated)
* [subscribeEventsMarkedAsSeen](_src_customer_rtm_.rtm.md#subscribeeventsmarkedasseen)
* [subscribeGreetingAccepted](_src_customer_rtm_.rtm.md#subscribegreetingaccepted)
* [subscribeGreetingCancelled](_src_customer_rtm_.rtm.md#subscribegreetingcancelled)
* [subscribeIncomingChat](_src_customer_rtm_.rtm.md#subscribeincomingchat)
* [subscribeIncomingEvent](_src_customer_rtm_.rtm.md#subscribeincomingevent)
* [subscribeIncomingGreeting](_src_customer_rtm_.rtm.md#subscribeincominggreeting)
* [subscribeIncomingMulticast](_src_customer_rtm_.rtm.md#subscribeincomingmulticast)
* [subscribeIncomingRichMessagePostback](_src_customer_rtm_.rtm.md#subscribeincomingrichmessagepostback)
* [subscribeIncomingTypingIndicator](_src_customer_rtm_.rtm.md#subscribeincomingtypingindicator)
* [subscribePush](_src_customer_rtm_.rtm.md#subscribepush)
* [subscribeQueuePostitionUpdated](_src_customer_rtm_.rtm.md#subscribequeuepostitionupdated)
* [subscribeThreadPropertiesDeleted](_src_customer_rtm_.rtm.md#subscribethreadpropertiesdeleted)
* [subscribeThreadPropertiesUpdated](_src_customer_rtm_.rtm.md#subscribethreadpropertiesupdated)
* [subscribeUserAddedToChat](_src_customer_rtm_.rtm.md#subscribeuseraddedtochat)
* [subscribeUserRemovedFromChat](_src_customer_rtm_.rtm.md#subscribeuserremovedfromchat)
* [unsubscribePush](_src_customer_rtm_.rtm.md#unsubscribepush)
* [updateChatProperties](_src_customer_rtm_.rtm.md#updatechatproperties)
* [updateCustomer](_src_customer_rtm_.rtm.md#updatecustomer)
* [updateEventProperties](_src_customer_rtm_.rtm.md#updateeventproperties)
* [updateThreadProperties](_src_customer_rtm_.rtm.md#updatethreadproperties)

## Constructors

###  constructor

\+ **new RTM**(`license`: number): *[RTM](_src_customer_rtm_.rtm.md)*

*Overrides [RTMAPI](_src_internal_index_.rtmapi.md).[constructor](_src_internal_index_.rtmapi.md#constructor)*

*Defined in [src/customer/rtm.ts:25](https://github.com/livechat/lc-sdk-js/blob/5281c0a/src/customer/rtm.ts#L25)*

**Parameters:**

Name | Type |
------ | ------ |
`license` | number |

**Returns:** *[RTM](_src_customer_rtm_.rtm.md)*

## Properties

###  APIURL

• **APIURL**: *string*

*Inherited from [RTMAPI](_src_internal_index_.rtmapi.md).[APIURL](_src_internal_index_.rtmapi.md#apiurl)*

*Defined in [src/internal/index.ts:64](https://github.com/livechat/lc-sdk-js/blob/5281c0a/src/internal/index.ts#L64)*

___

### `Optional` heartbeatInterval

• **heartbeatInterval**? : *NodeJS.Timeout*

*Inherited from [RTMAPI](_src_internal_index_.rtmapi.md).[heartbeatInterval](_src_internal_index_.rtmapi.md#optional-heartbeatinterval)*

*Defined in [src/internal/index.ts:69](https://github.com/livechat/lc-sdk-js/blob/5281c0a/src/internal/index.ts#L69)*

___

### `Optional` license

• **license**? : *undefined | number*

*Inherited from [RTMAPI](_src_internal_index_.rtmapi.md).[license](_src_internal_index_.rtmapi.md#optional-license)*

*Defined in [src/internal/index.ts:67](https://github.com/livechat/lc-sdk-js/blob/5281c0a/src/internal/index.ts#L67)*

___

###  requestsQueue

• **requestsQueue**: *any*

*Inherited from [RTMAPI](_src_internal_index_.rtmapi.md).[requestsQueue](_src_internal_index_.rtmapi.md#requestsqueue)*

*Defined in [src/internal/index.ts:70](https://github.com/livechat/lc-sdk-js/blob/5281c0a/src/internal/index.ts#L70)*

___

### `Optional` socket

• **socket**? : *ws*

*Inherited from [RTMAPI](_src_internal_index_.rtmapi.md).[socket](_src_internal_index_.rtmapi.md#optional-socket)*

*Defined in [src/internal/index.ts:68](https://github.com/livechat/lc-sdk-js/blob/5281c0a/src/internal/index.ts#L68)*

___

###  subscribedPushes

• **subscribedPushes**: *any*

*Inherited from [RTMAPI](_src_internal_index_.rtmapi.md).[subscribedPushes](_src_internal_index_.rtmapi.md#subscribedpushes)*

*Defined in [src/internal/index.ts:71](https://github.com/livechat/lc-sdk-js/blob/5281c0a/src/internal/index.ts#L71)*

___

###  type

• **type**: *[apiType](../modules/_src_internal_index_.md#apitype)*

*Inherited from [RTMAPI](_src_internal_index_.rtmapi.md).[type](_src_internal_index_.rtmapi.md#type)*

*Defined in [src/internal/index.ts:66](https://github.com/livechat/lc-sdk-js/blob/5281c0a/src/internal/index.ts#L66)*

___

###  version

• **version**: *string*

*Inherited from [RTMAPI](_src_internal_index_.rtmapi.md).[version](_src_internal_index_.rtmapi.md#version)*

*Defined in [src/internal/index.ts:65](https://github.com/livechat/lc-sdk-js/blob/5281c0a/src/internal/index.ts#L65)*

## Methods

###  acceptGreeting

▸ **acceptGreeting**(`greeting_id`: number, `unique_id`: string): *Promise‹[EmptyResponse](../interfaces/_src_customer_structures_.emptyresponse.md)›*

*Defined in [src/customer/rtm.ts:381](https://github.com/livechat/lc-sdk-js/blob/5281c0a/src/customer/rtm.ts#L381)*

Marks an incoming greeting as seen.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`greeting_id` | number | number representing type of a greeting |
`unique_id` | string | specific greeting event ID  |

**Returns:** *Promise‹[EmptyResponse](../interfaces/_src_customer_structures_.emptyresponse.md)›*

___

###  activateChat

▸ **activateChat**(`param`: string | [ActivateChatParameters](../interfaces/_src_customer_structures_.activatechatparameters.md)): *Promise‹[ActivateChatResponse](../interfaces/_src_customer_structures_.activatechatresponse.md)›*

*Defined in [src/customer/rtm.ts:82](https://github.com/livechat/lc-sdk-js/blob/5281c0a/src/customer/rtm.ts#L82)*

Restarts an archived chat

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`param` | string &#124; [ActivateChatParameters](../interfaces/_src_customer_structures_.activatechatparameters.md) | either string ID of a chat to activate or full initial chat object  |

**Returns:** *Promise‹[ActivateChatResponse](../interfaces/_src_customer_structures_.activatechatresponse.md)›*

___

###  cancelGreeting

▸ **cancelGreeting**(`unique_id`: string): *Promise‹[EmptyResponse](../interfaces/_src_customer_structures_.emptyresponse.md)›*

*Defined in [src/customer/rtm.ts:393](https://github.com/livechat/lc-sdk-js/blob/5281c0a/src/customer/rtm.ts#L393)*

Cancels a greeting (an invitation to the chat).
For example, Customers could cancel greetings by minimalizing the chat widget with a greeting.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`unique_id` | string | specific greeting ID  |

**Returns:** *Promise‹[EmptyResponse](../interfaces/_src_customer_structures_.emptyresponse.md)›*

___

###  checkGoals

▸ **checkGoals**(`session_fields`: object[], `group_id`: number, `page_url`: number): *Promise‹[EmptyResponse](../interfaces/_src_customer_structures_.emptyresponse.md)›*

*Defined in [src/customer/rtm.ts:328](https://github.com/livechat/lc-sdk-js/blob/5281c0a/src/customer/rtm.ts#L328)*

Customer can use this method to trigger checking if goals were achieved.
Then, Agents receive the information. You should call this method to provide goals
parameters for the server when the customers limit is reached. Works only for offline Customers.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`session_fields` | object[] | object enclosed key:value pairs |
`group_id` | number | group id to check goals in |
`page_url` | number | page URL  |

**Returns:** *Promise‹[EmptyResponse](../interfaces/_src_customer_structures_.emptyresponse.md)›*

___

###  connect

▸ **connect**(): *Promise‹any›*

*Inherited from [RTMAPI](_src_internal_index_.rtmapi.md).[connect](_src_internal_index_.rtmapi.md#connect)*

*Defined in [src/internal/index.ts:82](https://github.com/livechat/lc-sdk-js/blob/5281c0a/src/internal/index.ts#L82)*

**Returns:** *Promise‹any›*

___

###  deactivateChat

▸ **deactivateChat**(`chat_id`: string): *Promise‹[EmptyResponse](../interfaces/_src_customer_structures_.emptyresponse.md)›*

*Defined in [src/customer/rtm.ts:94](https://github.com/livechat/lc-sdk-js/blob/5281c0a/src/customer/rtm.ts#L94)*

Deactivates a chat by closing the currently open thread. Sending messages to this thread will no longer be possible.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`chat_id` | string | chat ID to deactivate  |

**Returns:** *Promise‹[EmptyResponse](../interfaces/_src_customer_structures_.emptyresponse.md)›*

___

###  deleteChatProperties

▸ **deleteChatProperties**(`chat_id`: string, `properties`: [Properties](../interfaces/_src_objects_index_.properties.md)): *Promise‹[EmptyResponse](../interfaces/_src_customer_structures_.emptyresponse.md)›*

*Defined in [src/customer/rtm.ts:158](https://github.com/livechat/lc-sdk-js/blob/5281c0a/src/customer/rtm.ts#L158)*

Deletes chat properties

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`chat_id` | string | chat to delete properties |
`properties` | [Properties](../interfaces/_src_objects_index_.properties.md) | properties to delete  |

**Returns:** *Promise‹[EmptyResponse](../interfaces/_src_customer_structures_.emptyresponse.md)›*

___

###  deleteEventProperties

▸ **deleteEventProperties**(`chat_id`: string, `thread_id`: string, `event_id`: string, `properties`: [Properties](../interfaces/_src_objects_index_.properties.md)): *Promise‹[EmptyResponse](../interfaces/_src_customer_structures_.emptyresponse.md)›*

*Defined in [src/customer/rtm.ts:229](https://github.com/livechat/lc-sdk-js/blob/5281c0a/src/customer/rtm.ts#L229)*

Deletes event properties

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`chat_id` | string | chat ID of event to delete |
`thread_id` | string | thread ID of event to delete |
`event_id` | string | event to delete properties |
`properties` | [Properties](../interfaces/_src_objects_index_.properties.md) | properties to delete  |

**Returns:** *Promise‹[EmptyResponse](../interfaces/_src_customer_structures_.emptyresponse.md)›*

___

###  deleteThreadProperties

▸ **deleteThreadProperties**(`chat_id`: string, `thread_id`: string, `properties`: [Properties](../interfaces/_src_objects_index_.properties.md)): *Promise‹[EmptyResponse](../interfaces/_src_customer_structures_.emptyresponse.md)›*

*Defined in [src/customer/rtm.ts:189](https://github.com/livechat/lc-sdk-js/blob/5281c0a/src/customer/rtm.ts#L189)*

Deletes thread properties

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`chat_id` | string | chat ID of thread to delete |
`thread_id` | string | thread to delete properties |
`properties` | [Properties](../interfaces/_src_objects_index_.properties.md) | properties to delete  |

**Returns:** *Promise‹[EmptyResponse](../interfaces/_src_customer_structures_.emptyresponse.md)›*

___

###  getChat

▸ **getChat**(`chat_id`: string, `thread_id?`: undefined | string): *Promise‹[GetChatResponse](../interfaces/_src_customer_structures_.getchatresponse.md)›*

*Defined in [src/customer/rtm.ts:66](https://github.com/livechat/lc-sdk-js/blob/5281c0a/src/customer/rtm.ts#L66)*

It returns a thread that the current Customer has access to in a given chat.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`chat_id` | string | ID of a chat to get |
`thread_id?` | undefined &#124; string | thread ID to get (if not provided, last thread is returned)  |

**Returns:** *Promise‹[GetChatResponse](../interfaces/_src_customer_structures_.getchatresponse.md)›*

___

###  getCustomer

▸ **getCustomer**(): *Promise‹[CustomerParameters](../interfaces/_src_customer_structures_.customerparameters.md)›*

*Defined in [src/customer/rtm.ts:303](https://github.com/livechat/lc-sdk-js/blob/5281c0a/src/customer/rtm.ts#L303)*

Returns the info about the Customer requesting it.

**Returns:** *Promise‹[CustomerParameters](../interfaces/_src_customer_structures_.customerparameters.md)›*

___

###  getForm

▸ **getForm**(`group_id`: number, `type`: string): *Promise‹[GetFormResponse](../interfaces/_src_customer_structures_.getformresponse.md)›*

*Defined in [src/customer/rtm.ts:344](https://github.com/livechat/lc-sdk-js/blob/5281c0a/src/customer/rtm.ts#L344)*

Returns an empty ticket form of a prechat or postchat survey.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`group_id` | number | = group id to get form for |
`type` | string | prechat or postchat  |

**Returns:** *Promise‹[GetFormResponse](../interfaces/_src_customer_structures_.getformresponse.md)›*

___

###  getPredictedAgent

▸ **getPredictedAgent**(): *Promise‹[GetPredictedAgentResponse](../interfaces/_src_customer_structures_.getpredictedagentresponse.md)›*

*Defined in [src/customer/rtm.ts:352](https://github.com/livechat/lc-sdk-js/blob/5281c0a/src/customer/rtm.ts#L352)*

Gets the predicted Agent - the one the Customer will chat with when the chat starts.
To use this method, the Customer needs to be logged in, which can be done via the login method.

**Returns:** *Promise‹[GetPredictedAgentResponse](../interfaces/_src_customer_structures_.getpredictedagentresponse.md)›*

___

###  getURLInfo

▸ **getURLInfo**(`url`: string): *Promise‹[GetURLInfoResponse](../interfaces/_src_customer_structures_.geturlinforesponse.md)›*

*Defined in [src/customer/rtm.ts:360](https://github.com/livechat/lc-sdk-js/blob/5281c0a/src/customer/rtm.ts#L360)*

It returns the info on a given URL.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`url` | string | URL to get info about  |

**Returns:** *Promise‹[GetURLInfoResponse](../interfaces/_src_customer_structures_.geturlinforesponse.md)›*

___

###  listChats

▸ **listChats**(`opts?`: [ListChatParameters](../interfaces/_src_agent_structures_.listchatparameters.md)): *Promise‹[ListChatsResponse](../interfaces/_src_customer_structures_.listchatsresponse.md)›*

*Defined in [src/customer/rtm.ts:45](https://github.com/livechat/lc-sdk-js/blob/5281c0a/src/customer/rtm.ts#L45)*

It returns summaries of the chats a Customer participated in.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`opts?` | [ListChatParameters](../interfaces/_src_agent_structures_.listchatparameters.md) | set of filters and pagination to limit returned entries  |

**Returns:** *Promise‹[ListChatsResponse](../interfaces/_src_customer_structures_.listchatsresponse.md)›*

___

###  listGroupProperties

▸ **listGroupProperties**(`license_id`: number, `group_id`: number, `namespace?`: undefined | string, `name?`: undefined | string): *Promise‹[Properties](../interfaces/_src_objects_index_.properties.md)›*

*Defined in [src/customer/rtm.ts:268](https://github.com/livechat/lc-sdk-js/blob/5281c0a/src/customer/rtm.ts#L268)*

Returns the properties of a given group. It only returns the properties a Customer has access to.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`license_id` | number | ID of license to return properties of |
`group_id` | number | ID of group to return properties of |
`namespace?` | undefined &#124; string | property namespace |
`name?` | undefined &#124; string | property name  |

**Returns:** *Promise‹[Properties](../interfaces/_src_objects_index_.properties.md)›*

___

###  listGroupStatuses

▸ **listGroupStatuses**(`param`: boolean | number[]): *Promise‹[ListGroupStatusesResponse](../interfaces/_src_customer_structures_.listgroupstatusesresponse.md)›*

*Defined in [src/customer/rtm.ts:311](https://github.com/livechat/lc-sdk-js/blob/5281c0a/src/customer/rtm.ts#L311)*

Lists statuses of groups.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`param` | boolean &#124; number[] | either boolean switch for all groups or list of group ID's to check  |

**Returns:** *Promise‹[ListGroupStatusesResponse](../interfaces/_src_customer_structures_.listgroupstatusesresponse.md)›*

___

###  listLicenseProperties

▸ **listLicenseProperties**(`license_id`: number, `namespace?`: undefined | string, `name?`: undefined | string): *Promise‹[Properties](../interfaces/_src_objects_index_.properties.md)›*

*Defined in [src/customer/rtm.ts:249](https://github.com/livechat/lc-sdk-js/blob/5281c0a/src/customer/rtm.ts#L249)*

Returns the properties of a given license. It only returns the properties a Customer has access to.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`license_id` | number | ID of license to return properties of |
`namespace?` | undefined &#124; string | property namespace |
`name?` | undefined &#124; string | property name  |

**Returns:** *Promise‹[Properties](../interfaces/_src_objects_index_.properties.md)›*

___

###  listThreads

▸ **listThreads**(`chat_id`: string, `opts?`: [ListThreadsParameters](../interfaces/_src_agent_structures_.listthreadsparameters.md)): *Promise‹[ListThreadsResponse](../interfaces/_src_customer_structures_.listthreadsresponse.md)›*

*Defined in [src/customer/rtm.ts:54](https://github.com/livechat/lc-sdk-js/blob/5281c0a/src/customer/rtm.ts#L54)*

Returns threads that the current Customer has access to in a given chat.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`chat_id` | string | chat ID to get threads from |
`opts?` | [ListThreadsParameters](../interfaces/_src_agent_structures_.listthreadsparameters.md) | additional options like pagination and sorting  |

**Returns:** *Promise‹[ListThreadsResponse](../interfaces/_src_customer_structures_.listthreadsresponse.md)›*

___

###  login

▸ **login**(`loginData`: string | [LoginRequest](../interfaces/_src_customer_structures_.loginrequest.md)): *Promise‹[LoginResponse](../interfaces/_src_customer_structures_.loginresponse.md)›*

*Defined in [src/customer/rtm.ts:34](https://github.com/livechat/lc-sdk-js/blob/5281c0a/src/customer/rtm.ts#L34)*

It returns the initial state of the current Customer.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`loginData` | string &#124; [LoginRequest](../interfaces/_src_customer_structures_.loginrequest.md) | OAuth token form the Customer's account or full object with login parameters  |

**Returns:** *Promise‹[LoginResponse](../interfaces/_src_customer_structures_.loginresponse.md)›*

___

###  markEventsAsSeen

▸ **markEventsAsSeen**(`chat_id`: string, `seen_up_to`: string): *Promise‹[EmptyResponse](../interfaces/_src_customer_structures_.emptyresponse.md)›*

*Defined in [src/customer/rtm.ts:369](https://github.com/livechat/lc-sdk-js/blob/5281c0a/src/customer/rtm.ts#L369)*

Marks events as seen by Agent.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`chat_id` | string | chat to mark events |
`seen_up_to` | string | date up to which mark events  |

**Returns:** *Promise‹[EmptyResponse](../interfaces/_src_customer_structures_.emptyresponse.md)›*

___

###  send

▸ **send**(`action`: string, `payload`: any): *Promise‹any›*

*Inherited from [RTMAPI](_src_internal_index_.rtmapi.md).[send](_src_internal_index_.rtmapi.md#send)*

*Defined in [src/internal/index.ts:127](https://github.com/livechat/lc-sdk-js/blob/5281c0a/src/internal/index.ts#L127)*

**Parameters:**

Name | Type |
------ | ------ |
`action` | string |
`payload` | any |

**Returns:** *Promise‹any›*

___

###  sendEvent

▸ **sendEvent**(`chat_id`: string, `event`: [Event](../modules/_src_objects_index_.md#event), `attach_to_last_thread?`: undefined | false | true): *Promise‹[SendEventResponse](../interfaces/_src_customer_structures_.sendeventresponse.md)›*

*Defined in [src/customer/rtm.ts:106](https://github.com/livechat/lc-sdk-js/blob/5281c0a/src/customer/rtm.ts#L106)*

Sends an Event object. Use this method to send a message by specifing the Message event type in the request.
It's possible to write to a chat without joining it. The user sending an event will be automatically added to the chat
with the present parameter set to false.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`chat_id` | string | chat to send event to |
`event` | [Event](../modules/_src_objects_index_.md#event) | Event object |
`attach_to_last_thread?` | undefined &#124; false &#124; true | if true, adds event to last inactive thread  |

**Returns:** *Promise‹[SendEventResponse](../interfaces/_src_customer_structures_.sendeventresponse.md)›*

___

###  sendRichMessagePostback

▸ **sendRichMessagePostback**(`opts`: [SendRichMessagePostbackParameters](../interfaces/_src_customer_structures_.sendrichmessagepostbackparameters.md)): *Promise‹[EmptyResponse](../interfaces/_src_customer_structures_.emptyresponse.md)›*

*Defined in [src/customer/rtm.ts:122](https://github.com/livechat/lc-sdk-js/blob/5281c0a/src/customer/rtm.ts#L122)*

Sends postback for rich message

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`opts` | [SendRichMessagePostbackParameters](../interfaces/_src_customer_structures_.sendrichmessagepostbackparameters.md) | postback data  |

**Returns:** *Promise‹[EmptyResponse](../interfaces/_src_customer_structures_.emptyresponse.md)›*

___

###  sendSneakPeek

▸ **sendSneakPeek**(`chat_id`: string, `sneak_peek_text`: string): *Promise‹[EmptyResponse](../interfaces/_src_customer_structures_.emptyresponse.md)›*

*Defined in [src/customer/rtm.ts:134](https://github.com/livechat/lc-sdk-js/blob/5281c0a/src/customer/rtm.ts#L134)*

Sends a sneak peek to a chat.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`chat_id` | string | chat to send sneak peek to |
`sneak_peek_text` | string | text to sneak peek  |

**Returns:** *Promise‹[EmptyResponse](../interfaces/_src_customer_structures_.emptyresponse.md)›*

___

###  setCustomerSessionFields

▸ **setCustomerSessionFields**(`session_fields`: object[]): *Promise‹[EmptyResponse](../interfaces/_src_customer_structures_.emptyresponse.md)›*

*Defined in [src/customer/rtm.ts:294](https://github.com/livechat/lc-sdk-js/blob/5281c0a/src/customer/rtm.ts#L294)*

Sets session fields for Customer.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`session_fields` | object[] | fields to set in form of object enclosed key:value pairs  |

**Returns:** *Promise‹[EmptyResponse](../interfaces/_src_customer_structures_.emptyresponse.md)›*

___

###  startChat

▸ **startChat**(`opts?`: [StartChatParameters](../interfaces/_src_agent_structures_.startchatparameters.md)): *Promise‹[StartChatResponse](../interfaces/_src_customer_structures_.startchatresponse.md)›*

*Defined in [src/customer/rtm.ts:74](https://github.com/livechat/lc-sdk-js/blob/5281c0a/src/customer/rtm.ts#L74)*

Starts a chat

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`opts?` | [StartChatParameters](../interfaces/_src_agent_structures_.startchatparameters.md) | options like initial chat data or continuous switch  |

**Returns:** *Promise‹[StartChatResponse](../interfaces/_src_customer_structures_.startchatresponse.md)›*

___

###  subscribeChatDeactivated

▸ **subscribeChatDeactivated**(`cb`: Function): *void*

*Defined in [src/customer/rtm.ts:410](https://github.com/livechat/lc-sdk-js/blob/5281c0a/src/customer/rtm.ts#L410)*

Informs that a chat was deactivated by closing the currently open thread.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`cb` | Function | callback  |

**Returns:** *void*

___

###  subscribeChatPropertiesDeleted

▸ **subscribeChatPropertiesDeleted**(`cb`: Function): *void*

*Defined in [src/customer/rtm.ts:477](https://github.com/livechat/lc-sdk-js/blob/5281c0a/src/customer/rtm.ts#L477)*

Informs about those chat properties that were deleted.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`cb` | Function | callback  |

**Returns:** *void*

___

###  subscribeChatPropertiesUpdated

▸ **subscribeChatPropertiesUpdated**(`cb`: Function): *void*

*Defined in [src/customer/rtm.ts:469](https://github.com/livechat/lc-sdk-js/blob/5281c0a/src/customer/rtm.ts#L469)*

Informs about those chat properties that were updated.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`cb` | Function | callback  |

**Returns:** *void*

___

###  subscribeChatTransferred

▸ **subscribeChatTransferred**(`cb`: Function): *void*

*Defined in [src/customer/rtm.ts:418](https://github.com/livechat/lc-sdk-js/blob/5281c0a/src/customer/rtm.ts#L418)*

Informs that a chat was transferred to a different group or to an Agent.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`cb` | Function | callback  |

**Returns:** *void*

___

###  subscribeCustomerDisconnected

▸ **subscribeCustomerDisconnected**(`cb`: Function): *void*

*Defined in [src/customer/rtm.ts:541](https://github.com/livechat/lc-sdk-js/blob/5281c0a/src/customer/rtm.ts#L541)*

Informs that a Customer was disconnected. The payload contains the reason of Customer's disconnection.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`cb` | Function | callback  |

**Returns:** *void*

___

###  subscribeCustomerPageUpdated

▸ **subscribeCustomerPageUpdated**(`cb`: Function): *void*

*Defined in [src/customer/rtm.ts:525](https://github.com/livechat/lc-sdk-js/blob/5281c0a/src/customer/rtm.ts#L525)*

Informs that a Customer moved to another page of the website.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`cb` | Function | callback  |

**Returns:** *void*

___

###  subscribeCustomerSideStorageUpdated

▸ **subscribeCustomerSideStorageUpdated**(`cb`: Function): *void*

*Defined in [src/customer/rtm.ts:533](https://github.com/livechat/lc-sdk-js/blob/5281c0a/src/customer/rtm.ts#L533)*

Informs that a Customer updated the data stored on their side.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`cb` | Function | callback  |

**Returns:** *void*

___

###  subscribeCustomerUpdated

▸ **subscribeCustomerUpdated**(`cb`: Function): *void*

*Defined in [src/customer/rtm.ts:517](https://github.com/livechat/lc-sdk-js/blob/5281c0a/src/customer/rtm.ts#L517)*

Informs that Customer's data was updated.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`cb` | Function | callback  |

**Returns:** *void*

___

###  subscribeEventPropertiesDeleted

▸ **subscribeEventPropertiesDeleted**(`cb`: Function): *void*

*Defined in [src/customer/rtm.ts:509](https://github.com/livechat/lc-sdk-js/blob/5281c0a/src/customer/rtm.ts#L509)*

Informs about those event properties that were deleted.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`cb` | Function | callback  |

**Returns:** *void*

___

###  subscribeEventPropertiesUpdated

▸ **subscribeEventPropertiesUpdated**(`cb`: Function): *void*

*Defined in [src/customer/rtm.ts:501](https://github.com/livechat/lc-sdk-js/blob/5281c0a/src/customer/rtm.ts#L501)*

Informs about those event properties that were updated.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`cb` | Function | callback  |

**Returns:** *void*

___

###  subscribeEventUpdated

▸ **subscribeEventUpdated**(`cb`: Function): *void*

*Defined in [src/customer/rtm.ts:452](https://github.com/livechat/lc-sdk-js/blob/5281c0a/src/customer/rtm.ts#L452)*

Informs that an event was updated.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`cb` | Function | callback  |

**Returns:** *void*

___

###  subscribeEventsMarkedAsSeen

▸ **subscribeEventsMarkedAsSeen**(`cb`: Function): *void*

*Defined in [src/customer/rtm.ts:558](https://github.com/livechat/lc-sdk-js/blob/5281c0a/src/customer/rtm.ts#L558)*

Informs that a user has seen events up to a specific time.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`cb` | Function | callback  |

**Returns:** *void*

___

###  subscribeGreetingAccepted

▸ **subscribeGreetingAccepted**(`cb`: Function): *void*

*Defined in [src/customer/rtm.ts:582](https://github.com/livechat/lc-sdk-js/blob/5281c0a/src/customer/rtm.ts#L582)*

Informs about a greeting accepted by the Customer.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`cb` | Function | callback  |

**Returns:** *void*

___

###  subscribeGreetingCancelled

▸ **subscribeGreetingCancelled**(`cb`: Function): *void*

*Defined in [src/customer/rtm.ts:591](https://github.com/livechat/lc-sdk-js/blob/5281c0a/src/customer/rtm.ts#L591)*

Informs about a greeting rejected by the Customer.
Also, the push is sent when a new greeting automatically cancels the currently displayed one.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`cb` | Function | callback  |

**Returns:** *void*

___

###  subscribeIncomingChat

▸ **subscribeIncomingChat**(`cb`: Function): *void*

*Defined in [src/customer/rtm.ts:402](https://github.com/livechat/lc-sdk-js/blob/5281c0a/src/customer/rtm.ts#L402)*

Informs about a chat coming with a new thread. The push payload contains the whole chat data structure.
If the chat was started with some initial events, the thread object contains them.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`cb` | Function | callback  |

**Returns:** *void*

___

###  subscribeIncomingEvent

▸ **subscribeIncomingEvent**(`cb`: Function): *void*

*Defined in [src/customer/rtm.ts:444](https://github.com/livechat/lc-sdk-js/blob/5281c0a/src/customer/rtm.ts#L444)*

Informs about an incoming event sent to a chat.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`cb` | Function | callback  |

**Returns:** *void*

___

###  subscribeIncomingGreeting

▸ **subscribeIncomingGreeting**(`cb`: Function): *void*

*Defined in [src/customer/rtm.ts:574](https://github.com/livechat/lc-sdk-js/blob/5281c0a/src/customer/rtm.ts#L574)*

Informs about an incoming greeting.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`cb` | Function | callback  |

**Returns:** *void*

___

###  subscribeIncomingMulticast

▸ **subscribeIncomingMulticast**(`cb`: Function): *void*

*Defined in [src/customer/rtm.ts:566](https://github.com/livechat/lc-sdk-js/blob/5281c0a/src/customer/rtm.ts#L566)*

Informs about messages sent via the multicast method or by the system.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`cb` | Function | callback  |

**Returns:** *void*

___

###  subscribeIncomingRichMessagePostback

▸ **subscribeIncomingRichMessagePostback**(`cb`: Function): *void*

*Defined in [src/customer/rtm.ts:461](https://github.com/livechat/lc-sdk-js/blob/5281c0a/src/customer/rtm.ts#L461)*

Informs about an incoming rich message postback. The push payload contains the info on the postback itself,
as well as the chat it was sent in.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`cb` | Function | callback  |

**Returns:** *void*

___

###  subscribeIncomingTypingIndicator

▸ **subscribeIncomingTypingIndicator**(`cb`: Function): *void*

*Defined in [src/customer/rtm.ts:550](https://github.com/livechat/lc-sdk-js/blob/5281c0a/src/customer/rtm.ts#L550)*

Informs that one of the chat users is currently typing a message. The message hasn't been sent yet.
The push payload contains the typing indicator object.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`cb` | Function | callback  |

**Returns:** *void*

___

###  subscribePush

▸ **subscribePush**(`push`: string, `callback`: Function): *void*

*Inherited from [RTMAPI](_src_internal_index_.rtmapi.md).[subscribePush](_src_internal_index_.rtmapi.md#subscribepush)*

*Defined in [src/internal/index.ts:146](https://github.com/livechat/lc-sdk-js/blob/5281c0a/src/internal/index.ts#L146)*

**Parameters:**

Name | Type |
------ | ------ |
`push` | string |
`callback` | Function |

**Returns:** *void*

___

###  subscribeQueuePostitionUpdated

▸ **subscribeQueuePostitionUpdated**(`cb`: Function): *void*

*Defined in [src/customer/rtm.ts:599](https://github.com/livechat/lc-sdk-js/blob/5281c0a/src/customer/rtm.ts#L599)*

Informs about an updated position in the queue and about the wait time.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`cb` | Function | callback  |

**Returns:** *void*

___

###  subscribeThreadPropertiesDeleted

▸ **subscribeThreadPropertiesDeleted**(`cb`: Function): *void*

*Defined in [src/customer/rtm.ts:493](https://github.com/livechat/lc-sdk-js/blob/5281c0a/src/customer/rtm.ts#L493)*

Informs about those thread properties that were deleted.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`cb` | Function | callback  |

**Returns:** *void*

___

###  subscribeThreadPropertiesUpdated

▸ **subscribeThreadPropertiesUpdated**(`cb`: Function): *void*

*Defined in [src/customer/rtm.ts:485](https://github.com/livechat/lc-sdk-js/blob/5281c0a/src/customer/rtm.ts#L485)*

Informs about those thread properties that were updated.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`cb` | Function | callback  |

**Returns:** *void*

___

###  subscribeUserAddedToChat

▸ **subscribeUserAddedToChat**(`cb`: Function): *void*

*Defined in [src/customer/rtm.ts:428](https://github.com/livechat/lc-sdk-js/blob/5281c0a/src/customer/rtm.ts#L428)*

Informs that a user (Customer or Agent) was added to a chat.
This push can be emitted with user.present set to false when a user writes to a chat without joining it
You can achieve that via the Send Event method.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`cb` | Function | callback  |

**Returns:** *void*

___

###  subscribeUserRemovedFromChat

▸ **subscribeUserRemovedFromChat**(`cb`: Function): *void*

*Defined in [src/customer/rtm.ts:436](https://github.com/livechat/lc-sdk-js/blob/5281c0a/src/customer/rtm.ts#L436)*

Informs that a user (Customer or Agent) was removed from a chat.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`cb` | Function | callback  |

**Returns:** *void*

___

###  unsubscribePush

▸ **unsubscribePush**(`push`: string): *void*

*Inherited from [RTMAPI](_src_internal_index_.rtmapi.md).[unsubscribePush](_src_internal_index_.rtmapi.md#unsubscribepush)*

*Defined in [src/internal/index.ts:153](https://github.com/livechat/lc-sdk-js/blob/5281c0a/src/internal/index.ts#L153)*

**Parameters:**

Name | Type |
------ | ------ |
`push` | string |

**Returns:** *void*

___

###  updateChatProperties

▸ **updateChatProperties**(`chat_id`: string, `properties`: [Properties](../interfaces/_src_objects_index_.properties.md)): *Promise‹[EmptyResponse](../interfaces/_src_customer_structures_.emptyresponse.md)›*

*Defined in [src/customer/rtm.ts:146](https://github.com/livechat/lc-sdk-js/blob/5281c0a/src/customer/rtm.ts#L146)*

Updates chat properties

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`chat_id` | string | chat to update properties |
`properties` | [Properties](../interfaces/_src_objects_index_.properties.md) | properties to update  |

**Returns:** *Promise‹[EmptyResponse](../interfaces/_src_customer_structures_.emptyresponse.md)›*

___

###  updateCustomer

▸ **updateCustomer**(`opts`: [CustomerParameters](../interfaces/_src_customer_structures_.customerparameters.md)): *Promise‹[EmptyResponse](../interfaces/_src_customer_structures_.emptyresponse.md)›*

*Defined in [src/customer/rtm.ts:286](https://github.com/livechat/lc-sdk-js/blob/5281c0a/src/customer/rtm.ts#L286)*

Updates Customer's properties.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`opts` | [CustomerParameters](../interfaces/_src_customer_structures_.customerparameters.md) | properties to update  |

**Returns:** *Promise‹[EmptyResponse](../interfaces/_src_customer_structures_.emptyresponse.md)›*

___

###  updateEventProperties

▸ **updateEventProperties**(`chat_id`: string, `thread_id`: string, `event_id`: string, `properties`: [Properties](../interfaces/_src_objects_index_.properties.md)): *Promise‹[EmptyResponse](../interfaces/_src_customer_structures_.emptyresponse.md)›*

*Defined in [src/customer/rtm.ts:208](https://github.com/livechat/lc-sdk-js/blob/5281c0a/src/customer/rtm.ts#L208)*

Updates event properties

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`chat_id` | string | chat ID of event to update |
`thread_id` | string | thread ID of event to update |
`event_id` | string | event to update properties |
`properties` | [Properties](../interfaces/_src_objects_index_.properties.md) | properties to update  |

**Returns:** *Promise‹[EmptyResponse](../interfaces/_src_customer_structures_.emptyresponse.md)›*

___

###  updateThreadProperties

▸ **updateThreadProperties**(`chat_id`: string, `thread_id`: string, `properties`: [Properties](../interfaces/_src_objects_index_.properties.md)): *Promise‹[EmptyResponse](../interfaces/_src_customer_structures_.emptyresponse.md)›*

*Defined in [src/customer/rtm.ts:171](https://github.com/livechat/lc-sdk-js/blob/5281c0a/src/customer/rtm.ts#L171)*

Updates thread properties

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`chat_id` | string | chat ID of thread to update |
`thread_id` | string | thread to update properties |
`properties` | [Properties](../interfaces/_src_objects_index_.properties.md) | properties to update  |

**Returns:** *Promise‹[EmptyResponse](../interfaces/_src_customer_structures_.emptyresponse.md)›*
