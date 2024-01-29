import { filterVisibleFields } from '@/modules/customers/domain/utils/filter-visible-fields.util';

describe('FilterVisibleFieldsUtil', () => {
  it('should return only visible name and lastname', () => {
    const obj = {
      name: {
        visible: true,
        value: 'John',
      },
      lastName: {
        visible: true,
        value: 'Doe',
      },
      password: {
        visible: false,
        value: 'sesame',
      },
    };
    const result = filterVisibleFields(obj);
    expect(result).toEqual({
      name: obj.name,
      lastName: obj.lastName,
    });
  });

  it('should omit props without visible field', () => {
    const obj = {
      password: {
        value: 'sesame',
      },
    };
    const result = filterVisibleFields(obj);
    expect(result).not.toHaveProperty('password');
  });

  it('should return empty object', () => {
    const obj = {};
    const result = filterVisibleFields(obj);
    expect(result).toEqual({});
  });
});
