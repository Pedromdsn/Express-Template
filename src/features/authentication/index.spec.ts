import bcrypt from "bcrypt"
import { Request } from "express"

import { BadRequestError } from "@/errors"
import { prismaMock } from "@/libs/prisma/mock"
import { jwt } from "@/utils/jwt"
import { User } from "@prisma/client"

import { authentication } from "./"

const user: User = {
	id: 0,
	email: "me@pedromdsn.com",
	name: "Pedromdsn",
	password: "teste123",
}

const cryptPassword: User = {
	...user,
	password: bcrypt.hashSync(user.password, 10),
}

const { password: _, ...userWithoutPassword } = user

const token = jwt.sign({ data: userWithoutPassword })

describe("Authentication", () => {
	it("Valid Register", async () => {
		prismaMock.user.create.mockResolvedValue(user)
		await expect(authentication.register(user)).resolves.toStrictEqual(userWithoutPassword)
	})

	it("Invalid Register - Email Duplicated", async () => {
		prismaMock.user.create.mockRejectedValue(new BadRequestError("Email already exists"))
		await expect(authentication.register(user)).rejects.toThrow("Email already exists")
	})

	it("Valid Login", async () => {
		prismaMock.user.findFirst.mockResolvedValue(cryptPassword)
		await expect(authentication.login(user.email, user.password)).resolves.toStrictEqual(userWithoutPassword)
	})

	it("Invalid Login - Invalid Email", async () => {
		prismaMock.user.findFirst.mockResolvedValue(null)
		await expect(authentication.login(user.email, user.password)).rejects.toThrow("Invalid email or password")
	})

	it("Invalid Login - Invalid Password", async () => {
		prismaMock.user.findFirst.mockResolvedValue(user)
		await expect(authentication.login(user.email, user.password)).rejects.toThrow("Invalid email or password")
	})

	it("Valid IsAuthenticated", () => {
		const req = {
			headers: {
				authorization: `Bearer ${token}`,
			},
		}
		expect(authentication.isAuthenticated(req as Request)).toStrictEqual(userWithoutPassword)
	})

	it("Invalid IsAuthenticated - No Header", () => {
		const req = {
			headers: {},
		}
		expect(() => authentication.isAuthenticated(req as Request)).toThrow("No token provided")
	})

	
	it("Invalid IsAuthenticated - No Token", () => {
		const req = {
			headers: {
				authorization: "Bearer ",
			},
		}
		expect(() => authentication.isAuthenticated(req as Request)).toThrow("No token provided")
	})

	it("Invalid IsAuthenticated - Invalid Token", () => {
		const req = {
			headers: {
				authorization: "Bearer invalid_token",
			},
		}
		expect(() => authentication.isAuthenticated(req as Request)).toThrow("Invalid token")
	})

	it("Invalid IsAuthenticated - Invalid Payload", () => {
		const req = {
			headers: {
				authorization: `Bearer ${jwt.sign({} as { data: User })}`,
			},
		}
		expect(() => authentication.isAuthenticated(req as Request)).toThrow("Invalid token")
	})
})
