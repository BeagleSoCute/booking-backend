const express = require("express");
const test = require("../middleware/user");
const router = express.Router();

// router.use((req, res, next) => {
//   console.log("Time: ", Date.now());
//   next();
// });

router.get("/", test, (req, res) => {
  //   res.send("This is home page");
  //   res.status(404);
});

module.exports = router;
