import { app } from "@/app"

import request from "supertest"

describe("HelloWorld", () => {
	it("should return 200", async () => {
		const response = await request(app).get("/")
		expect(response.status).toBe(200)
	})
})

