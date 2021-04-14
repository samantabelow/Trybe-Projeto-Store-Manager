const express = require('express');
const productsController = require('../controllers/productsController');
const middlewares = require('../middlewares');

const router = express.Router();

router.post('/products',
  middlewares.nameAlreadyExists,
  middlewares.newProductValidation,
  productsController.addProduct);
router.get('/products', productsController.getAllProducts);
router.get('/products/:id', productsController.getProductById);
router.put('/products/:id',
  middlewares.newProductValidation,
  productsController.updateProduct);

router.use(middlewares.errorMiddleware);

module.exports = router;