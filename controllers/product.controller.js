const Product = require("../models/product.model");

const addProduct = async (req, res) => {
  const { food, drink, meat } = req.body;
  try {
    let product = await Product.find();
    const updateData = {
      food,
      drink,
      meat,
    };
    if (product) {
      await Product.findOneAndUpdate({}, updateData);
    } else {
      // If no product exists, create a new one
      const newData = new Product(updateData);
      await newData.save();
    }
    res.status(200).send("Product added successfully.");
  } catch (error) {
    console.log("error in addProduct api", error);
    res.status(500).send("Server getOrderById Error");
  }
};

const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products[0]);
  } catch (error) {
    console.log("error in getProducts api", error);
    res.status(500).send("Server getProducts Error");
  }
};

module.exports = {
  addProduct,
  getProducts,
};
