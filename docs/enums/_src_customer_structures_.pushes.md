[@livechat/lc-sdk-js](../README.md) › [Globals](../globals.md) › ["src/customer/structures"](../modules/_src_customer_structures_.md) › [Pushes](_src_customer_structures_.pushes.md)

# Enumeration: Pushes

## Index

### Enumeration members

* [ChatDeactivated](_src_customer_structures_.pushes.md#chatdeactivated)
* [ChatPropertiesDeleted](_src_customer_structures_.pushes.md#chatpropertiesdeleted)
* [ChatPropertiesUpdated](_src_customer_structures_.pushes.md#chatpropertiesupdated)
* [ChatTransferred](_src_customer_structures_.pushes.md#chattransferred)
* [CustomerDisconnected](_src_customer_structures_.pushes.md#customerdisconnected)
* [CustomerPageUpdated](_src_customer_structures_.pushes.md#customerpageupdated)
* [CustomerSideStorageUpdated](_src_customer_structures_.pushes.md#customersidestorageupdated)
* [CustomerUpdated](_src_customer_structures_.pushes.md#customerupdated)
* [EventPropertiesDeleted](_src_customer_structures_.pushes.md#eventpropertiesdeleted)
* [EventPropertiesUpdated](_src_customer_structures_.pushes.md#eventpropertiesupdated)
* [EventUpdated](_src_customer_structures_.pushes.md#eventupdated)
* [EventsMarkedAsSeen](_src_customer_structures_.pushes.md#eventsmarkedasseen)
* [GreetingAccepted](_src_customer_structures_.pushes.md#greetingaccepted)
* [GreetingCancelled](_src_customer_structures_.pushes.md#greetingcancelled)
* [IncomingChat](_src_customer_structures_.pushes.md#incomingchat)
* [IncomingEvent](_src_customer_structures_.pushes.md#incomingevent)
* [IncomingGreeting](_src_customer_structures_.pushes.md#incominggreeting)
* [IncomingMulticast](_src_customer_structures_.pushes.md#incomingmulticast)
* [IncomingRichMessagePostback](_src_customer_structures_.pushes.md#incomingrichmessagepostback)
* [IncomingTypingIndicator](_src_customer_structures_.pushes.md#incomingtypingindicator)
* [QueuePostitionUpdated](_src_customer_structures_.pushes.md#queuepostitionupdated)
* [ThreadPropertiesDeleted](_src_customer_structures_.pushes.md#threadpropertiesdeleted)
* [ThreadPropertiesUpdated](_src_customer_structures_.pushes.md#threadpropertiesupdated)
* [UserAddedToChat](_src_customer_structures_.pushes.md#useraddedtochat)
* [UserRemovedFromChat](_src_customer_structures_.pushes.md#userremovedfromchat)

## Enumeration members

###  ChatDeactivated

• **ChatDeactivated**: = "chat_deactivated"

*Defined in [src/customer/structures.ts:228](https://github.com/livechat/lc-sdk-js/blob/228cb10/src/customer/structures.ts#L228)*

Informs that a chat was deactivated by closing the currently open thread.

___

###  ChatPropertiesDeleted

• **ChatPropertiesDeleted**: = "chat_properties_deleted"

*Defined in [src/customer/structures.ts:271](https://github.com/livechat/lc-sdk-js/blob/228cb10/src/customer/structures.ts#L271)*

Informs about those chat properties that were deleted.

___

###  ChatPropertiesUpdated

• **ChatPropertiesUpdated**: = "chat_properties_updated"

*Defined in [src/customer/structures.ts:266](https://github.com/livechat/lc-sdk-js/blob/228cb10/src/customer/structures.ts#L266)*

Informs about those chat properties that were updated.

___

###  ChatTransferred

• **ChatTransferred**: = "chat_transferred"

*Defined in [src/customer/structures.ts:233](https://github.com/livechat/lc-sdk-js/blob/228cb10/src/customer/structures.ts#L233)*

Informs that a chat was transferred to a different group or to an Agent.

___

###  CustomerDisconnected

• **CustomerDisconnected**: = "customer_disconnected"

*Defined in [src/customer/structures.ts:311](https://github.com/livechat/lc-sdk-js/blob/228cb10/src/customer/structures.ts#L311)*

Informs that a Customer was disconnected. The payload contains the reason of Customer's disconnection.

___

###  CustomerPageUpdated

• **CustomerPageUpdated**: = "customer_page_updated"

*Defined in [src/customer/structures.ts:301](https://github.com/livechat/lc-sdk-js/blob/228cb10/src/customer/structures.ts#L301)*

Informs that a Customer moved to another page of the website.

___

###  CustomerSideStorageUpdated

• **CustomerSideStorageUpdated**: = "customer_side_storage_updated"

*Defined in [src/customer/structures.ts:306](https://github.com/livechat/lc-sdk-js/blob/228cb10/src/customer/structures.ts#L306)*

Informs that a Customer updated the data stored on their side.

___

###  CustomerUpdated

• **CustomerUpdated**: = "customer_updated"

*Defined in [src/customer/structures.ts:296](https://github.com/livechat/lc-sdk-js/blob/228cb10/src/customer/structures.ts#L296)*

Informs that Customer's data was updated.

___

###  EventPropertiesDeleted

• **EventPropertiesDeleted**: = "event_properties_deleted"

*Defined in [src/customer/structures.ts:291](https://github.com/livechat/lc-sdk-js/blob/228cb10/src/customer/structures.ts#L291)*

Informs about those event properties that were deleted.

___

###  EventPropertiesUpdated

• **EventPropertiesUpdated**: = "event_properties_updated"

*Defined in [src/customer/structures.ts:286](https://github.com/livechat/lc-sdk-js/blob/228cb10/src/customer/structures.ts#L286)*

Informs about those event properties that were updated.

___

###  EventUpdated

• **EventUpdated**: = "event_updated"

*Defined in [src/customer/structures.ts:255](https://github.com/livechat/lc-sdk-js/blob/228cb10/src/customer/structures.ts#L255)*

Informs that an event was updated.

___

###  EventsMarkedAsSeen

• **EventsMarkedAsSeen**: = "events_marked_as_seen"

*Defined in [src/customer/structures.ts:323](https://github.com/livechat/lc-sdk-js/blob/228cb10/src/customer/structures.ts#L323)*

Informs that a user has seen events up to a specific time.

___

###  GreetingAccepted

• **GreetingAccepted**: = "greeting_accepted"

*Defined in [src/customer/structures.ts:338](https://github.com/livechat/lc-sdk-js/blob/228cb10/src/customer/structures.ts#L338)*

Informs about a greeting accepted by the Customer.

___

###  GreetingCancelled

• **GreetingCancelled**: = "greeting_cancelled"

*Defined in [src/customer/structures.ts:344](https://github.com/livechat/lc-sdk-js/blob/228cb10/src/customer/structures.ts#L344)*

Informs about a greeting rejected by the Customer.
Also, the push is sent when a new greeting automatically cancels the currently displayed one.

___

###  IncomingChat

• **IncomingChat**: = "incoming_chat"

*Defined in [src/customer/structures.ts:223](https://github.com/livechat/lc-sdk-js/blob/228cb10/src/customer/structures.ts#L223)*

Informs about a chat coming with a new thread. The push payload contains the whole chat data structure.
If the chat was started with some initial events, the thread object contains them.

___

###  IncomingEvent

• **IncomingEvent**: = "incoming_event"

*Defined in [src/customer/structures.ts:250](https://github.com/livechat/lc-sdk-js/blob/228cb10/src/customer/structures.ts#L250)*

Informs about an incoming event sent to a chat.

___

###  IncomingGreeting

• **IncomingGreeting**: = "incoming_greeting"

*Defined in [src/customer/structures.ts:333](https://github.com/livechat/lc-sdk-js/blob/228cb10/src/customer/structures.ts#L333)*

Informs about an incoming greeting.

___

###  IncomingMulticast

• **IncomingMulticast**: = "incoming_multicast"

*Defined in [src/customer/structures.ts:328](https://github.com/livechat/lc-sdk-js/blob/228cb10/src/customer/structures.ts#L328)*

Informs about messages sent via the multicast method or by the system.

___

###  IncomingRichMessagePostback

• **IncomingRichMessagePostback**: = "incoming_rich_message_postback"

*Defined in [src/customer/structures.ts:261](https://github.com/livechat/lc-sdk-js/blob/228cb10/src/customer/structures.ts#L261)*

Informs about an incoming rich message postback. The push payload contains the info on the postback itself,
as well as the chat it was sent in.

___

###  IncomingTypingIndicator

• **IncomingTypingIndicator**: = "incoming_typing_indicator"

*Defined in [src/customer/structures.ts:318](https://github.com/livechat/lc-sdk-js/blob/228cb10/src/customer/structures.ts#L318)*

Informs that one of the chat users is currently typing a message. The message hasn't been sent yet.
The push payload contains the typing indicator object.

**`param`** callback

___

###  QueuePostitionUpdated

• **QueuePostitionUpdated**: = "queue_postition_updated"

*Defined in [src/customer/structures.ts:349](https://github.com/livechat/lc-sdk-js/blob/228cb10/src/customer/structures.ts#L349)*

Informs about an updated position in the queue and about the wait time.

___

###  ThreadPropertiesDeleted

• **ThreadPropertiesDeleted**: = "thread_properties_deleted"

*Defined in [src/customer/structures.ts:281](https://github.com/livechat/lc-sdk-js/blob/228cb10/src/customer/structures.ts#L281)*

Informs about those thread properties that were deleted.

___

###  ThreadPropertiesUpdated

• **ThreadPropertiesUpdated**: = "thread_properties_updated"

*Defined in [src/customer/structures.ts:276](https://github.com/livechat/lc-sdk-js/blob/228cb10/src/customer/structures.ts#L276)*

Informs about those thread properties that were updated.

___

###  UserAddedToChat

• **UserAddedToChat**: = "user_added_to_chat"

*Defined in [src/customer/structures.ts:240](https://github.com/livechat/lc-sdk-js/blob/228cb10/src/customer/structures.ts#L240)*

Informs that a user (Customer or Agent) was added to a chat.
This push can be emitted with user.present set to false when a user writes to a chat without joining it
You can achieve that via the Send Event method.

___

###  UserRemovedFromChat

• **UserRemovedFromChat**: = "user_removed_from_chat"

*Defined in [src/customer/structures.ts:245](https://github.com/livechat/lc-sdk-js/blob/228cb10/src/customer/structures.ts#L245)*

Informs that a user (Customer or Agent) was removed from a chat.
