const mongoose = require("mongoose")

const reportSchema = new mongoose.Schema({
 daily:{
    type:String,
    trim:true
 },
 branch:{
   type: String,
   trim: true,
 },
 date:{
   type: Date,
   trim: true,
   default: Date.now 
 },
})
module.exports = mongoose.model('Report',reportSchema)