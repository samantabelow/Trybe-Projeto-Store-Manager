const express = require('express');
const salesController = require('../controllers/salesController');
const middlewares = require('../middlewares');

const router = express.Router();

router.post('/sales',
  middlewares.idExistsSales,
  middlewares.newSaleValidation,
  salesController.addSale);
router.get('/sales', salesController.getAllSales);
router.get('/sales/:id', salesController.getSaleById);
router.put('/sales/:id',
  middlewares.newSaleValidation,
  salesController.updateSale);
// router.delete('/sales/:id', middlewares.saleIdValid, salesController.deleteSale);

router.use(middlewares.errorMiddleware);

module.exports = router;