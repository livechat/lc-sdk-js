[@livechat/lc-sdk-js](../README.md) / [agent/structures/users](../modules/agent_structures_users.md) / Customer

# Interface: Customer

[agent/structures/users](../modules/agent_structures_users.md).Customer

## Hierarchy

- `BaseUser`

  ↳ **`Customer`**

  ↳↳ [`GetCustomerResponse`](agent_structures_responses.GetCustomerResponse.md)

## Table of contents

### Properties

- [address](agent_structures_users.Customer.md#address)
- [agent\_last\_event\_created\_at](agent_structures_users.Customer.md#agent_last_event_created_at)
- [avatar](agent_structures_users.Customer.md#avatar)
- [chats](agent_structures_users.Customer.md#chats)
- [created\_at](agent_structures_users.Customer.md#created_at)
- [customer\_last\_event\_created\_at](agent_structures_users.Customer.md#customer_last_event_created_at)
- [customer\_properties](agent_structures_users.Customer.md#customer_properties)
- [email](agent_structures_users.Customer.md#email)
- [email\_verified](agent_structures_users.Customer.md#email_verified)
- [events\_seen\_up\_to](agent_structures_users.Customer.md#events_seen_up_to)
- [followed](agent_structures_users.Customer.md#followed)
- [greeting\_id](agent_structures_users.Customer.md#greeting_id)
- [group\_ids](agent_structures_users.Customer.md#group_ids)
- [id](agent_structures_users.Customer.md#id)
- [name](agent_structures_users.Customer.md#name)
- [name\_is\_default](agent_structures_users.Customer.md#name_is_default)
- [omnichannel](agent_structures_users.Customer.md#omnichannel)
- [online](agent_structures_users.Customer.md#online)
- [orders](agent_structures_users.Customer.md#orders)
- [phone\_number](agent_structures_users.Customer.md#phone_number)
- [present](agent_structures_users.Customer.md#present)
- [session\_fields](agent_structures_users.Customer.md#session_fields)
- [state](agent_structures_users.Customer.md#state)
- [statistics](agent_structures_users.Customer.md#statistics)
- [suggested\_email](agent_structures_users.Customer.md#suggested_email)
- [tickets](agent_structures_users.Customer.md#tickets)
- [type](agent_structures_users.Customer.md#type)
- [visit](agent_structures_users.Customer.md#visit)

## Properties

### address

• `Optional` **address**: [`Address`](agent_structures_structures.Address.md)

#### Defined in

[agent/structures/users.ts:47](https://github.com/livechat/lc-sdk-js/blob/72635fc/src/agent/structures/users.ts#L47)

___

### agent\_last\_event\_created\_at

• `Optional` **agent\_last\_event\_created\_at**: `string`

#### Defined in

[agent/structures/users.ts:35](https://github.com/livechat/lc-sdk-js/blob/72635fc/src/agent/structures/users.ts#L35)

___

### avatar

• `Optional` **avatar**: `string`

#### Defined in

[agent/structures/users.ts:28](https://github.com/livechat/lc-sdk-js/blob/72635fc/src/agent/structures/users.ts#L28)

___

### chats

• `Optional` **chats**: [`CustomerChat`](agent_structures_structures.CustomerChat.md)[]

#### Defined in

[agent/structures/users.ts:37](https://github.com/livechat/lc-sdk-js/blob/72635fc/src/agent/structures/users.ts#L37)

___

### created\_at

• `Optional` **created\_at**: `string`

#### Defined in

[agent/structures/users.ts:31](https://github.com/livechat/lc-sdk-js/blob/72635fc/src/agent/structures/users.ts#L31)

___

### customer\_last\_event\_created\_at

• `Optional` **customer\_last\_event\_created\_at**: `string`

#### Defined in

[agent/structures/users.ts:36](https://github.com/livechat/lc-sdk-js/blob/72635fc/src/agent/structures/users.ts#L36)

___

### customer\_properties

• `Optional` **customer\_properties**: `Record`<`string`, [`CustomerPropertyValue`](agent_structures_structures.CustomerPropertyValue.md)\>

#### Defined in

[agent/structures/users.ts:48](https://github.com/livechat/lc-sdk-js/blob/72635fc/src/agent/structures/users.ts#L48)

___

### email

• `Optional` **email**: `string`

#### Inherited from

BaseUser.email

#### Defined in

[agent/structures/users.ts:15](https://github.com/livechat/lc-sdk-js/blob/72635fc/src/agent/structures/users.ts#L15)

___

### email\_verified

• **email\_verified**: `boolean`

#### Defined in

[agent/structures/users.ts:43](https://github.com/livechat/lc-sdk-js/blob/72635fc/src/agent/structures/users.ts#L43)

___

### events\_seen\_up\_to

• `Optional` **events\_seen\_up\_to**: `string`

#### Inherited from

BaseUser.events\_seen\_up\_to

#### Defined in

[agent/structures/users.ts:16](https://github.com/livechat/lc-sdk-js/blob/72635fc/src/agent/structures/users.ts#L16)

___

### followed

• **followed**: `boolean`

#### Defined in

[agent/structures/users.ts:38](https://github.com/livechat/lc-sdk-js/blob/72635fc/src/agent/structures/users.ts#L38)

___

### greeting\_id

• `Optional` **greeting\_id**: `number`

#### Defined in

[agent/structures/users.ts:42](https://github.com/livechat/lc-sdk-js/blob/72635fc/src/agent/structures/users.ts#L42)

___

### group\_ids

• `Optional` **group\_ids**: `number`[]

#### Defined in

[agent/structures/users.ts:40](https://github.com/livechat/lc-sdk-js/blob/72635fc/src/agent/structures/users.ts#L40)

___

### id

• **id**: `string`

#### Inherited from

BaseUser.id

#### Defined in

[agent/structures/users.ts:13](https://github.com/livechat/lc-sdk-js/blob/72635fc/src/agent/structures/users.ts#L13)

___

### name

• `Optional` **name**: `string`

#### Inherited from

BaseUser.name

#### Defined in

[agent/structures/users.ts:14](https://github.com/livechat/lc-sdk-js/blob/72635fc/src/agent/structures/users.ts#L14)

___

### name\_is\_default

• **name\_is\_default**: `boolean`

#### Defined in

[agent/structures/users.ts:27](https://github.com/livechat/lc-sdk-js/blob/72635fc/src/agent/structures/users.ts#L27)

___

### omnichannel

• `Optional` **omnichannel**: [`Omnichannel`](agent_structures_structures.Omnichannel.md)

#### Defined in

[agent/structures/users.ts:46](https://github.com/livechat/lc-sdk-js/blob/72635fc/src/agent/structures/users.ts#L46)

___

### online

• **online**: `boolean`

#### Defined in

[agent/structures/users.ts:39](https://github.com/livechat/lc-sdk-js/blob/72635fc/src/agent/structures/users.ts#L39)

___

### orders

• `Optional` **orders**: [`Order`](agent_structures_structures.Order.md)[]

#### Defined in

[agent/structures/users.ts:45](https://github.com/livechat/lc-sdk-js/blob/72635fc/src/agent/structures/users.ts#L45)

___

### phone\_number

• `Optional` **phone\_number**: `string`

#### Defined in

[agent/structures/users.ts:29](https://github.com/livechat/lc-sdk-js/blob/72635fc/src/agent/structures/users.ts#L29)

___

### present

• `Optional` **present**: `boolean`

#### Inherited from

BaseUser.present

#### Defined in

[agent/structures/users.ts:18](https://github.com/livechat/lc-sdk-js/blob/72635fc/src/agent/structures/users.ts#L18)

___

### session\_fields

• `Optional` **session\_fields**: `Record`<`string`, `string`\>[]

#### Defined in

[agent/structures/users.ts:32](https://github.com/livechat/lc-sdk-js/blob/72635fc/src/agent/structures/users.ts#L32)

___

### state

• `Optional` **state**: `string`

#### Defined in

[agent/structures/users.ts:41](https://github.com/livechat/lc-sdk-js/blob/72635fc/src/agent/structures/users.ts#L41)

___

### statistics

• `Optional` **statistics**: [`Statistics`](agent_structures_structures.Statistics.md)

#### Defined in

[agent/structures/users.ts:34](https://github.com/livechat/lc-sdk-js/blob/72635fc/src/agent/structures/users.ts#L34)

___

### suggested\_email

• `Optional` **suggested\_email**: `string`

#### Defined in

[agent/structures/users.ts:30](https://github.com/livechat/lc-sdk-js/blob/72635fc/src/agent/structures/users.ts#L30)

___

### tickets

• `Optional` **tickets**: [`Ticket`](agent_structures_structures.Ticket.md)[]

#### Defined in

[agent/structures/users.ts:44](https://github.com/livechat/lc-sdk-js/blob/72635fc/src/agent/structures/users.ts#L44)

___

### type

• **type**: `string`

#### Inherited from

BaseUser.type

#### Defined in

[agent/structures/users.ts:17](https://github.com/livechat/lc-sdk-js/blob/72635fc/src/agent/structures/users.ts#L17)

___

### visit

• `Optional` **visit**: [`Visit`](agent_structures_structures.Visit.md)

#### Defined in

[agent/structures/users.ts:33](https://github.com/livechat/lc-sdk-js/blob/72635fc/src/agent/structures/users.ts#L33)
