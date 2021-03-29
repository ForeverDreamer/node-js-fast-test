const fs = require('fs');
const util = require('util')
const assert = require('assert')

// const out = fs.createWriteStream('./out.log')
// const err = fs.createWriteStream('./err.log')
//
// const myConsole = new console.Console(out, err);
//
// setInterval(function () {
//     myConsole.log(new Date())
//     myConsole.error(new Error('Whoops'));
//     console.trace(new Error('Whoops'));
// }, 5000);

// console调用util模块函数
console.log('One %s', 'thing');
console.log(util.format('Two %s', 'thing'));

console.log(module)
console.log(util.inspect(module));
console.log(util.inspect(global, { depth: 0 }));
console.dir(global, { depth: 0 })

// console.assert(3 == '3')
// console.assert(3 === '3')

console.time('testLable')

setTimeout(() => {
    console.timeEnd('testLable')
}, 2000)