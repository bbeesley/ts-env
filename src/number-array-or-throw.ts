import numberArray from './number-array.js';
import orThrow from './or-throw.js';

export default function numberArrayOrThrow(key: string, separator?: string) {
  return orThrow((k) => numberArray(k, separator), 'number array')(key);
}
