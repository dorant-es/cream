import { FormField } from '@/modules/customers/domain/interfaces/form-field.interface';
import { LanguageMap } from '@/modules/customers/domain/types/languages-values.type';

export interface Language extends FormField {
  values: LanguageMap;
}
