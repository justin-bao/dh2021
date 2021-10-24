var express = require('express');
var router = express.Router();
var cors = require('cors');
var firebase = require('firebase/app');
require('firebase/database');

/* GET list of available stickers. */
var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200
}

var database = firebase.database();

router.get('/', function(req, res, next) {
  database.ref('stickers-list').on('value', (snapshot) => {
    const stickers_dict = snapshot.val();
    res.send(Object.keys(stickers_dict));
  });
  
});

module.exports = router;