const connection = require('../config/conn');

const { ObjectId } = require('mongodb');

const getProductsList = async () => {
  await connection().then((db) => db.collection('products'));
};

const checkForProductName = async (name) => {
  return await getProductsList()
    .then((products) => products.findOne( {name} ));
};

const addProduct = async (name, quantity) => {
  return await connection()
    .then((db) => db.collection('products').insertOne({name, quantity}));
};

module.exports = {
  addProduct,
  checkForProductName,
};
