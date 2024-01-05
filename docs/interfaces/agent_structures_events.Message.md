[@livechat/lc-sdk-js](../README.md) / [agent/structures/events](../modules/agent_structures_events.md) / Message

# Interface: Message

[agent/structures/events](../modules/agent_structures_events.md).Message

## Hierarchy

- `BaseEvent`

  ↳ **`Message`**

## Table of contents

### Properties

- [author\_id](agent_structures_events.Message.md#author_id)
- [created\_at](agent_structures_events.Message.md#created_at)
- [custom\_id](agent_structures_events.Message.md#custom_id)
- [id](agent_structures_events.Message.md#id)
- [postback](agent_structures_events.Message.md#postback)
- [properties](agent_structures_events.Message.md#properties)
- [text](agent_structures_events.Message.md#text)
- [type](agent_structures_events.Message.md#type)
- [visibility](agent_structures_events.Message.md#visibility)

## Properties

### author\_id

• **author\_id**: `string`

#### Defined in

[agent/structures/events.ts:52](https://github.com/livechat/lc-sdk-js/blob/c7b3817/src/agent/structures/events.ts#L52)

___

### created\_at

• **created\_at**: `string`

#### Inherited from

BaseEvent.created\_at

#### Defined in

[agent/structures/events.ts:5](https://github.com/livechat/lc-sdk-js/blob/c7b3817/src/agent/structures/events.ts#L5)

___

### custom\_id

• `Optional` **custom\_id**: `string`

#### Defined in

[agent/structures/events.ts:51](https://github.com/livechat/lc-sdk-js/blob/c7b3817/src/agent/structures/events.ts#L51)

___

### id

• **id**: `string`

#### Inherited from

BaseEvent.id

#### Defined in

[agent/structures/events.ts:4](https://github.com/livechat/lc-sdk-js/blob/c7b3817/src/agent/structures/events.ts#L4)

___

### postback

• `Optional` **postback**: [`Postback`](agent_structures_events.Postback.md)

#### Defined in

[agent/structures/events.ts:54](https://github.com/livechat/lc-sdk-js/blob/c7b3817/src/agent/structures/events.ts#L54)

___

### properties

• `Optional` **properties**: [`Properties`](agent_structures_structures.Properties.md)

#### Inherited from

BaseEvent.properties

#### Defined in

[agent/structures/events.ts:6](https://github.com/livechat/lc-sdk-js/blob/c7b3817/src/agent/structures/events.ts#L6)

___

### text

• **text**: `string`

#### Defined in

[agent/structures/events.ts:53](https://github.com/livechat/lc-sdk-js/blob/c7b3817/src/agent/structures/events.ts#L53)

___

### type

• **type**: ``"message"``

#### Overrides

BaseEvent.type

#### Defined in

[agent/structures/events.ts:50](https://github.com/livechat/lc-sdk-js/blob/c7b3817/src/agent/structures/events.ts#L50)

___

### visibility

• **visibility**: `string`

#### Inherited from

BaseEvent.visibility

#### Defined in

[agent/structures/events.ts:7](https://github.com/livechat/lc-sdk-js/blob/c7b3817/src/agent/structures/events.ts#L7)
