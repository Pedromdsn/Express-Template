import cors from "cors"
import express from "express"

import { errorHandle } from "@/utils/errors/middleware"
import { router } from "@/routers/index.router"

const app = express()

app.use(cors())
app.use(express.json())

app.use(router)

app.use(errorHandle)

export { app }
