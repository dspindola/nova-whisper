import app from "../app.config"
import { Elysia } from "elysia"

export default () => new Elysia()
  .get('/', () => "hi from server/api")
