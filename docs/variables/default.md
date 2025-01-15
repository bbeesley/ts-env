[**@beesley/ts-env v1.0.1**](../README.md) • **Docs**

***

[@beesley/ts-env v1.0.1](../globals.md) / default

# Variable: default

> `const` **default**: `object`

## Type declaration

### boolean()

> **boolean**: (`key`) => `undefined` \| `boolean`

#### Parameters

• **key**: `string`

#### Returns

`undefined` \| `boolean`

### booleanOrThrow()

> **booleanOrThrow**: (`key`) => `boolean`

#### Parameters

• **key**: `string`

#### Returns

`boolean`

### number()

> **number**: (`key`) => `undefined` \| `number`

#### Parameters

• **key**: `string`

#### Returns

`undefined` \| `number`

### numberArray()

> **numberArray**: (`key`, `separator`) => `undefined` \| `number`[]

#### Parameters

• **key**: `string`

• **separator**: `string` = `','`

#### Returns

`undefined` \| `number`[]

### numberArrayOrThrow()

> **numberArrayOrThrow**: (`key`, `separator`?) => `number`[]

#### Parameters

• **key**: `string`

• **separator?**: `string`

#### Returns

`number`[]

### numberOrThrow()

> **numberOrThrow**: (`key`) => `number`

#### Parameters

• **key**: `string`

#### Returns

`number`

### string()

> **string**: (`key`) => `undefined` \| `string`

#### Parameters

• **key**: `string`

#### Returns

`undefined` \| `string`

### stringArray()

> **stringArray**: (`key`, `separator`) => `undefined` \| `string`[]

#### Parameters

• **key**: `string`

• **separator**: `string` = `','`

#### Returns

`undefined` \| `string`[]

### stringArrayOrThrow()

> **stringArrayOrThrow**: (`key`, `separator`?) => `string`[]

#### Parameters

• **key**: `string`

• **separator?**: `string`

#### Returns

`string`[]

### stringOrThrow()

> **stringOrThrow**: (`key`) => `string`

#### Parameters

• **key**: `string`

#### Returns

`string`

## Defined in

[index.ts:12](https://github.com/bbeesley/ts-env/blob/main/src/index.ts#L12)
