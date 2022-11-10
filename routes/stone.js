var express = require('express');
const stone_controlers= require('../controllers/stone');
var router = express.Router();

/* GET home page. */

// router.get('/', function(req, res, next) {

//   res.render('stone', { title: 'search results for stone class' });

// });
router.get('/', stone_controlers.stone_view_all_Page );

module.exports = router;