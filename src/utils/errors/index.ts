export class CustomError extends Error {
	constructor(message = "Server Error", public statusCode = 500) {
		super(message)
	}

	serialize(extended: boolean) {
		if (extended) return { message: this.message, error: this.stack }
		return { message: this.message }
	}
}

export class BadRequestError extends CustomError {
	constructor(message = "Bad Request") {
		super(message, 400)
	}
}

export class UnauthorizedError extends CustomError {
	constructor(message = "Unauthorized") {
		super(message, 401)
	}
}

export class ForbiddenError extends CustomError {
	constructor(message = "Forbidden") {
		super(message, 403)
	}
}

export class NotFoundError extends CustomError {
	constructor(message = "Not Found") {
		super(message, 404)
	}
}

export class InternalServerError extends CustomError {
	constructor(message = "Internal Server Error") {
		super(message, 500)
	}
}

export class NotImplementedError extends CustomError {
	constructor(message = "Not Implemented") {
		super(message, 501)
	}
}

export class ServiceUnavailableError extends CustomError {
	constructor(message = "Service Unavailable") {
		super(message, 503)
	}
}

export class GatewayTimeoutError extends CustomError {
	constructor(message = "Gateway Timeout") {
		super(message, 504)
	}
}

export class BadGatewayError extends CustomError {
	constructor(message = "Bad Gateway") {
		super(message, 502)
	}
}

export class ConflictError extends CustomError {
	constructor(message = "Conflict") {
		super(message, 409)
	}
}

export class UnprocessableEntityError extends CustomError {
	constructor(message = "Unprocessable Entity") {
		super(message, 422)
	}
}

export class TooManyRequestsError extends CustomError {
	constructor(message = "Too Many Requests") {
		super(message, 429)
	}
}

export class ValidationError extends CustomError {
	constructor(message = "Validation Error") {
		super(message, 422)
	}
}

export class DatabaseError extends CustomError {
	constructor(message = "Database Error") {
		super(message, 500)
	}
}
