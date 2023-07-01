const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  food: [
    {
      name: {
        type: String,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
    },
  ],
  drink: [
    {
      name: {
        type: String,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
    },
  ],
  meat: [
    {
      name: {
        type: String,
        required: true,
      },
    },
  ],
});
module.exports = Product = mongoose.model("product", productSchema);
