[@livechat/lc-sdk-js](../README.md) / [agent/structures/events](../modules/agent_structures_events.md) / FilledForm

# Interface: FilledForm

[agent/structures/events](../modules/agent_structures_events.md).FilledForm

## Hierarchy

- `BaseEvent`

  ↳ **`FilledForm`**

## Table of contents

### Properties

- [author\_id](agent_structures_events.FilledForm.md#author_id)
- [created\_at](agent_structures_events.FilledForm.md#created_at)
- [custom\_id](agent_structures_events.FilledForm.md#custom_id)
- [fields](agent_structures_events.FilledForm.md#fields)
- [form\_id](agent_structures_events.FilledForm.md#form_id)
- [form\_type](agent_structures_events.FilledForm.md#form_type)
- [id](agent_structures_events.FilledForm.md#id)
- [properties](agent_structures_events.FilledForm.md#properties)
- [type](agent_structures_events.FilledForm.md#type)
- [visibility](agent_structures_events.FilledForm.md#visibility)

## Properties

### author\_id

• **author\_id**: `string`

#### Defined in

[agent/structures/events.ts:29](https://github.com/livechat/lc-sdk-js/blob/8462be9/src/agent/structures/events.ts#L29)

___

### created\_at

• **created\_at**: `string`

#### Inherited from

BaseEvent.created\_at

#### Defined in

[agent/structures/events.ts:5](https://github.com/livechat/lc-sdk-js/blob/8462be9/src/agent/structures/events.ts#L5)

___

### custom\_id

• `Optional` **custom\_id**: `string`

#### Defined in

[agent/structures/events.ts:28](https://github.com/livechat/lc-sdk-js/blob/8462be9/src/agent/structures/events.ts#L28)

___

### fields

• **fields**: [`FormField`](agent_structures_events.FormField.md)[]

#### Defined in

[agent/structures/events.ts:32](https://github.com/livechat/lc-sdk-js/blob/8462be9/src/agent/structures/events.ts#L32)

___

### form\_id

• **form\_id**: `string`

#### Defined in

[agent/structures/events.ts:30](https://github.com/livechat/lc-sdk-js/blob/8462be9/src/agent/structures/events.ts#L30)

___

### form\_type

• `Optional` **form\_type**: `string`

#### Defined in

[agent/structures/events.ts:31](https://github.com/livechat/lc-sdk-js/blob/8462be9/src/agent/structures/events.ts#L31)

___

### id

• **id**: `string`

#### Inherited from

BaseEvent.id

#### Defined in

[agent/structures/events.ts:4](https://github.com/livechat/lc-sdk-js/blob/8462be9/src/agent/structures/events.ts#L4)

___

### properties

• `Optional` **properties**: [`Properties`](agent_structures_structures.Properties.md)

#### Inherited from

BaseEvent.properties

#### Defined in

[agent/structures/events.ts:6](https://github.com/livechat/lc-sdk-js/blob/8462be9/src/agent/structures/events.ts#L6)

___

### type

• **type**: ``"form"`` \| ``"filled_form"``

#### Overrides

BaseEvent.type

#### Defined in

[agent/structures/events.ts:27](https://github.com/livechat/lc-sdk-js/blob/8462be9/src/agent/structures/events.ts#L27)

___

### visibility

• **visibility**: `string`

#### Inherited from

BaseEvent.visibility

#### Defined in

[agent/structures/events.ts:7](https://github.com/livechat/lc-sdk-js/blob/8462be9/src/agent/structures/events.ts#L7)
