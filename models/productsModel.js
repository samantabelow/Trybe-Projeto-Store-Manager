const connection = require('../config/conn');

const { ObjectId } = require('mongodb');

const addProduct = async (name, quantity) => {
	const product = await connection()
        .then((db) => db.collection("products").insertOne({name, quantity}));
  return { _id: product.insertedId, name, quantity };
}

// const getById = async (id) => {
// 	if (!ObjectId.isValid(id)) return null;

// 	return connection().then((db) =>
// 		db.collection("songs").findOne(ObjectId(id))
// 	);
// };

// const createSong = async (name, album) => {
// 	const song = await connection().then((db) =>
// 		db.collection("songs").insertOne({ name, album })
// 	);

// 	return { _id: song.insertedId, name, album };
// }

module.exports = {
  addProduct,
};
