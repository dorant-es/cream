import { UseCase } from '@/core/application/case.decorator';
import { Executable } from '@/core/domain/executable.interface';
import { Context } from '@/core/domain/interfaces/context.interface';
import { RegistrationForm } from '@/modules/customers/domain/interfaces/registration-form.interface';
import { RegFieldsResponse } from '@/modules/customers/domain/types/regfields-response.type';
import { VisibleRegistrationForm } from '@/modules/customers/domain/types/visible-registration-form.type';
import { filterVisibleFields } from '@/modules/customers/domain/utils/filter-visible-fields.util';
import { parseObjectFromCamelToKebabCase } from '@/utils/parse-object-from-camel-to-kebab-case';
import { parseObjectFromKebabToCamelCase } from '@/utils/parse-object-from-kebab-to-camel-case';
import { HttpService } from '@nestjs/axios';
import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { firstValueFrom } from 'rxjs';

@UseCase()
export class RegistrationUseCase implements Executable {
  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {}

  public async execute(ctx: Context): Promise<VisibleRegistrationForm> {
    const { login, password } = this.configService.get('platon');
    const request = this.httpService.post<RegFieldsResponse>(
      '/affiliate/getRegistrationFields',
      {
        login,
        password,
        data: {
          'new-registration': true,
        },
      },
    );

    const { data: response } = await firstValueFrom(request);

    Logger.log(`Request for get regfields was successfully`, ctx.requestId);

    const filteredFields: string[] = [];

    const parsedResponse = parseObjectFromKebabToCamelCase<RegistrationForm>(response.data);

    const visibleFields = filterVisibleFields<VisibleRegistrationForm>(parsedResponse);
    const parsedVisibleFields =
      parseObjectFromCamelToKebabCase<VisibleRegistrationForm>(visibleFields);

    Logger.log(`Filtered fields: ${filteredFields.join(',')}`, ctx.requestId);

    return parsedVisibleFields;
  }
}
