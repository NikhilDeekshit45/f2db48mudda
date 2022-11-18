var createError = require('http-errors');
var express = require('express');
var path = require('path');
var mongoose = require('mongoose')
var mongodb = require('mongodb')
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var passport = require('passport'); 
var LocalStrategy = require('passport-local').Strategy; 
passport.use(new LocalStrategy( 
  function(username, password, done) { 
    Account.findOne({ username: username }, function (err, user) { 
      if (err) { return done(err); } 
      if (!user) { 
        return done(null, false, { message: 'Incorrect username.' }); 
      } 
      if (!user.validPassword(password)) { 
        return done(null, false, { message: 'Incorrect password.' }); 
      } 
      return done(null, user); 
    }); 
  } 
));
var stone = require("./models/stone");
require('dotenv').config();
const connectionString =
  process.env.MONGO_CON
mongoose = require('mongoose');
mongoose.connect(connectionString,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
var db = mongoose.connection;
//Bind connection to error event
db.on('error', console.error.bind(console, 'MongoDB connectionerror:'));
db.once("open", function () {
  console.log("Connection to DB succeeded")
});
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var stoneRouter=require('./routes/stone');
var gridbuildRouter=require('./routes/gridbuild');
var selectorRouter=require('./routes/selector');
var resourceRouter=require('./routes/resource');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(require('express-session')({

  secret: 'keyboard cat',

  resave: false,

  saveUninitialized: false

}));

app.use(passport.initialize());

app.use(passport.session());

app.use(express.static(path.join(__dirname, 'public')));

// passport config

// Use the existing connection

// The Account model  

var Account =require('./models/account');

 

passport.use(new LocalStrategy(Account.authenticate()));

passport.serializeUser(Account.serializeUser());

passport.deserializeUser(Account.deserializeUser());
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/stone', stoneRouter);
app.use('/gridbuild', gridbuildRouter);
app.use('/selector', selectorRouter);
app.use('/resource',resourceRouter);
// We can seed the collection if needed on server start
async function recreateDB(){
  // Delete everything
  await stone.deleteMany();
  let instance1 = new
 stone({stone_Name: "Limestone", stone_Company: "Arcadia", stone_size: 20, stone_Rating: 4.3});
  instance1.save( function(err,doc) {
  if(err) return console.error(err);
  console.log("First stone details saved")
  });
  let instance2 = new
  stone({stone_Name: "Granite", stone_Company: "Excel group", stone_size: 10, stone_Rating: 4.5});
   instance2.save( function(err,doc) {
   if(err) return console.error(err);
   console.log("Second stone details saved")
   });
   let instance3 = new
   stone({stone_Name: "Marble", stone_Company: "rengvo", stone_size: 11, stone_Rating: 4.8});
    instance3.save( function(err,doc) {
    if(err) return console.error(err);
    console.log("Third stone details saved")
    });
 }
 let reseed = true;
 if (reseed) { recreateDB();}

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