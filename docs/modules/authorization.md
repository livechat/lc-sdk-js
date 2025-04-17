[@livechat/lc-sdk-js](../README.md) / authorization

# Module: authorization

## Table of contents

### Interfaces

- [Token](../interfaces/authorization.Token.md)

### Type Aliases

- [TokenGetter](authorization.md#tokengetter)
- [TokenType](authorization.md#tokentype)

### Functions

- [validateTokenGetter](authorization.md#validatetokengetter)

## Type Aliases

### TokenGetter

Ƭ **TokenGetter**: () => [`Token`](../interfaces/authorization.Token.md)

#### Type declaration

▸ (): [`Token`](../interfaces/authorization.Token.md)

##### Returns

[`Token`](../interfaces/authorization.Token.md)

#### Defined in

[authorization/index.ts:10](https://github.com/livechat/lc-sdk-js/blob/e62e196/src/authorization/index.ts#L10)

___

### TokenType

Ƭ **TokenType**: ``"Bearer"`` \| ``"Basic"``

#### Defined in

[authorization/index.ts:1](https://github.com/livechat/lc-sdk-js/blob/e62e196/src/authorization/index.ts#L1)

## Functions

### validateTokenGetter

▸ **validateTokenGetter**(`tokenGetter`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tokenGetter` | [`TokenGetter`](authorization.md#tokengetter) |

#### Returns

`void`

#### Defined in

[authorization/index.ts:12](https://github.com/livechat/lc-sdk-js/blob/e62e196/src/authorization/index.ts#L12)
