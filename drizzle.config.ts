import type { Config } from "drizzle-kit";

export default {
	dialect: "sqlite",
	out: "db",
	schema: "src/config/schema.ts",
	dbCredentials: {
		url: "db/sqlite.db"
	}
} satisfies Config;
