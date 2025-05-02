const express =require ("express")
const router =express.Router()
//import models this is used on line 11
const Credit= require('../model/Credit')
const Produce = require("../model/Produce");

router.get("/creditRegister", async(req,res)=>{
  try {
          const produce = await Produce.findOne({ _id: req.params.id });
          res.render("credit", {
            produce: produce,
            currentUser: req.session.user,
          });
        } catch (error) {
          res.status(400).send("unable to find this item in the database ");
        }
      })
 router.post("/creditRegister", async (req,res) =>{
    try {
      const creditor= new Credit(req.body)
      console.log(creditor);
      await creditor.save()  
      res.redirect('/creditRegister')
    } catch (error) {
        res.status(400).render("credit")//render the pug file
        console.log(error)    
    }
 })

 //getting from db to list
 router.get("/creditorList",async(req,res) =>{
   try {
     let items= await Credit.find()
     res.render("creditList",{
       creditors:items //used in the credit in creditors in th pug file
     })
   } catch (error) {
   res.status(400).send("unable to find items in the database ")  
   }
 })
 
 module.exports=router

 
 
 