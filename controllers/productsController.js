const Products = require('../models/productsModel');


const addProduct = async (req, res) => {
  const {name, quantity} = req.body;
	try {
		const results = await Products.addProduct(name, quantity);

		res.status(200).json(results);
	} catch (err) {
		console.log(err);
		res.status(500).json({ message: err.message });
	}
};

module.exports = {
  addProduct,
};
