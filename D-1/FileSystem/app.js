const fs = require('fs');
let text = fs.readFileSync('./textFile.txt', 'utf-8')
text = `written by node file syste ${text}`
fs.writeFileSync('output.txt', text)

// console.log(text)