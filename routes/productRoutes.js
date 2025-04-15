const express = require("express");
const router = express.Router();
const multer =require ("multer")
const path =require("path")
//import model
const Produce= require('../model/Produce')

//image upload configs
var storage = multer.diskStorage({
  destination: (req, file, cb) => {
  cb(null, "public/imgs/uploads");
  },
  filename: (req, file, cb) => {
  cb(null, file.originalname);
  },
  });
  var upload = multer({ storage: storage });


router.get("/addProduct", (req, res) => {
  res.render("produce");
});

router.post("/addProduct", upload.single("image"), async (req, res) => {
  try {
    const product = new Produce(req.body);
    product.image = req.file.path;
    console.log(product);
    await product.save();
    return res.redirect("/products/addProduct"); 
  } catch (error) {
    console.error("Error saving product:", error);
    return res.status(400).render("produce", { error: "Failed to save product." });
  }
});
//to list
router.get("/producelist",async(req,res) =>{
   try {
     let items= await Produce.find()
     res.render("producelist",{
       produce:items
     })
   } catch (error) {
   res.status(400).send("unable to find items in the database ")  
   }
 })

module.exports = router;
