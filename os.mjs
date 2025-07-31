import os from 'os'
console.info(os.platform())
console.info(os.freemem())
console.info(os.totalmem())

console.table(os.cpus())