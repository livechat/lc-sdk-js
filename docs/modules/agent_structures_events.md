[@livechat/lc-sdk-js](../README.md) / agent/structures/events

# Module: agent/structures/events

## Table of contents

### Interfaces

- [Answer](../interfaces/agent_structures_events.Answer.md)
- [Button](../interfaces/agent_structures_events.Button.md)
- [CustomEvent](../interfaces/agent_structures_events.CustomEvent.md)
- [Element](../interfaces/agent_structures_events.Element.md)
- [File](../interfaces/agent_structures_events.File.md)
- [FilledForm](../interfaces/agent_structures_events.FilledForm.md)
- [FormField](../interfaces/agent_structures_events.FormField.md)
- [Image](../interfaces/agent_structures_events.Image.md)
- [Message](../interfaces/agent_structures_events.Message.md)
- [Postback](../interfaces/agent_structures_events.Postback.md)
- [RichMessage](../interfaces/agent_structures_events.RichMessage.md)
- [SystemMessage](../interfaces/agent_structures_events.SystemMessage.md)

### Type Aliases

- [Event](agent_structures_events.md#event)
- [LimitEventToRequestFields](agent_structures_events.md#limiteventtorequestfields)
- [RequestEvent](agent_structures_events.md#requestevent)

## Type Aliases

### Event

Ƭ **Event**: [`File`](../interfaces/agent_structures_events.File.md) \| [`FilledForm`](../interfaces/agent_structures_events.FilledForm.md) \| [`Message`](../interfaces/agent_structures_events.Message.md) \| [`RichMessage`](../interfaces/agent_structures_events.RichMessage.md) \| [`CustomEvent`](../interfaces/agent_structures_events.CustomEvent.md) \| [`SystemMessage`](../interfaces/agent_structures_events.SystemMessage.md)

#### Defined in

[agent/structures/events.ts:114](https://github.com/livechat/lc-sdk-js/blob/a921f8a/src/agent/structures/events.ts#L114)

___

### LimitEventToRequestFields

Ƭ **LimitEventToRequestFields**<`E`\>: `Omit`<`E`, `ResponseOnlyFields`\> & { `visibility?`: `string`  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends [`Event`](agent_structures_events.md#event) |

#### Defined in

[agent/structures/events.ts:129](https://github.com/livechat/lc-sdk-js/blob/a921f8a/src/agent/structures/events.ts#L129)

___

### RequestEvent

Ƭ **RequestEvent**: [`LimitEventToRequestFields`](agent_structures_events.md#limiteventtorequestfields)<[`File`](../interfaces/agent_structures_events.File.md)\> \| [`LimitEventToRequestFields`](agent_structures_events.md#limiteventtorequestfields)<[`FilledForm`](../interfaces/agent_structures_events.FilledForm.md)\> \| [`LimitEventToRequestFields`](agent_structures_events.md#limiteventtorequestfields)<[`Message`](../interfaces/agent_structures_events.Message.md)\> \| [`LimitEventToRequestFields`](agent_structures_events.md#limiteventtorequestfields)<[`RichMessage`](../interfaces/agent_structures_events.RichMessage.md)\> \| [`LimitEventToRequestFields`](agent_structures_events.md#limiteventtorequestfields)<[`CustomEvent`](../interfaces/agent_structures_events.CustomEvent.md)\> \| [`LimitEventToRequestFields`](agent_structures_events.md#limiteventtorequestfields)<[`SystemMessage`](../interfaces/agent_structures_events.SystemMessage.md)\>

#### Defined in

[agent/structures/events.ts:133](https://github.com/livechat/lc-sdk-js/blob/a921f8a/src/agent/structures/events.ts#L133)
