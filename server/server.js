const express = require ('express')
const magicRoutes = require ('./routes/magic')

const server = express()

//json api middleware
server.use(express.json())

//static file server middleware
server.use(express.static('./public'))
server.set('json spaces', 4);
server.use('/api/magic' , magicRoutes)



module.exports = server