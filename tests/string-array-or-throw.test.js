import testModule from 'ava';
import stringArrayOrThrow from '../src/string-array-or-throw.js';

const { serial: test } = testModule;

test.beforeEach(() => {
  process.env = {
    ...originalEnv,
  };
});

const key = 'foo';
const originalEnv = process.env;

test('stringArrayOrThrow() > throws if a key is not defined', (t) => {
  t.throws(() => stringArrayOrThrow(key));
});

test('stringArrayOrThrow() > reads a space separated array', (t) => {
  const separator = ' ';
  process.env[key] = '0 1 2 foo bar';
  t.deepEqual(stringArrayOrThrow(key, separator), [
    '0',
    '1',
    '2',
    'foo',
    'bar',
  ]);
});

test('stringArrayOrThrow() > reads a comma separated array', (t) => {
  process.env[key] = '0,1,2,foo bar';
  t.deepEqual(stringArrayOrThrow(key), ['0', '1', '2', 'foo bar']);
});
