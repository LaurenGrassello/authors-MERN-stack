const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Product title is required"],
        minlength: [2, "Product title must be at least two characters"]
    },
    price: {
        type: Number,
        required: [true, "Product price is required"],
        min: [0, "Price must be a positive number"]
    },
    description: {
        type: String,
        required: [true, "Product description is required"],
        minlength: [3, "Product description must be at least three characters"]
    }
}, {timestamps: true});

module.exports.Product = mongoose.model('Product', ProductSchema);