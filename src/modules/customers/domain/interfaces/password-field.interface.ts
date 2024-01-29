import { FieldType } from '@/modules/customers/domain/enums/field-type.enum';
import { FormField } from '@/modules/customers/domain/interfaces/form-field.interface';
import { Value } from '@/modules/customers/domain/interfaces/value.interface';

export interface PasswordField extends FormField, Value {
  type: FieldType.PASSWORD;
}
