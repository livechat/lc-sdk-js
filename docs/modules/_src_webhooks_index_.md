[@livechat/lc-sdk-js](../README.md) › [Globals](../globals.md) › ["src/webhooks/index"](_src_webhooks_index_.md)

# Module: "src/webhooks/index"

## Index

### Interfaces

* [AgentApproved](../interfaces/_src_webhooks_index_.agentapproved.md)
* [AgentCreated](../interfaces/_src_webhooks_index_.agentcreated.md)
* [AgentDeleted](../interfaces/_src_webhooks_index_.agentdeleted.md)
* [AgentSuspended](../interfaces/_src_webhooks_index_.agentsuspended.md)
* [AgentUnsuspended](../interfaces/_src_webhooks_index_.agentunsuspended.md)
* [AgentUpdated](../interfaces/_src_webhooks_index_.agentupdated.md)
* [AutoAccessAdded](../interfaces/_src_webhooks_index_.autoaccessadded.md)
* [AutoAccessDeleted](../interfaces/_src_webhooks_index_.autoaccessdeleted.md)
* [AutoAccessUpdated](../interfaces/_src_webhooks_index_.autoaccessupdated.md)
* [BotCreated](../interfaces/_src_webhooks_index_.botcreated.md)
* [BotDeleted](../interfaces/_src_webhooks_index_.botdeleted.md)
* [BotUpdated](../interfaces/_src_webhooks_index_.botupdated.md)
* [ChatAccessUpdated](../interfaces/_src_webhooks_index_.chataccessupdated.md)
* [ChatDeactivated](../interfaces/_src_webhooks_index_.chatdeactivated.md)
* [ChatPropertiesDeleted](../interfaces/_src_webhooks_index_.chatpropertiesdeleted.md)
* [ChatPropertiesUpdated](../interfaces/_src_webhooks_index_.chatpropertiesupdated.md)
* [ChatTransferred](../interfaces/_src_webhooks_index_.chattransferred.md)
* [ChatUserAdded](../interfaces/_src_webhooks_index_.chatuseradded.md)
* [ChatUserRemoved](../interfaces/_src_webhooks_index_.chatuserremoved.md)
* [CustomerSessionFieldsUpdated](../interfaces/_src_webhooks_index_.customersessionfieldsupdated.md)
* [EventPropertiesDeleted](../interfaces/_src_webhooks_index_.eventpropertiesdeleted.md)
* [EventPropertiesUpdated](../interfaces/_src_webhooks_index_.eventpropertiesupdated.md)
* [EventUpdated](../interfaces/_src_webhooks_index_.eventupdated.md)
* [EventsMarkedAsSeen](../interfaces/_src_webhooks_index_.eventsmarkedasseen.md)
* [GroupAssignment](../interfaces/_src_webhooks_index_.groupassignment.md)
* [GroupCreated](../interfaces/_src_webhooks_index_.groupcreated.md)
* [GroupDeleted](../interfaces/_src_webhooks_index_.groupdeleted.md)
* [GroupUpdated](../interfaces/_src_webhooks_index_.groupupdated.md)
* [IncomingChat](../interfaces/_src_webhooks_index_.incomingchat.md)
* [IncomingCustomer](../interfaces/_src_webhooks_index_.incomingcustomer.md)
* [IncomingEvent](../interfaces/_src_webhooks_index_.incomingevent.md)
* [IncomingRichMessagePostback](../interfaces/_src_webhooks_index_.incomingrichmessagepostback.md)
* [RoutingStatusSet](../interfaces/_src_webhooks_index_.routingstatusset.md)
* [ThreadPropertiesDeleted](../interfaces/_src_webhooks_index_.threadpropertiesdeleted.md)
* [ThreadPropertiesUpdated](../interfaces/_src_webhooks_index_.threadpropertiesupdated.md)
* [ThreadTagged](../interfaces/_src_webhooks_index_.threadtagged.md)
* [ThreadUntagged](../interfaces/_src_webhooks_index_.threaduntagged.md)
* [Webhook](../interfaces/_src_webhooks_index_.webhook.md)

### Type aliases

