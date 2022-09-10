import { Router } from "express"

import { helloWorld } from "@/controllers/HelloWorld"

const router = Router()

router.get("/", helloWorld)

export { router }
