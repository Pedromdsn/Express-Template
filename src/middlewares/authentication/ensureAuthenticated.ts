import { NextFunction, Request, Response } from "express"

import { authentication } from "@/features/authentication"

export const ensureAuthenticated = (req: Request, res: Response, next: NextFunction) => {
	const auth = authentication.isAuthenticated(req)
	req.user = auth
	return next()
}
