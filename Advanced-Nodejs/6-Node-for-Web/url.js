const url = require('url')
const queryString = require('querystring')

let obj = url.parse('https://www.pluralsight.com/search?q=buna')
console.log(obj);

obj = url.parse('https://www.pluralsight.com/search?q=buna', true)
console.log(obj);

const urlObj = {
    'protocol': 'https:',
    'host': 'www.pluralsight.com',
    'search': '?q=buna',
    'path': '/search?q=buna',
}

console.log(url.format(urlObj))

const qs = {
    'name': 'doer lee',
    'website': 'www.doer.com/home'
}

const qStr = queryString.stringify(qs)
console.log(qStr)
console.log(queryString.parse(qStr))