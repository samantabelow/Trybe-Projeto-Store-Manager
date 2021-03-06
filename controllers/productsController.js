const Products = require('../models/productsModel');

const SUCCESS = 201;
const SUCCESS_GET = 200;
const SYSTEM_FAIL = 500;
const FAIL = 422;

const addProduct = async (req, res) => {
  const {name, quantity} = req.body;
  try {
    const results = await Products.addProduct(name, quantity);
    res.status(SUCCESS).json(results.ops[0]);
  } catch (err) {
    res.status(SYSTEM_FAIL).json({ message: err.message });
  }
};

const getAllProducts = async (_req, res) => {
  try {
    const results = await Products.getAllProducts();
    res.status(SUCCESS_GET).json({products: results});
  } catch (err) {
    res.status(FAIL).json({ message: err.message });
  }
};

const getProductById = async (req, res) => {
  const { id } = req.params;
  try {
    const results = await Products.getProductById(id);
    if (results)
      res.status(SUCCESS_GET).json(results);
  } catch (err) {
    res.status(FAIL).json({ 'err': {
      'code': 'invalid_data',
      'message': 'Wrong id format'
    } });
  }
};

const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name, quantity } = req.body;
  try {
    const results = await Products.updateProduct(id, name, quantity);
    if (results)
      res.status(SUCCESS_GET).json(results[0]);
  } catch (err) {
    res.status(SYSTEM_FAIL).json({ message: err.message });
  }
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const results = await Products.deleteProduct(id);
    if (results)
      res.status(SUCCESS_GET).json(results[0]);
  } catch (err) {
    res.status(FAIL).json({ 'err': {
      'code': 'invalid_data',
      'message': 'Wrong id format'
    }  });
  }
};

module.exports = {
  addProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
};
