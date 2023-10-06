export default function numberArray(key: string, separator = ',') {
  const rawValue = process.env[key];

  if (!rawValue) {
    return undefined;
  }

  const numberArray = rawValue.split(separator).map(Number);

  if (numberArray.some((n) => Number.isNaN(n))) {
    return undefined;
  }

  return numberArray;
}
