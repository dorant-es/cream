import { UseCase } from '@/core/application/case.decorator';
import { InjectService } from '@/core/application/inject-service.decorator';
import { Executable } from '@/core/domain/executable.interface';
import { Context } from '@/core/domain/interfaces/context.interface';
import {
  PLATON_SERVICE_TOKEN,
  PlatonService,
} from '@/modules/customers/domain/contracts/platon.service';
import { RegistrationForm } from '@/modules/customers/domain/interfaces/registration-form.interface';
import { VisibleRegistrationForm } from '@/modules/customers/domain/types/visible-registration-form.type';
import { filterVisibleFields } from '@/modules/customers/domain/utils/filter-visible-fields.util';
import { parseObjectFromCamelToKebabCase } from '@/utils/parse-object-from-camel-to-kebab-case';
import { parseObjectFromKebabToCamelCase } from '@/utils/parse-object-from-kebab-to-camel-case';
import { Logger } from '@nestjs/common';

@UseCase()
export class RegistrationUseCase implements Executable {
  constructor(
    @InjectService(PLATON_SERVICE_TOKEN)
    private readonly platonService: PlatonService,
  ) {}

  public async execute(ctx: Context): Promise<VisibleRegistrationForm> {
    const { data } = await this.platonService.getRegistrationFields();

    Logger.log(`Request for get regfields was successfully`, ctx.requestId);

    const parsedResponse = parseObjectFromKebabToCamelCase<RegistrationForm>(data);
    const visibleFields = filterVisibleFields<VisibleRegistrationForm>(parsedResponse);
    const parsedVisibleFields =
      parseObjectFromCamelToKebabCase<VisibleRegistrationForm>(visibleFields);

    return parsedVisibleFields;
  }
}
