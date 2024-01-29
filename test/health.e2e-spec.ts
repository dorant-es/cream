import { createApp } from '#/main';
import { HttpStatus, INestApplication } from '@nestjs/common';
import * as request from 'supertest';

describe('HealthController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    app = await createApp();
  });

  it('GET /health', () => {
    return request(app.getHttpServer()).get('/health').expect(HttpStatus.NO_CONTENT);
  });
});
