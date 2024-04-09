  const mongoose = require('mongoose');

  const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    description: String,
    type: String,
    status: String,
    discount: Number,
    //userId: String,
    rating: String,
  });

  const Products = mongoose.model('Products', productSchema);

  module.exports = { Products }; 
