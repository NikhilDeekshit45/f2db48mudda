const mongoose = require("mongoose") 
const stoneSchema = mongoose.Schema({ 
 stone_Name: String, 
 stone_Company: String, 
 stone_size: Number,
 stone_Rating: Number
});
 
module.exports = mongoose.model("stone", stoneSchema) 