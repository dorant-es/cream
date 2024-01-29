import { configSchema } from '@/config/infrastructure/config/schemas/server.schema';
import { platonSchema } from '@/modules/customers/infrastructure/third-party/platon/config/platon.schema';
import { combineSchemas } from '@/utils/combine-schemas';

describe('combineSchemas', () => {
  it('should combine schemas', async () => {
    const schema = combineSchemas([configSchema, platonSchema]);

    expect(schema).toBeDefined();
  });
});
