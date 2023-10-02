import { Hono } from 'hono'

//Import Routes
import { RouterBase } from '@/routes/base'

// Init Hono
const app = new Hono()

// Middlewares
import { cors } from 'hono/cors'
app.use(cors())

// Routes
app.route('/api/v1/', RouterBase)
app.get('/', (ctx): Response => ctx.json({ message: 'Hello World!' }))
app.all("*", (ctx): Response => ctx.json({ message: 'Not Found' }, 404)) // 404

// Config Port
export default {
	port: 3000,
	fetch: app.fetch,
}


