const port = 3003

const express = require('express')
const server = express()
const allowCors = require('./cors')

server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.use(allowCors)

server.listen(port, () => {
  console.log(`BACKEND is runnin on ${port}`)
})

module.exports = server