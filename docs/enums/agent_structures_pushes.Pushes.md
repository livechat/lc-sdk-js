[@livechat/lc-sdk-js](../README.md) / [agent/structures/pushes](../modules/agent_structures_pushes.md) / Pushes

# Enumeration: Pushes

[agent/structures/pushes](../modules/agent_structures_pushes.md).Pushes

## Table of contents

### Enumeration Members

- [AgentDisconnected](agent_structures_pushes.Pushes.md#agentdisconnected)
- [ChatAccessGranted](agent_structures_pushes.Pushes.md#chataccessgranted)
- [ChatAccessRevoked](agent_structures_pushes.Pushes.md#chataccessrevoked)
- [ChatDeactivated](agent_structures_pushes.Pushes.md#chatdeactivated)
- [ChatPropertiesDeleted](agent_structures_pushes.Pushes.md#chatpropertiesdeleted)
- [ChatPropertiesUpdated](agent_structures_pushes.Pushes.md#chatpropertiesupdated)
- [ChatTransferred](agent_structures_pushes.Pushes.md#chattransferred)
- [ChatUnfollowed](agent_structures_pushes.Pushes.md#chatunfollowed)
- [CustomerBanned](agent_structures_pushes.Pushes.md#customerbanned)
- [CustomerCreated](agent_structures_pushes.Pushes.md#customercreated)
- [CustomerLeft](agent_structures_pushes.Pushes.md#customerleft)
- [CustomerPageUpdated](agent_structures_pushes.Pushes.md#customerpageupdated)
- [CustomerUnfollowed](agent_structures_pushes.Pushes.md#customerunfollowed)
- [CustomerUpdated](agent_structures_pushes.Pushes.md#customerupdated)
- [CustomerVisitEnded](agent_structures_pushes.Pushes.md#customervisitended)
- [CustomerVisitStarted](agent_structures_pushes.Pushes.md#customervisitstarted)
- [EventPropertiesDeleted](agent_structures_pushes.Pushes.md#eventpropertiesdeleted)
- [EventPropertiesUpdated](agent_structures_pushes.Pushes.md#eventpropertiesupdated)
- [EventUpdated](agent_structures_pushes.Pushes.md#eventupdated)
- [EventsMarkedAsSeen](agent_structures_pushes.Pushes.md#eventsmarkedasseen)
- [IncomingChat](agent_structures_pushes.Pushes.md#incomingchat)
- [IncomingCustomer](agent_structures_pushes.Pushes.md#incomingcustomer)
- [IncomingCustomers](agent_structures_pushes.Pushes.md#incomingcustomers)
- [IncomingEvent](agent_structures_pushes.Pushes.md#incomingevent)
- [IncomingMulticast](agent_structures_pushes.Pushes.md#incomingmulticast)
- [IncomingRichMessagePostback](agent_structures_pushes.Pushes.md#incomingrichmessagepostback)
- [IncomingSneakPeek](agent_structures_pushes.Pushes.md#incomingsneakpeek)
- [IncomingTypingIndicator](agent_structures_pushes.Pushes.md#incomingtypingindicator)
- [QueuePositionsUpdated](agent_structures_pushes.Pushes.md#queuepositionsupdated)
- [RoutingStatusSet](agent_structures_pushes.Pushes.md#routingstatusset)
- [ThreadPropertiesDeleted](agent_structures_pushes.Pushes.md#threadpropertiesdeleted)
- [ThreadPropertiesUpdated](agent_structures_pushes.Pushes.md#threadpropertiesupdated)
- [ThreadTagged](agent_structures_pushes.Pushes.md#threadtagged)
- [ThreadUntagged](agent_structures_pushes.Pushes.md#threaduntagged)
- [UserAddedToChat](agent_structures_pushes.Pushes.md#useraddedtochat)
- [UserRemovedFromChat](agent_structures_pushes.Pushes.md#userremovedfromchat)

## Enumeration Members

### AgentDisconnected

• **AgentDisconnected** = ``"agent_disconnected"``

Informs that an Agent was disconnected. The payload contains the reason of Customer's disconnection.

#### Defined in

[agent/structures/pushes.ts:142](https://github.com/livechat/lc-sdk-js/blob/d267eeb/src/agent/structures/pushes.ts#L142)

___

### ChatAccessGranted

• **ChatAccessGranted** = ``"chat_access_granted"``

Informs that new, single access to a chat was granted. The existing access isn't overwritten.

#### Defined in

[agent/structures/pushes.ts:24](https://github.com/livechat/lc-sdk-js/blob/d267eeb/src/agent/structures/pushes.ts#L24)

___

### ChatAccessRevoked

• **ChatAccessRevoked** = ``"chat_access_revoked"``

Informs that access to a certain chat was revoked.

#### Defined in

[agent/structures/pushes.ts:29](https://github.com/livechat/lc-sdk-js/blob/d267eeb/src/agent/structures/pushes.ts#L29)

___

### ChatDeactivated

• **ChatDeactivated** = ``"chat_deactivated"``

Informs that a chat was deactivated by closing the currently open thread.

#### Defined in

[agent/structures/pushes.ts:19](https://github.com/livechat/lc-sdk-js/blob/d267eeb/src/agent/structures/pushes.ts#L19)

___

### ChatPropertiesDeleted

• **ChatPropertiesDeleted** = ``"chat_properties_deleted"``

Informs about those chat properties that were deleted.

#### Defined in

[agent/structures/pushes.ts:72](https://github.com/livechat/lc-sdk-js/blob/d267eeb/src/agent/structures/pushes.ts#L72)

___

### ChatPropertiesUpdated

• **ChatPropertiesUpdated** = ``"chat_properties_updated"``

Informs about those chat properties that were updated.

#### Defined in

[agent/structures/pushes.ts:67](https://github.com/livechat/lc-sdk-js/blob/d267eeb/src/agent/structures/pushes.ts#L67)

___

### ChatTransferred

• **ChatTransferred** = ``"chat_transferred"``

Informs that a chat was transferred to a different group or to an Agent.

#### Defined in

[agent/structures/pushes.ts:34](https://github.com/livechat/lc-sdk-js/blob/d267eeb/src/agent/structures/pushes.ts#L34)

___

### ChatUnfollowed

• **ChatUnfollowed** = ``"chat_unfollowed"``

Informs that a chat has been unfollowed. Useful in multiple connection scenarios,
where one app/integration needs to know that another one unfollowed the chat.

#### Defined in

[agent/structures/pushes.ts:169](https://github.com/livechat/lc-sdk-js/blob/d267eeb/src/agent/structures/pushes.ts#L169)

___

### CustomerBanned

• **CustomerBanned** = ``"customer_banned"``

Informs that a Customer was banned for a specified number of days.

#### Defined in

[agent/structures/pushes.ts:127](https://github.com/livechat/lc-sdk-js/blob/d267eeb/src/agent/structures/pushes.ts#L127)

___

### CustomerCreated

• **CustomerCreated** = ``"customer_created"``

Informs that a new Customer registered.

#### Defined in

[agent/structures/pushes.ts:112](https://github.com/livechat/lc-sdk-js/blob/d267eeb/src/agent/structures/pushes.ts#L112)

___

### CustomerLeft

• **CustomerLeft** = ``"customer_left"``

Informs that a Customer left the tracked website.

#### Defined in

[agent/structures/pushes.ts:189](https://github.com/livechat/lc-sdk-js/blob/d267eeb/src/agent/structures/pushes.ts#L189)

___

### CustomerPageUpdated

• **CustomerPageUpdated** = ``"customer_page_updated"``

Informs that a Customer moved to another page of the website.

#### Defined in

[agent/structures/pushes.ts:122](https://github.com/livechat/lc-sdk-js/blob/d267eeb/src/agent/structures/pushes.ts#L122)

___

### CustomerUnfollowed

• **CustomerUnfollowed** = ``"customer_unfollowed"``

Informs that a customer was unfollowed.

#### Defined in

[agent/structures/pushes.ts:194](https://github.com/livechat/lc-sdk-js/blob/d267eeb/src/agent/structures/pushes.ts#L194)

___

### CustomerUpdated

• **CustomerUpdated** = ``"customer_updated"``

Informs that Customer's data was updated.

#### Defined in

[agent/structures/pushes.ts:117](https://github.com/livechat/lc-sdk-js/blob/d267eeb/src/agent/structures/pushes.ts#L117)

___

### CustomerVisitEnded

• **CustomerVisitEnded** = ``"customer_visit_ended"``

Informs that a Customer left the tracked website.

#### Defined in

[agent/structures/pushes.ts:132](https://github.com/livechat/lc-sdk-js/blob/d267eeb/src/agent/structures/pushes.ts#L132)

___

### CustomerVisitStarted

• **CustomerVisitStarted** = ``"customer_visit_started"``

Informs that a Customer entered the tracked website.

#### Defined in

[agent/structures/pushes.ts:107](https://github.com/livechat/lc-sdk-js/blob/d267eeb/src/agent/structures/pushes.ts#L107)

___

### EventPropertiesDeleted

• **EventPropertiesDeleted** = ``"event_properties_deleted"``

Informs about those event properties that were deleted.

#### Defined in

[agent/structures/pushes.ts:92](https://github.com/livechat/lc-sdk-js/blob/d267eeb/src/agent/structures/pushes.ts#L92)

___

### EventPropertiesUpdated

• **EventPropertiesUpdated** = ``"event_properties_updated"``

Informs about those event properties that were updated.

#### Defined in

[agent/structures/pushes.ts:87](https://github.com/livechat/lc-sdk-js/blob/d267eeb/src/agent/structures/pushes.ts#L87)

___

### EventUpdated

• **EventUpdated** = ``"event_updated"``

Informs that an event was updated.

#### Defined in

[agent/structures/pushes.ts:56](https://github.com/livechat/lc-sdk-js/blob/d267eeb/src/agent/structures/pushes.ts#L56)

___

### EventsMarkedAsSeen

• **EventsMarkedAsSeen** = ``"events_marked_as_seen"``

Informs that a user has seen events up to a specific time.

#### Defined in

[agent/structures/pushes.ts:158](https://github.com/livechat/lc-sdk-js/blob/d267eeb/src/agent/structures/pushes.ts#L158)

___

### IncomingChat

• **IncomingChat** = ``"incoming_chat"``

Informs about a chat coming with a new thread. The push payload contains the whole chat data structure.
If the chat was started with some initial events, the thread object contains them.

#### Defined in

[agent/structures/pushes.ts:14](https://github.com/livechat/lc-sdk-js/blob/d267eeb/src/agent/structures/pushes.ts#L14)

___

### IncomingCustomer

• **IncomingCustomer** = ``"incoming_customer"``

Informs that a new or returning customer is available to the agent.

#### Defined in

[agent/structures/pushes.ts:184](https://github.com/livechat/lc-sdk-js/blob/d267eeb/src/agent/structures/pushes.ts#L184)

___

### IncomingCustomers

• **IncomingCustomers** = ``"incoming_customers"``

Informs about customers the agent should be aware of.

#### Defined in

[agent/structures/pushes.ts:179](https://github.com/livechat/lc-sdk-js/blob/d267eeb/src/agent/structures/pushes.ts#L179)

___

### IncomingEvent

• **IncomingEvent** = ``"incoming_event"``

Informs about an incoming event sent to a chat.

#### Defined in

[agent/structures/pushes.ts:51](https://github.com/livechat/lc-sdk-js/blob/d267eeb/src/agent/structures/pushes.ts#L51)

___

### IncomingMulticast

• **IncomingMulticast** = ``"incoming_multicast"``

Informs about messages sent via the multicast method or by the system.

#### Defined in

[agent/structures/pushes.ts:163](https://github.com/livechat/lc-sdk-js/blob/d267eeb/src/agent/structures/pushes.ts#L163)

___

### IncomingRichMessagePostback

• **IncomingRichMessagePostback** = ``"incoming_rich_message_postback"``

Informs about an incoming rich message postback. The push payload contains the info on the postback itself,
as well as the chat it was sent in.

#### Defined in

[agent/structures/pushes.ts:62](https://github.com/livechat/lc-sdk-js/blob/d267eeb/src/agent/structures/pushes.ts#L62)

___

### IncomingSneakPeek

• **IncomingSneakPeek** = ``"incoming_sneak_peek"``

Informs about the message a Customer is currently typing. The push payload contains the sneak peek object.

#### Defined in

[agent/structures/pushes.ts:153](https://github.com/livechat/lc-sdk-js/blob/d267eeb/src/agent/structures/pushes.ts#L153)

___

### IncomingTypingIndicator

• **IncomingTypingIndicator** = ``"incoming_typing_indicator"``

Informs that one of the chat users is currently typing a message. The message hasn't been sent yet.
The push payload contains the typing indicator object.

#### Defined in

[agent/structures/pushes.ts:148](https://github.com/livechat/lc-sdk-js/blob/d267eeb/src/agent/structures/pushes.ts#L148)

___

### QueuePositionsUpdated

• **QueuePositionsUpdated** = ``"queue_positions_updated"``

New positions and wait times for queued chats.

#### Defined in

[agent/structures/pushes.ts:174](https://github.com/livechat/lc-sdk-js/blob/d267eeb/src/agent/structures/pushes.ts#L174)

___

### RoutingStatusSet

• **RoutingStatusSet** = ``"routing_status_set"``

Informs that an Agent's or Bot Agent's status was changed.

#### Defined in

[agent/structures/pushes.ts:137](https://github.com/livechat/lc-sdk-js/blob/d267eeb/src/agent/structures/pushes.ts#L137)

___

### ThreadPropertiesDeleted

• **ThreadPropertiesDeleted** = ``"thread_properties_deleted"``

Informs about those thread properties that were deleted.

#### Defined in

[agent/structures/pushes.ts:82](https://github.com/livechat/lc-sdk-js/blob/d267eeb/src/agent/structures/pushes.ts#L82)

___

### ThreadPropertiesUpdated

• **ThreadPropertiesUpdated** = ``"thread_properties_updated"``

Informs about those thread properties that were updated.

#### Defined in

[agent/structures/pushes.ts:77](https://github.com/livechat/lc-sdk-js/blob/d267eeb/src/agent/structures/pushes.ts#L77)

___

### ThreadTagged

• **ThreadTagged** = ``"thread_tagged"``

Informs that a chat thread was tagged.

#### Defined in

[agent/structures/pushes.ts:97](https://github.com/livechat/lc-sdk-js/blob/d267eeb/src/agent/structures/pushes.ts#L97)

___

### ThreadUntagged

• **ThreadUntagged** = ``"thread_untagged"``

Informs that a chat thread was untagged.

#### Defined in

[agent/structures/pushes.ts:102](https://github.com/livechat/lc-sdk-js/blob/d267eeb/src/agent/structures/pushes.ts#L102)

___

### UserAddedToChat

• **UserAddedToChat** = ``"user_added_to_chat"``

Informs that a user (Customer or Agent) was added to a chat.
This push can be emitted with user.present set to false when a user writes to a chat without joining it
You can achieve that via the Send Event method.

#### Defined in

[agent/structures/pushes.ts:41](https://github.com/livechat/lc-sdk-js/blob/d267eeb/src/agent/structures/pushes.ts#L41)

___

### UserRemovedFromChat

• **UserRemovedFromChat** = ``"user_removed_from_chat"``

Informs that a user (Customer or Agent) was removed from a chat.

#### Defined in

[agent/structures/pushes.ts:46](https://github.com/livechat/lc-sdk-js/blob/d267eeb/src/agent/structures/pushes.ts#L46)
