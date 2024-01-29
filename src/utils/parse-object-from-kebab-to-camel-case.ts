import { Json } from '@/core/types/general/json.type';

export function parseObjectFromKebabToCamelCase<T>(object: Json): T {
  return Object.keys(object).reduce((acc, key) => {
    const camelCaseKey = key.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
    return {
      ...acc,
      [camelCaseKey]: object[key],
    };
  }, {} as T);
}
