import { useCases } from '@/modules/customers/application/use-cases';
import { RegistrationController } from '@/modules/customers/infrastructure/http/controllers/registration.controller';
import { platonLoader } from '@/modules/customers/infrastructure/third-party/platon/config/platon.loader';
import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forFeature(() => ({
      platon: platonLoader,
    })),
    HttpModule.registerAsync({
      imports: [ConfigModule.forFeature(platonLoader)],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        baseURL: configService.get('platon.baseUrl'),
      }),
    }),
  ],
  controllers: [RegistrationController],
  providers: [...useCases],
})
export class CustomersModule {}
