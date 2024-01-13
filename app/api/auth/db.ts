import { PrismaClient } from '@prisma/client';
import { settings } from 'settings/settings';

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

function getDb() {
  return new PrismaClient({
    log:
      settings.nodeEnv === 'development'
        ? ['query', 'error', 'warn']
        : ['error'],
  });
}

export const db = getDb();

if (settings.nodeEnv !== 'production') globalForPrisma.prisma = db;
