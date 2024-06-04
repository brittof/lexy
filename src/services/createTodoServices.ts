import { db } from "@/config";
import { todos } from "@/config/schema";
import type { Todo } from "@/models/todo";

export default async function createTodoServices({
	title,
	status,
	label
}: Todo) {
	await db
		.insert(todos)
		.values({ title, status, label })
		.onConflictDoNothing();
}
