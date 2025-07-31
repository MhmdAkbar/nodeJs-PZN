import fs from 'fs/promises'
const buffer = await fs.readFile('async.mjs');
console.info(buffer.toString());

await fs.writeFile('temp.txt', 'hello world');