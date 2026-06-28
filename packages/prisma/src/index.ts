import { config as loadEnv } from "dotenv";
import { join } from "node:path";

const envPath = join(process.cwd(), "../../packages/prisma/.env");
loadEnv({ path: envPath });

import { PrismaClient } from "../generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL!,
});

export const client = new PrismaClient({ adapter });