// import app from "../app.config"

await Bun.write(`./vite.config.ts`, `import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

process.env.VITE_APP_API_DOMAIN = "0.0.0.0:8080"

export default defineConfig({
  plugins: [react()],
  server: {
    host: "127.0.0.1",
    port: 3000
  },
})
`)

// await Bun.$.env({
//   ...process.env,
//   VITE_APP_API_DOMAIN: "0.0.0.0:8080",
// })`bun --bun vite`