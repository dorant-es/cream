export function filterVisibleFields<T>(object: {
  [key: string]: any & { visible?: boolean };
}): T {
  return Object.entries(object).reduce((acc, [key, value]) => {
    if (!value.visible) {
      return acc;
    }

    return {
      ...acc,
      [key]: value,
    };
  }, {} as T);
}
