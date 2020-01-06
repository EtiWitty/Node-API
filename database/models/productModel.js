const mongoose = require('mongoose');

const productSchema = new mongoose.Schema ({
	name: String,
	price: Number,
	brand: String
}, {
	timestamps: true,
	toObject: {
		transform: (doc, ret, options) =>{
			ret.id = ret._id;
			delete ret._id;
			delete ret._v;
			return ret;
		}
	}
});

module.exports = mongoose.model('product', productSchema);