const mongoose = require("mongoose") 
const stoneSchema = mongoose.Schema({ 
 stone_Name: {type: String,required: [true, 'Name of the stone cannot be empty']}, 
 stone_Company: {type: String,required: [true, 'Company of the stone cannot be empty']}, 
 stone_size: {type: Number,required: [true, 'size of the stone cannot be empty']},
 stone_Rating: {type: Number,required: [true, 'Rating of the stone cannot be empty']}
})

 
module.exports = mongoose.model("stone", stoneSchema) 