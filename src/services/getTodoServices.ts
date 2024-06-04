import { db } from "@/config";
import { todos } from "@/config/schema";

export default async function getTodoServices() {
	return await db.select().from(todos).orderBy(todos.title);
}
