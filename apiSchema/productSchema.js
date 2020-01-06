const Joi = require('@hapi/joi');

moduke.exports.createProductSchema = Joi.object().keys({
	name: Joi.string().required(),
	price: Joi.number().required(),
	brand: Joi.string().required()
});