const errorMiddleware = require('./errorMiddleware');
const newProductValidation = require('./newProductValidation');
const nameAlreadyExists = require('./nameAlreadyExists');
const newSaleValidation = require('./newSaleValidation');

module.exports = {
  errorMiddleware,
  newProductValidation,
  nameAlreadyExists,
  newSaleValidation
};
