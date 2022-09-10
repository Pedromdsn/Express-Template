import { NextFunction, Request, Response } from "express"
import { CustomError } from "."

export const errorHandle = (err: TypeError | CustomError, req: Request, res: Response, _next: NextFunction) => {
	if (err instanceof CustomError) return res.status(err.statusCode).send({ message: err.message })
	console.log(res)

	return res.status(500).send({ errors: [{ message: "Something went wrong" }] })
}
