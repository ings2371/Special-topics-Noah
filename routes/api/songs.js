var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.sed('GET ALL SONGS');
  });

module.exports = router