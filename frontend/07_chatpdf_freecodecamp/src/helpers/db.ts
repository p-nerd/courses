import { neon, neonConfig } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";

neonConfig.fetchConnectionCache = true;

if (!process.env.DRIZZLE_DATABASE_URL) {
    throw new Error("database url not found");
}

const sql = neon(process.env.DRIZZLE_DATABASE_URL!);

const db = drizzle(sql);

export default db;
