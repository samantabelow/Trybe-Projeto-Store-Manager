const Products = require('../models/productsModel');

const SUCCESS = 201;
const SUCCESS_GET = 200;
const SYSTEM_FAIL = 500;
const FAIL = 422;

const addProduct = async (req, res) => {
  const {name, quantity} = req.body;
  try {
    const results = await Products.addProduct(name, quantity);
    console.log(results);
    res.status(SUCCESS).json(results.ops[0]);
  } catch (err) {
    console.log(err);
    res.status(SYSTEM_FAIL).json({ message: err.message });
  }
};

const getAllProducts = async (_req, res) => {
  try {
    const results = await Products.getAllProducts();
    console.log(results);
    res.status(SUCCESS_GET).json({products: results});
  } catch (err) {
    console.log(err);
    res.status(FAIL).json({ message: err.message });
  }
};

const getProductById = async (req, res) => {
  const { id } = req.params;
  try {
    const results = await Products.getProductById(id);
    console.log(results);
    if (results)
      res.status(SUCCESS_GET).json(results);
  } catch (err) {
    console.log(err);
    res.status(FAIL).json({ 'err': {
      'code': 'invalid_data',
      'message': 'Wrong id format'
    } });
  }
};

module.exports = {
  addProduct,
  getAllProducts,
  getProductById,
};
