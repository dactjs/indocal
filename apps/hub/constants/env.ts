export const ENV = {
  NEXT_PUBLIC_SITE_URL: String(process.env.NEXT_PUBLIC_SITE_URL),
  NEXT_PUBLIC_BACKEND_URL: String(process.env.NEXT_PUBLIC_BACKEND_URL),
  NEXT_PUBLIC_API_URL: String(process.env.NEXT_PUBLIC_API_URL),
  NEXTAUTH_URL: String(process.env.NEXTAUTH_URL),
  NEXTAUTH_SECRET: String(process.env.NEXTAUTH_SECRET),
} as const;

const missing = Object.entries(ENV).some(([, value]) => !value);

if (missing) throw new Error("Missing environment variables");
