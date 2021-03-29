const fs = require('fs');
const path = require('path')
const dirName = path.join(__dirname, 'files');

const files = fs.readdirSync(dirName);

files.forEach(file => {
    const filePath = path.join(dirName, file)
    fs.stat(filePath, (err, stats) => {
        if (err) throw err;

        fs.truncate(filePath, Math.floor(stats.size/2), err => {
            if (err) throw err;
        });
    });
});