import { z } from 'zod';

export const baseEnvSchema = z.object({
    COSMOS_DB_URL: z.url(),
    COSMOS_DB_KEY: z.string().optional(),
    COSMOS_DB_DATABASE_NAME: z.string().default('kittenclawss-sql-db'),
    COSMOS_DB_EMULATOR: z.stringbool().default(false),
    COSMOS_CONTAINER_ANIMALS: z.string().default('animals'),
});
