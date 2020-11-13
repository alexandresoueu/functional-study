const fs = require('fs')
const path = require('path')

const data = path.join(__dirname, 'data.txt')

const showData = (_, content) => {
  console.log(content.toString())
}

console.log('=== START WITHOUT SYN ===')
fs.readFile(data, {}, showData)
console.log('=== FINISH WITHOUT SYN ===')

console.log('=== START WITH SYNC ===')
const contentSync = fs.readFileSync(data)
console.log(contentSync.toString())
console.log('=== FINISH WITH SYNC ===')
