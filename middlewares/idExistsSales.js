const Products = require('../models/productsModel');

const idExistsSales = async (req, res, next) => {
  const itemsSold = req.body;
  const FAIL = 422;
  itemsSold.forEach(item => {
    const idCheck = async () => await Products.checkForProductId(item.productId);
    if (!idCheck) {
      return res.status(FAIL).json({ 'err': {
        'code': 'invalid_data',
        'message': 'Wrong product ID or invalid quantity'
      }});
    }
  return;
  });
  next();
};

module.exports = idExistsSales;