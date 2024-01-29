import { parseObjectFromCamelToKebabCase } from '@/utils/parse-object-from-camel-to-kebab-case';

describe('parseObjectFromCamelToKebabCase', () => {
  it('sould convert an object from kebab to camel case', () => {
    const camelObject = {
      firstName: 'John',
      lastName: 'Doe',
    };
    const kebabObject = {
      'first-name': 'John',
      'last-name': 'Doe',
    };
    expect(parseObjectFromCamelToKebabCase(camelObject)).toEqual(kebabObject);
  });
});
