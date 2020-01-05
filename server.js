const express = require('express');
const dotEnv = require('dotenv');

dotEnv.config();

const app = express();

const myMiddleware = (req, res, next) => {
	console.log("Hey What's up?");
	next();
};

// app.use(myMiddleware);

app.get('/', myMiddleware, (req, res, next) => {
	res.send('Hello from Node API server');
});

const PORT = parseInt(process.env.PORT, 10) || 3000;

app.listen (PORT, () => {
	console.log(`Server is listening on port ${PORT}`);
});
