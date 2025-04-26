const express=require("express")
const router=express.Router()

const Produce = require("../model/Produce");

router.get("/salesAgentDashboard",async(req,res) =>{
     const produce = await Produce.findOne({ _id: req.params.id });
            res.render("sales", {
              produce: produce,
 })
})



module.exports=router
