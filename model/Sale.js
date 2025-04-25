const mongoose =require ("mongoose")

const salesSchema= new mongoose.Schema({
  buyerName:{
    type: String,
    trim: true,
  },  
  produceName:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'Produce'    
  },
  quantity:{
    type: Number,
    trim: true,
  },
  amount:{
    type: Number,
    trim: true,
  },
  price:{
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
    type: mongoose.Schema.Types.ObjectId,
    ref:'Signup'   
}
})
module.exports = mongoose.model('Sale', salesSchema);