var express = require('express');
var router = express.Router();
var firebase = require('firebase/app');
require('firebase/database');

/* GET home page. */

const firebaseConfig = {
  apiKey: "AIzaSyBTZRZ1z8WQno5-jYkW806SjaWSUiu-QY4",
  authDomain: "noctua-b4f09.firebaseapp.com",
  databaseURL: "https://noctua-b4f09-default-rtdb.firebaseio.com",
  projectId: "noctua-b4f09",
  storageBucket: "noctua-b4f09.appspot.com",
  messagingSenderId: "762629023753",
  appId: "1:762629023753:web:0c8232697352d8f20130d8",
  measurementId: "G-F691Z2G3B5"
};
firebase.initializeApp(firebaseConfig);

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
