export default function number(key: string) {
  const number = Number(process.env[key]);

  if (Number.isNaN(number)) {
    return undefined;
  }

  return number;
}
