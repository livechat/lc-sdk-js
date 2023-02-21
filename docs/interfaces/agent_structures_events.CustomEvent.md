[@livechat/lc-sdk-js](../README.md) / [agent/structures/events](../modules/agent_structures_events.md) / CustomEvent

# Interface: CustomEvent

[agent/structures/events](../modules/agent_structures_events.md).CustomEvent

## Hierarchy

- `BaseEvent`

  ↳ **`CustomEvent`**

## Table of contents

### Properties

- [author\_id](agent_structures_events.CustomEvent.md#author_id)
- [content](agent_structures_events.CustomEvent.md#content)
- [created\_at](agent_structures_events.CustomEvent.md#created_at)
- [custom\_id](agent_structures_events.CustomEvent.md#custom_id)
- [id](agent_structures_events.CustomEvent.md#id)
- [properties](agent_structures_events.CustomEvent.md#properties)
- [recipients](agent_structures_events.CustomEvent.md#recipients)
- [type](agent_structures_events.CustomEvent.md#type)

## Properties

### author\_id

• **author\_id**: `string`

#### Defined in

[agent/structures/events.ts:102](https://github.com/livechat/lc-sdk-js/blob/5f5afdd/src/agent/structures/events.ts#L102)

___

### content

• `Optional` **content**: `object`

#### Defined in

[agent/structures/events.ts:103](https://github.com/livechat/lc-sdk-js/blob/5f5afdd/src/agent/structures/events.ts#L103)

___

### created\_at

• **created\_at**: `string`

#### Inherited from

BaseEvent.created\_at

#### Defined in

[agent/structures/events.ts:5](https://github.com/livechat/lc-sdk-js/blob/5f5afdd/src/agent/structures/events.ts#L5)

___

### custom\_id

• `Optional` **custom\_id**: `string`

#### Defined in

[agent/structures/events.ts:101](https://github.com/livechat/lc-sdk-js/blob/5f5afdd/src/agent/structures/events.ts#L101)

___

### id

• **id**: `string`

#### Inherited from

BaseEvent.id

#### Defined in

[agent/structures/events.ts:4](https://github.com/livechat/lc-sdk-js/blob/5f5afdd/src/agent/structures/events.ts#L4)

___

### properties

• `Optional` **properties**: [`Properties`](agent_structures_structures.Properties.md)

#### Inherited from

BaseEvent.properties

#### Defined in

[agent/structures/events.ts:6](https://github.com/livechat/lc-sdk-js/blob/5f5afdd/src/agent/structures/events.ts#L6)

___

### recipients

• `Optional` **recipients**: `string`

#### Inherited from

BaseEvent.recipients

#### Defined in

[agent/structures/events.ts:7](https://github.com/livechat/lc-sdk-js/blob/5f5afdd/src/agent/structures/events.ts#L7)

___

### type

• **type**: ``"custom"``

#### Overrides

BaseEvent.type

#### Defined in

[agent/structures/events.ts:100](https://github.com/livechat/lc-sdk-js/blob/5f5afdd/src/agent/structures/events.ts#L100)
