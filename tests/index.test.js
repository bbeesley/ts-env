import test from 'ava';
import tsEnv from '../src/index.js';

test('tsEnv > has .numberArrayOrThrow() defined', (t) => {
  t.is(typeof tsEnv.numberArrayOrThrow, 'function');
});

test('tsEnv > has .numberArray() defined', (t) => {
  t.is(typeof tsEnv.numberArray, 'function');
});

test('tsEnv > has .stringArrayOrThrow() defined', (t) => {
  t.is(typeof tsEnv.stringArrayOrThrow, 'function');
});

test('tsEnv > has .stringArray() defined', (t) => {
  t.is(typeof tsEnv.stringArray, 'function');
});

test('tsEnv > has .numberOrThrow() defined', (t) => {
  t.is(typeof tsEnv.numberOrThrow, 'function');
});

test('tsEnv > has .number() defined', (t) => {
  t.is(typeof tsEnv.number, 'function');
});

test('tsEnv > has .booleanOrThrow() defined', (t) => {
  t.is(typeof tsEnv.booleanOrThrow, 'function');
});

test('tsEnv > has .boolean() defined', (t) => {
  t.is(typeof tsEnv.boolean, 'function');
});

test('tsEnv > has .stringOrThrow() defined', (t) => {
  t.is(typeof tsEnv.stringOrThrow, 'function');
});

test('tsEnv > has .string() defined', (t) => {
  t.is(typeof tsEnv.string, 'function');
});
