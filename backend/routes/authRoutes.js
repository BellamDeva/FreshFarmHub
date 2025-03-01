const express = require("express");
const router = express.Router();
const User = require("../models/User");

// Login Route (Without bcrypt & JWT)
router.post("/login", async (req, res) => {
    const { email, password } = req.body;

    try {
        // Check if the user exists with the given email and password
        const user = await User.findOne({ email, password });

        if (!user) {
            return res.status(400).json({ message: "Invalid email or password" });
        }

        // If user exists, send success response
        res.json({ message: "Login successful", user });
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
});

module.exports = router;
