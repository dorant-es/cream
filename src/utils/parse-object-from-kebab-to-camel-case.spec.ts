import { parseObjectFromKebabToCamelCase } from '@/utils/parse-object-from-kebab-to-camel-case';

describe('parseObjectFromKebabToCamelCase', () => {
  it('sould convert an object from kebab to camel case', () => {
    const kebabObject = {
      'first-name': 'John',
      'last-name': 'Doe',
    };
    const camelObject = {
      firstName: 'John',
      lastName: 'Doe',
    };
    expect(parseObjectFromKebabToCamelCase(kebabObject)).toEqual(camelObject);
  });
});
