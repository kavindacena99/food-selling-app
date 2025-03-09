const express = require("express");
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const router = express.Router();

// regster a new user
router.post("/register", async (req,res)=>{
    try{
        const { name, email, password } = req.body;

        //check if user already exists
        const existingUser = await User.findOne({ email });
        if(existingUser){
            return res.status(400).json({ message: "User already exists"});
        }

        //create new User
        const newUser = new User({ name, email, password });
        await newUser.save();

        res.status(201).json({ message: "User registered successfully" });
    }catch(err){
        console.error("Registration error: " , err);
        res.status(500).json({ message:"Server error", error:err.message });
    }
});


//login user
router.post("/login",async (req,res)=>{
    try{
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if(!user){
            return res.status(400).json({ message: "Invalid credentials"});
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){
            return res.status(400).json({ message:"Invalid credentials" });
        }

        // generate JWT Token
        const token = jwt.sign({ userId: user._id}, process.env.JWT_SECRET, {
            expiresIn: "7d"
        });

        res.status(200).json({ token, userId: user._id, name:user.name });
    }catch(err){
        console.error("Login errror: ", err);
        res.status(500).json({ message: "Server error", error: err.message });
    }
});


module.exports = router;