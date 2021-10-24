var express = require('express');
var router = express.Router();
var cors = require('cors');
var firebase = require('firebase/app');
require('firebase/database');
require('firebase/storage');

/* GET the URL for a specific sticker. */
var database = firebase.database();
var storage = firebase.storage();

router.post('/', function(req, res, next) {
  console.log(req.body);
  /*fetch(req.body.url)
  .then(res => res.blob()) // Gets the response and returns it as a blob
  .then(blob => {
    storage.ref().put(blob).then((snapshot) => {
      console.log('Uploaded a blob or file!');
    });
    /* storage.ref().child(req.body.name).getDownloadURL()
    .then((url) =>{
      const sticker = {};
      sticker[req.body.name] = url;
      database.ref('stickers-list').set(sticker);
    }); */
  database.ref("stickers-list/" + req.body.name).set(req.body.url);
  res.send("yay");
});

module.exports = router;