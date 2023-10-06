import testModule from 'ava';
import numberArray from '../src/number-array.js';

const { serial: test } = testModule;

test.beforeEach(() => {
  process.env = {
    ...originalEnv,
  };
});

const key = 'foo';
const originalEnv = process.env;

test('numberArray() > returns undefined if a key is not defined', (t) => {
  t.falsy(numberArray(key));
});

test('numberArray() > returns undefined if any item is not a number', (t) => {
  process.env[key] = '0,1,2,foo';
  t.falsy(numberArray(key));
});

test('numberArray() > reads a space separated array', (t) => {
  const separator = ' ';
  process.env[key] = '0 1 2 -1.5';
  t.deepEqual(numberArray(key, separator), [0, 1, 2, -1.5]);
});

test('numberArray() > reads a comma separated array', (t) => {
  process.env[key] = '0,1,2,-1.5';
  t.deepEqual(numberArray(key), [0, 1, 2, -1.5]);
});
