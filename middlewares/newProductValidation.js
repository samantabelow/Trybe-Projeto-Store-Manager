const Products = require('../models/productsModel');

const newProductValidation = async (req, _res, next) => {
  const {name, quantity} = req.body;
  const minLength = 5;
  if (name.length < minLength) {
    return next({
      status: 422,
      message: '"name" length must be at least 5 characters long',
      code: 'invalid_data'
    });
  }
  if (quantity < 1) {
    return next({ status: 422,
      message: '"quantity" must be larger than or equal to 1',
      code: 'invalid_data'});
  }
  if (typeof quantity !== 'number') {
    return next({ status: 422,
      message: '"quantity" must be a number',
      code: 'invalid_data'});
  }
  next();
};

module.exports = newProductValidation;
