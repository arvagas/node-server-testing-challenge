const express = require('express')

const foodRoute = require('./foods/foods-route')
const mw = require('./server-middleware')

const server = express()

// Global Middleware
server.use(express.json())
server.use(mw.logger)

// Route handling
server.use('/api/foods', foodRoute)

// Hello world test
server.get('/', (req, res) => {
  res.json('Hello from node-server-testing-challenge')
})

module.exports = server