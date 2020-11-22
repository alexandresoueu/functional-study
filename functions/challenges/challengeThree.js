const fs = require('fs')
const path = require('path')

const readFile = way => {
  return new Promise(resolve => {
    fs.readFile(way, (error, content) => {
      resolve(content.toString())
    })
    console.log('after read...')
  })
}

const way = path.join(__dirname, '../data.txt')
readFile(way)
  .then(content => content.split('\n'))
  .then(lines => lines.join(','))
  .then(content => `The final content is: ${content}`)
  .then(console.log)
