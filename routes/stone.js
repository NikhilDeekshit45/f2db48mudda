// var express = require('express');
// var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('stone', { title: 'Search Results stone' });
// });

// module.exports = router;

var express = require('express'); 
const stone_controllers= require('../controllers/stone'); 
var router = express.Router(); 
 
/* GET stone */ 
router.get('/', stone_controllers.stone_view_all_Page ); 
module.exports = router; 

// GET request for one stone. 
router.get('/stone/:id', stone_controllers.stone_detail); 

/* GET detail stone page */ 
router.get('/detail', stone_controllers.stone_view_one_Page); 

/* GET create stone page */ 
router.get('/create', stone_controllers.stone_create_Page); 

/* GET create update page */ 
router.get('/update', stone_controllers.stone_update_Page); 

/* GET delete stone page */ 
router.get('/delete', stone_controllers.stone_delete_Page);

/* GET create stone page */
router.get('/create', stone_controllers.stone_create_Page);

/* GET create update page */
router.get('/update', stone_controllers.stone_update_Page);