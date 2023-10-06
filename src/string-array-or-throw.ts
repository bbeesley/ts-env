import stringArray from './string-array.js';
import orThrow from './or-throw.js';

export default function stringArrayOrThrow(key: string, separator?: string) {
  return orThrow((k) => stringArray(k, separator), 'string array')(key);
}
