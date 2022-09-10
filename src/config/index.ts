import "dotenv/config"

const config = {
	PORT: process.env.PORT ?? 3333,
	JWT_SECRET: process.env.JWT_SECRET ?? "secret123",
	DEBUG: !!process.env.DEBUG ?? false,
}

export default Object.freeze(config)
