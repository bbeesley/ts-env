import boolean from './boolean.js';
import orThrow from './or-throw.js';

export default function booleanOrThrow(key: string) {
  return orThrow(boolean, 'boolean')(key);
}
