const fs = require('fs');

const readFileAsArray = function (file, cb = () => {}) {
    return new Promise((resolve, reject) => {
        fs.readFile(file, function (err, data) {
            if (err) {
                reject(err);
                return cb(err);
            }

            const lines = data.toString().trim().split('\n');
            resolve(lines);
            cb(null, lines);
        })
    })
}

readFileAsArray('./numbers')
    .then(lines => {
    const numbers = lines.map(Number);
    const oddNumbers = numbers.filter(number => number % 2 === 1);
    console.log('odd numbers count: ', oddNumbers.length)
    })
    .catch(err => console.error(err));

readFileAsArray('./numbers', (err, lines) => {
    if (err) throw err;

    const numbers = lines.map(Number);
    const oddNumbers = numbers.filter(number => number % 2 === 1);
    console.log('odd numbers count: ', oddNumbers.length)
})

async function countOdd() {
    try {
        const lines = await readFileAsArray('./numbers');
        const numbers = lines.map(Number);
        return numbers.filter(number => number % 2 === 1).length;
    } catch (e) {
        console.error(e)
    }
}

countOdd()
    .then(count => console.log('odd numbers count: ', count))
    .catch(e => console.error(e))
