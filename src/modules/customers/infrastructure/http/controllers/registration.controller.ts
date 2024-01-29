import { Context } from '@/core/domain/interfaces/context.interface';
import { Ctx } from '@/core/infrastructure/decorators/context.decorator';
import { ApiKeyGuard } from '@/modules/auth/infrastructure/api-keys/guards/api-key.guard';
import { RegistrationUseCase } from '@/modules/customers/application/use-cases/registration/registration.use-case';
import { Controller, Get, UseGuards, VERSION_NEUTRAL } from '@nestjs/common';

@Controller({
  version: VERSION_NEUTRAL,
  path: 'customer/registration',
})
export class RegistrationController {
  constructor(private readonly loginUseCase: RegistrationUseCase) {}

  @Get('/regfields')
  @UseGuards(ApiKeyGuard)
  public async regFields(@Ctx() ctx: Context) {
    return await this.loginUseCase.execute(ctx);
  }
}
