import "dotenv/config"

import _Env, {cleanEnv, port, str, bool} from "envalid"


const env = cleanEnv(process.env, {
	PORT: port({ default: 3333 }),
	JWT_SECRET: str({ default: "secret123" }),
	DEBUG: bool({ default: false })
})

export default env
