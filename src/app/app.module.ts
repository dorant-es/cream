import { CoreModule } from '@/core/core.module';
import { CustomersModule } from '@/modules/customers/customers.module';
import { HealthModule } from '@/modules/health/health.module';
import { SharedModule } from '@/modules/shared/shared.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [CoreModule, HealthModule, SharedModule, CustomersModule],
})
export class AppModule {}
