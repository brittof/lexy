import { Elysia } from "elysia";
import { BrowserRouter } from "@/routes";

export const App = new Elysia();

App.use(BrowserRouter(App));
