const express = require("express");
const router = express.Router();
const connectEnsureLogin = require("connect-ensure-login");
//import models this is used
const Sale = require("../model/Sale");
const Produce = require("../model/Produce");

router.get(
  "/registerSales/:id",
  connectEnsureLogin.ensureLoggedIn(),
  async (req, res) => {
    if (
      req.session.user.position === "sales_agent" ||
      req.session.user.position === "manager"
    ) {
      try {
        const produce = await Produce.findOne({ _id: req.params.id });
        res.render("sales", {
          produce: produce,
          currentUser: req.session.user,
        });
      } catch (error) {
        res.status(400).send("unable to find this item in the database ");
      }
    } else {
      res.send("Your not allowed to access this page");
    }
  }
);

router.post("/registerSales/:id", connectEnsureLogin.ensureLoggedIn(), async (req, res) => {
  const user = req.session.user;

  if (!user || (user.position !== "sales_agent" && user.position !== "manager")) {
    return res.status(403).send("You are not allowed to access this page");
  }

  const produceId = req.params.id;

  

  try {
    const produce = await Produce.findById(produceId);
    if (!produce) return res.status(404).send("Produce not found");

    const quantity = Number(req.body.quantity);
    const price = Number(req.body.price);

    if (isNaN(quantity) || quantity <= 0) {
      return res.status(400).send("Invalid quantity");
    }

    if (isNaN(price) || price <= 0) {
      return res.status(400).send("Invalid price");
    }

    if (produce.tonnage < quantity) {
      return res.status(400).send(`Only ${produce.tonnage} kgs in stock`);
    }

    const amount = quantity * price;

    const saleMade = new Sale({
      buyerName: req.body.buyerName,
      product: produce.produceName,             // ✅ correct reference field
      quantity: quantity,
      amount: amount,
      price: price,
      branch: produce.branch,
      agentName: user.full_name,              // ✅ uses logged-in user's ID
      date: req.body.date || new Date()
    });

    await saleMade.save();

    produce.tonnage -= quantity;
    await produce.save();

    res.redirect("/sales/salesList");

  } catch (error) {
    console.error("Error selling produce:", error);
    res.status(500).send("Internal Server Error");
  }
});

//getting from db to list
router.get("/salesList", async (req, res) => {
  try {
    let items = await Sale.find()
    .sort({ natural: -1 })
    .populate("product")
    .populate("agentName")
    res.render("salesList", {
      sales: items,
    });

  } catch (error) {
    res.status(400).send("unable to find items in the database ");
  }
});
//update sale
router.get("/updateSale/:id", connectEnsureLogin.ensureLoggedIn(), async (req, res) => {
  const user= req.session.user;
  if (req.user && req.user.role === 'manager'){
  try {
    const updateSale = await Sale.findOne({ _id: req.params.id });
    res.render("updatesale", { sale: updateSale });
  } catch (error) {
    res.status(400).send("unable to find this item in the database ");
  }}
});

router.post("/updateSale/:id", connectEnsureLogin.ensureLoggedIn(),async (req, res) => {
  const user= req.session.user;
  if (req.user && req.user.role === 'manager'){
  try {
    await Sale.findOneAndUpdate({ _id: req.params.id }, req.body);
    res.redirect("/sales/salesList");
  } catch (error) {
    res.status(400).send("unable to find this item in the database ");
  }}
});

router.post(
  "/deleteSale",
  connectEnsureLogin.ensureLoggedIn(),
  async (req, res) => {
    try {
      await Sale.deleteOne({ _id: req.body.id });
      res.redirect("back");
    } catch (error) {
      res.status(400).send("unable to find this item in the database ");
    }
  }
);

module.exports = router;




