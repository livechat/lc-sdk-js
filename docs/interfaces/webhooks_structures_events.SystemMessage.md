[@livechat/lc-sdk-js](../README.md) / [webhooks/structures/events](../modules/webhooks_structures_events.md) / SystemMessage

# Interface: SystemMessage

[webhooks/structures/events](../modules/webhooks_structures_events.md).SystemMessage

## Hierarchy

- `BaseEvent`

  ↳ **`SystemMessage`**

## Table of contents

### Properties

- [created\_at](webhooks_structures_events.SystemMessage.md#created_at)
- [id](webhooks_structures_events.SystemMessage.md#id)
- [properties](webhooks_structures_events.SystemMessage.md#properties)
- [recipients](webhooks_structures_events.SystemMessage.md#recipients)
- [system\_message\_type](webhooks_structures_events.SystemMessage.md#system_message_type)
- [text](webhooks_structures_events.SystemMessage.md#text)
- [text\_vars](webhooks_structures_events.SystemMessage.md#text_vars)
- [type](webhooks_structures_events.SystemMessage.md#type)
- [visibility](webhooks_structures_events.SystemMessage.md#visibility)

## Properties

### created\_at

• **created\_at**: `string`

#### Inherited from

BaseEvent.created\_at

#### Defined in

[webhooks/structures/events.ts:5](https://github.com/livechat/lc-sdk-js/blob/c7b3817/src/webhooks/structures/events.ts#L5)

___

### id

• **id**: `string`

#### Inherited from

BaseEvent.id

#### Defined in

[webhooks/structures/events.ts:4](https://github.com/livechat/lc-sdk-js/blob/c7b3817/src/webhooks/structures/events.ts#L4)

___

### properties

• `Optional` **properties**: [`Properties`](webhooks_structures_structures.Properties.md)

#### Inherited from

BaseEvent.properties

#### Defined in

[webhooks/structures/events.ts:6](https://github.com/livechat/lc-sdk-js/blob/c7b3817/src/webhooks/structures/events.ts#L6)

___

### recipients

• `Optional` **recipients**: `string`

#### Inherited from

BaseEvent.recipients

#### Defined in

[webhooks/structures/events.ts:7](https://github.com/livechat/lc-sdk-js/blob/c7b3817/src/webhooks/structures/events.ts#L7)

___

### system\_message\_type

• **system\_message\_type**: `string`

#### Defined in

[webhooks/structures/events.ts:110](https://github.com/livechat/lc-sdk-js/blob/c7b3817/src/webhooks/structures/events.ts#L110)

___

### text

• `Optional` **text**: `string`

#### Defined in

[webhooks/structures/events.ts:111](https://github.com/livechat/lc-sdk-js/blob/c7b3817/src/webhooks/structures/events.ts#L111)

___

### text\_vars

• `Optional` **text\_vars**: `object`

#### Defined in

[webhooks/structures/events.ts:112](https://github.com/livechat/lc-sdk-js/blob/c7b3817/src/webhooks/structures/events.ts#L112)

___

### type

• **type**: ``"system_message"``

#### Overrides

BaseEvent.type

#### Defined in

[webhooks/structures/events.ts:109](https://github.com/livechat/lc-sdk-js/blob/c7b3817/src/webhooks/structures/events.ts#L109)

___

### visibility

• `Optional` **visibility**: `string`

#### Inherited from

BaseEvent.visibility

#### Defined in

[webhooks/structures/events.ts:8](https://github.com/livechat/lc-sdk-js/blob/c7b3817/src/webhooks/structures/events.ts#L8)
