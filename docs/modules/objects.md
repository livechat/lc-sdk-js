[@livechat/lc-sdk-js](../README.md) / objects

# Module: objects

## Table of contents

### Enumerations

- [GroupStatus](../enums/objects.GroupStatus.md)
- [RoutingStatus](../enums/objects.RoutingStatus.md)
- [SortOrder](../enums/objects.SortOrder.md)

### Interfaces

- [Access](../interfaces/objects.Access.md)
- [Answer](../interfaces/objects.Answer.md)
- [ArchivedChat](../interfaces/objects.ArchivedChat.md)
- [ArchivedThread](../interfaces/objects.ArchivedThread.md)
- [Button](../interfaces/objects.Button.md)
- [Chat](../interfaces/objects.Chat.md)
- [ChatAccess](../interfaces/objects.ChatAccess.md)
- [ChatsSummary](../interfaces/objects.ChatsSummary.md)
- [CustomEvent](../interfaces/objects.CustomEvent.md)
- [Element](../interfaces/objects.Element.md)
- [Field](../interfaces/objects.Field.md)
- [File](../interfaces/objects.File.md)
- [FilledForm](../interfaces/objects.FilledForm.md)
- [Filter](../interfaces/objects.Filter.md)
- [FormField](../interfaces/objects.FormField.md)
- [Image](../interfaces/objects.Image.md)
- [InitialChat](../interfaces/objects.InitialChat.md)
- [InitialThread](../interfaces/objects.InitialThread.md)
- [InitialUser](../interfaces/objects.InitialUser.md)
- [LastEventPerType](../interfaces/objects.LastEventPerType.md)
- [LastThreadSummary](../interfaces/objects.LastThreadSummary.md)
- [Message](../interfaces/objects.Message.md)
- [MyProfile](../interfaces/objects.MyProfile.md)
- [Postback](../interfaces/objects.Postback.md)
- [Properties](../interfaces/objects.Properties.md)
- [PropertyNamespace](../interfaces/objects.PropertyNamespace.md)
- [Push](../interfaces/objects.Push.md)
- [RTMAPIOptions](../interfaces/objects.RTMAPIOptions.md)
- [RTMRequest](../interfaces/objects.RTMRequest.md)
- [RTMResponse](../interfaces/objects.RTMResponse.md)
- [RichMessage](../interfaces/objects.RichMessage.md)
- [SystemMessage](../interfaces/objects.SystemMessage.md)
- [Thread](../interfaces/objects.Thread.md)
- [WebAPIOptions](../interfaces/objects.WebAPIOptions.md)

### Type Aliases

- [Agent](objects.md#agent)
- [Customer](objects.md#customer)
- [Event](objects.md#event)
- [Geolocation](objects.md#geolocation)
- [LastPage](objects.md#lastpage)
- [SessionField](objects.md#sessionfield)
- [Statistics](objects.md#statistics)
- [User](objects.md#user)
- [Visit](objects.md#visit)

## Type Aliases

### Agent

Ƭ **Agent**: [`Agent`](../interfaces/agent_structures.Agent.md) \| [`Agent`](../interfaces/customer_structures.Agent.md)

#### Defined in

[objects/index.ts:11](https://github.com/livechat/lc-sdk-js/blob/4da1eb6/src/objects/index.ts#L11)

___

### Customer

Ƭ **Customer**: [`Customer`](../interfaces/agent_structures.Customer.md) \| [`Customer`](../interfaces/customer_structures.Customer.md)

#### Defined in

[objects/index.ts:13](https://github.com/livechat/lc-sdk-js/blob/4da1eb6/src/objects/index.ts#L13)

___

### Event

Ƭ **Event**: [`File`](../interfaces/objects.File.md) \| [`FilledForm`](../interfaces/objects.FilledForm.md) \| [`Message`](../interfaces/objects.Message.md) \| [`RichMessage`](../interfaces/objects.RichMessage.md) \| [`CustomEvent`](../interfaces/objects.CustomEvent.md) \| [`SystemMessage`](../interfaces/objects.SystemMessage.md)

#### Defined in

[objects/index.ts:167](https://github.com/livechat/lc-sdk-js/blob/4da1eb6/src/objects/index.ts#L167)

___

### Geolocation

Ƭ **Geolocation**: [`Geolocation`](../interfaces/agent_structures.Geolocation.md)

#### Defined in

[objects/index.ts:312](https://github.com/livechat/lc-sdk-js/blob/4da1eb6/src/objects/index.ts#L312)

___

### LastPage

Ƭ **LastPage**: [`LastPage`](../interfaces/agent_structures.LastPage.md)

#### Defined in

[objects/index.ts:313](https://github.com/livechat/lc-sdk-js/blob/4da1eb6/src/objects/index.ts#L313)

___

### SessionField

Ƭ **SessionField**: `Record`<`string`, `string`\>

#### Defined in

[objects/index.ts:311](https://github.com/livechat/lc-sdk-js/blob/4da1eb6/src/objects/index.ts#L311)

___

### Statistics

Ƭ **Statistics**: [`Statistics`](../interfaces/agent_structures.Statistics.md)

Backward compatibility

#### Defined in

[objects/index.ts:310](https://github.com/livechat/lc-sdk-js/blob/4da1eb6/src/objects/index.ts#L310)

___

### User

Ƭ **User**: [`Agent`](objects.md#agent) \| [`Customer`](objects.md#customer)

#### Defined in

[objects/index.ts:15](https://github.com/livechat/lc-sdk-js/blob/4da1eb6/src/objects/index.ts#L15)

___

### Visit

Ƭ **Visit**: [`Visit`](../interfaces/agent_structures.Visit.md)

#### Defined in

[objects/index.ts:314](https://github.com/livechat/lc-sdk-js/blob/4da1eb6/src/objects/index.ts#L314)
