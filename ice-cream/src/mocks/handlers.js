import { rest } from 'msw';

export const handlers = [
	rest.get('http://localhost:3030/scoops', (req, res, ctx) => {
		return res(
			ctx.json([
				{
					name: 'Chocolate',
					image: '/images/chocolate.png',
				},
				{
					name: 'Vanilla',
					image: '/images/vanilla.png',
				},
			])
		);
	}),
	rest.get('http://localhost:3030/toppings', (req, res, ctx) => {
		return res(
			ctx.json([
				{
					name: 'Cherries',
					image: '/images/cherries.png',
				},
				{
					name: 'M&Ms',
					image: '/images/m-and-ms.png',
				},
				{
					name: 'Hot Fudge',
					image: '/images/hot-fudge.png',
				},
			])
		);
	}),
];
