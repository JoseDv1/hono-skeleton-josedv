import { Hono } from "hono";

import { getController, deleteController, getByIdController, postController, putController } from "@/controllers/baseController";

export const RouterName: Hono = new Hono();

RouterName
	.get("/", getController)
	.get("/:id", getByIdController)
	.post("/", postController)
	.put("/:id", putController)
	.delete("/:id", deleteController);
