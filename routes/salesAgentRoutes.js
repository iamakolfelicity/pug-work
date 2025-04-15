const express=require("express")
const router=express.Router()

router.get("/salesAgentDashboard",(req,res) =>{
    res.render("sales")
})



module.exports=router
