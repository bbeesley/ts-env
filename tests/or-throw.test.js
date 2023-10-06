import test from 'ava';
import sinon from 'sinon';
import orThrow from '../src/or-throw.js';

test('orThrow() > undefined', (t) => {
  const key = 'foo';
  const readFunction = sinon.stub().returns(undefined);
  t.throws(() => orThrow(readFunction, 'typeString')(key), {
    message: `Couldn't read typeString value from process.env.${key}`,
  });
});

test('orThrow() > defined', (t) => {
  const key = 'foo';
  const value = 'bar';
  const readFunction = sinon.stub().returns(value);
  const returnValue = orThrow(readFunction, 'typeString')(key);
  t.deepEqual(returnValue, value);
});

test('orThrow() > calls the readFunction', (t) => {
  const key = 'foo';
  const value = 'bar';
  const readFunction = sinon.stub().returns(value);
  orThrow(readFunction, 'typeString')(key);
  t.is(readFunction.called, true);
});
