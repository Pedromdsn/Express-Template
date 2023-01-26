import "dotenv/config"

import { z } from "zod"

const schema = z.object({
	PORT: z.number().default(3333),
	JWT_SECRET: z.string().default("secret123"),
	DEBUG: z.boolean().default(false)
})

const env = schema.parse(process.env)

export default env
