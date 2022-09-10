type AuthenticatedUser = Omit<import("@prisma/client").User, "password">
