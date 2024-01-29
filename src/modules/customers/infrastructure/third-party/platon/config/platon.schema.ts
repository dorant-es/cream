import * as Joi from 'joi';

export const platonSchema = Joi.object({
  PLATON_BASE_URL: Joi.string().uri().required(),
  PLATON_LOGIN: Joi.string().required(),
  PLATON_PASSWORD: Joi.string().required(),
});
