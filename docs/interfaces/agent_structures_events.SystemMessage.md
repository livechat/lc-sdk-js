[@livechat/lc-sdk-js](../README.md) / [agent/structures/events](../modules/agent_structures_events.md) / SystemMessage

# Interface: SystemMessage

[agent/structures/events](../modules/agent_structures_events.md).SystemMessage

## Hierarchy

- `BaseEvent`

  ↳ **`SystemMessage`**

## Table of contents

### Properties

- [created\_at](agent_structures_events.SystemMessage.md#created_at)
- [id](agent_structures_events.SystemMessage.md#id)
- [properties](agent_structures_events.SystemMessage.md#properties)
- [recipients](agent_structures_events.SystemMessage.md#recipients)
- [system\_message\_type](agent_structures_events.SystemMessage.md#system_message_type)
- [text](agent_structures_events.SystemMessage.md#text)
- [text\_vars](agent_structures_events.SystemMessage.md#text_vars)
- [type](agent_structures_events.SystemMessage.md#type)

## Properties

### created\_at

• **created\_at**: `string`

#### Inherited from

BaseEvent.created\_at

#### Defined in

[agent/structures/events.ts:5](https://github.com/livechat/lc-sdk-js/blob/d267eeb/src/agent/structures/events.ts#L5)

___

### id

• **id**: `string`

#### Inherited from

BaseEvent.id

#### Defined in

[agent/structures/events.ts:4](https://github.com/livechat/lc-sdk-js/blob/d267eeb/src/agent/structures/events.ts#L4)

___

### properties

• `Optional` **properties**: [`Properties`](agent_structures_structures.Properties.md)

#### Inherited from

BaseEvent.properties

#### Defined in

[agent/structures/events.ts:6](https://github.com/livechat/lc-sdk-js/blob/d267eeb/src/agent/structures/events.ts#L6)

___

### recipients

• `Optional` **recipients**: `string`

#### Inherited from

BaseEvent.recipients

#### Defined in

[agent/structures/events.ts:7](https://github.com/livechat/lc-sdk-js/blob/d267eeb/src/agent/structures/events.ts#L7)

___

### system\_message\_type

• **system\_message\_type**: `string`

#### Defined in

[agent/structures/events.ts:108](https://github.com/livechat/lc-sdk-js/blob/d267eeb/src/agent/structures/events.ts#L108)

___

### text

• `Optional` **text**: `string`

#### Defined in

[agent/structures/events.ts:109](https://github.com/livechat/lc-sdk-js/blob/d267eeb/src/agent/structures/events.ts#L109)

___

### text\_vars

• `Optional` **text\_vars**: `object`

#### Defined in

[agent/structures/events.ts:110](https://github.com/livechat/lc-sdk-js/blob/d267eeb/src/agent/structures/events.ts#L110)

___

### type

• **type**: ``"system_message"``

#### Overrides

BaseEvent.type

#### Defined in

[agent/structures/events.ts:107](https://github.com/livechat/lc-sdk-js/blob/d267eeb/src/agent/structures/events.ts#L107)
