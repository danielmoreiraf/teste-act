declare namespace NodeJS {
  export interface ProcessEnv {
    NODE_ENV: "development" | "production" | "test";
    PORT: string;
    DATABASE_URL: string;
    JWT_SECRET: string;
    BCRYPT_SALT_ROUNDS: string;
  }
}
