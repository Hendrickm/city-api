const express = require('express')

module.exports = server => {
  const router = express.Router()
  server.use('/api', router)

  const cityService = require('../api/cityService')
  cityService.register(router, '/cities')
}