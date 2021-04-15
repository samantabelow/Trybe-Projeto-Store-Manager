const Sales = require('../models/salesModel');

const newSaleValidation = async (req, res, next) => {
  const itemsSold = req.body;
  const FAIL = 422;
  itemsSold.forEach(item => {
    if (item.quantity < 1 || typeof item.quantity !== 'number') {
      return res.status(FAIL).json({ 'err': {
        'code': 'invalid_data',
        'message': 'Wrong product ID or invalid quantity'
      }});
    }
  });
  next();
};

module.exports = newSaleValidation;
