const connection = require('../config/conn');

const { ObjectId } = require('mongodb');

// const getAll = async () =>
// 	connection()
//         .then((db) => db.collection("songs").find().toArray());

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
  // getAll,
  // getById,
  // createSong
};
