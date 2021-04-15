const Sales = require('../models/salesModel');

const saleIdValid = async (req, res, next) => {
  const id = res.params;
  const FAIL = 422;
  const idCheck = async () => await Sales.checkForSaleId(id);
  if (!idCheck) {
    return res.status(FAIL).json({ 'err': {
      'code': 'invalid_data',
      'message': 'Wrong sale ID format'
    }});
  };
  next();
};

module.exports = saleIdValid;