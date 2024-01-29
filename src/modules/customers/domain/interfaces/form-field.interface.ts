import { FieldType } from '@/modules/customers/domain/enums/field-type.enum';

export interface FormField {
  req: number;
  type: FieldType;
  visible: number;
}
