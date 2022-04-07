function samplePromise() {
  return Promise.resolve("Gerry");
}

async function run() {
  const name = await samplePromise();
  console.info(name);
}

run();
