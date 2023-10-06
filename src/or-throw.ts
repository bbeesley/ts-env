type ReadFunction<T> = (key: string) => T | undefined;

export default function orThrow<T>(
  readFunction: ReadFunction<T>,
  type: string,
) {
  return (key: string) => {
    const value = readFunction(key);

    if (value == null || (type === 'string' && value === '')) {
      throw new Error(`Couldn't read ${type} value from process.env.${key}`);
    }

    return value;
  };
}
