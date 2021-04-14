const Products = require('../models/productsModel');
const connection = require('../config/conn');

const productsList = async () => await connection().then((db) => db.collection("products"));

const addProduct = async (req, res, next) => {
  const {name, quantity} = req.body;
  if (name.length < 5) next({ status: 422, message: '"name" length must be at least 5 characters long'});
  if (productsList.find((product) => product.name === name)) next({ status: 422, message: 'Product already exists'});
  if (quantity < 1) next({ status: 422, message: '"quantity" must be larger than or equal to 1'});
  if (typeof quantity !== 'number') next({ status: 422, message: '"quantity" must be a number'});
	try {
		const results = await Products.addProduct(name, quantity);

		res.status(201).json(results);
	} catch (err) {
		console.log(err);
		res.status(500).json({ message: err.message });
	}
};

module.exports = {
  addProduct,
};
