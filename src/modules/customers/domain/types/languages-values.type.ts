import { Languages } from '@/modules/customers/domain/enums/language-values.enum';

type LowercaseLanguageKeys = Lowercase<keyof typeof Languages>;

export type LanguageMap = Record<LowercaseLanguageKeys, string>;
