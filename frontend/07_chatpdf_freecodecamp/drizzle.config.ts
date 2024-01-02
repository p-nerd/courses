import { defineConfig, Config } from "drizzle-kit";
import "dotenv/config";

export default defineConfig({
    schema: "./src/schemas/index.ts",
    driver: "pg",
    dbCredentials: {
        connectionString: process.env.DRIZZLE_DATABASE_URL || "",
    },
    verbose: true,
    strict: true,
}) satisfies Config;
