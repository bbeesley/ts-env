import testModule from 'ava';
import string from '../src/string.js';

const { serial: test } = testModule;

test.beforeEach(() => {
  process.env = {
    ...originalEnv,
  };
});

const key = 'foo';
const originalEnv = process.env;

test('string() > returns undefined if a key is not defined', (t) => {
  t.falsy(string(key));
});

test('string() > reads a string value', (t) => {
  const value = 'bar';
  process.env[key] = value;
  t.deepEqual(string(key), value);
});
