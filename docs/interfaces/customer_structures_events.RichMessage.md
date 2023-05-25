[@livechat/lc-sdk-js](../README.md) / [customer/structures/events](../modules/customer_structures_events.md) / RichMessage

# Interface: RichMessage

[customer/structures/events](../modules/customer_structures_events.md).RichMessage

## Hierarchy

- `BaseEvent`

  ↳ **`RichMessage`**

## Table of contents

### Properties

- [author\_id](customer_structures_events.RichMessage.md#author_id)
- [created\_at](customer_structures_events.RichMessage.md#created_at)
- [custom\_id](customer_structures_events.RichMessage.md#custom_id)
- [elements](customer_structures_events.RichMessage.md#elements)
- [id](customer_structures_events.RichMessage.md#id)
- [properties](customer_structures_events.RichMessage.md#properties)
- [recipients](customer_structures_events.RichMessage.md#recipients)
- [template\_id](customer_structures_events.RichMessage.md#template_id)
- [type](customer_structures_events.RichMessage.md#type)

## Properties

### author\_id

• **author\_id**: `string`

#### Defined in

[customer/structures/events.ts:67](https://github.com/livechat/lc-sdk-js/blob/d267eeb/src/customer/structures/events.ts#L67)

___

### created\_at

• **created\_at**: `string`

#### Inherited from

BaseEvent.created\_at

#### Defined in

[customer/structures/events.ts:5](https://github.com/livechat/lc-sdk-js/blob/d267eeb/src/customer/structures/events.ts#L5)

___

### custom\_id

• `Optional` **custom\_id**: `string`

#### Defined in

[customer/structures/events.ts:66](https://github.com/livechat/lc-sdk-js/blob/d267eeb/src/customer/structures/events.ts#L66)

___

### elements

• `Optional` **elements**: [`Element`](customer_structures_events.Element.md)[]

#### Defined in

[customer/structures/events.ts:69](https://github.com/livechat/lc-sdk-js/blob/d267eeb/src/customer/structures/events.ts#L69)

___

### id

• **id**: `string`

#### Inherited from

BaseEvent.id

#### Defined in

[customer/structures/events.ts:4](https://github.com/livechat/lc-sdk-js/blob/d267eeb/src/customer/structures/events.ts#L4)

___

### properties

• `Optional` **properties**: [`Properties`](customer_structures_structures.Properties.md)

#### Inherited from

BaseEvent.properties

#### Defined in

[customer/structures/events.ts:6](https://github.com/livechat/lc-sdk-js/blob/d267eeb/src/customer/structures/events.ts#L6)

___

### recipients

• `Optional` **recipients**: `string`

#### Inherited from

BaseEvent.recipients

#### Defined in

[customer/structures/events.ts:7](https://github.com/livechat/lc-sdk-js/blob/d267eeb/src/customer/structures/events.ts#L7)

___

### template\_id

• **template\_id**: `string`

#### Defined in

[customer/structures/events.ts:68](https://github.com/livechat/lc-sdk-js/blob/d267eeb/src/customer/structures/events.ts#L68)

___

### type

• **type**: ``"rich_message"``

#### Overrides

BaseEvent.type

#### Defined in

[customer/structures/events.ts:65](https://github.com/livechat/lc-sdk-js/blob/d267eeb/src/customer/structures/events.ts#L65)
