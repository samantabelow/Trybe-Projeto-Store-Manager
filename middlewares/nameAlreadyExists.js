const Products = require('../models/productsModel');

const nameAlreadyExists = async (req, _res, next) => {
  const {name} = req.body;
  const nameCheck = await Products.checkForProductName(name);
  if (nameCheck) {
    return next({ status: 422, message: 'Product already exists'});
  }
  next();
};

module.exports = nameAlreadyExists;
