import { db } from "@/config";
import { todos } from "@/config/schema";
import { eq } from "drizzle-orm";

export default async function getTodoByIdServices(id: string) {
	return db.select().from(todos).where(eq(todos.id, id)).get();
}
