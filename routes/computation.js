var express = require('express');
var router = express.Router();

/* GET users listing. */
var x=Math.random();

router.get('/', function(req, res, next) {
  
  res.send(`Math.ceil('${x}') is `+Math.ceil(x));
});

module.exports = router;