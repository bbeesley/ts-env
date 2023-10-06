export default function stringArray(key: string, separator = ',') {
  const rawValue = process.env[key];

  if (!rawValue) {
    return undefined;
  }

  return rawValue.split(separator);
}
