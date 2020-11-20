[@livechat/lc-sdk-js](../README.md) › [Globals](../globals.md) › ["src/agent/structures"](../modules/_src_agent_structures_.md) › [Pushes](_src_agent_structures_.pushes.md)

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

*Defined in [src/agent/structures.ts:435](https://github.com/livechat/lc-sdk-js/blob/e25bbbb/src/agent/structures.ts#L435)*

Informs that an Agent was disconnected. The payload contains the reason of Customer's disconnection.

___

###  ChatAccessGranted

• **ChatAccessGranted**: = "chat_access_granted"

*Defined in [src/agent/structures.ts:317](https://github.com/livechat/lc-sdk-js/blob/e25bbbb/src/agent/structures.ts#L317)*

Informs that new, single access to a chat was granted. The existing access isn't overwritten.

___

###  ChatAccessRevoked

• **ChatAccessRevoked**: = "chat_access_revoked"

*Defined in [src/agent/structures.ts:322](https://github.com/livechat/lc-sdk-js/blob/e25bbbb/src/agent/structures.ts#L322)*

Informs that access to a certain chat was revoked.

___

###  ChatDeactivated

• **ChatDeactivated**: = "chat_deactivated"

*Defined in [src/agent/structures.ts:312](https://github.com/livechat/lc-sdk-js/blob/e25bbbb/src/agent/structures.ts#L312)*

Informs that a chat was deactivated by closing the currently open thread.

___

###  ChatPropertiesDeleted

• **ChatPropertiesDeleted**: = "chat_properties_deleted"

*Defined in [src/agent/structures.ts:365](https://github.com/livechat/lc-sdk-js/blob/e25bbbb/src/agent/structures.ts#L365)*

Informs about those chat properties that were deleted.

___

###  ChatPropertiesUpdated

• **ChatPropertiesUpdated**: = "chat_properties_updated"

*Defined in [src/agent/structures.ts:360](https://github.com/livechat/lc-sdk-js/blob/e25bbbb/src/agent/structures.ts#L360)*

Informs about those chat properties that were updated.

___

###  ChatTransferred

• **ChatTransferred**: = "chat_transferred"

*Defined in [src/agent/structures.ts:327](https://github.com/livechat/lc-sdk-js/blob/e25bbbb/src/agent/structures.ts#L327)*

Informs that a chat was transferred to a different group or to an Agent.

___

###  ChatUnfollowed

• **ChatUnfollowed**: = "chat_unfollowed"

*Defined in [src/agent/structures.ts:462](https://github.com/livechat/lc-sdk-js/blob/e25bbbb/src/agent/structures.ts#L462)*

Informs that a chat has been unfollowed. Useful in multiple connection scenarios,
where one app/integration needs to know that another one unfollowed the chat.

___

###  CustomerBanned

• **CustomerBanned**: = "customer_banned"

*Defined in [src/agent/structures.ts:420](https://github.com/livechat/lc-sdk-js/blob/e25bbbb/src/agent/structures.ts#L420)*

Informs that a Customer was banned for a specified number of days.

___

###  CustomerCreated

• **CustomerCreated**: = "customer_created"

*Defined in [src/agent/structures.ts:405](https://github.com/livechat/lc-sdk-js/blob/e25bbbb/src/agent/structures.ts#L405)*

Informs that a new Customer registered.

___

###  CustomerPageUpdated

• **CustomerPageUpdated**: = "customer_page_updated"

*Defined in [src/agent/structures.ts:415](https://github.com/livechat/lc-sdk-js/blob/e25bbbb/src/agent/structures.ts#L415)*

Informs that a Customer moved to another page of the website.

___

###  CustomerUpdated

• **CustomerUpdated**: = "customer_updated"

*Defined in [src/agent/structures.ts:410](https://github.com/livechat/lc-sdk-js/blob/e25bbbb/src/agent/structures.ts#L410)*

Informs that Customer's data was updated.

___

###  CustomerVisitEnded

• **CustomerVisitEnded**: = "customer_visit_ended"

*Defined in [src/agent/structures.ts:425](https://github.com/livechat/lc-sdk-js/blob/e25bbbb/src/agent/structures.ts#L425)*

Informs that a Customer left the tracked website.

___

###  CustomerVisitStarted

• **CustomerVisitStarted**: = "customer_visit_started"

*Defined in [src/agent/structures.ts:400](https://github.com/livechat/lc-sdk-js/blob/e25bbbb/src/agent/structures.ts#L400)*

Informs that a Customer entered the tracked website.

___

###  EventPropertiesDeleted

• **EventPropertiesDeleted**: = "event_properties_deleted"

*Defined in [src/agent/structures.ts:385](https://github.com/livechat/lc-sdk-js/blob/e25bbbb/src/agent/structures.ts#L385)*

Informs about those event properties that were deleted.

___

###  EventPropertiesUpdated

• **EventPropertiesUpdated**: = "event_properties_updated"

*Defined in [src/agent/structures.ts:380](https://github.com/livechat/lc-sdk-js/blob/e25bbbb/src/agent/structures.ts#L380)*

Informs about those event properties that were updated.

___

###  EventUpdated

• **EventUpdated**: = "event_updated"

*Defined in [src/agent/structures.ts:349](https://github.com/livechat/lc-sdk-js/blob/e25bbbb/src/agent/structures.ts#L349)*

Informs that an event was updated.

___

###  EventsMarkedAsSeen

• **EventsMarkedAsSeen**: = "events_marked_as_seen"

*Defined in [src/agent/structures.ts:451](https://github.com/livechat/lc-sdk-js/blob/e25bbbb/src/agent/structures.ts#L451)*

Informs that a user has seen events up to a specific time.

___

###  IncomingChat

• **IncomingChat**: = "incoming_chat"

*Defined in [src/agent/structures.ts:307](https://github.com/livechat/lc-sdk-js/blob/e25bbbb/src/agent/structures.ts#L307)*

Informs about a chat coming with a new thread. The push payload contains the whole chat data structure.
If the chat was started with some initial events, the thread object contains them.

___

###  IncomingEvent

• **IncomingEvent**: = "incoming_event"

*Defined in [src/agent/structures.ts:344](https://github.com/livechat/lc-sdk-js/blob/e25bbbb/src/agent/structures.ts#L344)*

Informs about an incoming event sent to a chat.

___

###  IncomingMulticast

• **IncomingMulticast**: = "incoming_multicast"

*Defined in [src/agent/structures.ts:456](https://github.com/livechat/lc-sdk-js/blob/e25bbbb/src/agent/structures.ts#L456)*

Informs about messages sent via the multicast method or by the system.

___

###  IncomingRichMessagePostback

• **IncomingRichMessagePostback**: = "incoming_rich_message_postback"

*Defined in [src/agent/structures.ts:355](https://github.com/livechat/lc-sdk-js/blob/e25bbbb/src/agent/structures.ts#L355)*

Informs about an incoming rich message postback. The push payload contains the info on the postback itself,
as well as the chat it was sent in.

___

###  IncomingSneakPeek

• **IncomingSneakPeek**: = "incoming_sneak_peek"

*Defined in [src/agent/structures.ts:446](https://github.com/livechat/lc-sdk-js/blob/e25bbbb/src/agent/structures.ts#L446)*

Informs about the message a Customer is currently typing. The push payload contains the sneak peek object.

___

###  IncomingTypingIndicator

• **IncomingTypingIndicator**: = "incoming_typing_indicator"

*Defined in [src/agent/structures.ts:441](https://github.com/livechat/lc-sdk-js/blob/e25bbbb/src/agent/structures.ts#L441)*

Informs that one of the chat users is currently typing a message. The message hasn't been sent yet.
The push payload contains the typing indicator object.

___

###  QueuePostitionsUpdated

• **QueuePostitionsUpdated**: = "queue_postitions_updated"

*Defined in [src/agent/structures.ts:467](https://github.com/livechat/lc-sdk-js/blob/e25bbbb/src/agent/structures.ts#L467)*

New positions and wait times for queued chats.

___

###  RoutingStatusSet

• **RoutingStatusSet**: = "routing_status_set"

*Defined in [src/agent/structures.ts:430](https://github.com/livechat/lc-sdk-js/blob/e25bbbb/src/agent/structures.ts#L430)*

Informs that an Agent's or Bot Agent's status was changed.

___

###  ThreadPropertiesDeleted

• **ThreadPropertiesDeleted**: = "thread_properties_deleted"

*Defined in [src/agent/structures.ts:375](https://github.com/livechat/lc-sdk-js/blob/e25bbbb/src/agent/structures.ts#L375)*

Informs about those thread properties that were deleted.

___

###  ThreadPropertiesUpdated

• **ThreadPropertiesUpdated**: = "thread_properties_updated"

*Defined in [src/agent/structures.ts:370](https://github.com/livechat/lc-sdk-js/blob/e25bbbb/src/agent/structures.ts#L370)*

Informs about those thread properties that were updated.

___

###  ThreadTagged

• **ThreadTagged**: = "thread_tagged"

*Defined in [src/agent/structures.ts:390](https://github.com/livechat/lc-sdk-js/blob/e25bbbb/src/agent/structures.ts#L390)*

Informs that a chat thread was tagged.

___

###  ThreadUntagged

• **ThreadUntagged**: = "thread_untagged"

*Defined in [src/agent/structures.ts:395](https://github.com/livechat/lc-sdk-js/blob/e25bbbb/src/agent/structures.ts#L395)*

Informs that a chat thread was untagged.

___

###  UserAddedToChat

• **UserAddedToChat**: = "user_added_to_chat"

*Defined in [src/agent/structures.ts:334](https://github.com/livechat/lc-sdk-js/blob/e25bbbb/src/agent/structures.ts#L334)*

Informs that a user (Customer or Agent) was added to a chat.
This push can be emitted with user.present set to false when a user writes to a chat without joining it
You can achieve that via the Send Event method.

___

###  UserRemovedFromChat

• **UserRemovedFromChat**: = "user_removed_from_chat"

*Defined in [src/agent/structures.ts:339](https://github.com/livechat/lc-sdk-js/blob/e25bbbb/src/agent/structures.ts#L339)*

Informs that a user (Customer or Agent) was removed from a chat.
