const express=require("express")
const router=express.Router()

router.get("/managerDashboard",(req,res) =>{
    res.render("managerdashboard")
})



module.exports=router
