import {Console} from 'console';
import fs from 'fs';

const file = fs.createWriteStream('app.log');
const log = new Console({
    stdout: file,
    stderr: file
})
log.info('halo')