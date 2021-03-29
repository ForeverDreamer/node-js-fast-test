const fs = require('fs');
const path = require('path')
const dirName = path.join(__dirname, 'files2')

fs.mkdirSync(dirName);
const ms1Day = 24*60*60*1000;

for (let i=0; i < 10; i++) {
    const filePath = path.join(dirName, `file${i}`);
    fs.writeFile(filePath, i.toString(), err => {
        if (err) throw err;

        const time = (Date.now() - i*ms1Day)/1000;
        fs.utimes(filePath, time, time, e => {
            if (e) throw e;
        })
    })
}