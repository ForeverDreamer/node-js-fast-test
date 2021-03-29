const fs = require('fs');
const server = require('http').createServer();

const rootRedirect = res => {
    res.writeHead(301, { 'Location': '/home'} );
    res.end();
}

const jsonData = res => {
    res.writeHead(200, { 'Content-Type': 'application/json'} )
    res.end(JSON.stringify('你好，世界！'));
}

const htmpPage = (res, path) => {
    res.writeHead(200, { 'Content-Type': 'text/html'});
    res.end(fs.readFileSync(`.${path}.html`));
}

routes = {
    '/': rootRedirect,
    '/api': jsonData,
    '/home': htmpPage,
    '/about': htmpPage,
}

server.on('request', (req, res) => {
    const url = req.url
    console.log(url);
    const func = routes[url]
    if (func) {
        func(res, url)
    } else {
        res.writeHead(404);
        res.end();
    }
})

server.listen(8000);
