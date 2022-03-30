var express = require('express');
var router = express.Router();

/* GET users listing. */
var x=Math.random();

router.get('/', function(req, res, next) {
  
  res.send('User accesses are: '+Math.ceil(x));
});

module.exports = router;