export const settings = {
  nodeEnv: process.env.NODE_ENV || 'test',
  databaseUrl: process.env.DATABASE_URL || '',
  nextAuthSecret: process.env.NEXTAUTH_SECRET || '',
  nextAuthUrl: process.env.NEXTAUTH_URL || '',
  auth0ClientId: process.env.AUTH0_CLIENT_ID || '',
  auth0ClientSecret: process.env.AUTH0_CLIENT_SECRET || '',
  auth0Issuer: process.env.AUTH0_ISSUER || '',
  vercelUrl: process.env.NEXT_PUBLIC_VERCEL_URL || '',
};
