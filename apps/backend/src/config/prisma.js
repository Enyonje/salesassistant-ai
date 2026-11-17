import { PrismaClient } from '../../generated/sales-assistant-client/index.js';

const globalForPrisma = globalThis;

export const prisma =
    globalForPrisma.salesAssistantPrisma ||
    new PrismaClient();

if (process.env.NODE_ENV !== 'production') {
    globalForPrisma.salesAssistantPrisma = prisma;
}