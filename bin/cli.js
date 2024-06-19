await Bun.$.env({
  ...process.env,
  REPL_HOME: process.cwd(),
}).cwd(
  Bun.env.APP_HOME ?? Bun.env.REPL_HOME ?? process.cwd()
)`bun ${process.argv.slice(2)}`;
