function samplePromise() {
  return Promise.resolve("Gerry");
}

const name = await samplePromise();
console.info(name);
