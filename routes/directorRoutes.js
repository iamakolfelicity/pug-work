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

// Route to get real-time sales data
router.get("/sales/realTimeData", async (req, res) => {
  try {
    // Aggregate sales data for the dashboard (example: total sales per product)
    const salesData = await Sale.aggregate([
      {
        $group: {
          _id: "$product",   // Group by product name
          totalSales: { $sum: "$amount" },  // Sum of sales amount for each product
          totalQuantity: { $sum: "$quantity" } // Total quantity sold
        }
      },
      { $sort: { totalSales: -1 } }  // Sort by total sales in descending order
    ]);

    res.json(salesData); // Send the data as JSON
  } catch (error) {
    console.error("Error fetching real-time data:", error);
    res.status(500).json({ message: "Error fetching real-time data" });
  }
});


module.exports=router
