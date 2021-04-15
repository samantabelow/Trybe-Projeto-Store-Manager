const Sales = require('../models/salesModel');

const saleIdValid = async (req, res, next) => {
  const id = res.params;
  const idCheck = async () => await Sales.checkForSaleId(id);
  if (!idCheck) {
    return next({ status: 422, message: 'Wrong sale ID format', code: 'invalid_data'});
  };
  next();
};

module.exports = saleIdValid;