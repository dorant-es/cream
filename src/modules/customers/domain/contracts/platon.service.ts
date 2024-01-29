import { RegFieldsResponse } from '@/modules/customers/domain/types/regfields-response.type';

export const PLATON_SERVICE_TOKEN = 'PLATON_SERVICE';

export interface PlatonService {
  getRegistrationFields(): Promise<RegFieldsResponse>;
}
