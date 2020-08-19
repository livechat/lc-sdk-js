[lc-sdk-js](../README.md) › [Globals](../globals.md) › ["src/agent/structures"](../modules/_src_agent_structures_.md) › [Pushes](_src_agent_structures_.pushes.md)

# Enumeration: Pushes

## Index

### Enumeration members

* [AgentDisconnected](_src_agent_structures_.pushes.md#agentdisconnected)
* [ChatAccessGranted](_src_agent_structures_.pushes.md#chataccessgranted)
* [ChatAccessRevoked](_src_agent_structures_.pushes.md#chataccessrevoked)
* [ChatDeactivated](_src_agent_structures_.pushes.md#chatdeactivated)
* [ChatPropertiesDeleted](_src_agent_structures_.pushes.md#chatpropertiesdeleted)
* [ChatPropertiesUpdated](_src_agent_structures_.pushes.md#chatpropertiesupdated)
* [ChatTransferred](_src_agent_structures_.pushes.md#chattransferred)
* [ChatUnfollowed](_src_agent_structures_.pushes.md#chatunfollowed)
* [CustomerBanned](_src_agent_structures_.pushes.md#customerbanned)
* [CustomerCreated](_src_agent_structures_.pushes.md#customercreated)
* [CustomerPageUpdated](_src_agent_structures_.pushes.md#customerpageupdated)
* [CustomerUpdated](_src_agent_structures_.pushes.md#customerupdated)
* [CustomerVisitEnded](_src_agent_structures_.pushes.md#customervisitended)
* [CustomerVisitStarted](_src_agent_structures_.pushes.md#customervisitstarted)
* [EventPropertiesDeleted](_src_agent_structures_.pushes.md#eventpropertiesdeleted)
* [EventPropertiesUpdated](_src_agent_structures_.pushes.md#eventpropertiesupdated)
* [EventUpdated](_src_agent_structures_.pushes.md#eventupdated)
* [EventsMarkedAsSeen](_src_agent_structures_.pushes.md#eventsmarkedasseen)
* [IncomingChat](_src_agent_structures_.pushes.md#incomingchat)
* [IncomingEvent](_src_agent_structures_.pushes.md#incomingevent)
* [IncomingMulticast](_src_agent_structures_.pushes.md#incomingmulticast)
* [IncomingRichMessagePostback](_src_agent_structures_.pushes.md#incomingrichmessagepostback)
* [IncomingSneakPeek](_src_agent_structures_.pushes.md#incomingsneakpeek)
* [IncomingTypingIndicator](_src_agent_structures_.pushes.md#incomingtypingindicator)
* [QueuePostitionsUpdated](_src_agent_structures_.pushes.md#queuepostitionsupdated)
* [RoutingStatusSet](_src_agent_structures_.pushes.md#routingstatusset)
* [ThreadPropertiesDeleted](_src_agent_structures_.pushes.md#threadpropertiesdeleted)
* [ThreadPropertiesUpdated](_src_agent_structures_.pushes.md#threadpropertiesupdated)
* [ThreadTagged](_src_agent_structures_.pushes.md#threadtagged)
* [ThreadUntagged](_src_agent_structures_.pushes.md#threaduntagged)
* [UserAddedToChat](_src_agent_structures_.pushes.md#useraddedtochat)
* [UserRemovedFromChat](_src_agent_structures_.pushes.md#userremovedfromchat)

## Enumeration members

###  AgentDisconnected

• **AgentDisconnected**: = "agent_disconnected"

*Defined in [src/agent/structures.ts:423](https://github.com/livechat/lc-sdk-js/blob/38eeefe/src/agent/structures.ts#L423)*

Informs that an Agent was disconnected. The payload contains the reason of Customer's disconnection.

___

###  ChatAccessGranted

• **ChatAccessGranted**: = "chat_access_granted"

*Defined in [src/agent/structures.ts:305](https://github.com/livechat/lc-sdk-js/blob/38eeefe/src/agent/structures.ts#L305)*

Informs that new, single access to a chat was granted. The existing access isn't overwritten.

___

###  ChatAccessRevoked

• **ChatAccessRevoked**: = "chat_access_revoked"

*Defined in [src/agent/structures.ts:310](https://github.com/livechat/lc-sdk-js/blob/38eeefe/src/agent/structures.ts#L310)*

Informs that access to a certain chat was revoked.

___

###  ChatDeactivated

• **ChatDeactivated**: = "chat_deactivated"

*Defined in [src/agent/structures.ts:300](https://github.com/livechat/lc-sdk-js/blob/38eeefe/src/agent/structures.ts#L300)*

Informs that a chat was deactivated by closing the currently open thread.

___

###  ChatPropertiesDeleted

• **ChatPropertiesDeleted**: = "chat_properties_deleted"

*Defined in [src/agent/structures.ts:353](https://github.com/livechat/lc-sdk-js/blob/38eeefe/src/agent/structures.ts#L353)*

Informs about those chat properties that were deleted.

___

###  ChatPropertiesUpdated

• **ChatPropertiesUpdated**: = "chat_properties_updated"

*Defined in [src/agent/structures.ts:348](https://github.com/livechat/lc-sdk-js/blob/38eeefe/src/agent/structures.ts#L348)*

Informs about those chat properties that were updated.

___

###  ChatTransferred

• **ChatTransferred**: = "chat_transferred"

*Defined in [src/agent/structures.ts:315](https://github.com/livechat/lc-sdk-js/blob/38eeefe/src/agent/structures.ts#L315)*

Informs that a chat was transferred to a different group or to an Agent.

___

###  ChatUnfollowed

• **ChatUnfollowed**: = "chat_unfollowed"

*Defined in [src/agent/structures.ts:450](https://github.com/livechat/lc-sdk-js/blob/38eeefe/src/agent/structures.ts#L450)*

Informs that a chat has been unfollowed. Useful in multiple connection scenarios,
where one app/integration needs to know that another one unfollowed the chat.

___

###  CustomerBanned

• **CustomerBanned**: = "customer_banned"

*Defined in [src/agent/structures.ts:408](https://github.com/livechat/lc-sdk-js/blob/38eeefe/src/agent/structures.ts#L408)*

Informs that a Customer was banned for a specified number of days.

___

###  CustomerCreated

• **CustomerCreated**: = "customer_created"

*Defined in [src/agent/structures.ts:393](https://github.com/livechat/lc-sdk-js/blob/38eeefe/src/agent/structures.ts#L393)*

Informs that a new Customer registered.

___

###  CustomerPageUpdated

• **CustomerPageUpdated**: = "customer_page_updated"

*Defined in [src/agent/structures.ts:403](https://github.com/livechat/lc-sdk-js/blob/38eeefe/src/agent/structures.ts#L403)*

Informs that a Customer moved to another page of the website.

___

###  CustomerUpdated

• **CustomerUpdated**: = "customer_updated"

*Defined in [src/agent/structures.ts:398](https://github.com/livechat/lc-sdk-js/blob/38eeefe/src/agent/structures.ts#L398)*

Informs that Customer's data was updated.

___

###  CustomerVisitEnded

• **CustomerVisitEnded**: = "customer_visit_ended"

*Defined in [src/agent/structures.ts:413](https://github.com/livechat/lc-sdk-js/blob/38eeefe/src/agent/structures.ts#L413)*

Informs that a Customer left the tracked website.

___

###  CustomerVisitStarted

• **CustomerVisitStarted**: = "customer_visit_started"

*Defined in [src/agent/structures.ts:388](https://github.com/livechat/lc-sdk-js/blob/38eeefe/src/agent/structures.ts#L388)*

Informs that a Customer entered the tracked website.

___

###  EventPropertiesDeleted

• **EventPropertiesDeleted**: = "event_properties_deleted"

*Defined in [src/agent/structures.ts:373](https://github.com/livechat/lc-sdk-js/blob/38eeefe/src/agent/structures.ts#L373)*

Informs about those event properties that were deleted.

___

###  EventPropertiesUpdated

• **EventPropertiesUpdated**: = "event_properties_updated"

*Defined in [src/agent/structures.ts:368](https://github.com/livechat/lc-sdk-js/blob/38eeefe/src/agent/structures.ts#L368)*

Informs about those event properties that were updated.

___

###  EventUpdated

• **EventUpdated**: = "event_updated"

*Defined in [src/agent/structures.ts:337](https://github.com/livechat/lc-sdk-js/blob/38eeefe/src/agent/structures.ts#L337)*

Informs that an event was updated.

___

###  EventsMarkedAsSeen

• **EventsMarkedAsSeen**: = "events_marked_as_seen"

*Defined in [src/agent/structures.ts:439](https://github.com/livechat/lc-sdk-js/blob/38eeefe/src/agent/structures.ts#L439)*

Informs that a user has seen events up to a specific time.

___

###  IncomingChat

• **IncomingChat**: = "incoming_chat"

*Defined in [src/agent/structures.ts:295](https://github.com/livechat/lc-sdk-js/blob/38eeefe/src/agent/structures.ts#L295)*

Informs about a chat coming with a new thread. The push payload contains the whole chat data structure.
If the chat was started with some initial events, the thread object contains them.

___

###  IncomingEvent

• **IncomingEvent**: = "incoming_event"

*Defined in [src/agent/structures.ts:332](https://github.com/livechat/lc-sdk-js/blob/38eeefe/src/agent/structures.ts#L332)*

Informs about an incoming event sent to a chat.

___

###  IncomingMulticast

• **IncomingMulticast**: = "incoming_multicast"

*Defined in [src/agent/structures.ts:444](https://github.com/livechat/lc-sdk-js/blob/38eeefe/src/agent/structures.ts#L444)*

Informs about messages sent via the multicast method or by the system.

___

###  IncomingRichMessagePostback

• **IncomingRichMessagePostback**: = "incoming_rich_message_postback"

*Defined in [src/agent/structures.ts:343](https://github.com/livechat/lc-sdk-js/blob/38eeefe/src/agent/structures.ts#L343)*

Informs about an incoming rich message postback. The push payload contains the info on the postback itself,
as well as the chat it was sent in.

___

###  IncomingSneakPeek

• **IncomingSneakPeek**: = "incoming_sneak_peek"

*Defined in [src/agent/structures.ts:434](https://github.com/livechat/lc-sdk-js/blob/38eeefe/src/agent/structures.ts#L434)*

Informs about the message a Customer is currently typing. The push payload contains the sneak peek object.

___

###  IncomingTypingIndicator

• **IncomingTypingIndicator**: = "incoming_typing_indicator"

*Defined in [src/agent/structures.ts:429](https://github.com/livechat/lc-sdk-js/blob/38eeefe/src/agent/structures.ts#L429)*

Informs that one of the chat users is currently typing a message. The message hasn't been sent yet.
The push payload contains the typing indicator object.

___

###  QueuePostitionsUpdated

• **QueuePostitionsUpdated**: = "queue_postitions_updated"

*Defined in [src/agent/structures.ts:455](https://github.com/livechat/lc-sdk-js/blob/38eeefe/src/agent/structures.ts#L455)*

New positions and wait times for queued chats.

___

###  RoutingStatusSet

• **RoutingStatusSet**: = "routing_status_set"

*Defined in [src/agent/structures.ts:418](https://github.com/livechat/lc-sdk-js/blob/38eeefe/src/agent/structures.ts#L418)*

Informs that an Agent's or Bot Agent's status was changed.

___

###  ThreadPropertiesDeleted

• **ThreadPropertiesDeleted**: = "thread_properties_deleted"

*Defined in [src/agent/structures.ts:363](https://github.com/livechat/lc-sdk-js/blob/38eeefe/src/agent/structures.ts#L363)*

Informs about those thread properties that were deleted.

___

###  ThreadPropertiesUpdated

• **ThreadPropertiesUpdated**: = "thread_properties_updated"

*Defined in [src/agent/structures.ts:358](https://github.com/livechat/lc-sdk-js/blob/38eeefe/src/agent/structures.ts#L358)*

Informs about those thread properties that were updated.

___

###  ThreadTagged

• **ThreadTagged**: = "thread_tagged"

*Defined in [src/agent/structures.ts:378](https://github.com/livechat/lc-sdk-js/blob/38eeefe/src/agent/structures.ts#L378)*

Informs that a chat thread was tagged.

___

###  ThreadUntagged

• **ThreadUntagged**: = "thread_untagged"

*Defined in [src/agent/structures.ts:383](https://github.com/livechat/lc-sdk-js/blob/38eeefe/src/agent/structures.ts#L383)*

Informs that a chat thread was untagged.

___

###  UserAddedToChat

• **UserAddedToChat**: = "user_added_to_chat"

*Defined in [src/agent/structures.ts:322](https://github.com/livechat/lc-sdk-js/blob/38eeefe/src/agent/structures.ts#L322)*

Informs that a user (Customer or Agent) was added to a chat.
This push can be emitted with user.present set to false when a user writes to a chat without joining it
You can achieve that via the Send Event method.

___

###  UserRemovedFromChat

• **UserRemovedFromChat**: = "user_removed_from_chat"

*Defined in [src/agent/structures.ts:327](https://github.com/livechat/lc-sdk-js/blob/38eeefe/src/agent/structures.ts#L327)*

Informs that a user (Customer or Agent) was removed from a chat.
