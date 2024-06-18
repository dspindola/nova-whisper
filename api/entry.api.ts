import { Elysia } from "elysia"
import { cors } from "@elysiajs/cors"

export default new Elysia({
  prefix: "/api",
  serve: {
    port: 8080,
    hostname: "0.0.0.0"
  }
})
  .use(cors())
  .get('/', () => "hi from server/api")