const mongoose =require ("mongoose")

const produceSchema= new mongoose.Schema({
  produceName:{
    type: String,
    trim: true,
  },  
  produceType:{
    type: String,
    trim: true,
  },
  tonnage:{
    type: Number,
    trim: true,
  },
  phone_number: {
    type: Number,  // Changed to String for better handling of phone numbers
    trim: true
  },
  amount:{
    type: Number,
    trim: true,},
  unitCost:{
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
dealerName:{
    type: String,
    trim: true,
},
image:{
  type:String,
  trim:true
}
})
module.exports = mongoose.model('Produce', produceSchema);