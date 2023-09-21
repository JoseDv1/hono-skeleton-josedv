import { Hono } from 'hono'

// Init Hono
const app = new Hono().basePath('/api/v1')

// Middlewares
//import { cors } from 'hono/cors'
// app.use(cors())

// Routes
app.get('/', (ctx): Response => ctx.json({ message: 'Hello World!' }))
app.all("*", (ctx): Response => ctx.json({ message: 'Not Found' }, 404)) // 404

// Config Port
export default {
	port: 3000,
	fetch: app.fetch,
}


