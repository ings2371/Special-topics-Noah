var express = require('express');
var router = express.Router();

var usersRouter = require('./users')
var songsRouter = require('./users')

router.use('/users', usersRouter)
router.use('/songs', songsRouter)


router.get('/', function(req, res, next) {
    res.send('welcome to api');
  });

module.exports = router