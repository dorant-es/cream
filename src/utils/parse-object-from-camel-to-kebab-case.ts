import { Json } from '@/core/types/general/json.type';

export function parseObjectFromCamelToKebabCase<T>(object: Json): T {
  return Object.keys(object).reduce((acc, key) => {
    const kebabCaseKey = key.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
    return {
      ...acc,
      [kebabCaseKey]: object[key],
    };
  }, {} as T);
}
