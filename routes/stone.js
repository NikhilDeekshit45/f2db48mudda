var express = require('express');
const stone_controllers= require('../controllers/stone');
var router = express.Router();

const secured = (req, res, next) => {
    if (req.user){
    return next();
    }
    req.session.returnTo = req.originalUrl;
    res.redirect("/login");
    }

/* GET stones */
router.get('/', stone_controllers.stone_view_all_Page );

/* GET detail stone page */
router.get('/detail', stone_controllers.stone_view_one_Page);

/* GET create stone page */
router.get('/create',secured, stone_controllers.stone_create_Page);

/* GET create update page */
router.get('/update',secured, stone_controllers.stone_update_Page);

/* GET delete stone page */
router.get('/delete',secured, stone_controllers.stone_delete_Page);
module.exports = router;