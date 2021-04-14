const connection = require('../config/conn');

const { ObjectId } = require('mongodb');

const getProductsList = async () => connection().then((db) => db.collection('products'));

const checkForProductName = async (name) => getProductsList()
  .then((products) => products.findOne( {name} ));

const addProduct = async (name, quantity) => connection()
  .then((db) => db.collection('products').insertOne({name, quantity}));

module.exports = {
  addProduct,
  checkForProductName,
};
