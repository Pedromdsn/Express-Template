import env from "@/config"
import { app } from "@/app"

app.listen(env.PORT, () => console.log(`🔥 Server running on port ${env.PORT}`))
