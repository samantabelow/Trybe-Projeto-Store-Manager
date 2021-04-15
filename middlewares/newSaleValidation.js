const Sales = require('../models/salesModel');

const newSaleValidation = async (req, _res, next) => {
  const itemsSold = req.body;
  if (quantity < 1) {
    return next({ status: 422, message: '"quantity" must be larger than or equal to 1'});
  }
  if (typeof quantity !== 'number') {
    return next({ status: 422, message: '"quantity" must be a number'});
  }
  next();
};

module.exports = newSaleValidation;
