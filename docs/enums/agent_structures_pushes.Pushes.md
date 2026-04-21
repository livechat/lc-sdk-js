[@livechat/lc-sdk-js](../README.md) / [agent/structures/pushes](../modules/agent_structures_pushes.md) / Pushes

# Enumeration: Pushes

[agent/structures/pushes](../modules/agent_structures_pushes.md).Pushes

## Table of contents

### Enumeration Members

- [AgentApproved](agent_structures_pushes.Pushes.md#agentapproved)
- [AgentCreated](agent_structures_pushes.Pushes.md#agentcreated)
- [AgentDeleted](agent_structures_pushes.Pushes.md#agentdeleted)
- [AgentDisconnected](agent_structures_pushes.Pushes.md#agentdisconnected)
- [AgentSuspended](agent_structures_pushes.Pushes.md#agentsuspended)
- [AgentUnsuspended](agent_structures_pushes.Pushes.md#agentunsuspended)
- [AgentUpdated](agent_structures_pushes.Pushes.md#agentupdated)
- [AutoAccessAdded](agent_structures_pushes.Pushes.md#autoaccessadded)
- [AutoAccessDeleted](agent_structures_pushes.Pushes.md#autoaccessdeleted)
- [AutoAccessUpdated](agent_structures_pushes.Pushes.md#autoaccessupdated)
- [BotCreated](agent_structures_pushes.Pushes.md#botcreated)
- [BotDeleted](agent_structures_pushes.Pushes.md#botdeleted)
- [BotUpdated](agent_structures_pushes.Pushes.md#botupdated)
- [ChatAccessUpdated](agent_structures_pushes.Pushes.md#chataccessupdated)
- [ChatDeactivated](agent_structures_pushes.Pushes.md#chatdeactivated)
- [ChatPropertiesDeleted](agent_structures_pushes.Pushes.md#chatpropertiesdeleted)
- [ChatPropertiesUpdated](agent_structures_pushes.Pushes.md#chatpropertiesupdated)
- [ChatTransferred](agent_structures_pushes.Pushes.md#chattransferred)
- [ChatUnfollowed](agent_structures_pushes.Pushes.md#chatunfollowed)
- [CustomerBanned](agent_structures_pushes.Pushes.md#customerbanned)
- [CustomerCreated](agent_structures_pushes.Pushes.md#customercreated)
- [CustomerLeft](agent_structures_pushes.Pushes.md#customerleft)
- [CustomerPageUpdated](agent_structures_pushes.Pushes.md#customerpageupdated)
- [CustomerUpdated](agent_structures_pushes.Pushes.md#customerupdated)
- [CustomerVisitEnded](agent_structures_pushes.Pushes.md#customervisitended)
- [CustomerVisitStarted](agent_structures_pushes.Pushes.md#customervisitstarted)
- [EventPropertiesDeleted](agent_structures_pushes.Pushes.md#eventpropertiesdeleted)
- [EventPropertiesUpdated](agent_structures_pushes.Pushes.md#eventpropertiesupdated)
- [EventUpdated](agent_structures_pushes.Pushes.md#eventupdated)
- [EventsMarkedAsSeen](agent_structures_pushes.Pushes.md#eventsmarkedasseen)
- [GroupCreated](agent_structures_pushes.Pushes.md#groupcreated)
- [GroupDeleted](agent_structures_pushes.Pushes.md#groupdeleted)
- [GroupUpdated](agent_structures_pushes.Pushes.md#groupupdated)
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

### AgentApproved

• **AgentApproved** = ``"agent_approved"``

Informs that an agent has been approved.

#### Defined in

[agent/structures/pushes.ts:206](https://github.com/livechat/lc-sdk-js/blob/96768a0/src/agent/structures/pushes.ts#L206)

___

### AgentCreated

• **AgentCreated** = ``"agent_created"``

Informs that an agent has been created.

#### Defined in

[agent/structures/pushes.ts:181](https://github.com/livechat/lc-sdk-js/blob/96768a0/src/agent/structures/pushes.ts#L181)

___

### AgentDeleted

• **AgentDeleted** = ``"agent_deleted"``

Informs that an agent has been deleted.

#### Defined in

[agent/structures/pushes.ts:186](https://github.com/livechat/lc-sdk-js/blob/96768a0/src/agent/structures/pushes.ts#L186)

___

### AgentDisconnected

• **AgentDisconnected** = ``"agent_disconnected"``

Informs that an Agent was disconnected. The payload contains the reason of Customer's disconnection.

#### Defined in

[agent/structures/pushes.ts:129](https://github.com/livechat/lc-sdk-js/blob/96768a0/src/agent/structures/pushes.ts#L129)

___

### AgentSuspended

• **AgentSuspended** = ``"agent_suspended"``

Informs that an agent has been suspended.

#### Defined in

[agent/structures/pushes.ts:196](https://github.com/livechat/lc-sdk-js/blob/96768a0/src/agent/structures/pushes.ts#L196)

___

### AgentUnsuspended

• **AgentUnsuspended** = ``"agent_unsuspended"``

Informs that an agent has been unsuspended.

#### Defined in

[agent/structures/pushes.ts:201](https://github.com/livechat/lc-sdk-js/blob/96768a0/src/agent/structures/pushes.ts#L201)

___

### AgentUpdated

• **AgentUpdated** = ``"agent_updated"``

Informs that an agent has been updated.

#### Defined in

[agent/structures/pushes.ts:191](https://github.com/livechat/lc-sdk-js/blob/96768a0/src/agent/structures/pushes.ts#L191)

___

### AutoAccessAdded

• **AutoAccessAdded** = ``"auto_access_added"``

Informs that an auto access has been added.

#### Defined in

[agent/structures/pushes.ts:241](https://github.com/livechat/lc-sdk-js/blob/96768a0/src/agent/structures/pushes.ts#L241)

___

### AutoAccessDeleted

• **AutoAccessDeleted** = ``"auto_access_deleted"``

Informs that an auto access has been deleted.

#### Defined in

[agent/structures/pushes.ts:246](https://github.com/livechat/lc-sdk-js/blob/96768a0/src/agent/structures/pushes.ts#L246)

___

### AutoAccessUpdated

• **AutoAccessUpdated** = ``"auto_access_updated"``

Informs that an auto access has been updated.

#### Defined in

[agent/structures/pushes.ts:251](https://github.com/livechat/lc-sdk-js/blob/96768a0/src/agent/structures/pushes.ts#L251)

___

### BotCreated

• **BotCreated** = ``"bot_created"``

Informs that a bot has been created.

#### Defined in

[agent/structures/pushes.ts:211](https://github.com/livechat/lc-sdk-js/blob/96768a0/src/agent/structures/pushes.ts#L211)

___

### BotDeleted

• **BotDeleted** = ``"bot_deleted"``

Informs that a bot has been deleted.

#### Defined in

[agent/structures/pushes.ts:221](https://github.com/livechat/lc-sdk-js/blob/96768a0/src/agent/structures/pushes.ts#L221)

___

### BotUpdated

• **BotUpdated** = ``"bot_updated"``

Informs that a bot has been updated.

#### Defined in

[agent/structures/pushes.ts:216](https://github.com/livechat/lc-sdk-js/blob/96768a0/src/agent/structures/pushes.ts#L216)

___

### ChatAccessUpdated

• **ChatAccessUpdated** = ``"chat_access_updated"``

Informs that the chat's access is updated. It contains full access of the chat.

#### Defined in

[agent/structures/pushes.ts:16](https://github.com/livechat/lc-sdk-js/blob/96768a0/src/agent/structures/pushes.ts#L16)

___

### ChatDeactivated

• **ChatDeactivated** = ``"chat_deactivated"``

Informs that a chat was deactivated by closing the currently open thread.

#### Defined in

[agent/structures/pushes.ts:11](https://github.com/livechat/lc-sdk-js/blob/96768a0/src/agent/structures/pushes.ts#L11)

___

### ChatPropertiesDeleted

• **ChatPropertiesDeleted** = ``"chat_properties_deleted"``

Informs about those chat properties that were deleted.

#### Defined in

[agent/structures/pushes.ts:59](https://github.com/livechat/lc-sdk-js/blob/96768a0/src/agent/structures/pushes.ts#L59)

___

### ChatPropertiesUpdated

• **ChatPropertiesUpdated** = ``"chat_properties_updated"``

Informs about those chat properties that were updated.

#### Defined in

[agent/structures/pushes.ts:54](https://github.com/livechat/lc-sdk-js/blob/96768a0/src/agent/structures/pushes.ts#L54)

___

### ChatTransferred

• **ChatTransferred** = ``"chat_transferred"``

Informs that a chat was transferred to a different group or to an Agent.

#### Defined in

[agent/structures/pushes.ts:21](https://github.com/livechat/lc-sdk-js/blob/96768a0/src/agent/structures/pushes.ts#L21)

___

### ChatUnfollowed

• **ChatUnfollowed** = ``"chat_unfollowed"``

Informs that a chat has been unfollowed. Useful in multiple connection scenarios,
where one app/integration needs to know that another one unfollowed the chat.

#### Defined in

[agent/structures/pushes.ts:156](https://github.com/livechat/lc-sdk-js/blob/96768a0/src/agent/structures/pushes.ts#L156)

___

### CustomerBanned

• **CustomerBanned** = ``"customer_banned"``

Informs that a Customer was banned for a specified number of days.

#### Defined in

[agent/structures/pushes.ts:114](https://github.com/livechat/lc-sdk-js/blob/96768a0/src/agent/structures/pushes.ts#L114)

___

### CustomerCreated

• **CustomerCreated** = ``"customer_created"``

Informs that a new Customer registered.

#### Defined in

[agent/structures/pushes.ts:99](https://github.com/livechat/lc-sdk-js/blob/96768a0/src/agent/structures/pushes.ts#L99)

___

### CustomerLeft

• **CustomerLeft** = ``"customer_left"``

Informs that a Customer left the tracked website.

#### Defined in

[agent/structures/pushes.ts:176](https://github.com/livechat/lc-sdk-js/blob/96768a0/src/agent/structures/pushes.ts#L176)

___

### CustomerPageUpdated

• **CustomerPageUpdated** = ``"customer_page_updated"``

Informs that a Customer moved to another page of the website.

#### Defined in

[agent/structures/pushes.ts:109](https://github.com/livechat/lc-sdk-js/blob/96768a0/src/agent/structures/pushes.ts#L109)

___

### CustomerUpdated

• **CustomerUpdated** = ``"customer_updated"``

Informs that Customer's data was updated.

#### Defined in

[agent/structures/pushes.ts:104](https://github.com/livechat/lc-sdk-js/blob/96768a0/src/agent/structures/pushes.ts#L104)

___

### CustomerVisitEnded

• **CustomerVisitEnded** = ``"customer_visit_ended"``

Informs that a Customer left the tracked website.

#### Defined in

[agent/structures/pushes.ts:119](https://github.com/livechat/lc-sdk-js/blob/96768a0/src/agent/structures/pushes.ts#L119)

___

### CustomerVisitStarted

• **CustomerVisitStarted** = ``"customer_visit_started"``

Informs that a Customer entered the tracked website.

#### Defined in

[agent/structures/pushes.ts:94](https://github.com/livechat/lc-sdk-js/blob/96768a0/src/agent/structures/pushes.ts#L94)

___

### EventPropertiesDeleted

• **EventPropertiesDeleted** = ``"event_properties_deleted"``

Informs about those event properties that were deleted.

#### Defined in

[agent/structures/pushes.ts:79](https://github.com/livechat/lc-sdk-js/blob/96768a0/src/agent/structures/pushes.ts#L79)

___

### EventPropertiesUpdated

• **EventPropertiesUpdated** = ``"event_properties_updated"``

Informs about those event properties that were updated.

#### Defined in

[agent/structures/pushes.ts:74](https://github.com/livechat/lc-sdk-js/blob/96768a0/src/agent/structures/pushes.ts#L74)

___

### EventUpdated

• **EventUpdated** = ``"event_updated"``

Informs that an event was updated.

#### Defined in

[agent/structures/pushes.ts:43](https://github.com/livechat/lc-sdk-js/blob/96768a0/src/agent/structures/pushes.ts#L43)

___

### EventsMarkedAsSeen

• **EventsMarkedAsSeen** = ``"events_marked_as_seen"``

Informs that a user has seen events up to a specific time.

#### Defined in

[agent/structures/pushes.ts:145](https://github.com/livechat/lc-sdk-js/blob/96768a0/src/agent/structures/pushes.ts#L145)

___

### GroupCreated

• **GroupCreated** = ``"group_created"``

Informs that a group has been created.

#### Defined in

[agent/structures/pushes.ts:226](https://github.com/livechat/lc-sdk-js/blob/96768a0/src/agent/structures/pushes.ts#L226)

___

### GroupDeleted

• **GroupDeleted** = ``"group_deleted"``

Informs that a group has been deleted.

#### Defined in

[agent/structures/pushes.ts:236](https://github.com/livechat/lc-sdk-js/blob/96768a0/src/agent/structures/pushes.ts#L236)

___

### GroupUpdated

• **GroupUpdated** = ``"group_updated"``

Informs that a group has been updated.

#### Defined in

[agent/structures/pushes.ts:231](https://github.com/livechat/lc-sdk-js/blob/96768a0/src/agent/structures/pushes.ts#L231)

___

### IncomingChat

• **IncomingChat** = ``"incoming_chat"``

Informs about a chat coming with a new thread. The push payload contains the whole chat data structure.
If the chat was started with some initial events, the thread object contains them.

#### Defined in

[agent/structures/pushes.ts:6](https://github.com/livechat/lc-sdk-js/blob/96768a0/src/agent/structures/pushes.ts#L6)

___

### IncomingCustomer

• **IncomingCustomer** = ``"incoming_customer"``

Informs that a new or returning customer is available to the agent.

#### Defined in

[agent/structures/pushes.ts:171](https://github.com/livechat/lc-sdk-js/blob/96768a0/src/agent/structures/pushes.ts#L171)

___

### IncomingCustomers

• **IncomingCustomers** = ``"incoming_customers"``

Informs about customers the agent should be aware of.

#### Defined in

[agent/structures/pushes.ts:166](https://github.com/livechat/lc-sdk-js/blob/96768a0/src/agent/structures/pushes.ts#L166)

___

### IncomingEvent

• **IncomingEvent** = ``"incoming_event"``

Informs about an incoming event sent to a chat.

#### Defined in

[agent/structures/pushes.ts:38](https://github.com/livechat/lc-sdk-js/blob/96768a0/src/agent/structures/pushes.ts#L38)

___

### IncomingMulticast

• **IncomingMulticast** = ``"incoming_multicast"``

Informs about messages sent via the multicast method or by the system.

#### Defined in

[agent/structures/pushes.ts:150](https://github.com/livechat/lc-sdk-js/blob/96768a0/src/agent/structures/pushes.ts#L150)

___

### IncomingRichMessagePostback

• **IncomingRichMessagePostback** = ``"incoming_rich_message_postback"``

Informs about an incoming rich message postback. The push payload contains the info on the postback itself,
as well as the chat it was sent in.

#### Defined in

[agent/structures/pushes.ts:49](https://github.com/livechat/lc-sdk-js/blob/96768a0/src/agent/structures/pushes.ts#L49)

___

### IncomingSneakPeek

• **IncomingSneakPeek** = ``"incoming_sneak_peek"``

Informs about the message a Customer is currently typing. The push payload contains the sneak peek object.

#### Defined in

[agent/structures/pushes.ts:140](https://github.com/livechat/lc-sdk-js/blob/96768a0/src/agent/structures/pushes.ts#L140)

___

### IncomingTypingIndicator

• **IncomingTypingIndicator** = ``"incoming_typing_indicator"``

Informs that one of the chat users is currently typing a message. The message hasn't been sent yet.
The push payload contains the typing indicator object.

#### Defined in

[agent/structures/pushes.ts:135](https://github.com/livechat/lc-sdk-js/blob/96768a0/src/agent/structures/pushes.ts#L135)

___

### QueuePositionsUpdated

• **QueuePositionsUpdated** = ``"queue_positions_updated"``

New positions and wait times for queued chats.

#### Defined in

[agent/structures/pushes.ts:161](https://github.com/livechat/lc-sdk-js/blob/96768a0/src/agent/structures/pushes.ts#L161)

___

### RoutingStatusSet

• **RoutingStatusSet** = ``"routing_status_set"``

Informs that an Agent's or Bot Agent's status was changed.

#### Defined in

[agent/structures/pushes.ts:124](https://github.com/livechat/lc-sdk-js/blob/96768a0/src/agent/structures/pushes.ts#L124)

___

### ThreadPropertiesDeleted

• **ThreadPropertiesDeleted** = ``"thread_properties_deleted"``

Informs about those thread properties that were deleted.

#### Defined in

[agent/structures/pushes.ts:69](https://github.com/livechat/lc-sdk-js/blob/96768a0/src/agent/structures/pushes.ts#L69)

___

### ThreadPropertiesUpdated

• **ThreadPropertiesUpdated** = ``"thread_properties_updated"``

Informs about those thread properties that were updated.

#### Defined in

[agent/structures/pushes.ts:64](https://github.com/livechat/lc-sdk-js/blob/96768a0/src/agent/structures/pushes.ts#L64)

___

### ThreadTagged

• **ThreadTagged** = ``"thread_tagged"``

Informs that a chat thread was tagged.

#### Defined in

[agent/structures/pushes.ts:84](https://github.com/livechat/lc-sdk-js/blob/96768a0/src/agent/structures/pushes.ts#L84)

___

### ThreadUntagged

• **ThreadUntagged** = ``"thread_untagged"``

Informs that a chat thread was untagged.

#### Defined in

[agent/structures/pushes.ts:89](https://github.com/livechat/lc-sdk-js/blob/96768a0/src/agent/structures/pushes.ts#L89)

___

### UserAddedToChat

• **UserAddedToChat** = ``"user_added_to_chat"``

Informs that a user (Customer or Agent) was added to a chat.
This push can be emitted with user.present set to false when a user writes to a chat without joining it
You can achieve that via the Send Event method.

#### Defined in

[agent/structures/pushes.ts:28](https://github.com/livechat/lc-sdk-js/blob/96768a0/src/agent/structures/pushes.ts#L28)

___

### UserRemovedFromChat

• **UserRemovedFromChat** = ``"user_removed_from_chat"``

Informs that a user (Customer or Agent) was removed from a chat.

#### Defined in

[agent/structures/pushes.ts:33](https://github.com/livechat/lc-sdk-js/blob/96768a0/src/agent/structures/pushes.ts#L33)
