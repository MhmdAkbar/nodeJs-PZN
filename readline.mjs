import { createInterface } from "readline/promises";
import { stdin as input, stdout as output } from "node:process";

const rl = createInterface ({input, output});

const name = await rl.question('masukkan nama anda: ');
console.log(`halo ${name}`);
rl.close();