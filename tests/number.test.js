import testModule from 'ava';
import number from '../src/number.js';

const { serial: test } = testModule;

test.beforeEach(() => {
  process.env = {
    ...originalEnv,
  };
});

const key = 'foo';
const originalEnv = process.env;

test('number() > returns undefined if a key is not defined', (t) => {
  t.falsy(number(key));
});

test('number() > reads "string" as undefined', (t) => {
  process.env[key] = 'string';
  t.falsy(number(key));
});

test('number() > reads "0.1" as 0.1', (t) => {
  process.env[key] = '0.1';
  t.is(number(key), 0.1);
});

test('number() > reads "-1" as -1', (t) => {
  process.env[key] = '-1';
  t.is(number(key), -1);
});

test('number() > reads "1" as 1', (t) => {
  process.env[key] = '1';
  t.is(number(key), 1);
});

test('number() > reads "0" as 0', (t) => {
  process.env[key] = '0';
  t.is(number(key), 0);
});
