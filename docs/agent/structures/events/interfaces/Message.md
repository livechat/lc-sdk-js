[**@livechat/lc-sdk-js**](../../../../README.md)

***

[@livechat/lc-sdk-js](../../../../README.md) / [agent/structures/events](../README.md) / Message

# Interface: Message

Defined in: [agent/structures/events.ts:50](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/agent/structures/events.ts#L50)

## Extends

- `BaseEvent`

## Properties

### author\_id

> **author\_id**: `string`

Defined in: [agent/structures/events.ts:53](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/agent/structures/events.ts#L53)

***

### created\_at

> **created\_at**: `string`

Defined in: [agent/structures/events.ts:5](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/agent/structures/events.ts#L5)

#### Inherited from

`BaseEvent.created_at`

***

### custom\_id?

> `optional` **custom\_id?**: `string`

Defined in: [agent/structures/events.ts:52](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/agent/structures/events.ts#L52)

***

### deleted?

> `optional` **deleted?**: `boolean`

Defined in: [agent/structures/events.ts:8](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/agent/structures/events.ts#L8)

#### Inherited from

`BaseEvent.deleted`

***

### id

> **id**: `string`

Defined in: [agent/structures/events.ts:4](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/agent/structures/events.ts#L4)

#### Inherited from

`BaseEvent.id`

***

### postback?

> `optional` **postback?**: [`Postback`](Postback.md)

Defined in: [agent/structures/events.ts:55](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/agent/structures/events.ts#L55)

***

### properties?

> `optional` **properties?**: [`Properties`](../../structures/interfaces/Properties.md)

Defined in: [agent/structures/events.ts:6](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/agent/structures/events.ts#L6)

#### Inherited from

`BaseEvent.properties`

***

### text

> **text**: `string`

Defined in: [agent/structures/events.ts:54](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/agent/structures/events.ts#L54)

***

### type

> **type**: `"message"`

Defined in: [agent/structures/events.ts:51](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/agent/structures/events.ts#L51)

#### Overrides

`BaseEvent.type`

***

### visibility

> **visibility**: `string`

Defined in: [agent/structures/events.ts:7](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/agent/structures/events.ts#L7)

#### Inherited from

`BaseEvent.visibility`
