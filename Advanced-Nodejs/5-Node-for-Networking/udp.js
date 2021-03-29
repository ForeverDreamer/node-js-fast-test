const dgram = require('dgram');
const PORT = 3333;
const HOST = '127.0.0.1';

// server
const server = dgram.createSocket('udp4');

server.on('listening', () => console.log('UDP Server listening'));

server.on('message', (msg, rinfo) => {
    console.log(`${rinfo.address}:${rinfo.port} - ${msg}`);
});

server.bind(PORT, HOST);

// Client
// setInterval(function () {
//     const client = dgram.createSocket('udp4');
//
//     client.send('Pluralsight rocks', PORT, HOST, (err) =>{
//         if (err) throw err;
//
//         console.log('UDP message sent');
//         client.close();
//     });
// }, 1000);

const client = dgram.createSocket('udp4');
const msg = Buffer.from('Pluralsight rocks');

client.send(msg, 0, 'Pluralsight'.length, PORT, HOST, (err) =>{
    if (err) throw err;

    console.log('UDP message sent');
});

client.send(msg, 'Pluralsight'.length, msg.length - 'Pluralsight'.length, PORT, HOST, (err) =>{
    if (err) throw err;

    console.log('UDP message sent');
    client.close();
});