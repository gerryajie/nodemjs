import readline from "readline";
import proses from "process";

const input = readline.createInterface({
  input: proses.stdin,
  output: proses.stdout,
});

input.question("Siapa nama anda?", (name) => {
  console.info(`halo ${name}`);
  input.close();
});
