import { filteredRegistrationFieldsResponse } from '#/mocks/third-party/platon/filtered-registration-fields.response';
import { getRegistrationFieldsResponse } from '#/mocks/third-party/platon/get-registration-fields.response';
import { createApp } from '#/setup';
import { PLATON_SERVICE_TOKEN } from '@/modules/customers/domain/contracts/platon.service';
import { HttpStatus, INestApplication } from '@nestjs/common';
import * as request from 'supertest';

describe('CustomersController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    app = await createApp([
      {
        provide: PLATON_SERVICE_TOKEN,
        useValue: {
          getRegistrationFields: jest.fn().mockResolvedValue(getRegistrationFieldsResponse),
        },
      },
    ]);
  });

  it('GET /customer/registration/regfields', async () => {
    const response = await request(app.getHttpServer()).get('/customer/registration/regfields');
    expect(response.status).toBe(HttpStatus.OK);
    expect(response.body).toBeDefined();
    expect(response.body).toHaveProperty('requestId');
    expect(response.body).toHaveProperty('data');
    expect(response.body).toHaveProperty('statusCode');
    expect(response.body).toHaveProperty('type');
    expect(response.body.statusCode).toBe(HttpStatus.OK);
    expect(response.body.type).toBe('Object');
    expect(response.body.data).toEqual(filteredRegistrationFieldsResponse.data);
  });
});
