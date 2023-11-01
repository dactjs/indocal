export const ENV = {
  PORT: String(process.env.PORT),
  DATABASE_URL: String(process.env.DATABASE_URL),
  JWT_SECRET: String(process.env.JWT_SECRET),
  NODEMAILER_SERVICE: String(process.env.NODEMAILER_SERVICE),
  NODEMAILER_FROM: String(process.env.NODEMAILER_FROM),
  NODEMAILER_AUTH_USER: String(process.env.NODEMAILER_AUTH_USER),
  NODEMAILER_AUTH_PASSWORD: String(process.env.NODEMAILER_AUTH_PASSWORD),
  ROOT_USER_USERNAME: String(process.env.ROOT_USER_USERNAME),
  ROOT_USER_EMAIL: String(process.env.ROOT_USER_EMAIL),
  ROOT_USER_NAME: String(process.env.ROOT_USER_NAME),
  ROOT_USER_PASSWORD: String(process.env.ROOT_USER_PASSWORD),
} as const;

const missing = Object.entries(ENV).some(([, value]) => !value);

if (missing) throw new Error("Missing environment variables");
