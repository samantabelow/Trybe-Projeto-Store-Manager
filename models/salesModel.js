const connection = require('../config/conn');

const { ObjectId } = require('mongodb');

const checkForSaleId = async (id) =>
  connection()
    .then((db) => db.collection('sales').findOne(ObjectId(id)));

const addSale = async (itensSold) =>
  connection()
    .then((db) => db.collection('sales').insertOne({itensSold}));

const getAllSales = async () =>
  connection()
    .then((db) => db.collection('sales').find().toArray());

const getSaleById = async (id) =>
  connection()
    .then((db) => db.collection('sales').findOne(ObjectId(id)));

const updateSale = async (id, itensSold) => {
  await connection()
    .then((db) => db.collection('sales').updateOne(
      { _id: ObjectId(id)},
      {$set: {itensSold} }
    ));
  return connection()
    .then((db) => db.collection('sales').findOne(ObjectId(id)));
};

const deleteSale = async (id) => {
  connection()
    .then((db) => db.collection('sales').deleteOne(
      { _id: ObjectId(id)} ));
  return connection()
    .then((db) => db.collection('sales').find().toArray());
};

module.exports = {
  addSale,
  getAllSales,
  getSaleById,
  updateSale,
  deleteSale,
  checkForSaleId,
};
