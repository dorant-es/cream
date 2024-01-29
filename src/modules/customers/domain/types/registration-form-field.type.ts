import { RegistrationFormKey } from '@/modules/customers/domain/interfaces/registration-form-key.type';
import { RegistrationForm } from '@/modules/customers/domain/interfaces/registration-form.interface';

export type RegistrationFormField = RegistrationForm[RegistrationFormKey];
