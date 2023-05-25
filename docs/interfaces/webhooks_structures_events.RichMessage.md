[@livechat/lc-sdk-js](../README.md) / [webhooks/structures/events](../modules/webhooks_structures_events.md) / RichMessage

# Interface: RichMessage

[webhooks/structures/events](../modules/webhooks_structures_events.md).RichMessage

## Hierarchy

- `BaseEvent`

  ↳ **`RichMessage`**

## Table of contents

### Properties

- [author\_id](webhooks_structures_events.RichMessage.md#author_id)
- [created\_at](webhooks_structures_events.RichMessage.md#created_at)
- [custom\_id](webhooks_structures_events.RichMessage.md#custom_id)
- [elements](webhooks_structures_events.RichMessage.md#elements)
- [id](webhooks_structures_events.RichMessage.md#id)
- [properties](webhooks_structures_events.RichMessage.md#properties)
- [recipients](webhooks_structures_events.RichMessage.md#recipients)
- [template\_id](webhooks_structures_events.RichMessage.md#template_id)
- [type](webhooks_structures_events.RichMessage.md#type)

## Properties

### author\_id

• **author\_id**: `string`

#### Defined in

[webhooks/structures/events.ts:67](https://github.com/livechat/lc-sdk-js/blob/d267eeb/src/webhooks/structures/events.ts#L67)

___

### created\_at

• **created\_at**: `string`

#### Inherited from

BaseEvent.created\_at

#### Defined in

[webhooks/structures/events.ts:5](https://github.com/livechat/lc-sdk-js/blob/d267eeb/src/webhooks/structures/events.ts#L5)

___

### custom\_id

• `Optional` **custom\_id**: `string`

#### Defined in

[webhooks/structures/events.ts:66](https://github.com/livechat/lc-sdk-js/blob/d267eeb/src/webhooks/structures/events.ts#L66)

___

### elements

• `Optional` **elements**: [`Element`](webhooks_structures_events.Element.md)[]

#### Defined in

[webhooks/structures/events.ts:69](https://github.com/livechat/lc-sdk-js/blob/d267eeb/src/webhooks/structures/events.ts#L69)

___

### id

• **id**: `string`

#### Inherited from

BaseEvent.id

#### Defined in

[webhooks/structures/events.ts:4](https://github.com/livechat/lc-sdk-js/blob/d267eeb/src/webhooks/structures/events.ts#L4)

___

### properties

• `Optional` **properties**: [`Properties`](webhooks_structures_structures.Properties.md)

#### Inherited from

BaseEvent.properties

#### Defined in

[webhooks/structures/events.ts:6](https://github.com/livechat/lc-sdk-js/blob/d267eeb/src/webhooks/structures/events.ts#L6)

___

### recipients

• `Optional` **recipients**: `string`

#### Inherited from

BaseEvent.recipients

#### Defined in

[webhooks/structures/events.ts:7](https://github.com/livechat/lc-sdk-js/blob/d267eeb/src/webhooks/structures/events.ts#L7)

___

### template\_id

• **template\_id**: `string`

#### Defined in

[webhooks/structures/events.ts:68](https://github.com/livechat/lc-sdk-js/blob/d267eeb/src/webhooks/structures/events.ts#L68)

___

### type

• **type**: ``"rich_message"``

#### Overrides

BaseEvent.type

#### Defined in

[webhooks/structures/events.ts:65](https://github.com/livechat/lc-sdk-js/blob/d267eeb/src/webhooks/structures/events.ts#L65)
