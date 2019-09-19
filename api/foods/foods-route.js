const express = require('express')

const Foods = require('./foods-model')

const router = express.Router()

router.get('/', (req, res) => {
  Foods.find()
    .then(food => res.json(food))
    .catch(err => res.status(500).json({ message: 'error retrieving foods' }))
})

module.exports = router