import dns from "dns/promises";
import { hostname } from "os";

const ip = await dns.lookup("www.google.com");

console.info(ip.address);
console.info(ip.family);
