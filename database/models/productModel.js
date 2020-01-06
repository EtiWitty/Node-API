const mongoose = require('mongoose');

const productSchema = new mongoose.Schema ({
	name: String,
	price: Number,
	brand: String
}, {
	timestamps: true
});

module.exports = mongoose.model('product', productSchema);