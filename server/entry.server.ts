import app from "../app.config"
import api from "../api/entry.api"
import Elysia from "elysia"
import { cors } from "@elysiajs/cors"


new Elysia().use(cors()).use(api()).listen({
  hostname: "0.0.0.0",
  port: app.server.bun.server.port
})
