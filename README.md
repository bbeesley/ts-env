# @beesley/ts-env / [Exports](docs/globals.md)

[![Build, Test & Publish Main](https://github.com/bbeesley/ts-env/actions/workflows/build-test-on-push.yml/badge.svg)](https://github.com/bbeesley/ts-env/actions/workflows/build-test-on-push.yml) [![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/) [![semantic-release: angular](https://img.shields.io/badge/semantic--release-angular-e10079?logo=semantic-release)](https://github.com/semantic-release/semantic-release)

An environment variable reader for TypeScript. Simple and minimal. ✨

This is basically the package created by @lpgera, but since that package doesn't play well at all with typescript when you're using es modules I've forked it and rebuilt is as a universal package to work with either es modules or common js.

## Install

This package requires `typescript` to be installed.

```bash
# with npm
npm install @beesley/ts-env

# or with Yarn
yarn add @beesley/ts-env
```

## Example

Reading different types of environment variables without `ts-env`:

```typescript
if (!process.env.PORT) {
  throw new Error('process.env.PORT is missing')
}
if (!process.env.DATABASE) {
  throw new Error('process.env.DATABASE is missing')
}

const port: number = parseInt(process.env.PORT)
const database: string = process.env.DATABASE
const debug: boolean | undefined = process.env.DEBUG === 'true'
```

Doing the same with `ts-env`:

```typescript
import tsEnv from '@beesley/ts-env'

const port: number = tsEnv.numberOrThrow('PORT')
const database: string = tsEnv.stringOrThrow('DATABASE')
const debug: boolean | undefined = tsEnv.boolean('DEBUG')
```

## API

### .string(key: string): string | undefined

Reads a string value from `process.env[key]`.

### .stringOrThrow(key: string): string

Reads a string value from `process.env[key]`.
Throws an error if it's `undefined`.

### .boolean(key: string): boolean | undefined

Reads a boolean value from `process.env[key]`.
"0" and "false" are considered `false`, "1" and "true" are considered `true`.
Everything else will be read as `undefined`.

### .booleanOrThrow(key: string): boolean

Reads a boolean value from `process.env[key]`.
"0" and "false" are considered `false`, "1" and "true" are considered `true`.
Everything else will result in an error thrown.

### .number(key: string): number | undefined

Reads a number value from `process.env[key]`.
If a number cannot be parsed, it will return `undefined`.

### .numberOrThrow(key: string): number

Reads a number value from `process.env[key]`.
If a number cannot be parsed, an error will be thrown.

### .stringArray(key: string, separator: string = ','): string[] | undefined

Reads a string array from `process.env[key]`.

### .stringArrayOrThrow(key: string, separator: string = ','): string[]

Reads a string array from `process.env[key]`.
Throws an error if it's `undefined`.

### .numberArray(key: string, separator: string = ','): number[] | undefined

Reads a number array from `process.env[key]`.
If any item cannot be parsed, it will return `undefined`.

### .numberArrayOrThrow(key: string, separator: string = ','): number[]

Reads a number array from `process.env[key]`.
If any item cannot be parsed, an error will be thrown.
