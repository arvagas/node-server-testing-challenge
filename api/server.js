const express = require('express')

const mw = require('./server-middleware')

const server = express()

// Global Middleware
server.use(express.json())
server.use(mw.logger)

// Route handling

// Hello world test

module.exports = server