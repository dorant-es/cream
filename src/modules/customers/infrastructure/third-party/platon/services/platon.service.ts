import { PLATON_SERVICE_TOKEN } from '@/modules/customers/domain/contracts/platon.service';
import { PlatonHttpService } from '@/modules/customers/infrastructure/third-party/platon/services/platon.http-service';
import { Provider } from '@nestjs/common';

export const PlatonService: Provider = {
  provide: PLATON_SERVICE_TOKEN,
  useClass: PlatonHttpService,
};
