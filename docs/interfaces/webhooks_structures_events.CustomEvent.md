[@livechat/lc-sdk-js](../README.md) / [webhooks/structures/events](../modules/webhooks_structures_events.md) / CustomEvent

# Interface: CustomEvent

[webhooks/structures/events](../modules/webhooks_structures_events.md).CustomEvent

## Hierarchy

- `BaseEvent`

  ↳ **`CustomEvent`**

## Table of contents

### Properties

- [author\_id](webhooks_structures_events.CustomEvent.md#author_id)
- [content](webhooks_structures_events.CustomEvent.md#content)
- [created\_at](webhooks_structures_events.CustomEvent.md#created_at)
- [custom\_id](webhooks_structures_events.CustomEvent.md#custom_id)
- [id](webhooks_structures_events.CustomEvent.md#id)
- [properties](webhooks_structures_events.CustomEvent.md#properties)
- [recipients](webhooks_structures_events.CustomEvent.md#recipients)
- [type](webhooks_structures_events.CustomEvent.md#type)
- [visibility](webhooks_structures_events.CustomEvent.md#visibility)

## Properties

### author\_id

• **author\_id**: `string`

#### Defined in

[webhooks/structures/events.ts:104](https://github.com/livechat/lc-sdk-js/blob/8462be9/src/webhooks/structures/events.ts#L104)

___

### content

• `Optional` **content**: `object`

#### Defined in

[webhooks/structures/events.ts:105](https://github.com/livechat/lc-sdk-js/blob/8462be9/src/webhooks/structures/events.ts#L105)

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

[webhooks/structures/events.ts:103](https://github.com/livechat/lc-sdk-js/blob/8462be9/src/webhooks/structures/events.ts#L103)

___

### id

• **id**: `string`

#### Inherited from

BaseEvent.id

#### Defined in

[webhooks/structures/events.ts:4](https://github.com/livechat/lc-sdk-js/blob/8462be9/src/webhooks/structures/events.ts#L4)

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

### type

• **type**: ``"custom"``

#### Overrides

BaseEvent.type

#### Defined in

[webhooks/structures/events.ts:102](https://github.com/livechat/lc-sdk-js/blob/8462be9/src/webhooks/structures/events.ts#L102)

___

### visibility

• `Optional` **visibility**: `string`

#### Inherited from

BaseEvent.visibility

#### Defined in

[webhooks/structures/events.ts:8](https://github.com/livechat/lc-sdk-js/blob/8462be9/src/webhooks/structures/events.ts#L8)
