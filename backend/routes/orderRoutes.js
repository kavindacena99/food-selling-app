const express = require("express");
const Order = require("../models/Order");
const protect = require("../middleware/authMiddleware");
const admin = require("../middleware/authMiddleware");

const router = express.Router();

// protected route Only loogedin users can place the order
router.post("/orders",protect,async (req,res) => {
    try{
        const { items, totalPrice } = req.body;

        //ensure items exists
        if(!items || items.length === 0){
            return res.status(400).json({ message: "No food items in the order" });
        }

        const newOrder = new Order({
            user: req.user,
            items,
            totalPrice
        });

        const savedOrder = await newOrder.save();
        res.status(201).json(savedOrder);
    }catch(err){
        res.status(500).json({ message:"Error placng order", error: err.message});
    }
});

// protected route get orders of the logged-in user
router.get("/orders",protect, async (req,res)=>{
    try{
        const orders = await Order.find({ user:req.user }).populate("items.food");
        res.status(200).json(orders);
    }catch(err){
        res.status(500).json({ message: "Error fetching orders", error:err.message });
    }
});


//admin
// admin can update order status
router.put("/orders/:id",protect,admin,async (req,res)=>{
    try{
        const order = await Order.findById(req.params.id);

        if(!order){
            return res.status(404).json({ message:"Order not found" });
        }

        order.status = req.body.status || order.status;
        const updatedOrder = await order.save();

        res.status(200).json(updatedOrder);
    }catch(err){
        res.status(500).json({ message:"Error updating order", error:err.message });
    }
});

// admin can cancel the order
router.delete("/orders/:id",protect,admin, async (req,res)=>{
    try{
        const order = await Order.findById(req.params.id);

        if(!order){
            return res.status(404).json({ message:"Order not found" });
        }

        await order.deleteOne();
        res.status(200).json({ message:"Order cancelled successfully" });
    }catch(err){
        res.status(500).json({ message:"Error cancelling order", error:err.message });
    }
});

module.exports = router;