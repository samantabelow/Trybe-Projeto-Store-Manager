const Products = require('../models/productsModel');

const SUCCESS = 201;
const FAIL = 500;

const addProduct = async (req, res, next) => {
  const {name, quantity} = req.body;
  const minLength = 5;
  if (name.length < minLength) {
    return next({
      status: 422, message: '"name" length must be at least 5 characters long'
    });
  }
  const nameCheck = await Products.checkForProductName(name);
  console.log(nameCheck);
  if (nameCheck) {
    return next({ status: 422, message: 'Product already exists'});
  }
  if (quantity < 1) {
    return next({ status: 422, message: '"quantity" must be larger than or equal to 1'});
  }
  if (typeof quantity !== 'number') {
    return next({ status: 422, message: '"quantity" must be a number'});
  }
  try {
    const results = await Products.addProduct(name, quantity);

    res.status(SUCCESS).json(results);
  } catch (err) {
    console.log('oi');
    console.log(err);
    res.status(FAIL).json({ message: err.message });
  }
};

module.exports = {
  addProduct,
};
