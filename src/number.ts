export default function number(key: string) {
  const number = Number(process.env[key]);
  console.error({ key, number });

  if (Number.isNaN(number)) {
    return undefined;
  }

  return number;
}
