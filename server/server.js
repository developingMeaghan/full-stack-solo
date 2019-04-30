const express = require ('express')

const server = express()

//json api middleware
server.use(express.json())

//static file server middleware
server.use(express.static('./public'))

module.exports = server