import type { Context, } from "hono"
// import {} from '@/services/defaultService'

// Get All Request Controller
export const getController = async (ctx: Context): Promise<Response> => {
	try {
		// TODO: Call Service here..

		return ctx.json({
			message: 'GET request'
		})
	} catch (err: any) {
		ctx.status(400)
		return ctx.json({
			error: err.message
		})
	}
}

// Get By Id Request Controller
export const getByIdController = async (ctx: Context): Promise<Response> => {
	try {
		const { id } = ctx.req.param()
		// TODO: Call Service here...



		return ctx.json({
			message: 'GET request'
		})
	} catch (err: any) {
		ctx.status(400)
		return ctx.json({
			error: err.message
		})
	}
}

// Post Request Controller
export const postController = async (ctx: Context): Promise<Response> => {
	try {
		// TODO: Call Service here...

		return ctx.json({
			message: 'POST request'
		})
	} catch (err: any) {
		ctx.status(400)
		return ctx.json({
			error: err.message
		})
	}
}

// Put Request Controller
export const putController = async (ctx: Context): Promise<Response> => {
	try {
		const { id } = ctx.req.param()
		// TODO: Call Service here...



		return ctx.json({
			message: 'PUT request'
		})
	} catch (err: any) {
		ctx.status(400)
		return ctx.json({
			error: err.message
		})
	}
}

// Delete Request Controller
export const deleteController = async (ctx: Context): Promise<Response> => {
	try {
		const { id } = ctx.req.param()
		// TODO: Call Service here...

		return ctx.json({
			message: 'DELETE request'
		})

	} catch (err: any) {
		ctx.status(400)
		return ctx.json({
			error: err.message
		})
	}
}