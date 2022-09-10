import { DeepMockProxy, mockDeep, mockReset } from "jest-mock-extended"

import { PrismaClient } from "@prisma/client"

import { prisma } from "./"

jest.mock(".", () => ({
	__esModule: true,
	prisma: mockDeep<PrismaClient>(),
}))

const prismaMock = prisma as unknown as DeepMockProxy<PrismaClient>

beforeEach(() => {
	mockReset(prismaMock)
})

export { prismaMock }
