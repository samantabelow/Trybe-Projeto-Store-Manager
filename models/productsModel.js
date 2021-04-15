const connection = require('../config/conn');

const { ObjectId } = require('mongodb');

const getProductsList = async () => connection().then((db) => db.collection('products'));

const checkForProductName = async (name) => getProductsList()
  .then((products) => products.findOne( {name} ));

const checkForProductId = async (id) => getProductsList()
  .then((products) => products.findOne( {id} ));

const addProduct = async (name, quantity) =>
  connection()
    .then((db) => db.collection('products').insertOne({name, quantity}));

const getAllProducts = async (name, quantity) =>
  connection()
    .then((db) => db.collection('products').find().toArray());

const getProductById = async (id) =>
  connection()
    .then((db) => db.collection('products').findOne(ObjectId(id)));

const updateProduct = async (id, name, quantity) => {
  connection()
    .then((db) => db.collection('products').updateOne(
      { _id: ObjectId(id)},
      {$set: {name, quantity} }
    ));
  return connection()
    .then((db) => db.collection('products').find().toArray());
};

const deleteProduct = async (id) =>
  connection()
    .then((db) => db.collection('products').deleteOne(
      { _id: ObjectId(id)} ));

module.exports = {
  addProduct,
  checkForProductName,
  checkForProductId,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
};
