var express = require('express');
var router = express.Router();
var firebase = require('firebase/app');
require('firebase/database');

/* increase the sticker count of a user. */
var database = firebase.database();

router.post('/', function(req, res, next) {
  console.log(req.body);
  database.ref("users/" + req.body.user + "/stickers-remaining").once('value')
  .then((snapshot) => {
    return snapshot.val();
  })
  .then((val) => {
    database.ref("users").child(req.body.user).update({'stickers-remaining': parseInt(val) + parseInt(req.body.stickers)});
    res.sendStatus(200);
  });
});

module.exports = router;