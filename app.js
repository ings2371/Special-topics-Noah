//import modules
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose')
var dotenv = require('dotenv')
var cors = require('cors')

//load any variables form .env file
dotenv.config()

mongoose.connect(process.env.MONGO_DB) //connects to online cluster

//define router
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/api/users');
var cardsRouter = require('./routes/api/Cards')
var cardsRouter = require('./routes/api/Cards')
var apiRouter = require('./routes/api')

//define express app
var app = express();

// view engine setup, set views, location of our templates to the 'views' folder

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');//setting templaye engine to jade

const  corsOption = {
  origin: 'http://localhost:5173/',
  Credentials: true
}

//defining middleware
app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api', apiRouter);//looks for folder
app.use('/api', apiRouter);//looks for folder

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
