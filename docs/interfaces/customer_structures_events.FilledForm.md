[@livechat/lc-sdk-js](../README.md) / [customer/structures/events](../modules/customer_structures_events.md) / FilledForm

# Interface: FilledForm

[customer/structures/events](../modules/customer_structures_events.md).FilledForm

## Hierarchy

- `BaseEvent`

  ↳ **`FilledForm`**

## Table of contents

### Properties

- [author\_id](customer_structures_events.FilledForm.md#author_id)
- [created\_at](customer_structures_events.FilledForm.md#created_at)
- [custom\_id](customer_structures_events.FilledForm.md#custom_id)
- [fields](customer_structures_events.FilledForm.md#fields)
- [form\_id](customer_structures_events.FilledForm.md#form_id)
- [form\_type](customer_structures_events.FilledForm.md#form_type)
- [id](customer_structures_events.FilledForm.md#id)
- [properties](customer_structures_events.FilledForm.md#properties)
- [recipients](customer_structures_events.FilledForm.md#recipients)
- [type](customer_structures_events.FilledForm.md#type)

## Properties

### author\_id

• **author\_id**: `string`

#### Defined in

[customer/structures/events.ts:29](https://github.com/livechat/lc-sdk-js/blob/a921f8a/src/customer/structures/events.ts#L29)

___

### created\_at

• **created\_at**: `string`

#### Inherited from

BaseEvent.created\_at

#### Defined in

[customer/structures/events.ts:5](https://github.com/livechat/lc-sdk-js/blob/a921f8a/src/customer/structures/events.ts#L5)

___

### custom\_id

• `Optional` **custom\_id**: `string`

#### Defined in

[customer/structures/events.ts:28](https://github.com/livechat/lc-sdk-js/blob/a921f8a/src/customer/structures/events.ts#L28)

___

### fields

• **fields**: [`FormField`](customer_structures_events.FormField.md)[]

#### Defined in

[customer/structures/events.ts:32](https://github.com/livechat/lc-sdk-js/blob/a921f8a/src/customer/structures/events.ts#L32)

___

### form\_id

• **form\_id**: `string`

#### Defined in

[customer/structures/events.ts:30](https://github.com/livechat/lc-sdk-js/blob/a921f8a/src/customer/structures/events.ts#L30)

___

### form\_type

• `Optional` **form\_type**: `string`

#### Defined in

[customer/structures/events.ts:31](https://github.com/livechat/lc-sdk-js/blob/a921f8a/src/customer/structures/events.ts#L31)

___

### id

• **id**: `string`

#### Inherited from

BaseEvent.id

#### Defined in

[customer/structures/events.ts:4](https://github.com/livechat/lc-sdk-js/blob/a921f8a/src/customer/structures/events.ts#L4)

___

### properties

• `Optional` **properties**: [`Properties`](customer_structures_structures.Properties.md)

#### Inherited from

BaseEvent.properties

#### Defined in

[customer/structures/events.ts:6](https://github.com/livechat/lc-sdk-js/blob/a921f8a/src/customer/structures/events.ts#L6)

___

### recipients

• `Optional` **recipients**: `string`

#### Inherited from

BaseEvent.recipients

#### Defined in

[customer/structures/events.ts:7](https://github.com/livechat/lc-sdk-js/blob/a921f8a/src/customer/structures/events.ts#L7)

___

### type

• **type**: ``"form"`` \| ``"filled_form"``

#### Overrides

BaseEvent.type

#### Defined in

[customer/structures/events.ts:27](https://github.com/livechat/lc-sdk-js/blob/a921f8a/src/customer/structures/events.ts#L27)
