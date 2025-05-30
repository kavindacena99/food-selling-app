const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema(
    {
        itemname: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        seller:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User', // Assuming you have a User model for sellers
            required: true,
        }

        /*

        ,
        image: {
            type: String,
            required: false,
        }

        ,
        seller: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User', // Assuming you have a User model for sellers
            required: true,
        }

        */
    },
    {
        timestamps: true
    }
);

const Food = mongoose.model('Food', foodSchema);

module.exports = Food;
