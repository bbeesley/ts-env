import testModule from 'ava';
import stringOrThrow from '../src/string-or-throw.js';

const { serial: test } = testModule;

test.beforeEach(() => {
  process.env = {
    ...originalEnv,
  };
});

const key = 'foo';
const originalEnv = process.env;

test('stringOrThrow() > throws if a key is not defined', (t) => {
  t.throws(() => stringOrThrow(key));
});

test('stringOrThrow() > reads a string value', (t) => {
  const value = 'bar';
  process.env[key] = value;
  t.deepEqual(stringOrThrow(key), value);
});
