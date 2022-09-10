/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
	preset: "ts-jest",
	testEnvironment: "node",
	collectCoverageFrom: ["src/{features,controllers,utils}/**/*.ts", "!src/**/*.d.ts"],
	moduleNameMapper: {
		"@/app": "<rootDir>/src/app",
		"@/config": "<rootDir>/src/config",
		"@/errors": "<rootDir>/src/errors",
		"@/libs/(.*)": "<rootDir>/src/libs/$1",
		"@/middlewares/(.*)": "<rootDir>/src/middlewares/$1",
		"@/controllers/(.*)": "<rootDir>/src/controllers/$1",
		"@/utils/(.*)": "<rootDir>/src/utils/$1",
		"@/features/(.*)": "<rootDir>/src/features/$1",
		"@/routers/(.*)": "<rootDir>/src/routers/$1",
	},
}
