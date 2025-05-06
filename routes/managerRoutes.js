const express=require("express")
const router=express.Router()
const connectEnsureLogin = require("connect-ensure-login");

const Signup= require('../model/Signup')
const Report = require('../model/Report'); // adjust path as needed

// router.get("/managerDashboard",(req,res) =>{
//     res.render("managerdash")
// })

//list
router.get("/managerDashboard",connectEnsureLogin.ensureLoggedIn() ,async(req,res) =>{
  const user = req.session.user;  
  try {
     let items= await Signup.find({ branch: user.branch })
     res.render("managerdash",{
       workers :items,
       currentUser: user,
       
     })
   } catch (error) {
   res.status(400).send("unable to find items in the database ")  
   }
 })

 
 
 router.post("/managerDashboard", async (req, res) => {
   try {
     const report = new Report(req.body);
     
     await report.save();
     console.log(report);
      res.redirect("/managerDashboard"); 
   } catch (error) {
     console.error("Error saving report:", error);
      res.status(400).render("report", { error: "Failed to save product." });
   }
 });

 //report list
 router.get("/dailyreports",connectEnsureLogin.ensureLoggedIn() ,async(req,res) =>{
    const user = req.session.user;  
    try {
       let items= await Report.find({ branch: user.branch })
       res.render("reports",{
         reports :items,
         currentUser: user,
       })
     } catch (error) {
     res.status(400).send("unable to find items in the database ")  
     }
   })

module.exports=router
