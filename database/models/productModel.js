const mongoose = require('mongoose');

const productSchema = new mongoose.schema ({
	name: String,
	price: Number,
	brand: String
},{
	timestamps = true
	}
);

module.exports = mongoose.model('product', productSchema);