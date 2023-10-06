import testModule from 'ava';
import stringArray from '../src/string-array.js';

const { serial: test } = testModule;

test.beforeEach(() => {
  process.env = {
    ...originalEnv,
  };
});

const key = 'foo';
const originalEnv = process.env;

test('stringArray() > returns undefined if a key is not defined', (t) => {
  t.falsy(stringArray(key));
});

test('stringArray() > reads a space separated array', (t) => {
  const separator = ' ';
  process.env[key] = '0 1 2 foo bar';
  t.deepEqual(stringArray(key, separator), ['0', '1', '2', 'foo', 'bar']);
});

test('stringArray() > reads a comma separated array', (t) => {
  process.env[key] = '0,1,2,foo bar';
  t.deepEqual(stringArray(key), ['0', '1', '2', 'foo bar']);
});
