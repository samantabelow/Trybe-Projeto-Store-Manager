const express = require('express');
const productsController = require('../controllers/productsController');
const middlewares = require('../middlewares');

const router = express.Router();

router.post('/products', middlewares.newProductValidation, productsController.addProduct);

router.use(middlewares.errorMiddleware);

module.exports = router;