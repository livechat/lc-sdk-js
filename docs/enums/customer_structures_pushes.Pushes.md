[@livechat/lc-sdk-js](../README.md) / [customer/structures/pushes](../modules/customer_structures_pushes.md) / Pushes

# Enumeration: Pushes

[customer/structures/pushes](../modules/customer_structures_pushes.md).Pushes

## Table of contents

### Enumeration Members

- [ChatDeactivated](customer_structures_pushes.Pushes.md#chatdeactivated)
- [ChatPropertiesDeleted](customer_structures_pushes.Pushes.md#chatpropertiesdeleted)
- [ChatPropertiesUpdated](customer_structures_pushes.Pushes.md#chatpropertiesupdated)
- [ChatTransferred](customer_structures_pushes.Pushes.md#chattransferred)
- [CustomerDisconnected](customer_structures_pushes.Pushes.md#customerdisconnected)
- [CustomerPageUpdated](customer_structures_pushes.Pushes.md#customerpageupdated)
- [CustomerSideStorageUpdated](customer_structures_pushes.Pushes.md#customersidestorageupdated)
- [CustomerUpdated](customer_structures_pushes.Pushes.md#customerupdated)
- [EventPropertiesDeleted](customer_structures_pushes.Pushes.md#eventpropertiesdeleted)
- [EventPropertiesUpdated](customer_structures_pushes.Pushes.md#eventpropertiesupdated)
- [EventUpdated](customer_structures_pushes.Pushes.md#eventupdated)
- [EventsMarkedAsSeen](customer_structures_pushes.Pushes.md#eventsmarkedasseen)
- [GreetingAccepted](customer_structures_pushes.Pushes.md#greetingaccepted)
- [GreetingCancelled](customer_structures_pushes.Pushes.md#greetingcancelled)
- [IncomingChat](customer_structures_pushes.Pushes.md#incomingchat)
- [IncomingEvent](customer_structures_pushes.Pushes.md#incomingevent)
- [IncomingGreeting](customer_structures_pushes.Pushes.md#incominggreeting)
- [IncomingMulticast](customer_structures_pushes.Pushes.md#incomingmulticast)
- [IncomingRichMessagePostback](customer_structures_pushes.Pushes.md#incomingrichmessagepostback)
- [IncomingTypingIndicator](customer_structures_pushes.Pushes.md#incomingtypingindicator)
- [QueuePostitionUpdated](customer_structures_pushes.Pushes.md#queuepostitionupdated)
- [ThreadPropertiesDeleted](customer_structures_pushes.Pushes.md#threadpropertiesdeleted)
- [ThreadPropertiesUpdated](customer_structures_pushes.Pushes.md#threadpropertiesupdated)
- [UserAddedToChat](customer_structures_pushes.Pushes.md#useraddedtochat)
- [UserRemovedFromChat](customer_structures_pushes.Pushes.md#userremovedfromchat)

## Enumeration Members

### ChatDeactivated

• **ChatDeactivated** = ``"chat_deactivated"``

Informs that a chat was deactivated by closing the currently open thread.

#### Defined in

[customer/structures/pushes.ts:19](https://github.com/livechat/lc-sdk-js/blob/5f5afdd/src/customer/structures/pushes.ts#L19)

___

### ChatPropertiesDeleted

• **ChatPropertiesDeleted** = ``"chat_properties_deleted"``

Informs about those chat properties that were deleted.

#### Defined in

[customer/structures/pushes.ts:62](https://github.com/livechat/lc-sdk-js/blob/5f5afdd/src/customer/structures/pushes.ts#L62)

___

### ChatPropertiesUpdated

• **ChatPropertiesUpdated** = ``"chat_properties_updated"``

Informs about those chat properties that were updated.

#### Defined in

[customer/structures/pushes.ts:57](https://github.com/livechat/lc-sdk-js/blob/5f5afdd/src/customer/structures/pushes.ts#L57)

___

### ChatTransferred

• **ChatTransferred** = ``"chat_transferred"``

Informs that a chat was transferred to a different group or to an Agent.

#### Defined in

[customer/structures/pushes.ts:24](https://github.com/livechat/lc-sdk-js/blob/5f5afdd/src/customer/structures/pushes.ts#L24)

___

### CustomerDisconnected

• **CustomerDisconnected** = ``"customer_disconnected"``

Informs that a Customer was disconnected. The payload contains the reason of Customer's disconnection.

#### Defined in

[customer/structures/pushes.ts:102](https://github.com/livechat/lc-sdk-js/blob/5f5afdd/src/customer/structures/pushes.ts#L102)

___

### CustomerPageUpdated

• **CustomerPageUpdated** = ``"customer_page_updated"``

Informs that a Customer moved to another page of the website.

#### Defined in

[customer/structures/pushes.ts:92](https://github.com/livechat/lc-sdk-js/blob/5f5afdd/src/customer/structures/pushes.ts#L92)

___

### CustomerSideStorageUpdated

• **CustomerSideStorageUpdated** = ``"customer_side_storage_updated"``

Informs that a Customer updated the data stored on their side.

#### Defined in

[customer/structures/pushes.ts:97](https://github.com/livechat/lc-sdk-js/blob/5f5afdd/src/customer/structures/pushes.ts#L97)

___

### CustomerUpdated

• **CustomerUpdated** = ``"customer_updated"``

Informs that Customer's data was updated.

#### Defined in

[customer/structures/pushes.ts:87](https://github.com/livechat/lc-sdk-js/blob/5f5afdd/src/customer/structures/pushes.ts#L87)

___

### EventPropertiesDeleted

• **EventPropertiesDeleted** = ``"event_properties_deleted"``

Informs about those event properties that were deleted.

#### Defined in

[customer/structures/pushes.ts:82](https://github.com/livechat/lc-sdk-js/blob/5f5afdd/src/customer/structures/pushes.ts#L82)

___

### EventPropertiesUpdated

• **EventPropertiesUpdated** = ``"event_properties_updated"``

Informs about those event properties that were updated.

#### Defined in

[customer/structures/pushes.ts:77](https://github.com/livechat/lc-sdk-js/blob/5f5afdd/src/customer/structures/pushes.ts#L77)

___

### EventUpdated

• **EventUpdated** = ``"event_updated"``

Informs that an event was updated.

#### Defined in

[customer/structures/pushes.ts:46](https://github.com/livechat/lc-sdk-js/blob/5f5afdd/src/customer/structures/pushes.ts#L46)

___

### EventsMarkedAsSeen

• **EventsMarkedAsSeen** = ``"events_marked_as_seen"``

Informs that a user has seen events up to a specific time.

#### Defined in

[customer/structures/pushes.ts:114](https://github.com/livechat/lc-sdk-js/blob/5f5afdd/src/customer/structures/pushes.ts#L114)

___

### GreetingAccepted

• **GreetingAccepted** = ``"greeting_accepted"``

Informs about a greeting accepted by the Customer.

#### Defined in

[customer/structures/pushes.ts:129](https://github.com/livechat/lc-sdk-js/blob/5f5afdd/src/customer/structures/pushes.ts#L129)

___

### GreetingCancelled

• **GreetingCancelled** = ``"greeting_cancelled"``

Informs about a greeting rejected by the Customer.
Also, the push is sent when a new greeting automatically cancels the currently displayed one.

#### Defined in

[customer/structures/pushes.ts:135](https://github.com/livechat/lc-sdk-js/blob/5f5afdd/src/customer/structures/pushes.ts#L135)

___

### IncomingChat

• **IncomingChat** = ``"incoming_chat"``

Informs about a chat coming with a new thread. The push payload contains the whole chat data structure.
If the chat was started with some initial events, the thread object contains them.

#### Defined in

[customer/structures/pushes.ts:14](https://github.com/livechat/lc-sdk-js/blob/5f5afdd/src/customer/structures/pushes.ts#L14)

___

### IncomingEvent

• **IncomingEvent** = ``"incoming_event"``

Informs about an incoming event sent to a chat.

#### Defined in

[customer/structures/pushes.ts:41](https://github.com/livechat/lc-sdk-js/blob/5f5afdd/src/customer/structures/pushes.ts#L41)

___

### IncomingGreeting

• **IncomingGreeting** = ``"incoming_greeting"``

Informs about an incoming greeting.

#### Defined in

[customer/structures/pushes.ts:124](https://github.com/livechat/lc-sdk-js/blob/5f5afdd/src/customer/structures/pushes.ts#L124)

___

### IncomingMulticast

• **IncomingMulticast** = ``"incoming_multicast"``

Informs about messages sent via the multicast method or by the system.

#### Defined in

[customer/structures/pushes.ts:119](https://github.com/livechat/lc-sdk-js/blob/5f5afdd/src/customer/structures/pushes.ts#L119)

___

### IncomingRichMessagePostback

• **IncomingRichMessagePostback** = ``"incoming_rich_message_postback"``

Informs about an incoming rich message postback. The push payload contains the info on the postback itself,
as well as the chat it was sent in.

#### Defined in

[customer/structures/pushes.ts:52](https://github.com/livechat/lc-sdk-js/blob/5f5afdd/src/customer/structures/pushes.ts#L52)

___

### IncomingTypingIndicator

• **IncomingTypingIndicator** = ``"incoming_typing_indicator"``

Informs that one of the chat users is currently typing a message. The message hasn't been sent yet.
The push payload contains the typing indicator object.

**`Param`**

callback

#### Defined in

[customer/structures/pushes.ts:109](https://github.com/livechat/lc-sdk-js/blob/5f5afdd/src/customer/structures/pushes.ts#L109)

___

### QueuePostitionUpdated

• **QueuePostitionUpdated** = ``"queue_postition_updated"``

Informs about an updated position in the queue and about the wait time.

#### Defined in

[customer/structures/pushes.ts:140](https://github.com/livechat/lc-sdk-js/blob/5f5afdd/src/customer/structures/pushes.ts#L140)

___

### ThreadPropertiesDeleted

• **ThreadPropertiesDeleted** = ``"thread_properties_deleted"``

Informs about those thread properties that were deleted.

#### Defined in

[customer/structures/pushes.ts:72](https://github.com/livechat/lc-sdk-js/blob/5f5afdd/src/customer/structures/pushes.ts#L72)

___

### ThreadPropertiesUpdated

• **ThreadPropertiesUpdated** = ``"thread_properties_updated"``

Informs about those thread properties that were updated.

#### Defined in

[customer/structures/pushes.ts:67](https://github.com/livechat/lc-sdk-js/blob/5f5afdd/src/customer/structures/pushes.ts#L67)

___

### UserAddedToChat

• **UserAddedToChat** = ``"user_added_to_chat"``

Informs that a user (Customer or Agent) was added to a chat.
This push can be emitted with user.present set to false when a user writes to a chat without joining it
You can achieve that via the Send Event method.

#### Defined in

[customer/structures/pushes.ts:31](https://github.com/livechat/lc-sdk-js/blob/5f5afdd/src/customer/structures/pushes.ts#L31)

___

### UserRemovedFromChat

• **UserRemovedFromChat** = ``"user_removed_from_chat"``

Informs that a user (Customer or Agent) was removed from a chat.

#### Defined in

[customer/structures/pushes.ts:36](https://github.com/livechat/lc-sdk-js/blob/5f5afdd/src/customer/structures/pushes.ts#L36)
