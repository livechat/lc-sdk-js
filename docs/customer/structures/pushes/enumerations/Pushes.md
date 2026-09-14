[**@livechat/lc-sdk-js**](../../../../README.md)

***

[@livechat/lc-sdk-js](../../../../README.md) / [customer/structures/pushes](../README.md) / Pushes

# Enumeration: Pushes

Defined in: [customer/structures/pushes.ts:1](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/customer/structures/pushes.ts#L1)

## Enumeration Members

### ChatDeactivated

> **ChatDeactivated**: `"chat_deactivated"`

Defined in: [customer/structures/pushes.ts:11](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/customer/structures/pushes.ts#L11)

Informs that a chat was deactivated by closing the currently open thread.

***

### ChatPropertiesDeleted

> **ChatPropertiesDeleted**: `"chat_properties_deleted"`

Defined in: [customer/structures/pushes.ts:64](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/customer/structures/pushes.ts#L64)

Informs about those chat properties that were deleted.

***

### ChatPropertiesUpdated

> **ChatPropertiesUpdated**: `"chat_properties_updated"`

Defined in: [customer/structures/pushes.ts:59](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/customer/structures/pushes.ts#L59)

Informs about those chat properties that were updated.

***

### ChatTransferred

> **ChatTransferred**: `"chat_transferred"`

Defined in: [customer/structures/pushes.ts:16](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/customer/structures/pushes.ts#L16)

Informs that a chat was transferred to a different group or to an Agent.

***

### CustomerDisconnected

> **CustomerDisconnected**: `"customer_disconnected"`

Defined in: [customer/structures/pushes.ts:104](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/customer/structures/pushes.ts#L104)

Informs that a Customer was disconnected. The payload contains the reason of Customer's disconnection.

***

### CustomerPageUpdated

> **CustomerPageUpdated**: `"customer_page_updated"`

Defined in: [customer/structures/pushes.ts:94](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/customer/structures/pushes.ts#L94)

Informs that a Customer moved to another page of the website.

***

### CustomerSideStorageUpdated

> **CustomerSideStorageUpdated**: `"customer_side_storage_updated"`

Defined in: [customer/structures/pushes.ts:99](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/customer/structures/pushes.ts#L99)

Informs that a Customer updated the data stored on their side.

***

### CustomerUpdated

> **CustomerUpdated**: `"customer_updated"`

Defined in: [customer/structures/pushes.ts:89](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/customer/structures/pushes.ts#L89)

Informs that Customer's data was updated.

***

### EventDeleted

> **EventDeleted**: `"event_deleted"`

Defined in: [customer/structures/pushes.ts:48](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/customer/structures/pushes.ts#L48)

Informs that an event was deleted.

***

### EventPropertiesDeleted

> **EventPropertiesDeleted**: `"event_properties_deleted"`

Defined in: [customer/structures/pushes.ts:84](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/customer/structures/pushes.ts#L84)

Informs about those event properties that were deleted.

***

### EventPropertiesUpdated

> **EventPropertiesUpdated**: `"event_properties_updated"`

Defined in: [customer/structures/pushes.ts:79](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/customer/structures/pushes.ts#L79)

Informs about those event properties that were updated.

***

### EventsMarkedAsSeen

> **EventsMarkedAsSeen**: `"events_marked_as_seen"`

Defined in: [customer/structures/pushes.ts:121](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/customer/structures/pushes.ts#L121)

Informs that a user has seen events up to a specific time.

***

### EventUpdated

> **EventUpdated**: `"event_updated"`

Defined in: [customer/structures/pushes.ts:43](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/customer/structures/pushes.ts#L43)

Informs that an event was updated.

***

### GreetingAccepted

> **GreetingAccepted**: `"greeting_accepted"`

Defined in: [customer/structures/pushes.ts:136](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/customer/structures/pushes.ts#L136)

Informs about a greeting accepted by the Customer.

***

### GreetingCancelled

> **GreetingCancelled**: `"greeting_cancelled"`

Defined in: [customer/structures/pushes.ts:142](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/customer/structures/pushes.ts#L142)

Informs about a greeting rejected by the Customer.
Also, the push is sent when a new greeting automatically cancels the currently displayed one.

***

### IncomingChat

> **IncomingChat**: `"incoming_chat"`

Defined in: [customer/structures/pushes.ts:6](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/customer/structures/pushes.ts#L6)

Informs about a chat coming with a new thread. The push payload contains the whole chat data structure.
If the chat was started with some initial events, the thread object contains them.

***

### IncomingEvent

> **IncomingEvent**: `"incoming_event"`

Defined in: [customer/structures/pushes.ts:38](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/customer/structures/pushes.ts#L38)

Informs about an incoming event sent to a chat.

***

### IncomingEventPreview

> **IncomingEventPreview**: `"incoming_event_preview"`

Defined in: [customer/structures/pushes.ts:33](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/customer/structures/pushes.ts#L33)

Informs about an incoming event preview sent to a chat.

***

### IncomingGreeting

> **IncomingGreeting**: `"incoming_greeting"`

Defined in: [customer/structures/pushes.ts:131](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/customer/structures/pushes.ts#L131)

Informs about an incoming greeting.

***

### IncomingMulticast

> **IncomingMulticast**: `"incoming_multicast"`

Defined in: [customer/structures/pushes.ts:126](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/customer/structures/pushes.ts#L126)

Informs about messages sent via the multicast method or by the system.

***

### IncomingRichMessagePostback

> **IncomingRichMessagePostback**: `"incoming_rich_message_postback"`

Defined in: [customer/structures/pushes.ts:54](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/customer/structures/pushes.ts#L54)

Informs about an incoming rich message postback. The push payload contains the info on the postback itself,
as well as the chat it was sent in.

***

### IncomingThinkingIndicator

> **IncomingThinkingIndicator**: `"incoming_thinking_indicator"`

Defined in: [customer/structures/pushes.ts:109](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/customer/structures/pushes.ts#L109)

Informs that one of the chat users is currently preparing a response. The message hasn't been sent yet.

***

### IncomingTypingIndicator

> **IncomingTypingIndicator**: `"incoming_typing_indicator"`

Defined in: [customer/structures/pushes.ts:116](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/customer/structures/pushes.ts#L116)

Informs that one of the chat users is currently typing a message. The message hasn't been sent yet.
The push payload contains the typing indicator object.

#### Param

**cb**

callback

***

### IncomingWelcomeMessage

> **IncomingWelcomeMessage**: `"incoming_welcome_message"`

Defined in: [customer/structures/pushes.ts:152](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/customer/structures/pushes.ts#L152)

Informs about an incoming welcome message.

***

### QueuePostitionUpdated

> **QueuePostitionUpdated**: `"queue_postition_updated"`

Defined in: [customer/structures/pushes.ts:147](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/customer/structures/pushes.ts#L147)

Informs about an updated position in the queue and about the wait time.

***

### ThreadPropertiesDeleted

> **ThreadPropertiesDeleted**: `"thread_properties_deleted"`

Defined in: [customer/structures/pushes.ts:74](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/customer/structures/pushes.ts#L74)

Informs about those thread properties that were deleted.

***

### ThreadPropertiesUpdated

> **ThreadPropertiesUpdated**: `"thread_properties_updated"`

Defined in: [customer/structures/pushes.ts:69](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/customer/structures/pushes.ts#L69)

Informs about those thread properties that were updated.

***

### UserAddedToChat

> **UserAddedToChat**: `"user_added_to_chat"`

Defined in: [customer/structures/pushes.ts:23](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/customer/structures/pushes.ts#L23)

Informs that a user (Customer or Agent) was added to a chat.
This push can be emitted with user.present set to false when a user writes to a chat without joining it
You can achieve that via the Send Event method.

***

### UserRemovedFromChat

> **UserRemovedFromChat**: `"user_removed_from_chat"`

Defined in: [customer/structures/pushes.ts:28](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/customer/structures/pushes.ts#L28)

Informs that a user (Customer or Agent) was removed from a chat.
