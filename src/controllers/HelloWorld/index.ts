import { UnauthorizedError } from "@/errors"
import { Request, Response } from "express"

export const helloWorld = async (req: Request, res: Response) => {
	throw new  UnauthorizedError()
	return res.status(200).json({ message: "Hello World" })
}