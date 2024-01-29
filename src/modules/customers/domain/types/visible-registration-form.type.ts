import { RegistrationForm } from '@/modules/customers/domain/interfaces/registration-form.interface';

export type VisibleRegistrationForm = {
  [K in keyof RegistrationForm]: Omit<RegistrationForm[K], 'visible'>;
};
