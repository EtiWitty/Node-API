const Product = require('../database/models/productModel');
const { formatMongoData} = require('../helper/dbHelper');

module.exports.createProduct = async (serviceData) => {
	try {
		let product = new Product({...serviceData});
		let result = await product.save();
		return formatMongoData(result);
	} catch (error) {
		console.log('Something went wrong: Service: createProduct', error);
		throw new Error (error);
	}
}

module.exports.getAllProducts = async (serviceData) => {
	try {
		let products = await Product.find({}).skip(parseInt(skip)).limit(parseInt(limit));
		return formatMongoData(products);
	} catch (error) {
		console.log('Something went wrong: Service: getAllProducts', error);
		throw new Error (error);
	}
}