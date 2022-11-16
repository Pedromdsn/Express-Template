import { NextFunction, Request, Response } from "express"

import config from "@/config"

import { CustomError } from "../../../utils/errors"

export const errorHandle = (err: TypeError | CustomError, req: Request, res: Response, _next: NextFunction) => {
	if (err instanceof CustomError) {
		const log = err.serialize(config.DEBUG)
		if (config.DEBUG) console.error(log)
		return res.status(err.statusCode).json(log)
	}
	return res.status(500).send({ errors: [{ message: "Something went wrong" }] })
}
