const express = require('express');
const productsController = require('../controllers/productsController');
const middlewares = require('../middlewares');

const router = express.Router();

router.post('/products', productsController.addProduct);
// router.get('/songs/:id', productsController.getById);
// router.post('/songs', productsController.createSong);

router.use(middlewares.errorMiddleware);

module.exports = router;