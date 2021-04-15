const Sales = require('../models/salesModel');

const saleIdValid = async (req, _res, next) => {
  const TWELVE = 12;
  const TWENTYFOUR = 24;
  const { id } = req.params;
  if (!id || id.length !== TWELVE && id.length !== TWENTYFOUR) {
    return next({ status: 422, message: 'Wrong sale ID format', code: 'invalid_data'});
  }
  const idCheck = await Sales.checkForSaleId(id);
  if (!idCheck) {
    return next({ status: 422, message: 'Sale not found', code: 'invalid_data'});
  };
  next();
};

module.exports = saleIdValid;