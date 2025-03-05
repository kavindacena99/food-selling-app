const express = require('express');
const Food = require('../models/Food');

const router = express.Router();

// create a food item
router.post("/food", async (req,res) => {
    try{
        
        const { name, description, price, image } = req.body;

        const newFood = new Food({ name, description, price, image});


        const savedFood = await newFood.save();
        res.status(201).json(savedFood);
    }catch(err){
        res.status(500).json({ message:'Error creating food item'});
    }
});

// get all food items



module.exports = router;