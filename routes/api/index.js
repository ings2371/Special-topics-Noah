var express = require('express');
var router = express.Router();

var usersRouter = require('./users')
var cardsRouter = require('./Cards')

router.use('/users', usersRouter)
router.use('/cards', cardsRouter)


router.get('/', function(req, res, next) {
    res.send('welcome to api');
  });

module.exports = router