const http = require('http');

const req = http.get('http://www.baidu.com', res => {
    console.log(res.statusCode);
    console.log(res.headers);

    res.on('data', data => {
        console.log(data.toString());
    })
    }

)

req.on('error', e => console.log(e))

console.log(req.agent);
console.log('*******分界线*******')