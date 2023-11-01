export const ENV = {
  PORT: process.env.PORT as string,
  DATABASE_URL: process.env.DATABASE_URL as string,
  JWT_SECRET: process.env.JWT_SECRET as string,
  NODEMAILER_SERVICE: process.env.NODEMAILER_SERVICE as string,
  NODEMAILER_FROM: process.env.NODEMAILER_FROM as string,
  NODEMAILER_AUTH_USER: process.env.NODEMAILER_AUTH_USER as string,
  NODEMAILER_AUTH_PASSWORD: process.env.NODEMAILER_AUTH_PASSWORD as string,
  ROOT_USER_USERNAME: process.env.ROOT_USER_USERNAME as string,
  ROOT_USER_EMAIL: process.env.ROOT_USER_EMAIL as string,
  ROOT_USER_NAME: process.env.ROOT_USER_NAME as string,
  ROOT_USER_PASSWORD: process.env.ROOT_USER_PASSWORD as string,
} as const;

const missing = Object.entries(ENV).some(([, value]) => !value);

if (missing) throw new Error("Missing environment variables");
