var express = require('express');
var router = express.Router();
var firebase = require('firebase/app');
require('firebase/database');

var database = firebase.database();

/* GET user's number of stickers they can use. */
router.get('/:user', function(req, res, next) {
  database.ref("users/" + req.params.user).on('value', (snapshot) => {
    const user_info = snapshot.val();
    console.log(user_info);
    res.send(user_info);
  });
});

module.exports = router;
