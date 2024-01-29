export function filterVisibleFields<T>(object: {
  [key: string]: any & { visible?: number };
}): T {
  return Object.entries(object).reduce((acc, [key, value]) => {
    if (value.visible === 0) {
      return acc;
    }

    return {
      ...acc,
      [key]: value,
    };
  }, {} as T);
}
