// 1.dependencies
const express=require('express')
const path =require('path')
const mongoose = require('mongoose');
const passport=require("passport")
const moment = require ("moment")
const expressSession=require("express-session")({
  secret:"secret",
  resave: false,
  saveUninitialized: false
})
require('dotenv').config();
const Signup= require('./model/Signup')

//2.instantiations
const app=express()
const port=3000

//import routes
const homeRoutes=require("./routes/homeRoutes")
const productRoutes=require("./routes/productRoutes")
const salesRoutes =require("./routes/salesRoutes")
const salesAgentRoutes =require("./routes/salesAgentRoutes")
const managerRoutes =require("./routes/managerRoutes")
const directorRoutes =require("./routes/directorRoutes")
const creditRoutes=require("./routes/creditRoutes")
const authRoutes=require("./routes/authRoutes")
// 3.configurations

app.locals.moment = moment;
mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.connection
  .on('open', () => {
    console.log('Mongoose connection open');
  })
  .on('error', (err) => {
    console.log(`Connection error: ${err.message}`);
  });
 
app.set('view engine','pug')
app.set('views',path.join(__dirname,'view'))

//4.middleware
app.use(express.static(path.join(__dirname,"public")))
app.use("/public/imgs/uploads", express.static(__dirname + "/public/imgs/uploads"));
app.use(express.urlencoded({extended:true}))

app.use((req, res, next) => {
    console.log("A new request from second middleware received at " + Date.now());
   next();  
  });

  // express session configs
 app.use(expressSession);
app.use(passport.initialize());
app.use(passport.session());

 // passport configs
 passport.use(Signup.createStrategy());
 passport.serializeUser(Signup.serializeUser());
 passport.deserializeUser(Signup.deserializeUser());

//5.routes
//using imported routes
app.use("/products",productRoutes)
app.use("/sales" , salesRoutes)
app.use("/" , homeRoutes)
app.use("/" , salesAgentRoutes)
app.use("/" , managerRoutes)
app.use("/" , directorRoutes)
app.use("/", creditRoutes)
app.use("/",authRoutes)
// 6.bootstraping server
app.listen(port, () => console.log(`listening on ${port}`));
