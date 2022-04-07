import fs from "fs";

const writer = fs.createWriteStream("target.log");

writer.write("gerry\n");
writer.write("ajie\n");
writer.write("pratama\n");

const reader = fs.createReadStream("target.log");
reader.addListener("data", (data) => {
  console.info(data.toString());
});
