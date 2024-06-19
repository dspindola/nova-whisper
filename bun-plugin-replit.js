/**
 * @param {import('bun').OnLoadArgs} args
 * @returns {Promise<Object>}
 */
const writeTypes = async (args) => {
  const config = Bun.TOML.parse(await Bun.file(`.replit`).text());

  const types = `declare module "*.replit" {
        const config: ${Bun.inspect(config)};
        export default config
    }`;

  await Bun.write("index.d.ts", types);

  return config;
};

/**
 * @param {import('bun').OnLoadArgs} args
 * @returns {Promise<Object>}
 */
const parseConfig = async (args, createTypes = writeTypes) => {
  return {
    default: await createTypes(args),
  };
};

/**
 * @param {import('bun').OnLoadArgs} args
 * @returns {Promise<import("bun").OnLoadCallback>}
 */
const resolveConfig = async (/**@type {import('bun').OnLoadArgs} */ args) => {
  return {
    loader: "object",
    exports: await parseConfig(args),
  };
};

Bun.build({
  entrypoints: ["./.replit"],
  plugins: [
    {
      name: "bun-plugin-replit",
      setup(build) {
        build.onLoad({ filter: /.replit$/ }, async (build) => {
          return await resolveConfig(build);
        });
      },
    },
  ],
});
