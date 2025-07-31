import net from 'net'

const server = net.createServer((client) => {
    console.log(`client connected`)

    client.addListener('data', (data) => {
        console.log(`Receive data ${data.toString()}`);
        client.write(`hello ${data.toString()}\r\n`);
    })
})

server.listen(2000, 'localhost')