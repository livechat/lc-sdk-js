[@livechat/lc-sdk-js](../README.md) / [customer/structures/events](../modules/customer_structures_events.md) / SystemMessage

# Interface: SystemMessage

[customer/structures/events](../modules/customer_structures_events.md).SystemMessage

## Hierarchy

- `BaseEvent`

  ↳ **`SystemMessage`**

## Table of contents

### Properties

- [created\_at](customer_structures_events.SystemMessage.md#created_at)
- [id](customer_structures_events.SystemMessage.md#id)
- [properties](customer_structures_events.SystemMessage.md#properties)
- [recipients](customer_structures_events.SystemMessage.md#recipients)
- [system\_message\_type](customer_structures_events.SystemMessage.md#system_message_type)
- [text](customer_structures_events.SystemMessage.md#text)
- [text\_vars](customer_structures_events.SystemMessage.md#text_vars)
- [type](customer_structures_events.SystemMessage.md#type)

## Properties

### created\_at

• **created\_at**: `string`

#### Inherited from

BaseEvent.created\_at

#### Defined in

[customer/structures/events.ts:5](https://github.com/livechat/lc-sdk-js/blob/25e113d/src/customer/structures/events.ts#L5)

___

### id

• **id**: `string`

#### Inherited from

BaseEvent.id

#### Defined in

[customer/structures/events.ts:4](https://github.com/livechat/lc-sdk-js/blob/25e113d/src/customer/structures/events.ts#L4)

___

### properties

• `Optional` **properties**: [`Properties`](customer_structures_structures.Properties.md)

#### Inherited from

BaseEvent.properties

#### Defined in

[customer/structures/events.ts:6](https://github.com/livechat/lc-sdk-js/blob/25e113d/src/customer/structures/events.ts#L6)

___

### recipients

• `Optional` **recipients**: `string`

#### Inherited from

BaseEvent.recipients

#### Defined in

[customer/structures/events.ts:7](https://github.com/livechat/lc-sdk-js/blob/25e113d/src/customer/structures/events.ts#L7)

___

### system\_message\_type

• **system\_message\_type**: `string`

#### Defined in

[customer/structures/events.ts:109](https://github.com/livechat/lc-sdk-js/blob/25e113d/src/customer/structures/events.ts#L109)

___

### text

• `Optional` **text**: `string`

#### Defined in

[customer/structures/events.ts:110](https://github.com/livechat/lc-sdk-js/blob/25e113d/src/customer/structures/events.ts#L110)

___

### text\_vars

• `Optional` **text\_vars**: `object`

#### Defined in

[customer/structures/events.ts:111](https://github.com/livechat/lc-sdk-js/blob/25e113d/src/customer/structures/events.ts#L111)

___

### type

• **type**: ``"system_message"``

#### Overrides

BaseEvent.type

#### Defined in

[customer/structures/events.ts:108](https://github.com/livechat/lc-sdk-js/blob/25e113d/src/customer/structures/events.ts#L108)
