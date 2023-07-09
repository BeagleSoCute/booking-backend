const { check } = require("express-validator");

const validateRegister = [
  check("email", "invalid email address").isEmail(),
  check(
    "password",
    "Please enter a password with 6 or more characters and not greater than 15 characters"
  ).isLength({
    min: 6,
    max: 15,
  }),
  check(
    "name",
    "Please enter more than 1 characters of your name and not more than 150 character"
  ).isLength({
    min: 1,
    max: 150,
  }),
  check(
    "phoneNumber",
    "Please enter  your phonenumber"
  ).notEmpty(),
];

module.exports = { validateRegister };