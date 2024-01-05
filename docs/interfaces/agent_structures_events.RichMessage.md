[@livechat/lc-sdk-js](../README.md) / [agent/structures/events](../modules/agent_structures_events.md) / RichMessage

# Interface: RichMessage

[agent/structures/events](../modules/agent_structures_events.md).RichMessage

## Hierarchy

- `BaseEvent`

  ↳ **`RichMessage`**

## Table of contents

### Properties

- [author\_id](agent_structures_events.RichMessage.md#author_id)
- [created\_at](agent_structures_events.RichMessage.md#created_at)
- [custom\_id](agent_structures_events.RichMessage.md#custom_id)
- [elements](agent_structures_events.RichMessage.md#elements)
- [id](agent_structures_events.RichMessage.md#id)
- [properties](agent_structures_events.RichMessage.md#properties)
- [template\_id](agent_structures_events.RichMessage.md#template_id)
- [type](agent_structures_events.RichMessage.md#type)
- [visibility](agent_structures_events.RichMessage.md#visibility)

## Properties

### author\_id

• **author\_id**: `string`

#### Defined in

[agent/structures/events.ts:68](https://github.com/livechat/lc-sdk-js/blob/c7b3817/src/agent/structures/events.ts#L68)

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

[agent/structures/events.ts:67](https://github.com/livechat/lc-sdk-js/blob/c7b3817/src/agent/structures/events.ts#L67)

___

### elements

• `Optional` **elements**: [`Element`](agent_structures_events.Element.md)[]

#### Defined in

[agent/structures/events.ts:70](https://github.com/livechat/lc-sdk-js/blob/c7b3817/src/agent/structures/events.ts#L70)

___

### id

• **id**: `string`

#### Inherited from

BaseEvent.id

#### Defined in

[agent/structures/events.ts:4](https://github.com/livechat/lc-sdk-js/blob/c7b3817/src/agent/structures/events.ts#L4)

___

### properties

• `Optional` **properties**: [`Properties`](agent_structures_structures.Properties.md)

#### Inherited from

BaseEvent.properties

#### Defined in

[agent/structures/events.ts:6](https://github.com/livechat/lc-sdk-js/blob/c7b3817/src/agent/structures/events.ts#L6)

___

### template\_id

• **template\_id**: `string`

#### Defined in

[agent/structures/events.ts:69](https://github.com/livechat/lc-sdk-js/blob/c7b3817/src/agent/structures/events.ts#L69)

___

### type

• **type**: ``"rich_message"``

#### Overrides

BaseEvent.type

#### Defined in

[agent/structures/events.ts:66](https://github.com/livechat/lc-sdk-js/blob/c7b3817/src/agent/structures/events.ts#L66)

___

### visibility

• **visibility**: `string`

#### Inherited from

BaseEvent.visibility

#### Defined in

[agent/structures/events.ts:7](https://github.com/livechat/lc-sdk-js/blob/c7b3817/src/agent/structures/events.ts#L7)
