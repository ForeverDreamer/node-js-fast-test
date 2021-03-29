const fs = require('fs');
const path = require('path');

const dirName = path.join(__dirname, 'files2');
const currentFiles = fs.readdirSync(dirName);

const logWithTime = message => console.log(`${new Date().toUTCString()}: ${message}`)

fs.watch(dirName, (eventType, filename) => {
    // add or delete
    if (eventType === 'rename') {
        const index = currentFiles.indexOf(filename);
        if (index >= 0) {
            currentFiles.splice(index, 1);
            logWithTime(`${filename} was removed`);
            return;
        }

        currentFiles.push(filename);
        logWithTime(`${filename} was added`);
        return;
    }

    logWithTime(`${filename} was changed`)
})