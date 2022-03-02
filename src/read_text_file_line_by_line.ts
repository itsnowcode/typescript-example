import * as fs from "fs";
import * as readline from "readline";

main();

async function main() {
  console.log("start");

  await read1();

  console.log("end");
}

async function read1() {
  console.log("start main");

  await new Promise<void>((resolve, reject) => {
    const rs = fs.createReadStream("data/file/text_file.txt");

    const rl = readline.createInterface({ input: rs });

    rl.on("line", (lineString) => {
      console.log(lineString);
    });

    rl.on("close", () => {
      console.log("end main");
      resolve();
    });
  });
}
