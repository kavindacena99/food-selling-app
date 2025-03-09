const express = require('express');
const Food = require('../models/Food');
const protect = require('../middleware/authMiddleware');

const router = express.Router();

// create a food item
// protected route : only logged-in users can add food
// router.post("/food", async (req,res) => {  as router.post("/food",protect, async (req,res) => { 
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
router.get("/food",protect,async (req,res)=>{
    try{
        const foods = await Food.find();
        res.status(200).json(foods);
    }catch(err){
        res.status(500).json({ message:'Error getting food items'});
    }
});

// get a specific food item
router.get("/food/:id",async (req,res)=>{
    try{
        const food = await Food.findById(req.params.id);
        if(!food){
            return res.status(404).json({ message: 'Food item not found' });
        }
        res.status(200).json(food);
    }catch(err){
        res.status(500).json({ message:'Eror fetchng food item', error:err });
    }
});

// updaate a food item
// protected route : only logged-in users can update food
// router.put("/food/:id", async (req,res)=>{ as router.put("/food/:id",protect, async (req,res)=>{
router.put("/food/:id", async (req,res)=>{
    try{
        const { name, description, price, image } = req.body;
        const updatedFood = await Food.findByIdAndUpdate(
            req.params.id,
            { name, description, price, image },
            { new: true }
        );
        if(!updatedFood){
            return res.status(404).json({ message:'Food item not found' });
        }
        res.status(200).json(updatedFood);
    }catch(err){
        res.status(500).json({ message:'Error updating food item', error:err });
    }
});

// delete a food item
router.delete("/food/:id",async (req,res)=>{
    try{
        const deletedFood = await Food.findByIdAndDelete(req.params.id);
        if(!deletedFood){
            return res.status(404).json({ message:'Food item not found'});
        }
        res.status(200).json({ message:'Food item deleted' });
    }catch(err){
        res.status(500).json({ message:'Error deleting food item', error:err });
    }
});

module.exports = router;