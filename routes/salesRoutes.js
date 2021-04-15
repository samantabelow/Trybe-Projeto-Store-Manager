const express = require('express');
const salesController = require('../controllers/salesController');
const middlewares = require('../middlewares');

const router = express.Router();

router.get('/sales', salesController.getAllSales);
router.get('/sales/:id', salesController.getSaleById);
router.post('/sales',
  middlewares.idExistsSales,
  middlewares.newSaleValidation,
  salesController.addSale);
router.delete('/sales/:id', middlewares.saleIdValid, salesController.deleteSale);
router.put('/sales/:id',
  middlewares.newSaleValidation,
  salesController.updateSale);

router.use(middlewares.errorMiddleware);

module.exports = router;