const express = require('express')

const router = express.Router()

// all routes in here are starting with /users
router.get('/', (req, res) => {
  res.render('login')
})

router.post('/', (req, res) => {
  var password = req.body.password

  if (password == 1) {
    res.render('secrets')
  } else {
    res.render('error')
  }
})

module.exports = router
