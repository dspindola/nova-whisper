import entry from "../api/entry.api"

const app = entry.listen({
  hostname: "0.0.0.0",
  port: '8080'
}, ({ url }) => {
  console.log('%s', url)
})
