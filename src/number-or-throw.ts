import number from './number.js';
import orThrow from './or-throw.js';

export default function numberOrThrow(key: string) {
  return orThrow(number, 'number')(key);
}
