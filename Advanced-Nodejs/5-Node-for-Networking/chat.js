const server = require('net').createServer();
let counter = 0;
let sockets = {};

// 复杂的时间操作推荐使用库：moment
function timestamp() {
    const now = new Date();
    return `${now.getHours()}:${now.getMinutes()}`;
}

server.on('connection', socket => {
    socket.id = counter++

    console.log('Client connected');
    socket.write('Please type your name: ');

    socket.on('data', data => {
        if (!sockets[socket.id]) {
            socket.name = data.toString().trim()
            socket.write(`Welcome ${socket.name}!\n`);
            sockets[socket.id] = socket;
            return;
        }
        Object.entries(sockets).forEach(([key, cs]) => {
            if (socket.id === Number(key)) return;
            cs.write(`${socket.name} ${timestamp()} `);
            cs.write(data);
        });
    })

    // socket.setEncoding('utf-8')

    socket.on('end', () => {
        delete sockets[socket.id]
        console.log('Client disconnected');
    });
})

server.listen(8000, () => console.log('Server bound'))