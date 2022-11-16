import cors from "cors"
import express from "express"
import morgan from "morgan"

import env from "@/config"
import { router } from "@/routers/index.router"
import { errorHandle } from "@/middlewares/errors"


const app = express()

app.use(cors())
app.use(express.json())

if (env.DEBUG) app.use(morgan("dev"))

app.use(router)

app.use(errorHandle)

export { app }
