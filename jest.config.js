/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
	preset: "ts-jest",
	testEnvironment: "node",
	moduleNameMapper: {
		"@/app": "<rootDir>/src/app",
		"@/config": "<rootDir>/src/config",
		"@/errors": "<rootDir>/src/utils/errors",
		"@/libs/(.*)": "<rootDir>/src/libs/$1",
		"@/middlewares/(.*)": "<rootDir>/src/middlewares/$1",
		"@/controllers/(.*)": "<rootDir>/src/controllers/$1",
		"@/utils/(.*)": "<rootDir>/src/utils/$1",
		"@/features/(.*)": "<rootDir>/src/features/$1",
		"@/routers/(.*)": "<rootDir>/tests/$1",
	},
}
