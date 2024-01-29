import { Context } from '@/core/domain/interfaces/context.interface';
import { Ctx } from '@/core/infrastructure/decorators/context.decorator';
import { RegistrationUseCase } from '@/modules/customers/application/use-cases/registration.use-case';
import { Controller, Get, VERSION_NEUTRAL } from '@nestjs/common';

@Controller({
  version: VERSION_NEUTRAL,
  path: 'customer/registration',
})
export class RegistrationController {
  constructor(private readonly loginUseCase: RegistrationUseCase) {}

  @Get('/regfields')
  public async regFields(@Ctx() ctx: Context) {
    return await this.loginUseCase.execute(ctx);
  }
}
