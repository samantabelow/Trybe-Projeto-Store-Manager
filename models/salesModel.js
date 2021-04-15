const connection = require('../config/conn');

const { ObjectId } = require('mongodb');

const addSale = async (itensSold) =>
  connection()
    .then((db) => db.collection('sales').insertOne({itensSold}));

const getAllSales = async () =>
  connection()
    .then((db) => db.collection('sales').find().toArray());

const getSaleById = async (id) =>
  connection()
    .then((db) => db.collection('sales').findOne(ObjectId(id)));

const updateSale = async (id, name, quantity) => {
  connection()
    .then((db) => db.collection('sales').updateOne(
      { _id: ObjectId(id)},
      {$set: {name, quantity} }
    ));
  return connection()
    .then((db) => db.collection('sales').find().toArray());
};

const deleteSale = async (id) =>
  connection()
    .then((db) => db.collection('sales').deleteOne(
      { _id: ObjectId(id)} ));

module.exports = {
  addSale,
  getAllSales,
  getSaleById,
  updateSale,
  deleteSale,
};
