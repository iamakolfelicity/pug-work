const mongoose =require ("mongoose")
const passportLocalMongoose = require('passport-local-mongoose');
const signupSchema = new mongoose.Schema({

full_name:{
    type:String,
    trim:true,
   // required:true

},
phone_number: {
    type: String,
    trim: true,
    unique: true
},

email:{
    type:String,
    trim:true,
    //required:true,
    unique:true
},
password:{
    type:String,
    trim:true,
   // required:true
},

position: {
    type: String,
    trim: true,
    
},
branch:{
  type:String,
   trim:true,
   //required:true
    }

})


signupSchema.plugin(passportLocalMongoose,{
    usernameField:'email'
});
module.exports=mongoose.model('Signup' , signupSchema)


//schema