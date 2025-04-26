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

router.post(
  "/registerSales/:id",
  connectEnsureLogin.ensureLoggedIn(),
  async (req, res) => {
    if (
      req.session.user.position === "sales_agent" ||
      req.session.user.position === "manager"
    ) {
      try {
        const { amount } = req.body;
        const produce = await Produce.findById({ _id: req.params.id });
        if (!produce) {
          return res.status(404).send("Produce not found ");
        }
        if (produce.tonnage < amount) {
          return res
            .status(400)
            .send(
              `Not enough stock available , there are ${produce.tonnage} kgs in stock`
            );
        }
        if (produce && produce.tonnage > 0) {
          const saleMade = new Sale({
            produceName: req.body.produceName,
            amount: req.body.amount,
            price: req.body.price,
            amount: req.body.amount,
            buyerName: req.body.buyerName,
            agentName: req.body.agentName,
            date: req.body.date,
            quantity: req.body.quantity,
          });
          await saleMade.save();
          //decrease sales
          // produce.tonnage -= amount;
          // console.log("new storage after sale", produce.tonnage);
          // await produce.save();

          res.redirect("salesList");
        } else {
          return res
            .status(404)
            .json({ error: "Produce not found or sold out" });
        }
      } catch (error) {
        console.error("Error selling produce:", error.message);
        res.status(500).send("Internal Server Error");
      }
    } else {
      res.send("You are not allowed to access this page");
    }
  }
);

//getting from db to list
router.get("/salesList", async (req, res) => {
  try {
    let items = await Sale.find()
    .sort({ natural: -1 })
    .populate("produceName")
    .populate("agentName")
    res.render("salesList", {
      sales: items,
    });

  } catch (error) {
    res.status(400).send("unable to find items in the database ");
  }
});
//update sale
router.get("/updateSale/:id", async (req, res) => {
  try {
    const updateSale = await Sale.findOne({ _id: req.params.id });
    res.render("updatesale", { sale: updateSale });
  } catch (error) {
    res.status(400).send("unable to find this item in the database ");
  }
});

router.post("/updateSale/:id", async (req, res) => {
  try {
    await Sale.findOneAndUpdate({ _id: req.query.id }, req.body);
    res.redirect("/sales/salesList");
  } catch (error) {
    res.status(400).send("unable to find this item in the database ");
  }
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
