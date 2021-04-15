const Sales = require('../models/salesModel');

const newSaleValidation = async (req, res, next) => {
  const itemsSold = req.body;
  itemsSold.forEach(item => {
    if (item.quantity < 1 || typeof item.quantity !== 'number') {
      return next({ status: 422,
        message: 'Wrong product ID or invalid quantity',
        code: 'invalid_data'});
    }
    return;
  });
  next();
};

module.exports = newSaleValidation;
