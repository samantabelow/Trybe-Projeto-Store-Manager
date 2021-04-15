const Products = require('../models/productsModel');

const nameExistsSales = async (req, _res, next) => {
  const {itemsSold} = req.body;
  // fazer um map fazendo nameCheck de todos os itensSold
  itemsSold.forEach(item => {
    const nameCheck = await Products.checkForProductName(item.name);
    if (!nameCheck) {
      return next({ status: 422, message: 'Product already exists'});
  }
  });
  const nameCheck = await Products.checkForProductName(name);
  if (nameCheck) {
    return next({ status: 422, message: 'Product already exists'});
  }
  next();
};

module.exports = nameExistsSales;