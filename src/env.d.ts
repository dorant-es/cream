declare global {
  namespace NodeJS {
    interface ProcessEnv {
      // ENVIRONMENT
      NODE_ENV: string;
      ENV?: 'development' | 'production';

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
