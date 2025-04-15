const express=require("express")
const router=express.Router()

router.get("/DirectorDashboard",(req,res) =>{
    res.render("directorDash")
})



module.exports=router
