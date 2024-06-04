import { sqliteTable, text } from "drizzle-orm/sqlite-core";
import { sql } from "drizzle-orm";
import { ulid } from "ulid";

export const todos = sqliteTable("todos", {
	id: text("id").default(ulid()).primaryKey().notNull(),
	title: text("title").notNull(),
	status: text("status").default("Pending"),
	label: text("label").default("Enhancement"),
	created: text("created").default(sql`(CURRENT_TIMESTAMP)`)
});
