import { type Elysia, t } from "elysia";
import * as services from "@/services";

export const BrowserRouter = (Route: Elysia) => {
	Route.get("/", async () => {
		return await services.getTodoServices();
	});

	Route.get("/:id", async ({ params: { id } }) => {
		return await services.getTodoByIdServices(id);
	});

	Route.post(
		"/",
		async ({ body }) => {
			await services.createTodoServices(body);
		},
		{
			body: t.Object({
				title: t.String(),
				status: t.Optional(
					t.String({
						enum: ["Planned", "Pending", "In progress", "Completed"]
					})
				),
				label: t.Optional(
					t.String({
						enum: ["Enhancement", "Bug", "Feature"]
					})
				)
			})
		}
	);

	return Route;
};
