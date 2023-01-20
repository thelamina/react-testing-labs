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
});
