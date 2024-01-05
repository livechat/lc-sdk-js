[@livechat/lc-sdk-js](../README.md) / [customer/structures/events](../modules/customer_structures_events.md) / Message

# Interface: Message

[customer/structures/events](../modules/customer_structures_events.md).Message

## Hierarchy

- `BaseEvent`

  ↳ **`Message`**

## Table of contents

### Properties

- [author\_id](customer_structures_events.Message.md#author_id)
- [created\_at](customer_structures_events.Message.md#created_at)
- [custom\_id](customer_structures_events.Message.md#custom_id)
- [id](customer_structures_events.Message.md#id)
- [postback](customer_structures_events.Message.md#postback)
- [properties](customer_structures_events.Message.md#properties)
- [recipients](customer_structures_events.Message.md#recipients)
- [text](customer_structures_events.Message.md#text)
- [type](customer_structures_events.Message.md#type)

## Properties

### author\_id

• **author\_id**: `string`

#### Defined in

[customer/structures/events.ts:52](https://github.com/livechat/lc-sdk-js/blob/c7b3817/src/customer/structures/events.ts#L52)

___

### created\_at

• **created\_at**: `string`

#### Inherited from

BaseEvent.created\_at

#### Defined in

[customer/structures/events.ts:5](https://github.com/livechat/lc-sdk-js/blob/c7b3817/src/customer/structures/events.ts#L5)

___

### custom\_id

• `Optional` **custom\_id**: `string`

#### Defined in

[customer/structures/events.ts:51](https://github.com/livechat/lc-sdk-js/blob/c7b3817/src/customer/structures/events.ts#L51)

___

### id

• **id**: `string`

#### Inherited from

BaseEvent.id

#### Defined in

[customer/structures/events.ts:4](https://github.com/livechat/lc-sdk-js/blob/c7b3817/src/customer/structures/events.ts#L4)

___

### postback

• `Optional` **postback**: [`Postback`](customer_structures_events.Postback.md)

#### Defined in

[customer/structures/events.ts:54](https://github.com/livechat/lc-sdk-js/blob/c7b3817/src/customer/structures/events.ts#L54)

___

### properties

• `Optional` **properties**: [`Properties`](customer_structures_structures.Properties.md)

#### Inherited from

BaseEvent.properties

#### Defined in

[customer/structures/events.ts:6](https://github.com/livechat/lc-sdk-js/blob/c7b3817/src/customer/structures/events.ts#L6)

___

### recipients

• `Optional` **recipients**: `string`

#### Inherited from

BaseEvent.recipients

#### Defined in

[customer/structures/events.ts:7](https://github.com/livechat/lc-sdk-js/blob/c7b3817/src/customer/structures/events.ts#L7)

___

### text

• **text**: `string`

#### Defined in

[customer/structures/events.ts:53](https://github.com/livechat/lc-sdk-js/blob/c7b3817/src/customer/structures/events.ts#L53)

___

### type

• **type**: ``"message"``

#### Overrides

BaseEvent.type

#### Defined in

[customer/structures/events.ts:50](https://github.com/livechat/lc-sdk-js/blob/c7b3817/src/customer/structures/events.ts#L50)
