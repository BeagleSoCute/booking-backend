const express = require("express");
const router = express.Router();
const { authMiddleware } = require("../middleware/auth.middleware");
const {addProduct,getProducts} =  require("../controllers/product.controller");

router.post("/add", [authMiddleware], addProduct);
router.get("/get", [authMiddleware], getProducts);

module.exports = router;

