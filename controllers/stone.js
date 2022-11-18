var stone = require('../models/stone');
// List of all stone
exports.stone_list = function(req, res) {
 res.send('NOT IMPLEMENTED: stone list');
};
// for a specific stone.
exports.stone_detail = async function(req, res) {
    console.log("detail"  + req.params.id)
    try {
        result = await stone.findById( req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }

};
// Handle stone create on POST.
exports.stone_create_post = function(req, res) {
 res.send('NOT IMPLEMENTED: stone create POST');
};
// Handle stone delete form on DELETE.
exports.stone_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: stone delete DELETE ' + req.params.id);
};
// Handle stone update form on PUT.
exports.stone_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: stone update PUT' + req.params.id);
};
// Handle stone update form on PUT.
exports.stone_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await stone.findById( req.params.id)
        // Do updates of properties
        if(req.body.stone_Name)
               toUpdate.stone_Name = req.body.stone_Name;
        if(req.body.stone_Company) toUpdate.stone_Company = req.body.stone_Company;
        if(req.body.stone_size) toUpdate.stone_size = req.body.stone_size;
        if(req.body.stone_Rating) toUpdate.stone_Rating = req.body.stone_Rating;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
    }
};


// VIEWS

   // List of all stone
exports.stone_list = async function(req, res) {
    try{
    thestone = await stone.find();
    res.send(thestone);
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
    thestone = await stone.find();
    res.render('stone', { title: 'stone Search Results', results: thestone });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
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

// Handle stone delete on DELETE.
exports.stone_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await stone.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
   };
 // Handle a show one view with id specified by query
exports.stone_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await stone.findById( req.query.id)
    res.render('stonedetail',
      { title: 'stone detail', toShow: result });
       }
       catch(err){
       res.status(500)
       res.send(`{'error': '${err}'}`);
       }
      };
// Handle building the view for creating a stone.
// No body, no in path parameter, no query.
// Does not need to be async
exports.stone_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('stonecreate', { title: 'stone Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };
 // Handle building the view for updating a stone.
// query provides the id
exports.stone_update_Page = async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
    let result = await stone.findById(req.query.id)
    res.render('stoneupdate', { title: 'stone Update', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };

// Handle a delete one view with id from query
exports.stone_delete_Page = async function(req, res) {
    console.log("Delete view for id " + req.query.id)
    try{
    result = await stone.findById(req.query.id)
    res.render('stonedelete', { title: 'stone Delete', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };   
   