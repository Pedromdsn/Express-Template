import "dotenv/config"

import Env from "envalid"

const env = Env.cleanEnv(process.env, {
	PORT: Env.port({ default: 3333 }),
	JWT_SECRET: Env.str({ default: "secret123" }),
	DEBUG: Env.bool({ default: false })
})

export default env
