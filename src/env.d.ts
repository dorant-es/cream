import { Environment } from '@/core/domain/enums/environment.enum';

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      // ENVIRONMENT
      NODE_ENV: Environment;
      DEBUG: string;

      // SERVER
      HOST: string;
      PORT: string;

      // Anti throttle
      ANTI_THROTTLE_MAX_REQUEST?: string;
      ANTI_THROTTLE_INTERVAL?: string;

      // PLATON
      PLATON_URL: string;
      PLATON_LOGIN: string;
      PLATON_PASSWORD: string;
    }
  }
}

export {};
