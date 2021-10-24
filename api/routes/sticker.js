var express = require('express');
var router = express.Router();
var cors = require('cors');
var firebase = require('firebase/app');
require('firebase/database');

/* GET the URL for a specific sticker. */
var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200
}

var database = firebase.database();

router.get('/:name', function(req, res, next) {
  database.ref('stickers-list/' + req.params.name).on('value', (snapshot) => {
    const url = snapshot.val();
    res.send({name: req.params.name, url: url});
  });
});

module.exports = router;