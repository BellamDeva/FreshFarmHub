const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes'); 
const addProducts = require("./routes/addProducts");// Import product routes
const authRoutes = require("./routes/authRoutes");
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', userRoutes);
 // Import the route file
app.use("/api", addProducts); 
app.use("/api", productRoutes); // Mount it under `/api`
app.use("/api/auth", authRoutes);


// Add product routes

// Database Connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection failed:', err));

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
