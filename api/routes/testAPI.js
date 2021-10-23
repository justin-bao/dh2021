var express = require('express');
var router = express.Router();
var cors = require('cors');

/* GET home page. */

var corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200
}

router.get('/', cors(corsOptions), function(req, res, next) {
  res.send('testAPI is working properly');
});

module.exports = router;