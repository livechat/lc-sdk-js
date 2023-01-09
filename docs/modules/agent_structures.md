[@livechat/lc-sdk-js](../README.md) / agent/structures

# Module: agent/structures

## Table of contents

### Enumerations

- [CustomerMonitoringLevel](../enums/agent_structures.CustomerMonitoringLevel.md)
- [CustomerSortBy](../enums/agent_structures.CustomerSortBy.md)
- [Pushes](../enums/agent_structures.Pushes.md)
- [SurveyType](../enums/agent_structures.SurveyType.md)

### Interfaces

- [Agent](../interfaces/agent_structures.Agent.md)
- [AgentForTransfer](../interfaces/agent_structures.AgentForTransfer.md)
- [AgentResponseFilter](../interfaces/agent_structures.AgentResponseFilter.md)
- [Application](../interfaces/agent_structures.Application.md)
- [ArchivedChat](../interfaces/agent_structures.ArchivedChat.md)
- [ArchivesFilters](../interfaces/agent_structures.ArchivesFilters.md)
- [ChangePushNotificationsRequest](../interfaces/agent_structures.ChangePushNotificationsRequest.md)
- [Chat](../interfaces/agent_structures.Chat.md)
- [ChatsFilters](../interfaces/agent_structures.ChatsFilters.md)
- [ChatsSummary](../interfaces/agent_structures.ChatsSummary.md)
- [CreateCustomerResponse](../interfaces/agent_structures.CreateCustomerResponse.md)
- [Customer](../interfaces/agent_structures.Customer.md)
- [CustomerFilters](../interfaces/agent_structures.CustomerFilters.md)
- [CustomerParameters](../interfaces/agent_structures.CustomerParameters.md)
- [DateRangeFilter](../interfaces/agent_structures.DateRangeFilter.md)
- [EmptyResponse](../interfaces/agent_structures.EmptyResponse.md)
- [Geolocation](../interfaces/agent_structures.Geolocation.md)
- [GetChatResponse](../interfaces/agent_structures.GetChatResponse.md)
- [GetCustomerResponse](../interfaces/agent_structures.GetCustomerResponse.md)
- [GreetingsFilter](../interfaces/agent_structures.GreetingsFilter.md)
- [LastPage](../interfaces/agent_structures.LastPage.md)
- [License](../interfaces/agent_structures.License.md)
- [ListArchivesParameters](../interfaces/agent_structures.ListArchivesParameters.md)
- [ListArchivesResponse](../interfaces/agent_structures.ListArchivesResponse.md)
- [ListChatParameters](../interfaces/agent_structures.ListChatParameters.md)
- [ListChatsResponse](../interfaces/agent_structures.ListChatsResponse.md)
- [ListCustomersParameters](../interfaces/agent_structures.ListCustomersParameters.md)
- [ListCustomersResponse](../interfaces/agent_structures.ListCustomersResponse.md)
- [ListThreadsParameters](../interfaces/agent_structures.ListThreadsParameters.md)
- [ListThreadsResponse](../interfaces/agent_structures.ListThreadsResponse.md)
- [LoginRequest](../interfaces/agent_structures.LoginRequest.md)
- [LoginResponse](../interfaces/agent_structures.LoginResponse.md)
- [MulticastRecipients](../interfaces/agent_structures.MulticastRecipients.md)
- [PropertiesFilter](../interfaces/agent_structures.PropertiesFilter.md)
- [PushNotifications](../interfaces/agent_structures.PushNotifications.md)
- [RangeFilter](../interfaces/agent_structures.RangeFilter.md)
- [ResumeChatParameters](../interfaces/agent_structures.ResumeChatParameters.md)
- [ResumeChatResponse](../interfaces/agent_structures.ResumeChatResponse.md)
- [SendEventResponse](../interfaces/agent_structures.SendEventResponse.md)
- [SendRichMessagePostbackParameters](../interfaces/agent_structures.SendRichMessagePostbackParameters.md)
- [SetRoutingStatusResponse](../interfaces/agent_structures.SetRoutingStatusResponse.md)
- [StartChatParameters](../interfaces/agent_structures.StartChatParameters.md)
- [StartChatResponse](../interfaces/agent_structures.StartChatResponse.md)
- [Statistics](../interfaces/agent_structures.Statistics.md)
- [SurveyFilter](../interfaces/agent_structures.SurveyFilter.md)
- [ThreadsFilters](../interfaces/agent_structures.ThreadsFilters.md)
- [TransferChatParameters](../interfaces/agent_structures.TransferChatParameters.md)
- [UploadFileResponse](../interfaces/agent_structures.UploadFileResponse.md)
- [Visit](../interfaces/agent_structures.Visit.md)

### Type Aliases

- [IntegerFilter](agent_structures.md#integerfilter)
- [StringFilter](agent_structures.md#stringfilter)
- [User](agent_structures.md#user)

## Type Aliases

### IntegerFilter

Ƭ **IntegerFilter**: [`Filter`](../interfaces/objects.Filter.md)<`number`\>

#### Defined in

[agent/structures.ts:303](https://github.com/livechat/lc-sdk-js/blob/11cc290/src/agent/structures.ts#L303)

___

### StringFilter

Ƭ **StringFilter**: [`Filter`](../interfaces/objects.Filter.md)<`string`\>

#### Defined in

[agent/structures.ts:301](https://github.com/livechat/lc-sdk-js/blob/11cc290/src/agent/structures.ts#L301)

___

### User

Ƭ **User**: [`Agent`](../interfaces/agent_structures.Agent.md) \| [`Customer`](../interfaces/agent_structures.Customer.md)

#### Defined in

[agent/structures.ts:79](https://github.com/livechat/lc-sdk-js/blob/11cc290/src/agent/structures.ts#L79)
