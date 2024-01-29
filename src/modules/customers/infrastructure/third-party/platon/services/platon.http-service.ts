import { Service } from '@/core/application/service.decorator';
import { PlatonService } from '@/modules/customers/domain/contracts/platon.service';
import { RegFieldsResponse } from '@/modules/customers/domain/types/regfields-response.type';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { firstValueFrom } from 'rxjs';

@Service()
export class PlatonHttpService implements PlatonService {
  constructor(
    private readonly configService: ConfigService,
    private readonly httpService: HttpService,
  ) {}
  public async getRegistrationFields(): Promise<RegFieldsResponse> {
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

    return response;
  }
}
