var stone = require('../models/stone');
// List of all stones
exports.stone_list = function(req, res) {
    res.send('NOT IMPLEMENTED: stone list');
};
// for a specific stone.
exports.stone_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: stone detail: ' + req.params.id);
};
// Handle stone create on POST.
exports.stone_create_post = async function(req, res) {
    console.log(req.body)
    let document = new stone();
    document.stone_Name = req.body.stone_Name;
    document.stone_Company = req.body.stone_Company;
    document.stone_size = req.body.stone_size;
    document.stone_Rating = req.body.stone_Rating;
    try{
        let result = await document.save();
        res.send(result);
    }
    catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
    }  
};
// Handle stone delete form on DELETE.
exports.stone_delete = function(req, res) {
    res.send('NOT IMPLEMENTED: stone delete DELETE ' + req.params.id);
};
// Handle stone update form on PUT.
exports.stone_update_put = function(req, res) {
    res.send('NOT IMPLEMENTED: stone update PUT' + req.params.id);
};
exports.stone_list = async function(req, res) {
    try{
        thestones = await stone.find();
        res.send(thestones);
    }
    catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
    }  
};
// VIEWS
// Handle a show all view
exports.stone_view_all_Page = async function(req, res) {
    try{
        thestones = await stone.find();
        res.render('stone', { title: 'stone Search Results', results: thestones });
    }
    catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
    }  
};