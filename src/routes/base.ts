import { Hono } from "hono";

import { getController, deleteController, getByIdController, postController, putController } from "@/controllers/baseController";

export const RouterBase: Hono = new Hono();

RouterBase
	.get("/", getController)
	.get("/:id", getByIdController)
	.post("/", postController)
	.put("/:id", putController)
	.delete("/:id", deleteController);
