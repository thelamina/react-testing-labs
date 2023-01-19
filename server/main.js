const express = require('express');
const cors = require('cors');
const fs = require('fs');

const app = express();

// CORS for react app, assuming port 3000
app.use(
	cors({
		origin: 'http://localhost:3000',
		credentials: true,
	})
);

// use middleware to serve static images
app.use(express.static('public'));

// read data from options file
const iceCreamOptionsRaw = fs.readFileSync('./ice-cream-options.json', 'utf-8');
const iceCreamOptions = JSON.parse(iceCreamOptionsRaw);

app.get('/scoops', (req, res) => {
	res.json(iceCreamOptions.iceCreamFlavors);
});

app.get('/toppings', (req, res) => {
	res.json(iceCreamOptions.toppings);
});

app.post('/order', (req, res) => {
	const orderNumber = Math.floor(Math.random() * 10000000000);
	res.status(201).json({ orderNumber });
});

if (require.main === module) {
	app.listen(3030, () =>
		console.log('Ice cream server running on port 3030!')
	);
}

module.exports = app;
