const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    minlength: 6,
    required: true,
  },
  role:{
    type: String,
    required: true,
  },
   booking: {
    type: ObjectId,
    ref: "booking",
  },
});

module.exports = User = mongoose.model("user", userSchema);
