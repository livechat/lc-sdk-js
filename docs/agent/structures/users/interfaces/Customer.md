[**@livechat/lc-sdk-js**](../../../../README.md)

***

[@livechat/lc-sdk-js](../../../../README.md) / [agent/structures/users](../README.md) / Customer

# Interface: Customer

Defined in: [agent/structures/users.ts:26](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/agent/structures/users.ts#L26)

## Extends

- `BaseUser`

## Extended by

- [`GetCustomerResponse`](../../responses/interfaces/GetCustomerResponse.md)

## Properties

### address?

> `optional` **address?**: [`Address`](../../structures/interfaces/Address.md)

Defined in: [agent/structures/users.ts:47](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/agent/structures/users.ts#L47)

***

### agent\_last\_event\_created\_at?

> `optional` **agent\_last\_event\_created\_at?**: `string`

Defined in: [agent/structures/users.ts:35](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/agent/structures/users.ts#L35)

***

### avatar?

> `optional` **avatar?**: `string`

Defined in: [agent/structures/users.ts:28](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/agent/structures/users.ts#L28)

***

### chats?

> `optional` **chats?**: [`CustomerChat`](../../structures/interfaces/CustomerChat.md)[]

Defined in: [agent/structures/users.ts:37](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/agent/structures/users.ts#L37)

***

### created\_at?

> `optional` **created\_at?**: `string`

Defined in: [agent/structures/users.ts:31](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/agent/structures/users.ts#L31)

***

### customer\_last\_event\_created\_at?

> `optional` **customer\_last\_event\_created\_at?**: `string`

Defined in: [agent/structures/users.ts:36](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/agent/structures/users.ts#L36)

***

### customer\_properties?

> `optional` **customer\_properties?**: `Record`\<`string`, [`CustomerPropertyValue`](../../structures/interfaces/CustomerPropertyValue.md)\>

Defined in: [agent/structures/users.ts:48](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/agent/structures/users.ts#L48)

***

### email?

> `optional` **email?**: `string`

Defined in: [agent/structures/users.ts:15](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/agent/structures/users.ts#L15)

#### Inherited from

`BaseUser.email`

***

### email\_verified

> **email\_verified**: `boolean`

Defined in: [agent/structures/users.ts:43](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/agent/structures/users.ts#L43)

***

### events\_seen\_up\_to?

> `optional` **events\_seen\_up\_to?**: `string`

Defined in: [agent/structures/users.ts:16](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/agent/structures/users.ts#L16)

#### Inherited from

`BaseUser.events_seen_up_to`

***

### followed

> **followed**: `boolean`

Defined in: [agent/structures/users.ts:38](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/agent/structures/users.ts#L38)

***

### greeting\_id?

> `optional` **greeting\_id?**: `number`

Defined in: [agent/structures/users.ts:42](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/agent/structures/users.ts#L42)

***

### group\_ids?

> `optional` **group\_ids?**: `number`[]

Defined in: [agent/structures/users.ts:40](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/agent/structures/users.ts#L40)

***

### id

> **id**: `string`

Defined in: [agent/structures/users.ts:13](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/agent/structures/users.ts#L13)

#### Inherited from

`BaseUser.id`

***

### name?

> `optional` **name?**: `string`

Defined in: [agent/structures/users.ts:14](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/agent/structures/users.ts#L14)

#### Inherited from

`BaseUser.name`

***

### name\_is\_default

> **name\_is\_default**: `boolean`

Defined in: [agent/structures/users.ts:27](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/agent/structures/users.ts#L27)

***

### omnichannel?

> `optional` **omnichannel?**: [`Omnichannel`](../../structures/interfaces/Omnichannel.md)

Defined in: [agent/structures/users.ts:46](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/agent/structures/users.ts#L46)

***

### online

> **online**: `boolean`

Defined in: [agent/structures/users.ts:39](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/agent/structures/users.ts#L39)

***

### orders?

> `optional` **orders?**: [`Order`](../../structures/interfaces/Order.md)[]

Defined in: [agent/structures/users.ts:45](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/agent/structures/users.ts#L45)

***

### phone\_number?

> `optional` **phone\_number?**: `string`

Defined in: [agent/structures/users.ts:29](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/agent/structures/users.ts#L29)

***

### present?

> `optional` **present?**: `boolean`

Defined in: [agent/structures/users.ts:18](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/agent/structures/users.ts#L18)

#### Inherited from

`BaseUser.present`

***

### session\_fields?

> `optional` **session\_fields?**: `Record`\<`string`, `string`\>[]

Defined in: [agent/structures/users.ts:32](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/agent/structures/users.ts#L32)

***

### state?

> `optional` **state?**: `string`

Defined in: [agent/structures/users.ts:41](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/agent/structures/users.ts#L41)

***

### statistics?

> `optional` **statistics?**: [`Statistics`](../../structures/interfaces/Statistics.md)

Defined in: [agent/structures/users.ts:34](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/agent/structures/users.ts#L34)

***

### suggested\_email?

> `optional` **suggested\_email?**: `string`

Defined in: [agent/structures/users.ts:30](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/agent/structures/users.ts#L30)

***

### tickets?

> `optional` **tickets?**: [`Ticket`](../../structures/interfaces/Ticket.md)[]

Defined in: [agent/structures/users.ts:44](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/agent/structures/users.ts#L44)

***

### type

> **type**: `string`

Defined in: [agent/structures/users.ts:17](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/agent/structures/users.ts#L17)

#### Inherited from

`BaseUser.type`

***

### visit?

> `optional` **visit?**: [`Visit`](../../structures/interfaces/Visit.md)

Defined in: [agent/structures/users.ts:33](https://github.com/livechat/lc-sdk-js/blob/12931d3807a8171ff5b5f90e6276248977c2a262/src/agent/structures/users.ts#L33)
