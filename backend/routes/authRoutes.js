const express = require("express");
const User = require("../models/User"); // Assuming you have a User model

const router = express.Router();

// Login Route
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if the user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // Validate the password directly (plain text comparison)
    if (user.password !== password) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // If valid credentials, send success response
    res.status(200).json({ message: "Login successful", user });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

module.exports = router;
