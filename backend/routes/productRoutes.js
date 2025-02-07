const express = require("express");
const Product = require("../models/Product");

const router = express.Router();

// Fetch all products
router.get("/products", async (req, res) => {
  try {
    const products = await Product.find(); // Retrieve all products from the database
    res.status(200).json(products); // Send products as JSON response
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch products", error: error.message });
  }
});

module.exports = router;
