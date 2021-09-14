const fs = require('fs')




const dataBuffer =  fs.readFileSync('1-json.json').toString()
const jsonData = JSON.parse(dataBuffer)
jsonData.name = 'kumail'
jsonData.age = 23

const data = JSON.stringify(jsonData)
fs.writeFileSync('1-json.json',data)
