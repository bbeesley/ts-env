import testModule from 'ava';
import booleanOrThrow from '../src/boolean-or-throw.js';

const { serial: test } = testModule;

test.beforeEach(() => {
  process.env = {
    ...originalEnv,
  };
});

const key = 'foo';
const originalEnv = process.env;

test('.booleanOrThrow() > throws an error if a key is not defined', (t) => {
  t.throws(() => booleanOrThrow(key));
});

test('.booleanOrThrow() > reads "0" as false', (t) => {
  process.env[key] = '0';
  t.is(booleanOrThrow(key), false);
});

test('.booleanOrThrow() > reads "false" as false', (t) => {
  process.env[key] = 'false';
  t.is(booleanOrThrow(key), false);
});

test('.booleanOrThrow() > reads "1" as true', (t) => {
  process.env[key] = '1';
  t.is(booleanOrThrow(key), true);
});

test('.booleanOrThrow() > reads "true" as true', (t) => {
  process.env[key] = 'true';
  t.is(booleanOrThrow(key), true);
});
