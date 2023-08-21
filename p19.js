//fs => file system access files and content

const fs = require('fs')
console.log('file opeations started')

//synchronous => direct or without callback function
//asynchronous => indirect or with callback function

const first = fs.readFileSync('./content/files/p1.txt')
const second =  fs.readFileSync('./content/files/p2.txt')

fs.writeFileSync('./content/files/res-1.txt', `output of both the files : \n ${first} \n\n ${second} `)

console.log('file write completed')