const util = require('util');
const debuglog = util.debuglog('web');

const server = require('http').createServer();

server.on('request', (req, res) => {
    // 设置环境变量export NODE_DEBUG=web才会打印日志
    debuglog('HTTP Request: %s', req.url);
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello world\n');
});

server.listen(8000);