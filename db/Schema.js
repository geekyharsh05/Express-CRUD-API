const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  price: { type: Number, required: true },
},
  { timestamps: true },
);

const Product = new mongoose.model("Product", productSchema);
module.exports = Product;
