declare module "*.replit" {
        const config: {
  run: "cowsay Configure me!",
  entrypoint: "README.md",
  modules: [ "bash", "bun-1.1" ],
  nix: {
    channel: "stable-23_11",
  },
  ports: [
    {
      localPort: 3000,
      externalPort: 3000,
    }, {
      localPort: 8080,
      externalPort: 8080,
    }
  ],
};
        export default config
    }