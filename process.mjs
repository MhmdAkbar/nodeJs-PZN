import process from 'process';

process.addListener('exit', function (exitCode) {
    console.log(`node js exit with code ${exitCode}`)
});

console.log(process.version)
console.table(process.argv);
console.log(process.report);
console.log(process.env)

process.exit(10);

console.log(`not printed because already exit`)