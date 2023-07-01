const mongoose = require("mongoose");

const meatSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});
module.exports = Meat = mongoose.model("meat", meatSchema);
