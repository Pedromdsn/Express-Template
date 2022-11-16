import jsonwebtoken from "jsonwebtoken"

import config from "@/config"
import { ValidationError } from "@/utils/errors"

export const jwt = {
	sign: (payload: { data: object }, options: jsonwebtoken.SignOptions = { expiresIn: "1d" }) => {
		const token = jsonwebtoken.sign(payload, config.JWT_SECRET, options)
		return token
	},
	verify: (token: string) => {
		try {
			const payload = jsonwebtoken.verify(token, config.JWT_SECRET)
			return payload
		} catch (error) {
			throw new ValidationError("Invalid token")
		}
	},
}
