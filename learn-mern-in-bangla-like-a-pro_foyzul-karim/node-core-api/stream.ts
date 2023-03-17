import stream from "node:stream";
import fs from "node:fs";

// console.log(stream);

const fileStream = fs.createWriteStream("./out-tmp.txt");
fileStream.write("Hello world");
fileStream.end();
