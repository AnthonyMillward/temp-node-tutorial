const {readFileSync, writeFileSync} = require('fs')
// this is destructured
// that is the same as const fs = require('fs'
//                      fs.readFileSync)

const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

writeFileSync('./content/reuslt-sync.txt',`Here is the result: ${first}, ${second}`, {flag: 'a'})

console.log(first,second)