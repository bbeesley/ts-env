import testModule from 'ava';
import boolean from '../src/boolean.js';

const { serial: test } = testModule;

test.beforeEach(() => {
  process.env = {
    ...originalEnv,
  };
});

const key = 'foo';
const originalEnv = process.env;

test('boolean() > returns undefined if a key is not defined', (t) => {
  t.falsy(boolean(key));
});

test('boolean() > reads "0" as false', (t) => {
  process.env[key] = '0';
  t.is(boolean(key), false);
});

test('boolean() > reads "false" as false', (t) => {
  process.env[key] = 'false';
  t.is(boolean(key), false);
});

test('boolean() > reads "1" as true', (t) => {
  process.env[key] = '1';
  t.is(boolean(key), true);
});

test('boolean() > reads "true" as true', (t) => {
  process.env[key] = 'true';
  t.is(boolean(key), true);
});
