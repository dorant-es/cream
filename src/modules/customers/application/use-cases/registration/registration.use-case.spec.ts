import { filteredRegistrationFieldsResponse } from '#/mocks/third-party/platon/filtered-registration-fields.response';
import { getRegistrationFieldsResponse } from '#/mocks/third-party/platon/get-registration-fields.response';
import { RegistrationUseCase } from '@/modules/customers/application/use-cases/registration/registration.use-case';
import { PLATON_SERVICE_TOKEN } from '@/modules/customers/domain/contracts/platon.service';
import { RegFieldsResponse } from '@/modules/customers/domain/types/regfields-response.type';
import { Test } from '@nestjs/testing';

describe('RegistrationUseCase', () => {
  let registrationUseCase: RegistrationUseCase;
  let getRegistrationFieldsSpy: jest.Mock;

  beforeEach(() => {
    getRegistrationFieldsSpy = jest.fn();
  });

  beforeEach(async () => {
    const app = await Test.createTestingModule({
      providers: [
        RegistrationUseCase,
        {
          provide: PLATON_SERVICE_TOKEN,
          useValue: {
            getRegistrationFields: getRegistrationFieldsSpy.mockResolvedValue(
              getRegistrationFieldsResponse,
            ),
          },
        },
      ],
    }).compile();

    registrationUseCase = app.get<RegistrationUseCase>(RegistrationUseCase);
  });

  it('should be defined', () => {
    expect(registrationUseCase).toBeDefined();
  });

  it('should have execute method', () => {
    expect(registrationUseCase.execute).toBeDefined();
  });

  it('platon service should return 12 registration fields', async () => {
    registrationUseCase.execute({ requestId: 'test' });
    const response: RegFieldsResponse = await getRegistrationFieldsSpy();
    expect(Object.keys(response.data).length).toBe(12);
  });

  it('should call getRegistrationFields method from platon service', async () => {
    await registrationUseCase.execute({ requestId: 'test' });
    expect(getRegistrationFieldsSpy).toBeCalledTimes(1);
  });

  it('should return visible registration form', async () => {
    const result = await registrationUseCase.execute({ requestId: 'test' });
    expect(result).toBeDefined();
    expect(result).toEqual(filteredRegistrationFieldsResponse.data);
  });
});
