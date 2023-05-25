[@livechat/lc-sdk-js](../README.md) / customer/structures/events

# Module: customer/structures/events

## Table of contents

### Interfaces

- [Answer](../interfaces/customer_structures_events.Answer.md)
- [Button](../interfaces/customer_structures_events.Button.md)
- [CustomEvent](../interfaces/customer_structures_events.CustomEvent.md)
- [Element](../interfaces/customer_structures_events.Element.md)
- [File](../interfaces/customer_structures_events.File.md)
- [FilledForm](../interfaces/customer_structures_events.FilledForm.md)
- [FormField](../interfaces/customer_structures_events.FormField.md)
- [Image](../interfaces/customer_structures_events.Image.md)
- [Message](../interfaces/customer_structures_events.Message.md)
- [Postback](../interfaces/customer_structures_events.Postback.md)
- [RichMessage](../interfaces/customer_structures_events.RichMessage.md)
- [SystemMessage](../interfaces/customer_structures_events.SystemMessage.md)

### Type Aliases

- [Event](customer_structures_events.md#event)
- [LimitEventToRequestFields](customer_structures_events.md#limiteventtorequestfields)
- [RequestEvent](customer_structures_events.md#requestevent)

## Type Aliases

### Event

Ƭ **Event**: [`File`](../interfaces/customer_structures_events.File.md) \| [`FilledForm`](../interfaces/customer_structures_events.FilledForm.md) \| [`Message`](../interfaces/customer_structures_events.Message.md) \| [`RichMessage`](../interfaces/customer_structures_events.RichMessage.md) \| [`CustomEvent`](../interfaces/customer_structures_events.CustomEvent.md) \| [`SystemMessage`](../interfaces/customer_structures_events.SystemMessage.md)

#### Defined in

[customer/structures/events.ts:114](https://github.com/livechat/lc-sdk-js/blob/125a327/src/customer/structures/events.ts#L114)

___

### LimitEventToRequestFields

Ƭ **LimitEventToRequestFields**<`E`\>: `Omit`<`E`, `ResponseOnlyFields`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends [`Event`](customer_structures_events.md#event) |

#### Defined in

[customer/structures/events.ts:128](https://github.com/livechat/lc-sdk-js/blob/125a327/src/customer/structures/events.ts#L128)

___

### RequestEvent

Ƭ **RequestEvent**: [`LimitEventToRequestFields`](customer_structures_events.md#limiteventtorequestfields)<[`File`](../interfaces/customer_structures_events.File.md)\> \| [`LimitEventToRequestFields`](customer_structures_events.md#limiteventtorequestfields)<[`FilledForm`](../interfaces/customer_structures_events.FilledForm.md)\> \| [`LimitEventToRequestFields`](customer_structures_events.md#limiteventtorequestfields)<[`Message`](../interfaces/customer_structures_events.Message.md)\> \| [`LimitEventToRequestFields`](customer_structures_events.md#limiteventtorequestfields)<[`RichMessage`](../interfaces/customer_structures_events.RichMessage.md)\> \| [`LimitEventToRequestFields`](customer_structures_events.md#limiteventtorequestfields)<[`CustomEvent`](../interfaces/customer_structures_events.CustomEvent.md)\> \| [`LimitEventToRequestFields`](customer_structures_events.md#limiteventtorequestfields)<[`SystemMessage`](../interfaces/customer_structures_events.SystemMessage.md)\>

#### Defined in

[customer/structures/events.ts:129](https://github.com/livechat/lc-sdk-js/blob/125a327/src/customer/structures/events.ts#L129)
