const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const mongoose = require('mongoose');
const foodRoutes = require("./routes/foodRoutes");
const authRoutes = require("./routes/authRoutes");
const orderRoutes = require("./routes/orderRoutes");

// Load env variables
dotenv.config();

// Connect to MongoDB
const app = express();

// connect to mongodb
mongoose
.connect(process.env.MONGO_URI)
.then(() => console.log("Mongo DB connected"))
.catch((err) => console.log("Mongo DB error",err));

// Middleware
app.use(express.json());


app.use(cors());

// Routes
// use food routes
app.use('/api',foodRoutes);
app.use('/api',orderRoutes);
app.use('/api/users',authRoutes);


// Test route
app.get("/",(req,res)=>{
    res.send("Welcome to the server");
});



// start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});