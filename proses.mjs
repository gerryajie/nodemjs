import proses from "process";

proses.addListener("exit", (exitCode) => {
  console.info(`Node JS Exit with code ${exitCode}`);
});

console.info(proses.version);
console.table(proses.argv);
// node proses.mjs gerry pratama (akan keluarin argumennya)
console.table(proses.report);
console.table(proses.env);

proses.exit(1);