* [WebhookPayload](_src_webhooks_index_.md#webhookpayload)
* [WorkScheduler](_src_webhooks_index_.md#workscheduler)

## Type aliases

###  WebhookPayload

Ƭ **WebhookPayload**: *[IncomingChat](../interfaces/_src_webhooks_index_.incomingchat.md) | [ChatDeactivated](../interfaces/_src_webhooks_index_.chatdeactivated.md) | [ChatAccessUpdated](../interfaces/_src_webhooks_index_.chataccessupdated.md) | [ChatUserAdded](../interfaces/_src_webhooks_index_.chatuseradded.md) | [ChatUserRemoved](../interfaces/_src_webhooks_index_.chatuserremoved.md) | [IncomingEvent](../interfaces/_src_webhooks_index_.incomingevent.md) | [EventUpdated](../interfaces/_src_webhooks_index_.eventupdated.md) | [IncomingRichMessagePostback](../interfaces/_src_webhooks_index_.incomingrichmessagepostback.md) | [ChatPropertiesUpdated](../interfaces/_src_webhooks_index_.chatpropertiesupdated.md) | [ChatPropertiesDeleted](../interfaces/_src_webhooks_index_.chatpropertiesdeleted.md) | [ThreadPropertiesUpdated](../interfaces/_src_webhooks_index_.threadpropertiesupdated.md) | [ThreadPropertiesDeleted](../interfaces/_src_webhooks_index_.threadpropertiesdeleted.md) | [EventPropertiesUpdated](../interfaces/_src_webhooks_index_.eventpropertiesupdated.md) | [EventPropertiesDeleted](../interfaces/_src_webhooks_index_.eventpropertiesdeleted.md) | [ThreadTagged](../interfaces/_src_webhooks_index_.threadtagged.md) | [ThreadUntagged](../interfaces/_src_webhooks_index_.threaduntagged.md) | [RoutingStatusSet](../interfaces/_src_webhooks_index_.routingstatusset.md) | [IncomingCustomer](../interfaces/_src_webhooks_index_.incomingcustomer.md) | [EventsMarkedAsSeen](../interfaces/_src_webhooks_index_.eventsmarkedasseen.md) | [ChatTransferred](../interfaces/_src_webhooks_index_.chattransferred.md) | [CustomerSessionFieldsUpdated](../interfaces/_src_webhooks_index_.customersessionfieldsupdated.md) | [AgentCreated](../interfaces/_src_webhooks_index_.agentcreated.md) | [AgentUpdated](../interfaces/_src_webhooks_index_.agentupdated.md) | [AgentDeleted](../interfaces/_src_webhooks_index_.agentdeleted.md) | [AgentSuspended](../interfaces/_src_webhooks_index_.agentsuspended.md) | [AgentUnsuspended](../interfaces/_src_webhooks_index_.agentunsuspended.md) | [AgentApproved](../interfaces/_src_webhooks_index_.agentapproved.md) | [BotCreated](../interfaces/_src_webhooks_index_.botcreated.md) | [BotUpdated](../interfaces/_src_webhooks_index_.botupdated.md) | [BotDeleted](../interfaces/_src_webhooks_index_.botdeleted.md) | [GroupCreated](../interfaces/_src_webhooks_index_.groupcreated.md) | [GroupUpdated](../interfaces/_src_webhooks_index_.groupupdated.md) | [GroupDeleted](../interfaces/_src_webhooks_index_.groupdeleted.md) | [AutoAccessAdded](../interfaces/_src_webhooks_index_.autoaccessadded.md) | [AutoAccessUpdated](../interfaces/_src_webhooks_index_.autoaccessupdated.md) | [AutoAccessDeleted](../interfaces/_src_webhooks_index_.autoaccessdeleted.md)*

*Defined in [src/webhooks/index.ts:13](https://github.com/livechat/lc-sdk-js/blob/9364105/src/webhooks/index.ts#L13)*

___

###  WorkScheduler

Ƭ **WorkScheduler**: *Record‹string, object›*

*Defined in [src/webhooks/index.ts:193](https://github.com/livechat/lc-sdk-js/blob/9364105/src/webhooks/index.ts#L193)*
