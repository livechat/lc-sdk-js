[**@livechat/lc-sdk-js**](../../../../README.md)

***

[@livechat/lc-sdk-js](../../../../README.md) / [agent/structures/events](../README.md) / FilledForm

# Interface: FilledForm

Defined in: [agent/structures/events.ts:27](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/agent/structures/events.ts#L27)

## Extends

- `BaseEvent`

## Properties

### author\_id

> **author\_id**: `string`

Defined in: [agent/structures/events.ts:30](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/agent/structures/events.ts#L30)

***

### created\_at

> **created\_at**: `string`

Defined in: [agent/structures/events.ts:5](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/agent/structures/events.ts#L5)

#### Inherited from

`BaseEvent.created_at`

***

### custom\_id?

> `optional` **custom\_id?**: `string`

Defined in: [agent/structures/events.ts:29](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/agent/structures/events.ts#L29)

***

### deleted?

> `optional` **deleted?**: `boolean`

Defined in: [agent/structures/events.ts:8](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/agent/structures/events.ts#L8)

#### Inherited from

`BaseEvent.deleted`

***

### fields

> **fields**: [`FormField`](FormField.md)[]

Defined in: [agent/structures/events.ts:33](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/agent/structures/events.ts#L33)

***

### form\_id

> **form\_id**: `string`

Defined in: [agent/structures/events.ts:31](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/agent/structures/events.ts#L31)

***

### form\_type?

> `optional` **form\_type?**: `string`

Defined in: [agent/structures/events.ts:32](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/agent/structures/events.ts#L32)

***

### id

> **id**: `string`

Defined in: [agent/structures/events.ts:4](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/agent/structures/events.ts#L4)

#### Inherited from

`BaseEvent.id`

***

### properties?

> `optional` **properties?**: [`Properties`](../../structures/interfaces/Properties.md)

Defined in: [agent/structures/events.ts:6](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/agent/structures/events.ts#L6)

#### Inherited from

`BaseEvent.properties`

***

### type

> **type**: `"form"` \| `"filled_form"`

Defined in: [agent/structures/events.ts:28](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/agent/structures/events.ts#L28)

#### Overrides

`BaseEvent.type`

***

### visibility

> **visibility**: `string`

Defined in: [agent/structures/events.ts:7](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/agent/structures/events.ts#L7)

#### Inherited from

`BaseEvent.visibility`
