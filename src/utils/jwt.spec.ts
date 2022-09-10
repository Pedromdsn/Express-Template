import jsonWebToken from "jsonwebtoken"

import config from "@/config"

import { jwt } from "./jwt"

const data = {
	data: { user: "" },
}
describe("JWT", () => {
	it("Valid Sign", () => {
		expect(jwt.sign(data)).toBe(jsonWebToken.sign(data, config.JWT_SECRET, { expiresIn: "1d" }))
	})
})

export { }