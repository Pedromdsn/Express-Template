import "dotenv/config"

const config = {
	PORT: process.env.PORT ?? 3333,
}

export default Object.freeze(config)
