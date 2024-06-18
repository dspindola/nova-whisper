export default {
  client: {
    vite: {
      plugins: [],
      server: {
        port: 3000,
        host: "0.0.0.0"
      }
    } satisfies import('vite').InlineConfig
  },
  server: {
    bun: {
      server: {
        port: 8080,
        hostname: "0.0.0.0",
        async fetch({ }) {
          return {} as Response
        }
      } satisfies import('bun').ServeOptions
    },
  },
  api: {}
} 