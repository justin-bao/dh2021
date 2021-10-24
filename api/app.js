var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// misc endpoints
var indexRouter = require('./routes/index');

// user endpoints
var userRouter = require('./routes/user')

// sticker endpoints
var stickersListRouter = require('./routes/stickers-list');
var stickerRouter = require('./routes/sticker');
var newStickerRouter = require('./routes/new-sticker');
var addStickersRouter = require('./routes/add-stickers')

// question endpoints
var questionRouter = require('./routes/question')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/api', indexRouter);

app.use('/api/user', userRouter);

app.use('/api/stickers-list', stickersListRouter);
app.use('/api/sticker', stickerRouter);
app.use('/api/new-sticker', newStickerRouter);
app.use('/api/add-stickers', addStickersRouter);

app.use('/api/question', questionRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
