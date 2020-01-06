const mongoose = require('mongoose');

module.exports = async () => {
	//wtite the logic for connectivity
	try {
		await mongoose.connect(process.env.DB_URL, {useNewUrlParser: true});
		console.log("Database connected!")
	} catch (error) {
		console.log("Database connectivity error", error);
		throw new Error(error);
	}
};