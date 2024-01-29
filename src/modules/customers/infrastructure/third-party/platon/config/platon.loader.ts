import { registerAs } from '@nestjs/config';

export const platonLoader = registerAs('platon', () => ({
  baseUrl: process.env.PLATON_BASE_URL,
  login: process.env.PLATON_LOGIN,
  password: process.env.PLATON_PASSWORD,
}));
