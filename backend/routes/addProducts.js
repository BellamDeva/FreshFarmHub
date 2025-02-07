const express = require("express");
const router = express.Router();
const Product = require("../models/Product"); // Ensure the path to the Product model is correct

// Route to add a product
router.post("/products", async (req, res) => {
  try {
    const { name, price, description, image } = req.body;

    // Validate request body
    if (!name || !price || !description || !image) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Create and save a new product
    const newProduct = new Product({
      name,
      price,
      description,
      image,
    });

    const savedProduct = await newProduct.save();

    // Respond with success message and the saved product
    res.status(201).json({ message: "Product added successfully", product: savedProduct });
  } catch (error) {
    console.error("Error adding product:", error);
    res.status(500).json({ message: "Failed to add product", error: error.message });
  }
});

module.exports = router;
