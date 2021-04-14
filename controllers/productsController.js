const Products = require('../models/productsModel');

const SUCCESS = 201;
const FAIL = 500;

const addProduct = async (req, res) => {
  const {name, quantity} = req.body;
  try {
    const results = await Products.addProduct(name, quantity);
    console.log(results);
    res.status(SUCCESS).json(results.ops[0]);
  } catch (err) {
    console.log(err);
    res.status(FAIL).json({ message: err.message });
  }
};

module.exports = {
  addProduct,
};
