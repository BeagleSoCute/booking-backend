const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: number,
    required: true,
  },
});

module.exports = Food = mongoose.model("food", foodSchema);
