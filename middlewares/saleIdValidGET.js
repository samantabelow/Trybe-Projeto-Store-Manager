const Sales = require('../models/salesModel');

const saleIdValidGET = async (req, _res, next) => {
  const TWELVE = 12;
  const TWENTYFOUR = 24;
  const { id } = req.params;
  if (!id || id.length !== TWELVE && id.length !== TWENTYFOUR) {
    return next({ status: 404, message: 'Sale not found', code: 'not_found'});
  }
  const idCheck = await Sales.checkForSaleId(id);
  if (!idCheck) {
    return next({ status: 404, message: 'Sale not found', code: 'not_found'});
  };
  next();
};

module.exports = saleIdValidGET;