const express=require("express")
const router=express.Router()
//import sales model
const Sale = require("../model/Sale")

router.get("/DirectorDashboard",async(req,res) =>{
   
        try {
           let totalRevenue = await Sale.aggregate([
            {$group:{_id:null,
            totalQuantitySold:{$sum: "$quantity"},
            totalSale:{$sum:{$multiply:["$price","$quantity"]} }
        }}
    ]) 
        totalRevenue=totalRevenue[0] ??{totalQuantitySold:0,totalSale:0}
        res.render("directorDash",{totalRevenue})
        } catch (error) {
            res.status(400).send("unable to find items in the database ")  
            console.error("Aggregation error", error.message) 
        }
            try {
              let branchSales = await Sale.aggregate([
                {
                  $group: {
                    _id: "$branch", // Group by branch
                    totalQuantity: { $sum: "$quantity" },
                    totalSale: { $sum: { $multiply: ["$price", "$quantity"] } }
                  }
                }
              ]);
          
              res.render("directorDash", { branchSales });
            } catch (error) {
              res.status(400).send("Unable to fetch branch sales");
              console.error("Aggregation error", error.message);
            }
          });



module.exports=router
