const productService = require('../service/productService');
const constants = require('../constants');

//POST a product logic
module.exports.createProduct = async (req, res) => {
	let response = {...constants.defaultServerResponse};
	try {
		const responseFromService = await productService.createProduct(req.body);
		response.status = 200;
		response.message = constants.productMassage.PRODUCT_CREATED;
		response.body = responseFromService;
	} catch (error) {
		console.log('Something went wrong: Controller: createProduct', error)
		response.message = error.message;
	}
	return res.status(response.status).send(response);
} 

// GET all product logic
module.exports.getAllProducts = async (skip = 0, limit = 10) => {
	let response = {...constants.defaultServerResponse};
	try {
		const responseFromService = await productService.getAllProducts(req.query);
		response.status = 200;
		response.message = constants.productMassage.PRODUCT_FETECHED;
		response.body = responseFromService;
	} catch (error) {
		console.log('Something went wrong: Controller: getAllProducts', error)
		response.message = error.message;
	}
	return res.status(response.status).send(response);
}