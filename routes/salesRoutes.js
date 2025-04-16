const express=require("express")
const router=express.Router()
const connectEnsureLogin =require("connect-ensure-login")
//import models this is used 
const Sale = require("../model/Sale")

router.get("/registerSales",(req,res) =>{
    res.render("sales")
})

router.post("/registerSales",async(req,res) =>{
  
  try {
    const sale = new Sale(req.body)
    console.log(sale);
    await sale.save()
    res.redirect("/sales/salesList")
  } catch (error) {
    res.status(400).render("sales")
    console.log(error)
  }

})

//getting from db to list
router.get("/salesList",async(req,res) =>{
  try {
    let items= await Sale.find()
    res.render("salesList",{
      sales:items
    })
  } catch (error) {
  res.status(400).send("unable to find items in the database ")  
  }
})
//update sale
router.get("/updateSale/:id" , async(req,res)=>{
try {
 const  updateSale = await Sale.findOne({_id:req.params.id})
 res.render("updatesale",{sale:updateSale})
} catch (error) {
  res.status(400).send("unable to find this item in the database ") 
}
})

router.post("/updateSale/:id" ,async(req,res)=>{
try {
  await Sale.findOneAndUpdate({_id:req.query.id},req.body)
  res.redirect("/sales/salesList")
} catch (error) {
  res.status(400).send("unable to find this item in the database ")  
}
})

router.post("/deleteSale", connectEnsureLogin.ensureLoggedIn(), async(req,res)=>{
  try {
    await Sale.deleteOne({_id:req.body.id})
    res.redirect('back')
  } catch (error) {
    res.status(400).send("unable to find this item in the database ")  
  }
})



module.exports=router
