const express = require('express');
const dotEnv = require('dotenv');
const cors = require('cors');
const dbConnection = require('./database/connection');

dotEnv.config();

const app = express();

// DB connectivity
dbConnection();

// cors middleware
app.use(cors());

//~~~~~~~~~~~~~~~~ Application-level middleware ~~~~~~~~~~~~~~~~~~
// const myMiddleware = (req, res, next) => {
// 	console.log("Hey What's up?");
// 	next();
// };

// app.use(myMiddleware);
//~~~~~~~~~~~~~~~~ Built-in middleware ~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// request payload middleware

app.use(express.json());

app.use(express.urlencoded({extended:true}));

app.use('/api/v1/product', require('./routes/productRoutes'));

app.get('/',(req, res, next) => {
	res.send('Hello from Node API server');
});

const PORT = parseInt(process.env.PORT, 10) || 3000;

app.listen (PORT, () => {
	console.log(`Server is listening on port ${PORT}`);
});

// error-handler middleware
app.use((err, req, res, next) => {
	console.error(err.stack);
	res.status(500).send({
		status: 500,
		message:err.message,
		body: {}
	});
});