import { AppModule } from '@/app/app.module';
import { INestApplication, Provider, Type } from '@nestjs/common';
import { Test } from '@nestjs/testing';

export async function createApp(providers: Provider[] = []): Promise<INestApplication> {
  const moduleFixture = await Test.createTestingModule({
    imports: [AppModule],
  });

  providers.forEach((provider) => {
    if (typeof provider === 'object' && 'provide' in provider) {
      if ('useValue' in provider) {
        moduleFixture.overrideProvider(provider.provide).useValue(provider.useValue);
      } else if ('useClass' in provider) {
        moduleFixture
          .overrideProvider(provider.provide)
          .useClass(provider.useClass as Type<any>);
      } else if ('useFactory' in provider) {
        moduleFixture.overrideProvider(provider.provide).useFactory({
          factory: provider.useFactory,
          inject: provider.inject || [],
        });
      }
    }
  });

  const testingModule = await moduleFixture.compile();

  const app = testingModule.createNestApplication();
  await app.init();
  return app;
}
