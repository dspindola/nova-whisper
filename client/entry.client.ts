import app from "../app.config"

await Bun.write(`./vite.config.ts`, `import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc"

export default defineConfig({...${Bun.inspect({
  server: app.client.vite.server
})},
  plugins: [react()]
})
`)

await Bun.$`bun --bun vite`