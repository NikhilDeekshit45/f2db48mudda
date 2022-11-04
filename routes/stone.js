var express = require('express');

var router = express.Router();

/* GET home page. */

router.get('/', function(req, res, next) {

  res.render('stone', { title: 'search results for stone class' });

});

module.exports = router;