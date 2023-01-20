import { render, screen } from '@testing-library/react';
import Options from '../Options';

describe('Options', () => {
	it('should display image for each scoop option from the server', async () => {
		render(<Options optionType='scoops' />);

		const scoopImages = await screen.findAllByRole('img', {
			name: /scoop$/i,
		});
		expect(scoopImages).toHaveLength(2);

		const getAlt = scoopImages.map((element) => element.alt);
		expect(getAlt).toEqual(['Chocolate scoop', 'Vanilla scoop']);
	});

	it('should display image for each topping option from the server', async () => {
		render(<Options optionType='toppings' />);

		const toppingImages = await screen.findAllByRole('img', {
			name: /topping$/i,
		});
		expect(toppingImages).toHaveLength(3);

		const imageTitles = toppingImages.map((element) => element.alt);
		expect(imageTitles).toEqual([
			'Cherries topping',
			'M&Ms topping',
			'Hot Fudge topping',
		]);
	});
});
