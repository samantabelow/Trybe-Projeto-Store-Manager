const errorMiddleware = require('./errorMiddleware');
const newProductValidation = require('./newProductValidation');
const nameAlreadyExists = require('./nameAlreadyExists');

module.exports = {
  errorMiddleware,
  newProductValidation,
  nameAlreadyExists,
};
