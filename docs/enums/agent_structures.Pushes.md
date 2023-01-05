[@livechat/lc-sdk-js](../README.md) / [agent/structures](../modules/agent_structures.md) / Pushes

# Enumeration: Pushes

[agent/structures](../modules/agent_structures.md).Pushes

## Table of contents

### Enumeration Members

- [AgentDisconnected](agent_structures.Pushes.md#agentdisconnected)
- [ChatAccessGranted](agent_structures.Pushes.md#chataccessgranted)
- [ChatAccessRevoked](agent_structures.Pushes.md#chataccessrevoked)
- [ChatDeactivated](agent_structures.Pushes.md#chatdeactivated)
- [ChatPropertiesDeleted](agent_structures.Pushes.md#chatpropertiesdeleted)
- [ChatPropertiesUpdated](agent_structures.Pushes.md#chatpropertiesupdated)
- [ChatTransferred](agent_structures.Pushes.md#chattransferred)
- [ChatUnfollowed](agent_structures.Pushes.md#chatunfollowed)
- [CustomerBanned](agent_structures.Pushes.md#customerbanned)
- [CustomerCreated](agent_structures.Pushes.md#customercreated)
- [CustomerPageUpdated](agent_structures.Pushes.md#customerpageupdated)
- [CustomerUpdated](agent_structures.Pushes.md#customerupdated)
- [CustomerVisitEnded](agent_structures.Pushes.md#customervisitended)
- [CustomerVisitStarted](agent_structures.Pushes.md#customervisitstarted)
- [EventPropertiesDeleted](agent_structures.Pushes.md#eventpropertiesdeleted)
- [EventPropertiesUpdated](agent_structures.Pushes.md#eventpropertiesupdated)
- [EventUpdated](agent_structures.Pushes.md#eventupdated)
- [EventsMarkedAsSeen](agent_structures.Pushes.md#eventsmarkedasseen)
- [IncomingChat](agent_structures.Pushes.md#incomingchat)
- [IncomingEvent](agent_structures.Pushes.md#incomingevent)
- [IncomingMulticast](agent_structures.Pushes.md#incomingmulticast)
- [IncomingRichMessagePostback](agent_structures.Pushes.md#incomingrichmessagepostback)
- [IncomingSneakPeek](agent_structures.Pushes.md#incomingsneakpeek)
- [IncomingTypingIndicator](agent_structures.Pushes.md#incomingtypingindicator)
- [QueuePostitionsUpdated](agent_structures.Pushes.md#queuepostitionsupdated)
- [RoutingStatusSet](agent_structures.Pushes.md#routingstatusset)
- [ThreadPropertiesDeleted](agent_structures.Pushes.md#threadpropertiesdeleted)
- [ThreadPropertiesUpdated](agent_structures.Pushes.md#threadpropertiesupdated)
- [ThreadTagged](agent_structures.Pushes.md#threadtagged)
- [ThreadUntagged](agent_structures.Pushes.md#threaduntagged)
- [UserAddedToChat](agent_structures.Pushes.md#useraddedtochat)
- [UserRemovedFromChat](agent_structures.Pushes.md#userremovedfromchat)

## Enumeration Members

### AgentDisconnected

• **AgentDisconnected** = ``"agent_disconnected"``

Informs that an Agent was disconnected. The payload contains the reason of Customer's disconnection.

#### Defined in

[agent/structures.ts:423](https://github.com/livechat/lc-sdk-js/blob/7431f2f/src/agent/structures.ts#L423)

___

### ChatAccessGranted

• **ChatAccessGranted** = ``"chat_access_granted"``

Informs that new, single access to a chat was granted. The existing access isn't overwritten.

#### Defined in

[agent/structures.ts:305](https://github.com/livechat/lc-sdk-js/blob/7431f2f/src/agent/structures.ts#L305)

___

### ChatAccessRevoked

• **ChatAccessRevoked** = ``"chat_access_revoked"``

Informs that access to a certain chat was revoked.

#### Defined in

[agent/structures.ts:310](https://github.com/livechat/lc-sdk-js/blob/7431f2f/src/agent/structures.ts#L310)

___

### ChatDeactivated

• **ChatDeactivated** = ``"chat_deactivated"``

Informs that a chat was deactivated by closing the currently open thread.

#### Defined in

[agent/structures.ts:300](https://github.com/livechat/lc-sdk-js/blob/7431f2f/src/agent/structures.ts#L300)

___

### ChatPropertiesDeleted

• **ChatPropertiesDeleted** = ``"chat_properties_deleted"``

Informs about those chat properties that were deleted.

#### Defined in

[agent/structures.ts:353](https://github.com/livechat/lc-sdk-js/blob/7431f2f/src/agent/structures.ts#L353)

___

### ChatPropertiesUpdated

• **ChatPropertiesUpdated** = ``"chat_properties_updated"``

Informs about those chat properties that were updated.

#### Defined in

[agent/structures.ts:348](https://github.com/livechat/lc-sdk-js/blob/7431f2f/src/agent/structures.ts#L348)

___

### ChatTransferred

• **ChatTransferred** = ``"chat_transferred"``

Informs that a chat was transferred to a different group or to an Agent.

#### Defined in

[agent/structures.ts:315](https://github.com/livechat/lc-sdk-js/blob/7431f2f/src/agent/structures.ts#L315)

___

### ChatUnfollowed

• **ChatUnfollowed** = ``"chat_unfollowed"``

Informs that a chat has been unfollowed. Useful in multiple connection scenarios,
where one app/integration needs to know that another one unfollowed the chat.

#### Defined in

[agent/structures.ts:450](https://github.com/livechat/lc-sdk-js/blob/7431f2f/src/agent/structures.ts#L450)

___

### CustomerBanned

• **CustomerBanned** = ``"customer_banned"``

Informs that a Customer was banned for a specified number of days.

#### Defined in

[agent/structures.ts:408](https://github.com/livechat/lc-sdk-js/blob/7431f2f/src/agent/structures.ts#L408)

___

### CustomerCreated

• **CustomerCreated** = ``"customer_created"``

Informs that a new Customer registered.

#### Defined in

[agent/structures.ts:393](https://github.com/livechat/lc-sdk-js/blob/7431f2f/src/agent/structures.ts#L393)

___

### CustomerPageUpdated

• **CustomerPageUpdated** = ``"customer_page_updated"``

Informs that a Customer moved to another page of the website.

#### Defined in

[agent/structures.ts:403](https://github.com/livechat/lc-sdk-js/blob/7431f2f/src/agent/structures.ts#L403)

___

### CustomerUpdated

• **CustomerUpdated** = ``"customer_updated"``

Informs that Customer's data was updated.

#### Defined in

[agent/structures.ts:398](https://github.com/livechat/lc-sdk-js/blob/7431f2f/src/agent/structures.ts#L398)

___

### CustomerVisitEnded

• **CustomerVisitEnded** = ``"customer_visit_ended"``

Informs that a Customer left the tracked website.

#### Defined in

[agent/structures.ts:413](https://github.com/livechat/lc-sdk-js/blob/7431f2f/src/agent/structures.ts#L413)

___

### CustomerVisitStarted

• **CustomerVisitStarted** = ``"customer_visit_started"``

Informs that a Customer entered the tracked website.

#### Defined in

[agent/structures.ts:388](https://github.com/livechat/lc-sdk-js/blob/7431f2f/src/agent/structures.ts#L388)

___

### EventPropertiesDeleted

• **EventPropertiesDeleted** = ``"event_properties_deleted"``

Informs about those event properties that were deleted.

#### Defined in

[agent/structures.ts:373](https://github.com/livechat/lc-sdk-js/blob/7431f2f/src/agent/structures.ts#L373)

___

### EventPropertiesUpdated

• **EventPropertiesUpdated** = ``"event_properties_updated"``

Informs about those event properties that were updated.

#### Defined in

[agent/structures.ts:368](https://github.com/livechat/lc-sdk-js/blob/7431f2f/src/agent/structures.ts#L368)

___

### EventUpdated

• **EventUpdated** = ``"event_updated"``

Informs that an event was updated.

#### Defined in

[agent/structures.ts:337](https://github.com/livechat/lc-sdk-js/blob/7431f2f/src/agent/structures.ts#L337)

___

### EventsMarkedAsSeen

• **EventsMarkedAsSeen** = ``"events_marked_as_seen"``

Informs that a user has seen events up to a specific time.

#### Defined in

[agent/structures.ts:439](https://github.com/livechat/lc-sdk-js/blob/7431f2f/src/agent/structures.ts#L439)

___

### IncomingChat

• **IncomingChat** = ``"incoming_chat"``

Informs about a chat coming with a new thread. The push payload contains the whole chat data structure.
If the chat was started with some initial events, the thread object contains them.

#### Defined in

[agent/structures.ts:295](https://github.com/livechat/lc-sdk-js/blob/7431f2f/src/agent/structures.ts#L295)

___

### IncomingEvent

• **IncomingEvent** = ``"incoming_event"``

Informs about an incoming event sent to a chat.

#### Defined in

[agent/structures.ts:332](https://github.com/livechat/lc-sdk-js/blob/7431f2f/src/agent/structures.ts#L332)

___

### IncomingMulticast

• **IncomingMulticast** = ``"incoming_multicast"``

Informs about messages sent via the multicast method or by the system.

#### Defined in

[agent/structures.ts:444](https://github.com/livechat/lc-sdk-js/blob/7431f2f/src/agent/structures.ts#L444)

___

### IncomingRichMessagePostback

• **IncomingRichMessagePostback** = ``"incoming_rich_message_postback"``

Informs about an incoming rich message postback. The push payload contains the info on the postback itself,
as well as the chat it was sent in.

#### Defined in

[agent/structures.ts:343](https://github.com/livechat/lc-sdk-js/blob/7431f2f/src/agent/structures.ts#L343)

___

### IncomingSneakPeek

• **IncomingSneakPeek** = ``"incoming_sneak_peek"``

Informs about the message a Customer is currently typing. The push payload contains the sneak peek object.

#### Defined in

[agent/structures.ts:434](https://github.com/livechat/lc-sdk-js/blob/7431f2f/src/agent/structures.ts#L434)

___

### IncomingTypingIndicator

• **IncomingTypingIndicator** = ``"incoming_typing_indicator"``

Informs that one of the chat users is currently typing a message. The message hasn't been sent yet.
The push payload contains the typing indicator object.

#### Defined in

[agent/structures.ts:429](https://github.com/livechat/lc-sdk-js/blob/7431f2f/src/agent/structures.ts#L429)

___

### QueuePostitionsUpdated

• **QueuePostitionsUpdated** = ``"queue_postitions_updated"``

New positions and wait times for queued chats.

#### Defined in

[agent/structures.ts:455](https://github.com/livechat/lc-sdk-js/blob/7431f2f/src/agent/structures.ts#L455)

___

### RoutingStatusSet

• **RoutingStatusSet** = ``"routing_status_set"``

Informs that an Agent's or Bot Agent's status was changed.

#### Defined in

[agent/structures.ts:418](https://github.com/livechat/lc-sdk-js/blob/7431f2f/src/agent/structures.ts#L418)

___

### ThreadPropertiesDeleted

• **ThreadPropertiesDeleted** = ``"thread_properties_deleted"``

Informs about those thread properties that were deleted.

#### Defined in

[agent/structures.ts:363](https://github.com/livechat/lc-sdk-js/blob/7431f2f/src/agent/structures.ts#L363)

___

### ThreadPropertiesUpdated

• **ThreadPropertiesUpdated** = ``"thread_properties_updated"``

Informs about those thread properties that were updated.

#### Defined in

[agent/structures.ts:358](https://github.com/livechat/lc-sdk-js/blob/7431f2f/src/agent/structures.ts#L358)

___

### ThreadTagged

• **ThreadTagged** = ``"thread_tagged"``

Informs that a chat thread was tagged.

#### Defined in

[agent/structures.ts:378](https://github.com/livechat/lc-sdk-js/blob/7431f2f/src/agent/structures.ts#L378)

___

### ThreadUntagged

• **ThreadUntagged** = ``"thread_untagged"``

Informs that a chat thread was untagged.

#### Defined in

[agent/structures.ts:383](https://github.com/livechat/lc-sdk-js/blob/7431f2f/src/agent/structures.ts#L383)

___

### UserAddedToChat

• **UserAddedToChat** = ``"user_added_to_chat"``

Informs that a user (Customer or Agent) was added to a chat.
This push can be emitted with user.present set to false when a user writes to a chat without joining it
You can achieve that via the Send Event method.

#### Defined in

[agent/structures.ts:322](https://github.com/livechat/lc-sdk-js/blob/7431f2f/src/agent/structures.ts#L322)

___

### UserRemovedFromChat

• **UserRemovedFromChat** = ``"user_removed_from_chat"``

Informs that a user (Customer or Agent) was removed from a chat.

#### Defined in

[agent/structures.ts:327](https://github.com/livechat/lc-sdk-js/blob/7431f2f/src/agent/structures.ts#L327)
