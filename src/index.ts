import { Hono } from 'hono'

// Init Hono
const app = new Hono()

// Middlewares
//import { cors } from 'hono/cors'
// app.use(cors())

// Routes
app.get('/', (ctx): Response => ctx.json({ message: 'Hello World!' }))

// Config Port
export default {
	port: 3000,
	fetch: app.fetch,
}


