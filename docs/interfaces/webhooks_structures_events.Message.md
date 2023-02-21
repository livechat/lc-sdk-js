[@livechat/lc-sdk-js](../README.md) / [webhooks/structures/events](../modules/webhooks_structures_events.md) / Message

# Interface: Message

[webhooks/structures/events](../modules/webhooks_structures_events.md).Message

## Hierarchy

- `BaseEvent`

  ↳ **`Message`**

## Table of contents

### Properties

- [author\_id](webhooks_structures_events.Message.md#author_id)
- [created\_at](webhooks_structures_events.Message.md#created_at)
- [custom\_id](webhooks_structures_events.Message.md#custom_id)
- [id](webhooks_structures_events.Message.md#id)
- [postback](webhooks_structures_events.Message.md#postback)
- [properties](webhooks_structures_events.Message.md#properties)
- [recipients](webhooks_structures_events.Message.md#recipients)
- [text](webhooks_structures_events.Message.md#text)
- [type](webhooks_structures_events.Message.md#type)
- [visibility](webhooks_structures_events.Message.md#visibility)

## Properties

### author\_id

• **author\_id**: `string`

#### Defined in

[webhooks/structures/events.ts:53](https://github.com/livechat/lc-sdk-js/blob/8462be9/src/webhooks/structures/events.ts#L53)

___

### created\_at

• **created\_at**: `string`

#### Inherited from

BaseEvent.created\_at

#### Defined in

[webhooks/structures/events.ts:5](https://github.com/livechat/lc-sdk-js/blob/8462be9/src/webhooks/structures/events.ts#L5)

___

### custom\_id

• `Optional` **custom\_id**: `string`

#### Defined in

[webhooks/structures/events.ts:52](https://github.com/livechat/lc-sdk-js/blob/8462be9/src/webhooks/structures/events.ts#L52)

___

### id

• **id**: `string`

#### Inherited from

BaseEvent.id

#### Defined in

[webhooks/structures/events.ts:4](https://github.com/livechat/lc-sdk-js/blob/8462be9/src/webhooks/structures/events.ts#L4)

___

### postback

• `Optional` **postback**: [`Postback`](webhooks_structures_events.Postback.md)

#### Defined in

[webhooks/structures/events.ts:55](https://github.com/livechat/lc-sdk-js/blob/8462be9/src/webhooks/structures/events.ts#L55)

___

### properties

• `Optional` **properties**: [`Properties`](webhooks_structures_structures.Properties.md)

#### Inherited from

BaseEvent.properties

#### Defined in

[webhooks/structures/events.ts:6](https://github.com/livechat/lc-sdk-js/blob/8462be9/src/webhooks/structures/events.ts#L6)

___

### recipients

• `Optional` **recipients**: `string`

#### Inherited from

BaseEvent.recipients

#### Defined in

[webhooks/structures/events.ts:7](https://github.com/livechat/lc-sdk-js/blob/8462be9/src/webhooks/structures/events.ts#L7)

___

### text

• **text**: `string`

#### Defined in

[webhooks/structures/events.ts:54](https://github.com/livechat/lc-sdk-js/blob/8462be9/src/webhooks/structures/events.ts#L54)

___

### type

• **type**: ``"message"``

#### Overrides

BaseEvent.type

#### Defined in

[webhooks/structures/events.ts:51](https://github.com/livechat/lc-sdk-js/blob/8462be9/src/webhooks/structures/events.ts#L51)

___

### visibility

• `Optional` **visibility**: `string`

#### Inherited from

BaseEvent.visibility

#### Defined in

[webhooks/structures/events.ts:8](https://github.com/livechat/lc-sdk-js/blob/8462be9/src/webhooks/structures/events.ts#L8)
