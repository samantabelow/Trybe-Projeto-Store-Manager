const Sales = require('../models/salesModel');

const SUCCESS = 200;
const SYSTEM_FAIL = 500;
const FAIL = 404;
const FAIL422 = 422;

const addSale = async (req, res) => {
  const itemsSold = req.body;
  try {
    const results = await Sales.addSale(itemsSold);
    res.status(SUCCESS).json(results.ops[0]);
  } catch (err) {
    res.status(SYSTEM_FAIL).json({ message: err.message });
  }
};

const getAllSales = async (_req, res) => {
  try {
    const results = await Sales.getAllSales();
    res.status(SUCCESS).json({sales: results});
  } catch (err) {
    res.status(FAIL).json({ 'err': {
      'code': 'not_found',
      'message': 'Sale not found'
    } });
  }
};

const getSaleById = async (req, res) => {
  const { id } = req.params;
  try {
    const results = await Sales.getSaleById(id);
    if (results)
      res.status(SUCCESS).json(results);
  } catch (err) {
    res.status(FAIL).json({ 'err': {
      'code': 'not_found',
      'message': 'Sale not found'
    } });
  }
};

const updateSale = async (req, res) => {
  const { id } = req.params;
  const itensSold = req.body;
  try {
    const results = await Sales.updateSale(id, itensSold);
    if (results)
      res.status(SUCCESS).json(results);
  } catch (err) {
    res.status(SYSTEM_FAIL).json({ message: err.message });
  }
};

const deleteSale = async (req, res) => {
  const { id } = req.params;
  try {
    const { deleteCount } = await Sales.deleteSale(id);
    if (deleteCount >= 1)
      res.status(SUCCESS).json(deleteCount);
  } catch (err) {
    console.log(err);
    res.status(SYSTEM_FAIL).send();
  }
};

module.exports = {
  addSale,
  getAllSales,
  getSaleById,
  updateSale,
  deleteSale,
};
