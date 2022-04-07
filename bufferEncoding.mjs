const buffer = Buffer.from("gerry ajie pratama", "utf8");

console.info(buffer.toString());
console.info(buffer.toString("hex"));
console.info(buffer.toString("base64"));

const bufferBase64 = Buffer.from("Z2VycnkgYWppZSBwcmF0YW1h", "base64");
console.info(bufferBase64.toString("utf8"));

//  Melakukan encoding ke encoding yang lain
