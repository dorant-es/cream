import { FieldType } from '@/modules/customers/domain/enums/field-type.enum';
import { Genders } from '@/modules/customers/domain/enums/gender.enum';
import { FormField } from '@/modules/customers/domain/interfaces/form-field.interface';

export interface CustomerGender extends FormField {
  type: FieldType.SELECT;
  values: Genders[];
}
