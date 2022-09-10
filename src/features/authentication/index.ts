import bcrypt from "bcrypt"
import { Request } from "express"
import { JwtPayload } from "jsonwebtoken"

import { BadRequestError, UnauthorizedError } from "@/errors"
import { prisma } from "@/libs/prisma"
import { jwt } from "@/utils/jwt"
import { User } from "@prisma/client"

const login = async (email: string, password: string) => {
	const user = await prisma.user.findFirst({ where: { email } })
	if (!user) throw new UnauthorizedError("Invalid email or password")
	const isPasswordValid = await bcrypt.compare(password, user.password)
	if (!isPasswordValid) throw new UnauthorizedError("Invalid email or password")
	const { password: _, ...userWithoutPassword } = user
	return userWithoutPassword
}

const register = async (data: User) => {
	const cryptPassword = await bcrypt.hash(data.password, 10)
	const user = await prisma.user.create({ data: { ...data, password: cryptPassword } })
	const { password: _, ...userWithoutPassword } = user
	return userWithoutPassword
}

const isAuthenticated = (req: Request) => {
	const authHeader = req.headers.authorization
	if (!authHeader) throw new BadRequestError("No token provided")
	const [, token] = authHeader.split(" ")
	if (!token) throw new BadRequestError("No token provided")
	const verified = jwt.verify(token)
	const payload = verified as JwtPayload
	if (!payload.data) throw new UnauthorizedError("Invalid token")
	return payload.data as AuthenticatedUser
}

export const authentication = {
	login,
	register,
	isAuthenticated,
}
