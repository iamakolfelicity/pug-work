const express = require("express");
const router = express.Router();
const multer =require ("multer")
const path =require("path")
const connectEnsureLogin = require("connect-ensure-login")
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
//to list of producelist
router.get("/producelist",connectEnsureLogin.ensureLoggedIn() ,async(req,res) =>{
  const user = req.session.user;  
  try {
     let items= await Produce.find({ branch: user.branch })
     res.render("producelist",{
       produce:items,
       currentUser: user,
     })
   } catch (error) {
   res.status(400).send("unable to find items in the database ")  
   }
 })

 //to list of procurement
 router.get("/procurementlist",connectEnsureLogin.ensureLoggedIn() ,async(req,res) =>{
  const user = req.session.user;  
  try {
    let items= await Produce.find({ branch: user.branch })
    res.render("procurement",{
      produce:items,
      currentUser:user
    })
  } catch (error) {
  res.status(400).send("unable to find items in the database ")  
  }
})

 //update Produce

 router.get("/updateProduce/:id",upload.single('image'), async (req, res) => {
  const user = req.session.user;  
  if (user.position === 'manager') {
  
   try {
     const updateProduce = await Produce.findOne({ _id: req.params.id });
     res.render("updateProduce", { produce: updateProduce });
   } catch (error) {
     res.status(400).send("unable to find this item in the database ");
   }
 } else {
  res.status(403).send("Access denied. Managers only.");
}});
 
 router.post("/updateProduce/:id", upload.single('image'), async (req, res) => {
  const user = req.session.user;  
  if (user.position === 'manager') {
    
  try {
    const updateData = { ...req.body };
    if (req.file) {
      updateData.imagePath = req.file.path;
    }
    await Produce.findOneAndUpdate({ _id: req.params.id }, updateData);
    res.redirect("/products/producelist");
  } catch (error) {
    res.status(400).send("Unable to update item in the DataBase");
  }
} else {
  res.status(403).send("Access denied. Managers only.");
}});

 router.post(
   "/deleteproduce",
   connectEnsureLogin.ensureLoggedIn(),
   async (req, res) => {
    const user = req.session.user;  
    if (user.position === 'manager') {
    
     try {
       await Produce.deleteOne({ _id: req.body.id });
       res.redirect("back");
     } catch (error) {
       res.status(400).send("unable to find this item in the database ");
     }}else {
      res.status(403).send("Access denied. Managers only.");}
   }
 );
 

module.exports = router;
