const os = require('os')

console.log(os.cpus())

console.log(os.networkInterfaces())

console.log(os.freemem()/1024/1024 + 'Mb')

console.log(os.type())

console.log(os.release())

console.log(os.userInfo())

console.log(os.constants)