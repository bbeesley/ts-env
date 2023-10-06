import testModule from 'ava';
import numberOrThrow from '../src/number-or-throw.js';

const { serial: test } = testModule;

test.beforeEach(() => {
  process.env = {
    ...originalEnv,
  };
});

const key = 'foo';
const originalEnv = process.env;

test('numberOrThrow() > throws if a key is not defined', (t) => {
  t.throws(() => numberOrThrow(key));
});

test('numberOrThrow() > reads "string" as undefined', (t) => {
  process.env[key] = 'string';
  t.throws(() => numberOrThrow(key));
});

test('numberOrThrow() > reads "0.1" as 0.1', (t) => {
  process.env[key] = '0.1';
  t.is(numberOrThrow(key), 0.1);
});

test('numberOrThrow() > reads "-1" as -1', (t) => {
  process.env[key] = '-1';
  t.deepEqual(numberOrThrow(key), -1);
});

test('numberOrThrow() > reads "1" as 1', (t) => {
  process.env[key] = '1';
  t.is(numberOrThrow(key), 1);
});

test('numberOrThrow() > reads "0" as 0', (t) => {
  process.env[key] = '0';
  t.is(numberOrThrow(key), 0);
});
