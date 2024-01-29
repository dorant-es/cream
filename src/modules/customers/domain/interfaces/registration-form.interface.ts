import { AmlCheck } from '@/modules/customers/domain/interfaces/aml-check.interface';
import { BankIban } from '@/modules/customers/domain/interfaces/bank-iban.interface';
import { CustomerBirthday } from '@/modules/customers/domain/interfaces/customer-birthday.interface';
import { CustomerEmail } from '@/modules/customers/domain/interfaces/customer-email.interface';
import { CustomerFirstname } from '@/modules/customers/domain/interfaces/customer-firstname.interface';
import { CustomerGender } from '@/modules/customers/domain/interfaces/customer-gender.interface';
import { CustomerLastname } from '@/modules/customers/domain/interfaces/customer-lastname.interface';
import { CustomerMonthlyIncome } from '@/modules/customers/domain/interfaces/customer-monthly-income.interface';
import { CustomerPersoncode } from '@/modules/customers/domain/interfaces/customer-personcode.interface';
import { CustomerPhone } from '@/modules/customers/domain/interfaces/customer-phone.interface';
import { Language } from '@/modules/customers/domain/interfaces/language.interface';
import { PepStatus } from '@/modules/customers/domain/interfaces/pep-status.interface';

export interface RegistrationForm {
  customerLastname: CustomerLastname;
  customerPhone: CustomerPhone;
  customerMonthlyIncome: CustomerMonthlyIncome;
  bankIban: BankIban;
  language: Language;
  customerOersoncode: CustomerPersoncode;
  customerEmail: CustomerEmail;
  customerFirstname: CustomerFirstname;
  customerGender: CustomerGender;
  customerBirthday: CustomerBirthday;
  pepStatus: PepStatus;
  amlCheck: AmlCheck;
}
