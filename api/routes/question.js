var express = require('express');
var router = express.Router();
var firebase = require('firebase/app');
require('firebase/database');

/* GET a random question and correct answer for a subject. */
var database = firebase.database();

router.get('/', function(req, res, next) {

  database.ref('questions/' + req.query.subject).once('value').then(
    snapshot => Math.floor((Math.random() * snapshot.numChildren()))
  ).then((index) => {
      database.ref('questions/' + req.query.subject + '/' + index).once('value').then(snapshot => {
          var question = snapshot.val();
          console.log(question);
          // question = question.substring(1, question.length - 1);
          //c onsole.log(question);

          res.json(JSON.parse(question));
        });
    }
  );
});

module.exports = router;