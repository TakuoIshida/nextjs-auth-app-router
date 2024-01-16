import { PrismaClient } from '@prisma/client';
import { settings } from 'const/settings';

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const db = new PrismaClient({
  log:
    settings.nodeEnv === 'development' ? ['query', 'error', 'warn'] : ['error'],
});

if (settings.nodeEnv !== 'production') globalForPrisma.prisma = db;
