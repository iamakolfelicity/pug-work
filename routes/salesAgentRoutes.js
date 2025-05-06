const express=require("express")
const router=express.Router()

const Produce = require("../model/Produce");

router.get("/salesAgentDashboard",async(req,res) =>{
  res.render("sales")              
 
})



module.exports=router
