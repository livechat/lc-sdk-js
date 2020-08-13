[lc-sdk-js](../README.md) › [Globals](../globals.md) › ["src/agent/rtm"](../modules/_src_agent_rtm_.md) › [RTM](_src_agent_rtm_.rtm.md)

# Class: RTM

## Hierarchy

* [RTMAPI](_src_internal_index_.rtmapi.md)

  ↳ **RTM**

## Index

### Constructors

* [constructor](_src_agent_rtm_.rtm.md#constructor)

### Properties

* [APIURL](_src_agent_rtm_.rtm.md#apiurl)
* [heartbeatInterval](_src_agent_rtm_.rtm.md#optional-heartbeatinterval)
* [license](_src_agent_rtm_.rtm.md#optional-license)
* [requestsQueue](_src_agent_rtm_.rtm.md#requestsqueue)
* [socket](_src_agent_rtm_.rtm.md#optional-socket)
* [subscribedPushes](_src_agent_rtm_.rtm.md#subscribedpushes)
* [type](_src_agent_rtm_.rtm.md#type)
* [version](_src_agent_rtm_.rtm.md#version)

### Methods

* [activateChat](_src_agent_rtm_.rtm.md#activatechat)
* [addUserToChat](_src_agent_rtm_.rtm.md#addusertochat)
* [banCustomer](_src_agent_rtm_.rtm.md#bancustomer)
* [changePushNotifications](_src_agent_rtm_.rtm.md#changepushnotifications)
* [connect](_src_agent_rtm_.rtm.md#connect)
* [createCustomer](_src_agent_rtm_.rtm.md#createcustomer)
* [deactivateChat](_src_agent_rtm_.rtm.md#deactivatechat)
* [deleteChatProperties](_src_agent_rtm_.rtm.md#deletechatproperties)
* [deleteEventProperties](_src_agent_rtm_.rtm.md#deleteeventproperties)
* [deleteThreadProperties](_src_agent_rtm_.rtm.md#deletethreadproperties)
* [followChat](_src_agent_rtm_.rtm.md#followchat)
* [getChat](_src_agent_rtm_.rtm.md#getchat)
* [getCustomer](_src_agent_rtm_.rtm.md#getcustomer)
* [grantChatAccess](_src_agent_rtm_.rtm.md#grantchataccess)
* [listAgentsForTransfer](_src_agent_rtm_.rtm.md#listagentsfortransfer)
* [listArchives](_src_agent_rtm_.rtm.md#listarchives)
* [listChats](_src_agent_rtm_.rtm.md#listchats)
* [listCustomers](_src_agent_rtm_.rtm.md#listcustomers)
* [listThreads](_src_agent_rtm_.rtm.md#listthreads)
* [login](_src_agent_rtm_.rtm.md#login)
* [logout](_src_agent_rtm_.rtm.md#logout)
* [markEventsAsSeen](_src_agent_rtm_.rtm.md#markeventsasseen)
* [multicast](_src_agent_rtm_.rtm.md#multicast)
* [removeUserFromChat](_src_agent_rtm_.rtm.md#removeuserfromchat)
* [revokeChatAccess](_src_agent_rtm_.rtm.md#revokechataccess)
* [send](_src_agent_rtm_.rtm.md#send)
* [sendEvent](_src_agent_rtm_.rtm.md#sendevent)
* [sendRichMessagePostback](_src_agent_rtm_.rtm.md#sendrichmessagepostback)
* [sendTypingIndicator](_src_agent_rtm_.rtm.md#sendtypingindicator)
* [setAwayStatus](_src_agent_rtm_.rtm.md#setawaystatus)
* [setChatAccess](_src_agent_rtm_.rtm.md#setchataccess)
* [setRoutingStatus](_src_agent_rtm_.rtm.md#setroutingstatus)
* [startChat](_src_agent_rtm_.rtm.md#startchat)
* [subscribeAgentDisconnected](_src_agent_rtm_.rtm.md#subscribeagentdisconnected)
* [subscribeChatAccessGranted](_src_agent_rtm_.rtm.md#subscribechataccessgranted)
* [subscribeChatAccessRevoked](_src_agent_rtm_.rtm.md#subscribechataccessrevoked)
* [subscribeChatDeactivated](_src_agent_rtm_.rtm.md#subscribechatdeactivated)
* [subscribeChatPropertiesDeleted](_src_agent_rtm_.rtm.md#subscribechatpropertiesdeleted)
* [subscribeChatPropertiesUpdated](_src_agent_rtm_.rtm.md#subscribechatpropertiesupdated)
* [subscribeChatTransferred](_src_agent_rtm_.rtm.md#subscribechattransferred)
* [subscribeChatUnfollowed](_src_agent_rtm_.rtm.md#subscribechatunfollowed)
* [subscribeCustomerBanned](_src_agent_rtm_.rtm.md#subscribecustomerbanned)
* [subscribeCustomerCreated](_src_agent_rtm_.rtm.md#subscribecustomercreated)
* [subscribeCustomerPageUpdated](_src_agent_rtm_.rtm.md#subscribecustomerpageupdated)
* [subscribeCustomerUpdated](_src_agent_rtm_.rtm.md#subscribecustomerupdated)
* [subscribeCustomerVisitEnded](_src_agent_rtm_.rtm.md#subscribecustomervisitended)
* [subscribeCustomerVisitStarted](_src_agent_rtm_.rtm.md#subscribecustomervisitstarted)
* [subscribeEventPropertiesDeleted](_src_agent_rtm_.rtm.md#subscribeeventpropertiesdeleted)
* [subscribeEventPropertiesUpdated](_src_agent_rtm_.rtm.md#subscribeeventpropertiesupdated)
* [subscribeEventUpdated](_src_agent_rtm_.rtm.md#subscribeeventupdated)
* [subscribeEventsMarkedAsSeen](_src_agent_rtm_.rtm.md#subscribeeventsmarkedasseen)
* [subscribeIncomingChat](_src_agent_rtm_.rtm.md#subscribeincomingchat)
* [subscribeIncomingEvent](_src_agent_rtm_.rtm.md#subscribeincomingevent)
* [subscribeIncomingMulticast](_src_agent_rtm_.rtm.md#subscribeincomingmulticast)
* [subscribeIncomingRichMessagePostback](_src_agent_rtm_.rtm.md#subscribeincomingrichmessagepostback)
* [subscribeIncomingSneakPeek](_src_agent_rtm_.rtm.md#subscribeincomingsneakpeek)
* [subscribeIncomingTypingIndicator](_src_agent_rtm_.rtm.md#subscribeincomingtypingindicator)
* [subscribePush](_src_agent_rtm_.rtm.md#subscribepush)
* [subscribeQueuePostitionsUpdated](_src_agent_rtm_.rtm.md#subscribequeuepostitionsupdated)
* [subscribeRoutingStatusSet](_src_agent_rtm_.rtm.md#subscriberoutingstatusset)
* [subscribeThreadPropertiesDeleted](_src_agent_rtm_.rtm.md#subscribethreadpropertiesdeleted)
* [subscribeThreadPropertiesUpdated](_src_agent_rtm_.rtm.md#subscribethreadpropertiesupdated)
* [subscribeThreadTagged](_src_agent_rtm_.rtm.md#subscribethreadtagged)
* [subscribeThreadUntagged](_src_agent_rtm_.rtm.md#subscribethreaduntagged)
* [subscribeUserAddedToChat](_src_agent_rtm_.rtm.md#subscribeuseraddedtochat)
* [subscribeUserRemovedFromChat](_src_agent_rtm_.rtm.md#subscribeuserremovedfromchat)
* [tagThread](_src_agent_rtm_.rtm.md#tagthread)
* [transferChat](_src_agent_rtm_.rtm.md#transferchat)
* [unfollowChat](_src_agent_rtm_.rtm.md#unfollowchat)
* [unsubscribePush](_src_agent_rtm_.rtm.md#unsubscribepush)
* [untagThread](_src_agent_rtm_.rtm.md#untagthread)
* [updateChatProperties](_src_agent_rtm_.rtm.md#updatechatproperties)
* [updateCustomer](_src_agent_rtm_.rtm.md#updatecustomer)
* [updateEventProperties](_src_agent_rtm_.rtm.md#updateeventproperties)
* [updateThreadProperties](_src_agent_rtm_.rtm.md#updatethreadproperties)

## Constructors

###  constructor

\+ **new RTM**(): *[RTM](_src_agent_rtm_.rtm.md)*

*Overrides [RTMAPI](_src_internal_index_.rtmapi.md).[constructor](_src_internal_index_.rtmapi.md#constructor)*

*Defined in [src/agent/rtm.ts:31](https://github.com/livechat/lc-sdk-js/blob/5281c0a/src/agent/rtm.ts#L31)*

**Returns:** *[RTM](_src_agent_rtm_.rtm.md)*

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

###  activateChat

▸ **activateChat**(`param`: string | [ActivateChatParameters](../interfaces/_src_agent_structures_.activatechatparameters.md)): *Promise‹[ActivateChatResponse](../interfaces/_src_agent_structures_.activatechatresponse.md)›*

*Defined in [src/agent/rtm.ts:125](https://github.com/livechat/lc-sdk-js/blob/5281c0a/src/agent/rtm.ts#L125)*

Restarts an archived chat

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`param` | string &#124; [ActivateChatParameters](../interfaces/_src_agent_structures_.activatechatparameters.md) | either string ID of a chat to activate or full initial chat object  |

**Returns:** *Promise‹[ActivateChatResponse](../interfaces/_src_agent_structures_.activatechatresponse.md)›*

___

###  addUserToChat

▸ **addUserToChat**(`chat_id`: string, `user_id`: string, `user_type`: string, `require_active_thread?`: undefined | false | true): *Promise‹[EmptyResponse](../interfaces/_src_agent_structures_.emptyresponse.md)›*

*Defined in [src/agent/rtm.ts:214](https://github.com/livechat/lc-sdk-js/blob/5281c0a/src/agent/rtm.ts#L214)*

Adds a user to the chat. You can't add more than one customer user type to the chat.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`chat_id` | string | chat to add user to |
`user_id` | string | user to add |
`user_type` | string | customer or agent |
`require_active_thread?` | undefined &#124; false &#124; true | if true, adds user only if chat has an active thread  |

**Returns:** *Promise‹[EmptyResponse](../interfaces/_src_agent_structures_.emptyresponse.md)›*

___

###  banCustomer

▸ **banCustomer**(`customer_id`: string, `days`: number): *Promise‹[EmptyResponse](../interfaces/_src_agent_structures_.emptyresponse.md)›*

*Defined in [src/agent/rtm.ts:448](https://github.com/livechat/lc-sdk-js/blob/5281c0a/src/agent/rtm.ts#L448)*

Bans the customer for a specific period of time. It immediately disconnects all active sessions of this customer
and does not accept new ones during the ban lifespan.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`customer_id` | string | = ID of customer to ban |
`days` | number | ban duration in days  |

**Returns:** *Promise‹[EmptyResponse](../interfaces/_src_agent_structures_.emptyresponse.md)›*

___

###  changePushNotifications

▸ **changePushNotifications**(`change`: [ChangePushNotificationsRequest](../interfaces/_src_agent_structures_.changepushnotificationsrequest.md)): *Promise‹[EmptyResponse](../interfaces/_src_agent_structures_.emptyresponse.md)›*

*Defined in [src/agent/rtm.ts:49](https://github.com/livechat/lc-sdk-js/blob/5281c0a/src/agent/rtm.ts#L49)*

Change the firebase push notifications properties.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`change` | [ChangePushNotificationsRequest](../interfaces/_src_agent_structures_.changepushnotificationsrequest.md) | properties to change  |

**Returns:** *Promise‹[EmptyResponse](../interfaces/_src_agent_structures_.emptyresponse.md)›*

___

###  connect

▸ **connect**(): *Promise‹any›*

*Inherited from [RTMAPI](_src_internal_index_.rtmapi.md).[connect](_src_internal_index_.rtmapi.md#connect)*

*Defined in [src/internal/index.ts:82](https://github.com/livechat/lc-sdk-js/blob/5281c0a/src/internal/index.ts#L82)*

**Returns:** *Promise‹any›*

___

###  createCustomer

▸ **createCustomer**(`opts?`: [CustomerParameters](../interfaces/_src_agent_structures_.customerparameters.md)): *Promise‹[CreateCustomerResponse](../interfaces/_src_agent_structures_.createcustomerresponse.md)›*

*Defined in [src/agent/rtm.ts:424](https://github.com/livechat/lc-sdk-js/blob/5281c0a/src/agent/rtm.ts#L424)*

Creates a new Customer user type.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`opts?` | [CustomerParameters](../interfaces/_src_agent_structures_.customerparameters.md) | customer data  |

**Returns:** *Promise‹[CreateCustomerResponse](../interfaces/_src_agent_structures_.createcustomerresponse.md)›*

___

###  deactivateChat

▸ **deactivateChat**(`chat_id`: string): *Promise‹[EmptyResponse](../interfaces/_src_agent_structures_.emptyresponse.md)›*

*Defined in [src/agent/rtm.ts:137](https://github.com/livechat/lc-sdk-js/blob/5281c0a/src/agent/rtm.ts#L137)*

Deactivates a chat by closing the currently open thread. Sending messages to this thread will no longer be possible.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`chat_id` | string | chat ID to deactivate  |

**Returns:** *Promise‹[EmptyResponse](../interfaces/_src_agent_structures_.emptyresponse.md)›*

___

###  deleteChatProperties

▸ **deleteChatProperties**(`chat_id`: string, `properties`: [Properties](../interfaces/_src_objects_index_.properties.md)): *Promise‹[EmptyResponse](../interfaces/_src_agent_structures_.emptyresponse.md)›*

*Defined in [src/agent/rtm.ts:289](https://github.com/livechat/lc-sdk-js/blob/5281c0a/src/agent/rtm.ts#L289)*

Deletes chat properties

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`chat_id` | string | chat to delete properties |
`properties` | [Properties](../interfaces/_src_objects_index_.properties.md) | properties to delete  |

**Returns:** *Promise‹[EmptyResponse](../interfaces/_src_agent_structures_.emptyresponse.md)›*

___

###  deleteEventProperties

▸ **deleteEventProperties**(`chat_id`: string, `thread_id`: string, `event_id`: string, `properties`: [Properties](../interfaces/_src_objects_index_.properties.md)): *Promise‹[EmptyResponse](../interfaces/_src_agent_structures_.emptyresponse.md)›*

*Defined in [src/agent/rtm.ts:360](https://github.com/livechat/lc-sdk-js/blob/5281c0a/src/agent/rtm.ts#L360)*

Deletes event properties

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`chat_id` | string | chat ID of event to delete |
`thread_id` | string | thread ID of event to delete |
`event_id` | string | event to delete properties |
`properties` | [Properties](../interfaces/_src_objects_index_.properties.md) | properties to delete  |

**Returns:** *Promise‹[EmptyResponse](../interfaces/_src_agent_structures_.emptyresponse.md)›*

___

###  deleteThreadProperties

▸ **deleteThreadProperties**(`chat_id`: string, `thread_id`: string, `properties`: [Properties](../interfaces/_src_objects_index_.properties.md)): *Promise‹[EmptyResponse](../interfaces/_src_agent_structures_.emptyresponse.md)›*

*Defined in [src/agent/rtm.ts:320](https://github.com/livechat/lc-sdk-js/blob/5281c0a/src/agent/rtm.ts#L320)*

Deletes thread properties

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`chat_id` | string | chat ID of thread to delete |
`thread_id` | string | thread to delete properties |
`properties` | [Properties](../interfaces/_src_objects_index_.properties.md) | properties to delete  |

**Returns:** *Promise‹[EmptyResponse](../interfaces/_src_agent_structures_.emptyresponse.md)›*

___

###  followChat

▸ **followChat**(`chat_id`: string): *Promise‹[EmptyResponse](../interfaces/_src_agent_structures_.emptyresponse.md)›*

*Defined in [src/agent/rtm.ts:146](https://github.com/livechat/lc-sdk-js/blob/5281c0a/src/agent/rtm.ts#L146)*

Marks a chat as followed. All changes to the chat will be sent to the requester until the chat is reactivated or unfollowed.
Chat members don't need to follow their chats. They receive all chat pushes regardless of their follower status.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`chat_id` | string | chat ID to follow  |

**Returns:** *Promise‹[EmptyResponse](../interfaces/_src_agent_structures_.emptyresponse.md)›*

___

###  getChat

▸ **getChat**(`chat_id`: string, `thread_id?`: undefined | string): *Promise‹[GetChatResponse](../interfaces/_src_agent_structures_.getchatresponse.md)›*

*Defined in [src/agent/rtm.ts:97](https://github.com/livechat/lc-sdk-js/blob/5281c0a/src/agent/rtm.ts#L97)*

It returns a thread that the current Agent has access to in a given chat.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`chat_id` | string | ID of a chat to get |
`thread_id?` | undefined &#124; string | thread ID to get (if not provided, last thread is returned)  |

**Returns:** *Promise‹[GetChatResponse](../interfaces/_src_agent_structures_.getchatresponse.md)›*

___

###  getCustomer

▸ **getCustomer**(`customer_id`: string): *Promise‹[GetCustomerResponse](../interfaces/_src_agent_structures_.getcustomerresponse.md)›*

*Defined in [src/agent/rtm.ts:406](https://github.com/livechat/lc-sdk-js/blob/5281c0a/src/agent/rtm.ts#L406)*

Returns the info about the Customer with a given customer_id.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`customer_id` | string | customer ID to teg  |

**Returns:** *Promise‹[GetCustomerResponse](../interfaces/_src_agent_structures_.getcustomerresponse.md)›*

___

###  grantChatAccess

▸ **grantChatAccess**(`chat_id`: string, `access`: [ChatAccess](../interfaces/_src_objects_index_.chataccess.md)): *Promise‹[EmptyResponse](../interfaces/_src_agent_structures_.emptyresponse.md)›*

*Defined in [src/agent/rtm.ts:164](https://github.com/livechat/lc-sdk-js/blob/5281c0a/src/agent/rtm.ts#L164)*

Grants access to a new chat without overwriting the existing ones.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`chat_id` | string | chat ID to grant access to |
`access` | [ChatAccess](../interfaces/_src_objects_index_.chataccess.md) | access to grant  |

**Returns:** *Promise‹[EmptyResponse](../interfaces/_src_agent_structures_.emptyresponse.md)›*

___

###  listAgentsForTransfer

▸ **listAgentsForTransfer**(`chat_id`: string): *Promise‹[AgentForTransfer](../interfaces/_src_agent_structures_.agentfortransfer.md)[]›*

*Defined in [src/agent/rtm.ts:516](https://github.com/livechat/lc-sdk-js/blob/5281c0a/src/agent/rtm.ts#L516)*

It returns the Agents you can transfer a chat to. Agents are sorted ascendingly by the total number of active chats they have. Note that:
- The method only returns Agents with statuses online and not accepting chats. Offline Agents aren't returned.
- Only chats with Customers are taken into account in total_active_chats.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`chat_id` | string | chat ID you want to transfer  |

**Returns:** *Promise‹[AgentForTransfer](../interfaces/_src_agent_structures_.agentfortransfer.md)[]›*

___

###  listArchives

▸ **listArchives**(`opts?`: [ListArchivesParameters](../interfaces/_src_agent_structures_.listarchivesparameters.md)): *Promise‹[ListArchivesResponse](../interfaces/_src_agent_structures_.listarchivesresponse.md)›*

*Defined in [src/agent/rtm.ts:107](https://github.com/livechat/lc-sdk-js/blob/5281c0a/src/agent/rtm.ts#L107)*

It returns a list of the chats an Agent has access to. Together with a chat, the events of one thread from this chat are returned.

The list classification is based on threads; 1 chat per 1 thread. Thus, the same chat object may appear on the list several times,
but each time with a different thread. The returned chat is a complete object, not only a chat summary.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`opts?` | [ListArchivesParameters](../interfaces/_src_agent_structures_.listarchivesparameters.md) | options like filters or pagination  |

**Returns:** *Promise‹[ListArchivesResponse](../interfaces/_src_agent_structures_.listarchivesresponse.md)›*

___

###  listChats

▸ **listChats**(`opts?`: [ListChatParameters](../interfaces/_src_agent_structures_.listchatparameters.md)): *Promise‹[ListChatsResponse](../interfaces/_src_agent_structures_.listchatsresponse.md)›*

*Defined in [src/agent/rtm.ts:76](https://github.com/livechat/lc-sdk-js/blob/5281c0a/src/agent/rtm.ts#L76)*

It returns summaries of the chats an Agent has access to.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`opts?` | [ListChatParameters](../interfaces/_src_agent_structures_.listchatparameters.md) | set of filters and pagination to limit returned entries  |

**Returns:** *Promise‹[ListChatsResponse](../interfaces/_src_agent_structures_.listchatsresponse.md)›*

___

###  listCustomers

▸ **listCustomers**(`opts?`: [ListCustomersParameters](../interfaces/_src_agent_structures_.listcustomersparameters.md)): *Promise‹[ListCustomersResponse](../interfaces/_src_agent_structures_.listcustomersresponse.md)›*

*Defined in [src/agent/rtm.ts:414](https://github.com/livechat/lc-sdk-js/blob/5281c0a/src/agent/rtm.ts#L414)*

It returns the list of Customers.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`opts?` | [ListCustomersParameters](../interfaces/_src_agent_structures_.listcustomersparameters.md) | options like filters or pagination  |

**Returns:** *Promise‹[ListCustomersResponse](../interfaces/_src_agent_structures_.listcustomersresponse.md)›*

___

###  listThreads

▸ **listThreads**(`chat_id`: string, `opts?`: [ListThreadsParameters](../interfaces/_src_agent_structures_.listthreadsparameters.md)): *Promise‹[ListThreadsResponse](../interfaces/_src_agent_structures_.listthreadsresponse.md)›*

*Defined in [src/agent/rtm.ts:85](https://github.com/livechat/lc-sdk-js/blob/5281c0a/src/agent/rtm.ts#L85)*

Returns threads that the current Agent has access to in a given chat.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`chat_id` | string | chat ID to get threads from |
`opts?` | [ListThreadsParameters](../interfaces/_src_agent_structures_.listthreadsparameters.md) | additional options like pagination and sorting  |

**Returns:** *Promise‹[ListThreadsResponse](../interfaces/_src_agent_structures_.listthreadsresponse.md)›*

___

###  login

▸ **login**(`loginData`: string | [LoginRequest](../interfaces/_src_agent_structures_.loginrequest.md)): *Promise‹[LoginResponse](../interfaces/_src_agent_structures_.loginresponse.md)›*

*Defined in [src/agent/rtm.ts:39](https://github.com/livechat/lc-sdk-js/blob/5281c0a/src/agent/rtm.ts#L39)*

It returns the initial state of the current Agent.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`loginData` | string &#124; [LoginRequest](../interfaces/_src_agent_structures_.loginrequest.md) | OAtuh token from Agent's account or full object with login options  |

**Returns:** *Promise‹[LoginResponse](../interfaces/_src_agent_structures_.loginresponse.md)›*

___

###  logout

▸ **logout**(): *Promise‹[EmptyResponse](../interfaces/_src_agent_structures_.emptyresponse.md)›*

*Defined in [src/agent/rtm.ts:68](https://github.com/livechat/lc-sdk-js/blob/5281c0a/src/agent/rtm.ts#L68)*

Logs the Agent out.

**Returns:** *Promise‹[EmptyResponse](../interfaces/_src_agent_structures_.emptyresponse.md)›*

___

###  markEventsAsSeen

▸ **markEventsAsSeen**(`chat_id`: string, `seen_up_to`: string): *Promise‹[EmptyResponse](../interfaces/_src_agent_structures_.emptyresponse.md)›*

*Defined in [src/agent/rtm.ts:469](https://github.com/livechat/lc-sdk-js/blob/5281c0a/src/agent/rtm.ts#L469)*

Marks events as seen by Agent.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`chat_id` | string | chat to mark events |
`seen_up_to` | string | date up to which mark events  |

**Returns:** *Promise‹[EmptyResponse](../interfaces/_src_agent_structures_.emptyresponse.md)›*

___

###  multicast

▸ **multicast**(`recipients`: [MulticastRecipients](../interfaces/_src_agent_structures_.multicastrecipients.md), `content`: object, `type?`: undefined | string): *Promise‹[EmptyResponse](../interfaces/_src_agent_structures_.emptyresponse.md)›*

*Defined in [src/agent/rtm.ts:502](https://github.com/livechat/lc-sdk-js/blob/5281c0a/src/agent/rtm.ts#L502)*

This method serves for the chat-unrelated communication. Messages sent using multicast are not being saved.
For example, it could be used in an app that sends notifications to Agents or Customers,
when a certain condition is met (e.g. an important Customer started the chat).

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`recipients` | [MulticastRecipients](../interfaces/_src_agent_structures_.multicastrecipients.md) | who should receive multicast |
`content` | object | = JSON content to send |
`type?` | undefined &#124; string | message type  |

**Returns:** *Promise‹[EmptyResponse](../interfaces/_src_agent_structures_.emptyresponse.md)›*

___

###  removeUserFromChat

▸ **removeUserFromChat**(`chat_id`: string, `user_id`: string): *Promise‹[EmptyResponse](../interfaces/_src_agent_structures_.emptyresponse.md)›*

*Defined in [src/agent/rtm.ts:232](https://github.com/livechat/lc-sdk-js/blob/5281c0a/src/agent/rtm.ts#L232)*

Removes a user from chat. Removing customer user type is not allowed. It's always possible to remove the requester from the chat.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`chat_id` | string | chat to remove user from |
`user_id` | string | user to remove  |

**Returns:** *Promise‹[EmptyResponse](../interfaces/_src_agent_structures_.emptyresponse.md)›*

___

###  revokeChatAccess

▸ **revokeChatAccess**(`chat_id`: string, `access`: [ChatAccess](../interfaces/_src_objects_index_.chataccess.md)): *Promise‹[EmptyResponse](../interfaces/_src_agent_structures_.emptyresponse.md)›*

*Defined in [src/agent/rtm.ts:176](https://github.com/livechat/lc-sdk-js/blob/5281c0a/src/agent/rtm.ts#L176)*

Revokes access to chat

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`chat_id` | string | chat ID to grant access to |
`access` | [ChatAccess](../interfaces/_src_objects_index_.chataccess.md) | access to revoke  |

**Returns:** *Promise‹[EmptyResponse](../interfaces/_src_agent_structures_.emptyresponse.md)›*

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

▸ **sendEvent**(`chat_id`: string, `event`: [Event](../modules/_src_objects_index_.md#event), `attach_to_last_thread?`: undefined | false | true): *Promise‹[SendEventResponse](../interfaces/_src_agent_structures_.sendeventresponse.md)›*

*Defined in [src/agent/rtm.ts:250](https://github.com/livechat/lc-sdk-js/blob/5281c0a/src/agent/rtm.ts#L250)*

Sends an Event object. Use this method to send a message by specifing the Message event type in the request.
It's possible to write to a chat without joining it. The user sending an event will be automatically added to the chat
with the present parameter set to false.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`chat_id` | string | chat to send event to |
`event` | [Event](../modules/_src_objects_index_.md#event) | Event object |
`attach_to_last_thread?` | undefined &#124; false &#124; true | if true, adds event to last inactive thread  |

**Returns:** *Promise‹[SendEventResponse](../interfaces/_src_agent_structures_.sendeventresponse.md)›*

___

###  sendRichMessagePostback

▸ **sendRichMessagePostback**(`opts`: [SendRichMessagePostbackParameters](../interfaces/_src_agent_structures_.sendrichmessagepostbackparameters.md)): *Promise‹[EmptyResponse](../interfaces/_src_agent_structures_.emptyresponse.md)›*

*Defined in [src/agent/rtm.ts:266](https://github.com/livechat/lc-sdk-js/blob/5281c0a/src/agent/rtm.ts#L266)*

Sends postback for rich message

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`opts` | [SendRichMessagePostbackParameters](../interfaces/_src_agent_structures_.sendrichmessagepostbackparameters.md) | postback data  |

**Returns:** *Promise‹[EmptyResponse](../interfaces/_src_agent_structures_.emptyresponse.md)›*

___

###  sendTypingIndicator

▸ **sendTypingIndicator**(`chat_id`: string, `is_typing`: boolean, `recipients?`: undefined | string): *Promise‹[EmptyResponse](../interfaces/_src_agent_structures_.emptyresponse.md)›*

*Defined in [src/agent/rtm.ts:482](https://github.com/livechat/lc-sdk-js/blob/5281c0a/src/agent/rtm.ts#L482)*

Sends typing indicator

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`chat_id` | string | chat for typing indicator |
`is_typing` | boolean | status of typing |
`recipients?` | undefined &#124; string | possible values: all, agents  |

**Returns:** *Promise‹[EmptyResponse](../interfaces/_src_agent_structures_.emptyresponse.md)›*

___

###  setAwayStatus

▸ **setAwayStatus**(`away`: boolean): *Promise‹[EmptyResponse](../interfaces/_src_agent_structures_.emptyresponse.md)›*

*Defined in [src/agent/rtm.ts:61](https://github.com/livechat/lc-sdk-js/blob/5281c0a/src/agent/rtm.ts#L61)*

Sets an Agent's connection to the away state. You can use this method to manipulate the Agent's status.
The method works per connection - all connections an Agent has (desktop, mobile, etc) must be in the away state
for the Agent's status to be changed to not_accepting_chats.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`away` | boolean | away status  |

**Returns:** *Promise‹[EmptyResponse](../interfaces/_src_agent_structures_.emptyresponse.md)›*

___

###  setChatAccess

▸ **setChatAccess**(`chat_id`: string, `access`: [ChatAccess](../interfaces/_src_objects_index_.chataccess.md)): *Promise‹[EmptyResponse](../interfaces/_src_agent_structures_.emptyresponse.md)›*

*Defined in [src/agent/rtm.ts:188](https://github.com/livechat/lc-sdk-js/blob/5281c0a/src/agent/rtm.ts#L188)*

Grants access to a new chat overwriting the existing ones.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`chat_id` | string | chat ID to grant access to |
`access` | [ChatAccess](../interfaces/_src_objects_index_.chataccess.md) | access to set  |

**Returns:** *Promise‹[EmptyResponse](../interfaces/_src_agent_structures_.emptyresponse.md)›*

___

###  setRoutingStatus

▸ **setRoutingStatus**(`status`: [RoutingStatus](../enums/_src_objects_index_.routingstatus.md), `agent_id?`: undefined | string): *Promise‹[EmptyResponse](../interfaces/_src_agent_structures_.emptyresponse.md)›*

*Defined in [src/agent/rtm.ts:457](https://github.com/livechat/lc-sdk-js/blob/5281c0a/src/agent/rtm.ts#L457)*

Changes the status of an Agent or a Bot Agent.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`status` | [RoutingStatus](../enums/_src_objects_index_.routingstatus.md) | status to set |
`agent_id?` | undefined &#124; string | ID of agent to update status  |

**Returns:** *Promise‹[EmptyResponse](../interfaces/_src_agent_structures_.emptyresponse.md)›*

___

###  startChat

▸ **startChat**(`opts?`: [StartChatParameters](../interfaces/_src_agent_structures_.startchatparameters.md)): *Promise‹[StartChatResponse](../interfaces/_src_agent_structures_.startchatresponse.md)›*

*Defined in [src/agent/rtm.ts:117](https://github.com/livechat/lc-sdk-js/blob/5281c0a/src/agent/rtm.ts#L117)*

Starts a chat

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`opts?` | [StartChatParameters](../interfaces/_src_agent_structures_.startchatparameters.md) | options like initial chat data or continuous switch  |

**Returns:** *Promise‹[StartChatResponse](../interfaces/_src_agent_structures_.startchatresponse.md)›*

___

###  subscribeAgentDisconnected

▸ **subscribeAgentDisconnected**(`cb`: Function): *void*

*Defined in [src/agent/rtm.ts:728](https://github.com/livechat/lc-sdk-js/blob/5281c0a/src/agent/rtm.ts#L728)*

Informs that an Agent was disconnected. The payload contains the reason of Customer's disconnection.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`cb` | Function | callback  |

**Returns:** *void*

___

###  subscribeChatAccessGranted

▸ **subscribeChatAccessGranted**(`cb`: Function): *void*

*Defined in [src/agent/rtm.ts:541](https://github.com/livechat/lc-sdk-js/blob/5281c0a/src/agent/rtm.ts#L541)*

Informs that new, single access to a chat was granted. The existing access isn't overwritten.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`cb` | Function | callback  |

**Returns:** *void*

___

###  subscribeChatAccessRevoked

▸ **subscribeChatAccessRevoked**(`cb`: Function): *void*

*Defined in [src/agent/rtm.ts:549](https://github.com/livechat/lc-sdk-js/blob/5281c0a/src/agent/rtm.ts#L549)*

Informs that access to a certain chat was revoked.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`cb` | Function | callback  |

**Returns:** *void*

___

###  subscribeChatDeactivated

▸ **subscribeChatDeactivated**(`cb`: Function): *void*

*Defined in [src/agent/rtm.ts:533](https://github.com/livechat/lc-sdk-js/blob/5281c0a/src/agent/rtm.ts#L533)*

Informs that a chat was deactivated by closing the currently open thread.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`cb` | Function | callback  |

**Returns:** *void*

___

###  subscribeChatPropertiesDeleted

▸ **subscribeChatPropertiesDeleted**(`cb`: Function): *void*

*Defined in [src/agent/rtm.ts:616](https://github.com/livechat/lc-sdk-js/blob/5281c0a/src/agent/rtm.ts#L616)*

Informs about those chat properties that were deleted.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`cb` | Function | callback  |

**Returns:** *void*

___

###  subscribeChatPropertiesUpdated

▸ **subscribeChatPropertiesUpdated**(`cb`: Function): *void*

*Defined in [src/agent/rtm.ts:608](https://github.com/livechat/lc-sdk-js/blob/5281c0a/src/agent/rtm.ts#L608)*

Informs about those chat properties that were updated.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`cb` | Function | callback  |

**Returns:** *void*

___

###  subscribeChatTransferred

▸ **subscribeChatTransferred**(`cb`: Function): *void*

*Defined in [src/agent/rtm.ts:557](https://github.com/livechat/lc-sdk-js/blob/5281c0a/src/agent/rtm.ts#L557)*

Informs that a chat was transferred to a different group or to an Agent.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`cb` | Function | callback  |

**Returns:** *void*

___

###  subscribeChatUnfollowed

▸ **subscribeChatUnfollowed**(`cb`: Function): *void*

*Defined in [src/agent/rtm.ts:770](https://github.com/livechat/lc-sdk-js/blob/5281c0a/src/agent/rtm.ts#L770)*

Informs that a chat has been unfollowed. Useful in multiple connection scenarios,
where one app/integration needs to know that another one unfollowed the chat.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`cb` | Function | callback  |

**Returns:** *void*

___

###  subscribeCustomerBanned

▸ **subscribeCustomerBanned**(`cb`: Function): *void*

*Defined in [src/agent/rtm.ts:704](https://github.com/livechat/lc-sdk-js/blob/5281c0a/src/agent/rtm.ts#L704)*

Informs that a Customer was banned for a specified number of days.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`cb` | Function | callback  |

**Returns:** *void*

___

###  subscribeCustomerCreated

▸ **subscribeCustomerCreated**(`cb`: Function): *void*

*Defined in [src/agent/rtm.ts:680](https://github.com/livechat/lc-sdk-js/blob/5281c0a/src/agent/rtm.ts#L680)*

Informs that a new Customer registered.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`cb` | Function | callback  |

**Returns:** *void*

___

###  subscribeCustomerPageUpdated

▸ **subscribeCustomerPageUpdated**(`cb`: Function): *void*

*Defined in [src/agent/rtm.ts:696](https://github.com/livechat/lc-sdk-js/blob/5281c0a/src/agent/rtm.ts#L696)*

Informs that a Customer moved to another page of the website.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`cb` | Function | callback  |

**Returns:** *void*

___

###  subscribeCustomerUpdated

▸ **subscribeCustomerUpdated**(`cb`: Function): *void*

*Defined in [src/agent/rtm.ts:688](https://github.com/livechat/lc-sdk-js/blob/5281c0a/src/agent/rtm.ts#L688)*

Informs that Customer's data was updated.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`cb` | Function | callback  |

**Returns:** *void*

___

###  subscribeCustomerVisitEnded

▸ **subscribeCustomerVisitEnded**(`cb`: Function): *void*

*Defined in [src/agent/rtm.ts:712](https://github.com/livechat/lc-sdk-js/blob/5281c0a/src/agent/rtm.ts#L712)*

Informs that a Customer left the tracked website.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`cb` | Function | callback  |

**Returns:** *void*

___

###  subscribeCustomerVisitStarted

▸ **subscribeCustomerVisitStarted**(`cb`: Function): *void*

*Defined in [src/agent/rtm.ts:672](https://github.com/livechat/lc-sdk-js/blob/5281c0a/src/agent/rtm.ts#L672)*

Informs that a Customer entered the tracked website.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`cb` | Function | callback  |

**Returns:** *void*

___

###  subscribeEventPropertiesDeleted

▸ **subscribeEventPropertiesDeleted**(`cb`: Function): *void*

*Defined in [src/agent/rtm.ts:648](https://github.com/livechat/lc-sdk-js/blob/5281c0a/src/agent/rtm.ts#L648)*

Informs about those event properties that were deleted.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`cb` | Function | callback  |

**Returns:** *void*

___

###  subscribeEventPropertiesUpdated

▸ **subscribeEventPropertiesUpdated**(`cb`: Function): *void*

*Defined in [src/agent/rtm.ts:640](https://github.com/livechat/lc-sdk-js/blob/5281c0a/src/agent/rtm.ts#L640)*

Informs about those event properties that were updated.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`cb` | Function | callback  |

**Returns:** *void*

___

###  subscribeEventUpdated

▸ **subscribeEventUpdated**(`cb`: Function): *void*

*Defined in [src/agent/rtm.ts:591](https://github.com/livechat/lc-sdk-js/blob/5281c0a/src/agent/rtm.ts#L591)*

Informs that an event was updated.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`cb` | Function | callback  |

**Returns:** *void*

___

###  subscribeEventsMarkedAsSeen

▸ **subscribeEventsMarkedAsSeen**(`cb`: Function): *void*

*Defined in [src/agent/rtm.ts:753](https://github.com/livechat/lc-sdk-js/blob/5281c0a/src/agent/rtm.ts#L753)*

Informs that a user has seen events up to a specific time.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`cb` | Function | callback  |

**Returns:** *void*

___

###  subscribeIncomingChat

▸ **subscribeIncomingChat**(`cb`: Function): *void*

*Defined in [src/agent/rtm.ts:525](https://github.com/livechat/lc-sdk-js/blob/5281c0a/src/agent/rtm.ts#L525)*

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

*Defined in [src/agent/rtm.ts:583](https://github.com/livechat/lc-sdk-js/blob/5281c0a/src/agent/rtm.ts#L583)*

Informs about an incoming event sent to a chat.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`cb` | Function | callback  |

**Returns:** *void*

___

###  subscribeIncomingMulticast

▸ **subscribeIncomingMulticast**(`cb`: Function): *void*

*Defined in [src/agent/rtm.ts:761](https://github.com/livechat/lc-sdk-js/blob/5281c0a/src/agent/rtm.ts#L761)*

Informs about messages sent via the multicast method or by the system.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`cb` | Function | callback  |

**Returns:** *void*

___

###  subscribeIncomingRichMessagePostback

▸ **subscribeIncomingRichMessagePostback**(`cb`: Function): *void*

*Defined in [src/agent/rtm.ts:600](https://github.com/livechat/lc-sdk-js/blob/5281c0a/src/agent/rtm.ts#L600)*

Informs about an incoming rich message postback. The push payload contains the info on the postback itself,
as well as the chat it was sent in.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`cb` | Function | callback  |

**Returns:** *void*

___

###  subscribeIncomingSneakPeek

▸ **subscribeIncomingSneakPeek**(`cb`: Function): *void*

*Defined in [src/agent/rtm.ts:745](https://github.com/livechat/lc-sdk-js/blob/5281c0a/src/agent/rtm.ts#L745)*

Informs about the message a Customer is currently typing. The push payload contains the sneak peek object.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`cb` | Function | callback  |

**Returns:** *void*

___

###  subscribeIncomingTypingIndicator

▸ **subscribeIncomingTypingIndicator**(`cb`: Function): *void*

*Defined in [src/agent/rtm.ts:737](https://github.com/livechat/lc-sdk-js/blob/5281c0a/src/agent/rtm.ts#L737)*

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

###  subscribeQueuePostitionsUpdated

▸ **subscribeQueuePostitionsUpdated**(`cb`: Function): *void*

*Defined in [src/agent/rtm.ts:778](https://github.com/livechat/lc-sdk-js/blob/5281c0a/src/agent/rtm.ts#L778)*

New positions and wait times for queued chats.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`cb` | Function | callback  |

**Returns:** *void*

___

###  subscribeRoutingStatusSet

▸ **subscribeRoutingStatusSet**(`cb`: Function): *void*

*Defined in [src/agent/rtm.ts:720](https://github.com/livechat/lc-sdk-js/blob/5281c0a/src/agent/rtm.ts#L720)*

Informs that an Agent's or Bot Agent's status was changed.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`cb` | Function | callback  |

**Returns:** *void*

___

###  subscribeThreadPropertiesDeleted

▸ **subscribeThreadPropertiesDeleted**(`cb`: Function): *void*

*Defined in [src/agent/rtm.ts:632](https://github.com/livechat/lc-sdk-js/blob/5281c0a/src/agent/rtm.ts#L632)*

Informs about those thread properties that were deleted.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`cb` | Function | callback  |

**Returns:** *void*

___

###  subscribeThreadPropertiesUpdated

▸ **subscribeThreadPropertiesUpdated**(`cb`: Function): *void*

*Defined in [src/agent/rtm.ts:624](https://github.com/livechat/lc-sdk-js/blob/5281c0a/src/agent/rtm.ts#L624)*

Informs about those thread properties that were updated.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`cb` | Function | callback  |

**Returns:** *void*

___

###  subscribeThreadTagged

▸ **subscribeThreadTagged**(`cb`: Function): *void*

*Defined in [src/agent/rtm.ts:656](https://github.com/livechat/lc-sdk-js/blob/5281c0a/src/agent/rtm.ts#L656)*

Informs that a chat thread was tagged.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`cb` | Function | callback  |

**Returns:** *void*

___

###  subscribeThreadUntagged

▸ **subscribeThreadUntagged**(`cb`: Function): *void*

*Defined in [src/agent/rtm.ts:664](https://github.com/livechat/lc-sdk-js/blob/5281c0a/src/agent/rtm.ts#L664)*

Informs that a chat thread was untagged.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`cb` | Function | callback  |

**Returns:** *void*

___

###  subscribeUserAddedToChat

▸ **subscribeUserAddedToChat**(`cb`: Function): *void*

*Defined in [src/agent/rtm.ts:567](https://github.com/livechat/lc-sdk-js/blob/5281c0a/src/agent/rtm.ts#L567)*

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

*Defined in [src/agent/rtm.ts:575](https://github.com/livechat/lc-sdk-js/blob/5281c0a/src/agent/rtm.ts#L575)*

Informs that a user (Customer or Agent) was removed from a chat.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`cb` | Function | callback  |

**Returns:** *void*

___

###  tagThread

▸ **tagThread**(`chat_id`: string, `thread_id`: string, `tag`: string): *Promise‹[EmptyResponse](../interfaces/_src_agent_structures_.emptyresponse.md)›*

*Defined in [src/agent/rtm.ts:380](https://github.com/livechat/lc-sdk-js/blob/5281c0a/src/agent/rtm.ts#L380)*

Tags thread with given tag

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`chat_id` | string | chat ID of thread to tag |
`thread_id` | string | thread to tag |
`tag` | string | tag to add  |

**Returns:** *Promise‹[EmptyResponse](../interfaces/_src_agent_structures_.emptyresponse.md)›*

___

###  transferChat

▸ **transferChat**(`chat_id`: string, `opts?`: [TransferChatParameters](../interfaces/_src_agent_structures_.transferchatparameters.md)): *Promise‹[EmptyResponse](../interfaces/_src_agent_structures_.emptyresponse.md)›*

*Defined in [src/agent/rtm.ts:200](https://github.com/livechat/lc-sdk-js/blob/5281c0a/src/agent/rtm.ts#L200)*

Transfers a chat to an Agent or a group.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`chat_id` | string | chat to transfer |
`opts?` | [TransferChatParameters](../interfaces/_src_agent_structures_.transferchatparameters.md) | specific target or force flag  |

**Returns:** *Promise‹[EmptyResponse](../interfaces/_src_agent_structures_.emptyresponse.md)›*

___

###  unfollowChat

▸ **unfollowChat**(`chat_id`: string): *Promise‹[EmptyResponse](../interfaces/_src_agent_structures_.emptyresponse.md)›*

*Defined in [src/agent/rtm.ts:155](https://github.com/livechat/lc-sdk-js/blob/5281c0a/src/agent/rtm.ts#L155)*

Removes the requester from the chat followers. After that, only key changes to the chat (like transfer_chat or close_active_thread)
will be sent to the requester. Chat members cannot unfollow the chat.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`chat_id` | string | chat ID to unfollow  |

**Returns:** *Promise‹[EmptyResponse](../interfaces/_src_agent_structures_.emptyresponse.md)›*

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

###  untagThread

▸ **untagThread**(`chat_id`: string, `thread_id`: string, `tag`: string): *Promise‹[EmptyResponse](../interfaces/_src_agent_structures_.emptyresponse.md)›*

*Defined in [src/agent/rtm.ts:394](https://github.com/livechat/lc-sdk-js/blob/5281c0a/src/agent/rtm.ts#L394)*

Removes tag from thread

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`chat_id` | string | chat ID of thread to untag |
`thread_id` | string | thread to untag |
`tag` | string | tag to remove  |

**Returns:** *Promise‹[EmptyResponse](../interfaces/_src_agent_structures_.emptyresponse.md)›*

___

###  updateChatProperties

▸ **updateChatProperties**(`chat_id`: string, `properties`: [Properties](../interfaces/_src_objects_index_.properties.md)): *Promise‹[EmptyResponse](../interfaces/_src_agent_structures_.emptyresponse.md)›*

*Defined in [src/agent/rtm.ts:277](https://github.com/livechat/lc-sdk-js/blob/5281c0a/src/agent/rtm.ts#L277)*

Updates chat properties

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`chat_id` | string | chat to update properties |
`properties` | [Properties](../interfaces/_src_objects_index_.properties.md) | properties to update  |

**Returns:** *Promise‹[EmptyResponse](../interfaces/_src_agent_structures_.emptyresponse.md)›*

___

###  updateCustomer

▸ **updateCustomer**(`customer_id`: string, `opts`: [CustomerParameters](../interfaces/_src_agent_structures_.customerparameters.md)): *Promise‹[EmptyResponse](../interfaces/_src_agent_structures_.emptyresponse.md)›*

*Defined in [src/agent/rtm.ts:435](https://github.com/livechat/lc-sdk-js/blob/5281c0a/src/agent/rtm.ts#L435)*

Updates Customer's properties.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`customer_id` | string | ID of a customer to update |
`opts` | [CustomerParameters](../interfaces/_src_agent_structures_.customerparameters.md) | properties to update  |

**Returns:** *Promise‹[EmptyResponse](../interfaces/_src_agent_structures_.emptyresponse.md)›*

___

###  updateEventProperties

▸ **updateEventProperties**(`chat_id`: string, `thread_id`: string, `event_id`: string, `properties`: [Properties](../interfaces/_src_objects_index_.properties.md)): *Promise‹[EmptyResponse](../interfaces/_src_agent_structures_.emptyresponse.md)›*

*Defined in [src/agent/rtm.ts:339](https://github.com/livechat/lc-sdk-js/blob/5281c0a/src/agent/rtm.ts#L339)*

Updates event properties

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`chat_id` | string | chat ID of event to update |
`thread_id` | string | thread ID of event to update |
`event_id` | string | event to update properties |
`properties` | [Properties](../interfaces/_src_objects_index_.properties.md) | properties to update  |

**Returns:** *Promise‹[EmptyResponse](../interfaces/_src_agent_structures_.emptyresponse.md)›*

___

###  updateThreadProperties

▸ **updateThreadProperties**(`chat_id`: string, `thread_id`: string, `properties`: [Properties](../interfaces/_src_objects_index_.properties.md)): *Promise‹[EmptyResponse](../interfaces/_src_agent_structures_.emptyresponse.md)›*

*Defined in [src/agent/rtm.ts:302](https://github.com/livechat/lc-sdk-js/blob/5281c0a/src/agent/rtm.ts#L302)*

Updates thread properties

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`chat_id` | string | chat ID of thread to update |
`thread_id` | string | thread to update properties |
`properties` | [Properties](../interfaces/_src_objects_index_.properties.md) | properties to update  |

**Returns:** *Promise‹[EmptyResponse](../interfaces/_src_agent_structures_.emptyresponse.md)›*
