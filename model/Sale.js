const mongoose =require ("mongoose")

const salesSchema= new mongoose.Schema({
  buyerName:{
    type: String,
    trim: true,
  },  
  produceName:{
    type: String,
    trim: true,
  },
  quantity:{
    type: String,
    trim: true,
  },
  amount:{
    type: Number,
    trim: true,
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
agentName:{
    type: String,
    trim: true,
}
})
module.exports = mongoose.model('Sale', salesSchema);