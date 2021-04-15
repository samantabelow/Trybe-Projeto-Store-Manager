const errorMiddleware = require('./errorMiddleware');
const newProductValidation = require('./newProductValidation');
const nameAlreadyExists = require('./nameAlreadyExists');
const newSaleValidation = require('./newSaleValidation');
const idExistsSales = require('./idExistsSales');
const saleIdValid = require('./saleIdValid');

module.exports = {
  errorMiddleware,
  newProductValidation,
  nameAlreadyExists,
  newSaleValidation,
  idExistsSales,
  saleIdValid,
};
