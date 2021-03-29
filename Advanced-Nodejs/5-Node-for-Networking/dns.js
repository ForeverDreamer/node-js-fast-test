const dns = require('dns'); // name -> addresses

dns.lookup('pluralsight.com', (err, address) => {
    console.log('lookup: ', address);
});

dns.resolve4('pluralsight.com', (err, address) => {
    console.log('resolve4: ', address);
})

dns.resolveMx('pluralsight.com', (err, address) => {
    console.log('resolveMx: ', address);
})

dns.reverse('54.70.189.145', (err, hostnames) => {
    console.log('reverse: ', hostnames);
})

console.log('请等待返回结果：')
