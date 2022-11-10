var express = require('express'); 
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../controllers/api'); 
var stone_controller = require('../controllers/stone'); 
 
/// API ROUTE /// 
 
// GET resources base. 
router.get('/', api_controller.api); 
 
/// COSTUME ROUTES /// 
 
// POST request for creating a Costume.  
router.post('/stones', stone_controller.stone_create_post); 
 
// DELETE request to delete Costume. 
router.delete('/stones/:id', stone_controller.stone_delete); 
 
// PUT request to update Costume. 
router.put('/stones/:id', stone_controller.stone_update_put); 
 
// GET request for one Costume. 
router.get('/stones/:id', stone_controller.stone_detail); 
 
// GET request for list of all Costume items. 
router.get('/stones', stone_controller.stone_list); 
 
module.exports = router; 