'use strict';

const mongoose = require('mongoose');

const products = mongoose.Schema({
    name: { type: String, required: true},
    display_name: { type: String, required: false},
    category: { type: String, required:false},
    description: { type: String, required: false},
    price: { type:Number, required: false}, 
    inStock: { type: Number, required: false} 
});

module.exports = mongoose.model('products', products);