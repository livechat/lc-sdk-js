[@livechat/lc-sdk-js](../README.md) / [agent/structures/users](../modules/agent_structures_users.md) / Customer

# Interface: Customer

[agent/structures/users](../modules/agent_structures_users.md).Customer

## Hierarchy

- `BaseUser`

  ↳ **`Customer`**

  ↳↳ [`GetCustomerResponse`](agent_structures_responses.GetCustomerResponse.md)

## Table of contents

### Properties

- [agent\_last\_event\_created\_at](agent_structures_users.Customer.md#agent_last_event_created_at)
- [avatar](agent_structures_users.Customer.md#avatar)
- [chats](agent_structures_users.Customer.md#chats)
- [created\_at](agent_structures_users.Customer.md#created_at)
- [customer\_last\_event\_created\_at](agent_structures_users.Customer.md#customer_last_event_created_at)
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
- [tickets](agent_structures_users.Customer.md#tickets)
- [type](agent_structures_users.Customer.md#type)
- [visit](agent_structures_users.Customer.md#visit)

## Properties

### agent\_last\_event\_created\_at

• `Optional` **agent\_last\_event\_created\_at**: `string`

#### Defined in

[agent/structures/users.ts:25](https://github.com/livechat/lc-sdk-js/blob/fb04738/src/agent/structures/users.ts#L25)

___

### avatar

• `Optional` **avatar**: `string`

#### Defined in

[agent/structures/users.ts:19](https://github.com/livechat/lc-sdk-js/blob/fb04738/src/agent/structures/users.ts#L19)

___

### chats

• `Optional` **chats**: [`CustomerChat`](agent_structures_structures.CustomerChat.md)[]

#### Defined in

[agent/structures/users.ts:27](https://github.com/livechat/lc-sdk-js/blob/fb04738/src/agent/structures/users.ts#L27)

___

### created\_at

• `Optional` **created\_at**: `string`

#### Defined in

[agent/structures/users.ts:21](https://github.com/livechat/lc-sdk-js/blob/fb04738/src/agent/structures/users.ts#L21)

___

### customer\_last\_event\_created\_at

• `Optional` **customer\_last\_event\_created\_at**: `string`

#### Defined in

[agent/structures/users.ts:26](https://github.com/livechat/lc-sdk-js/blob/fb04738/src/agent/structures/users.ts#L26)

___

### email

• `Optional` **email**: `string`

#### Inherited from

BaseUser.email

#### Defined in

[agent/structures/users.ts:6](https://github.com/livechat/lc-sdk-js/blob/fb04738/src/agent/structures/users.ts#L6)

___

### email\_verified

• **email\_verified**: `boolean`

#### Defined in

[agent/structures/users.ts:33](https://github.com/livechat/lc-sdk-js/blob/fb04738/src/agent/structures/users.ts#L33)

___

### events\_seen\_up\_to

• `Optional` **events\_seen\_up\_to**: `string`

#### Inherited from

BaseUser.events\_seen\_up\_to

#### Defined in

[agent/structures/users.ts:7](https://github.com/livechat/lc-sdk-js/blob/fb04738/src/agent/structures/users.ts#L7)

___

### followed

• **followed**: `boolean`

#### Defined in

[agent/structures/users.ts:28](https://github.com/livechat/lc-sdk-js/blob/fb04738/src/agent/structures/users.ts#L28)

___

### greeting\_id

• `Optional` **greeting\_id**: `number`

#### Defined in

[agent/structures/users.ts:32](https://github.com/livechat/lc-sdk-js/blob/fb04738/src/agent/structures/users.ts#L32)

___

### group\_ids

• `Optional` **group\_ids**: `number`[]

#### Defined in

[agent/structures/users.ts:30](https://github.com/livechat/lc-sdk-js/blob/fb04738/src/agent/structures/users.ts#L30)

___

### id

• **id**: `string`

#### Inherited from

BaseUser.id

#### Defined in

[agent/structures/users.ts:4](https://github.com/livechat/lc-sdk-js/blob/fb04738/src/agent/structures/users.ts#L4)

___

### name

• `Optional` **name**: `string`

#### Inherited from

BaseUser.name

#### Defined in

[agent/structures/users.ts:5](https://github.com/livechat/lc-sdk-js/blob/fb04738/src/agent/structures/users.ts#L5)

___

### name\_is\_default

• **name\_is\_default**: `boolean`

#### Defined in

[agent/structures/users.ts:18](https://github.com/livechat/lc-sdk-js/blob/fb04738/src/agent/structures/users.ts#L18)

___

### omnichannel

• `Optional` **omnichannel**: [`Omnichannel`](agent_structures_structures.Omnichannel.md)

#### Defined in

[agent/structures/users.ts:36](https://github.com/livechat/lc-sdk-js/blob/fb04738/src/agent/structures/users.ts#L36)

___

### online

• **online**: `boolean`

#### Defined in

[agent/structures/users.ts:29](https://github.com/livechat/lc-sdk-js/blob/fb04738/src/agent/structures/users.ts#L29)

___

### orders

• `Optional` **orders**: [`Order`](agent_structures_structures.Order.md)[]

#### Defined in

[agent/structures/users.ts:35](https://github.com/livechat/lc-sdk-js/blob/fb04738/src/agent/structures/users.ts#L35)

___

### phone\_number

• `Optional` **phone\_number**: `string`

#### Defined in

[agent/structures/users.ts:20](https://github.com/livechat/lc-sdk-js/blob/fb04738/src/agent/structures/users.ts#L20)

___

### present

• `Optional` **present**: `boolean`

#### Inherited from

BaseUser.present

#### Defined in

[agent/structures/users.ts:9](https://github.com/livechat/lc-sdk-js/blob/fb04738/src/agent/structures/users.ts#L9)

___

### session\_fields

• `Optional` **session\_fields**: `Record`<`string`, `string`\>[]

#### Defined in

[agent/structures/users.ts:22](https://github.com/livechat/lc-sdk-js/blob/fb04738/src/agent/structures/users.ts#L22)

___

### state

• `Optional` **state**: `string`

#### Defined in

[agent/structures/users.ts:31](https://github.com/livechat/lc-sdk-js/blob/fb04738/src/agent/structures/users.ts#L31)

___

### statistics

• `Optional` **statistics**: [`Statistics`](agent_structures_structures.Statistics.md)

#### Defined in

[agent/structures/users.ts:24](https://github.com/livechat/lc-sdk-js/blob/fb04738/src/agent/structures/users.ts#L24)

___

### tickets

• `Optional` **tickets**: [`Ticket`](agent_structures_structures.Ticket.md)[]

#### Defined in

[agent/structures/users.ts:34](https://github.com/livechat/lc-sdk-js/blob/fb04738/src/agent/structures/users.ts#L34)

___

### type

• **type**: `string`

#### Inherited from

BaseUser.type

#### Defined in

[agent/structures/users.ts:8](https://github.com/livechat/lc-sdk-js/blob/fb04738/src/agent/structures/users.ts#L8)

___

### visit

• `Optional` **visit**: [`Visit`](agent_structures_structures.Visit.md)

#### Defined in

[agent/structures/users.ts:23](https://github.com/livechat/lc-sdk-js/blob/fb04738/src/agent/structures/users.ts#L23)
