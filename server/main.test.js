const request = require('supertest');
const app = require('./main.js');

describe('Main.js', () => {
	beforeEach(async () => {
		server = await app.listen(4000);
		global.agent = request.agent(server);
	});

	afterEach(async () => {
		await server.close();
	});

	describe('ice cream flavors', () => {
		it('should respond with status 200 on the GET method', () => {
			return request(server)
				.get('/scoops')
				.then((response) => {
					expect(response.statusCode).toBe(200);
				});
		});
		it('should have expected number of ice cream flavors, and each has a name and image', () => {
			return request(server)
				.get('/scoops')
				.then((response) => {
					expect(response.body.length).toBe(4);
					response.body.forEach((flavor) => {
						expect(typeof flavor.name).toBe('string');
						expect(typeof flavor.image).toBe('string');
					});
				});
		});
	});

	describe('toppings', () => {
		it('should respond with status 200 on the GET method', () => {
			return request(server)
				.get('/toppings')
				.then((response) => {
					expect(response.statusCode).toBe(200);
				});
		});
		it('should expected number of ice cream toppings, and each has a name and image', () => {
			return request(server)
				.get('/toppings')
				.then((response) => {
					expect(response.body.length).toBe(6);
					response.body.forEach((topping) => {
						expect(typeof topping.name).toBe('string');
						expect(typeof topping.image).toBe('string');
					});
				});
		});
	});

	describe('order number generator', () => {
		it('should return 201 for POST', () => {
			return request(app)
				.post('/order')
				.then((response) => {
					expect(response.statusCode).toBe(201);
				});
		});
		it('should return random "order number" for POST', () => {
			return request(app)
				.post('/order')
				.then((response) => {
					const orderNumber = response.body.orderNumber;
					expect(orderNumber).toBeLessThan(10000000000);
					expect(orderNumber).toBeGreaterThan(0);
				});
		});
	});
});
