import string from './string.js';
import orThrow from './or-throw.js';

export default function stringOrThrow(key: string) {
  return orThrow(string, 'string')(key);
}
