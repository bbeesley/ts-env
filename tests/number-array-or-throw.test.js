import testModule from 'ava';
import numberArrayOrThrow from '../src/number-array-or-throw.js';

const { serial: test } = testModule;

test.beforeEach(() => {
  process.env = {
    ...originalEnv,
  };
});

const key = 'foo';
const originalEnv = process.env;

test('numberArrayOrThrow() > throws if a key is not defined', (t) => {
  t.throws(() => numberArrayOrThrow(key));
});

test('numberArrayOrThrow() > throws if any item is not a number', (t) => {
  process.env[key] = '0,1,2,foo';
  t.throws(() => numberArrayOrThrow(key));
});

test('numberArrayOrThrow() > reads a space separated array', (t) => {
  const separator = ' ';
  process.env[key] = '0 1 2 -1.5';
  t.deepEqual(numberArrayOrThrow(key, separator), [0, 1, 2, -1.5]);
});

test('numberArrayOrThrow() > reads a comma separated array', (t) => {
  process.env[key] = '0,1,2,-1.5';
  t.deepEqual(numberArrayOrThrow(key), [0, 1, 2, -1.5]);
});
