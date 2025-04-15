//signup route
const express=require("express")
const router=express.Router()
const passport=require ('passport')
//import models.thisvariable is used on line 13
const Signup= require('../model/Signup')

router.get("/signup",(req,res) =>{
   res.render("signup") 
})

router.post("/signup",async(req,res) =>{
   try {
    const user = new Signup(req.body)
    let existingUser= await Signup.findOne({
        email:req.body.email
    })
    if(existingUser){
return res.status(400).send("Not registered,email already exists")
    }
    console.log(user)
   await Signup.register(user, req.body.password ,(error)=>{
    if(error){
        throw error
    }
    res.redirect("/login")
   }) 
   
   } catch (error) {
    res.status(400).render("signup")
    console.log(error)
   }
})

//getting from db to list
router.get("/userList",async(req,res) =>{
   try {
     let items= await Signup.find()
     res.render("users",{
       users:items
     })
   } catch (error) {
   res.status(400).send("unable to find items in the database ")  
   }
 })

//login route


router.get("/login",(req,res) =>{
   res.render("login") 
})

router.post("/login",passport.authenticate('local',{failureRedirect:"/login"}),(req,res) =>{
   console.log(req.body);
   req.session.user=req.user;
   if(req.user.position==="director"){
     res.redirect("/DirectorDashboard") 
   }
   else if(req.user.position==="sales_agent"){
res.redirect("/salesAgentDashboard")
   }
   else if(req.user.position==="manager"){
      res.redirect("/managerDashboard")
         }else{
            res.send("You do not have any role in the sysytem ")
         }
})
//the roles are the values of the input not what appears at user interface

router.get("/logout",(req,res)=>{
   if(req.session){
      req.session.destroy((error)=>{
         if(error){
            return res.status(500).send(error ,"Error logging out")
         }
         res.redirect("/")
      })}
})


module.exports=router






































