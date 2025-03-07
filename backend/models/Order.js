const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        items: [
            {
                food:{
                    type: mongoose.Schema.Types.ObjectId,
                    ref:"Food",
                    required:true
                },
                quantity:{
                    type: Number,
                    required:true
                }
            }
        ],
        totalPrice:{
            type: Number,
            required: true
        },
        status:{
            type:String,
            enum:["Pending","Processing","Completed","Cancelled"],
            default: "Pending"
        }
    },
    { timestamps: true }
);

const Order = mongoose.model("Order",orderSchema);

module.exports = Order;