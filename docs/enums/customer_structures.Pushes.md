[@livechat/lc-sdk-js](../README.md) / [customer/structures](../modules/customer_structures.md) / Pushes

# Enumeration: Pushes

[customer/structures](../modules/customer_structures.md).Pushes

## Table of contents

### Enumeration Members

- [ChatDeactivated](customer_structures.Pushes.md#chatdeactivated)
- [ChatPropertiesDeleted](customer_structures.Pushes.md#chatpropertiesdeleted)
- [ChatPropertiesUpdated](customer_structures.Pushes.md#chatpropertiesupdated)
- [ChatTransferred](customer_structures.Pushes.md#chattransferred)
- [CustomerDisconnected](customer_structures.Pushes.md#customerdisconnected)
- [CustomerPageUpdated](customer_structures.Pushes.md#customerpageupdated)
- [CustomerSideStorageUpdated](customer_structures.Pushes.md#customersidestorageupdated)
- [CustomerUpdated](customer_structures.Pushes.md#customerupdated)
- [EventPropertiesDeleted](customer_structures.Pushes.md#eventpropertiesdeleted)
- [EventPropertiesUpdated](customer_structures.Pushes.md#eventpropertiesupdated)
- [EventUpdated](customer_structures.Pushes.md#eventupdated)
- [EventsMarkedAsSeen](customer_structures.Pushes.md#eventsmarkedasseen)
- [GreetingAccepted](customer_structures.Pushes.md#greetingaccepted)
- [GreetingCancelled](customer_structures.Pushes.md#greetingcancelled)
- [IncomingChat](customer_structures.Pushes.md#incomingchat)
- [IncomingEvent](customer_structures.Pushes.md#incomingevent)
- [IncomingGreeting](customer_structures.Pushes.md#incominggreeting)
- [IncomingMulticast](customer_structures.Pushes.md#incomingmulticast)
- [IncomingRichMessagePostback](customer_structures.Pushes.md#incomingrichmessagepostback)
- [IncomingTypingIndicator](customer_structures.Pushes.md#incomingtypingindicator)
- [QueuePostitionUpdated](customer_structures.Pushes.md#queuepostitionupdated)
- [ThreadPropertiesDeleted](customer_structures.Pushes.md#threadpropertiesdeleted)
- [ThreadPropertiesUpdated](customer_structures.Pushes.md#threadpropertiesupdated)
- [UserAddedToChat](customer_structures.Pushes.md#useraddedtochat)
- [UserRemovedFromChat](customer_structures.Pushes.md#userremovedfromchat)

## Enumeration Members

### ChatDeactivated

• **ChatDeactivated** = ``"chat_deactivated"``

Informs that a chat was deactivated by closing the currently open thread.

#### Defined in

[customer/structures.ts:240](https://github.com/livechat/lc-sdk-js/blob/a3fdde0/src/customer/structures.ts#L240)

___

### ChatPropertiesDeleted

• **ChatPropertiesDeleted** = ``"chat_properties_deleted"``

Informs about those chat properties that were deleted.

#### Defined in

[customer/structures.ts:283](https://github.com/livechat/lc-sdk-js/blob/a3fdde0/src/customer/structures.ts#L283)

___

### ChatPropertiesUpdated

• **ChatPropertiesUpdated** = ``"chat_properties_updated"``

Informs about those chat properties that were updated.

#### Defined in

[customer/structures.ts:278](https://github.com/livechat/lc-sdk-js/blob/a3fdde0/src/customer/structures.ts#L278)

___

### ChatTransferred

• **ChatTransferred** = ``"chat_transferred"``

Informs that a chat was transferred to a different group or to an Agent.

#### Defined in

[customer/structures.ts:245](https://github.com/livechat/lc-sdk-js/blob/a3fdde0/src/customer/structures.ts#L245)

___

### CustomerDisconnected

• **CustomerDisconnected** = ``"customer_disconnected"``

Informs that a Customer was disconnected. The payload contains the reason of Customer's disconnection.

#### Defined in

[customer/structures.ts:323](https://github.com/livechat/lc-sdk-js/blob/a3fdde0/src/customer/structures.ts#L323)

___

### CustomerPageUpdated

• **CustomerPageUpdated** = ``"customer_page_updated"``

Informs that a Customer moved to another page of the website.

#### Defined in

[customer/structures.ts:313](https://github.com/livechat/lc-sdk-js/blob/a3fdde0/src/customer/structures.ts#L313)

___

### CustomerSideStorageUpdated

• **CustomerSideStorageUpdated** = ``"customer_side_storage_updated"``

Informs that a Customer updated the data stored on their side.

#### Defined in

[customer/structures.ts:318](https://github.com/livechat/lc-sdk-js/blob/a3fdde0/src/customer/structures.ts#L318)

___

### CustomerUpdated

• **CustomerUpdated** = ``"customer_updated"``

Informs that Customer's data was updated.

#### Defined in

[customer/structures.ts:308](https://github.com/livechat/lc-sdk-js/blob/a3fdde0/src/customer/structures.ts#L308)

___

### EventPropertiesDeleted

• **EventPropertiesDeleted** = ``"event_properties_deleted"``

Informs about those event properties that were deleted.

#### Defined in

[customer/structures.ts:303](https://github.com/livechat/lc-sdk-js/blob/a3fdde0/src/customer/structures.ts#L303)

___

### EventPropertiesUpdated

• **EventPropertiesUpdated** = ``"event_properties_updated"``

Informs about those event properties that were updated.

#### Defined in

[customer/structures.ts:298](https://github.com/livechat/lc-sdk-js/blob/a3fdde0/src/customer/structures.ts#L298)

___

### EventUpdated

• **EventUpdated** = ``"event_updated"``

Informs that an event was updated.

#### Defined in

[customer/structures.ts:267](https://github.com/livechat/lc-sdk-js/blob/a3fdde0/src/customer/structures.ts#L267)

___

### EventsMarkedAsSeen

• **EventsMarkedAsSeen** = ``"events_marked_as_seen"``

Informs that a user has seen events up to a specific time.

#### Defined in

[customer/structures.ts:335](https://github.com/livechat/lc-sdk-js/blob/a3fdde0/src/customer/structures.ts#L335)

___

### GreetingAccepted

• **GreetingAccepted** = ``"greeting_accepted"``

Informs about a greeting accepted by the Customer.

#### Defined in

[customer/structures.ts:350](https://github.com/livechat/lc-sdk-js/blob/a3fdde0/src/customer/structures.ts#L350)

___

### GreetingCancelled

• **GreetingCancelled** = ``"greeting_cancelled"``

Informs about a greeting rejected by the Customer.
Also, the push is sent when a new greeting automatically cancels the currently displayed one.

#### Defined in

[customer/structures.ts:356](https://github.com/livechat/lc-sdk-js/blob/a3fdde0/src/customer/structures.ts#L356)

___

### IncomingChat

• **IncomingChat** = ``"incoming_chat"``

Informs about a chat coming with a new thread. The push payload contains the whole chat data structure.
If the chat was started with some initial events, the thread object contains them.

#### Defined in

[customer/structures.ts:235](https://github.com/livechat/lc-sdk-js/blob/a3fdde0/src/customer/structures.ts#L235)

___

### IncomingEvent

• **IncomingEvent** = ``"incoming_event"``

Informs about an incoming event sent to a chat.

#### Defined in

[customer/structures.ts:262](https://github.com/livechat/lc-sdk-js/blob/a3fdde0/src/customer/structures.ts#L262)

___

### IncomingGreeting

• **IncomingGreeting** = ``"incoming_greeting"``

Informs about an incoming greeting.

#### Defined in

[customer/structures.ts:345](https://github.com/livechat/lc-sdk-js/blob/a3fdde0/src/customer/structures.ts#L345)

___

### IncomingMulticast

• **IncomingMulticast** = ``"incoming_multicast"``

Informs about messages sent via the multicast method or by the system.

#### Defined in

[customer/structures.ts:340](https://github.com/livechat/lc-sdk-js/blob/a3fdde0/src/customer/structures.ts#L340)

___

### IncomingRichMessagePostback

• **IncomingRichMessagePostback** = ``"incoming_rich_message_postback"``

Informs about an incoming rich message postback. The push payload contains the info on the postback itself,
as well as the chat it was sent in.

#### Defined in

[customer/structures.ts:273](https://github.com/livechat/lc-sdk-js/blob/a3fdde0/src/customer/structures.ts#L273)

___

### IncomingTypingIndicator

• **IncomingTypingIndicator** = ``"incoming_typing_indicator"``

Informs that one of the chat users is currently typing a message. The message hasn't been sent yet.
The push payload contains the typing indicator object.

**`Param`**

callback

#### Defined in

[customer/structures.ts:330](https://github.com/livechat/lc-sdk-js/blob/a3fdde0/src/customer/structures.ts#L330)

___

### QueuePostitionUpdated

• **QueuePostitionUpdated** = ``"queue_postition_updated"``

Informs about an updated position in the queue and about the wait time.

#### Defined in

[customer/structures.ts:361](https://github.com/livechat/lc-sdk-js/blob/a3fdde0/src/customer/structures.ts#L361)

___

### ThreadPropertiesDeleted

• **ThreadPropertiesDeleted** = ``"thread_properties_deleted"``

Informs about those thread properties that were deleted.

#### Defined in

[customer/structures.ts:293](https://github.com/livechat/lc-sdk-js/blob/a3fdde0/src/customer/structures.ts#L293)

___

### ThreadPropertiesUpdated

• **ThreadPropertiesUpdated** = ``"thread_properties_updated"``

Informs about those thread properties that were updated.

#### Defined in

[customer/structures.ts:288](https://github.com/livechat/lc-sdk-js/blob/a3fdde0/src/customer/structures.ts#L288)

___

### UserAddedToChat

• **UserAddedToChat** = ``"user_added_to_chat"``

Informs that a user (Customer or Agent) was added to a chat.
This push can be emitted with user.present set to false when a user writes to a chat without joining it
You can achieve that via the Send Event method.

#### Defined in

[customer/structures.ts:252](https://github.com/livechat/lc-sdk-js/blob/a3fdde0/src/customer/structures.ts#L252)

___

### UserRemovedFromChat

• **UserRemovedFromChat** = ``"user_removed_from_chat"``

Informs that a user (Customer or Agent) was removed from a chat.

#### Defined in

[customer/structures.ts:257](https://github.com/livechat/lc-sdk-js/blob/a3fdde0/src/customer/structures.ts#L257)
