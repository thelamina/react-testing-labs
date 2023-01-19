import { fireEvent, render, screen } from '@testing-library/react';
import App, { replaceCamelCaseWithSpaces } from './App';

describe('<App/>', () => {
	it('button has correct initial color and text', () => {
		render(<App />);

		const colorButton = screen.getByRole('button', {
			name: /Change to blue/i,
		});

		expect(colorButton).toHaveStyle({
			'background-color': 'MediumVioletRed',
		});
	});

	test('button has correct initial color and updates when clicked', () => {
		render(<App />);

		const colorButton = screen.getByRole('button', {
			name: /Change to blue/i,
		});

		expect(colorButton).toHaveStyle({
			'background-color': 'MediumVioletRed',
		});

		fireEvent.click(colorButton);

		expect(colorButton).toHaveStyle({
			'background-color': 'MidnightBlue',
		});

		expect(colorButton).toHaveTextContent('Change to red');
	});

	it('should have initial conditions', () => {
		render(<App />);

		const colorButton = screen.getByRole('button', {
			name: /change to blue/i,
		});

		const checkBox = screen.getByRole('checkbox', {});

		expect(colorButton).toBeEnabled();

		expect(checkBox).not.toBeChecked();
	});

	it('should disable button on first click and enable on second click', () => {
		render(<App />);

		const colorButton = screen.getByRole('button', {
			name: /change to blue/i,
		});

		const checkbox = screen.getByRole('checkbox', {
			name: 'Disable button',
		});

		fireEvent.click(checkbox);
		expect(colorButton).toBeDisabled();

		fireEvent.click(checkbox);
		expect(colorButton).toBeEnabled();
	});

	it('button should have gray color when disabled', () => {
		render(<App />);

		const colorButton = screen.getByRole('button', {
			name: /change to blue/i,
		});

		const checkbox = screen.getByRole('checkbox', {
			name: 'Disable button',
		});

		fireEvent.click(checkbox);
		expect(colorButton).toHaveStyle({
			'background-color': 'gray',
		});

		fireEvent.click(checkbox);
		expect(colorButton).toHaveStyle({
			'background-color': 'MediumVioletRed',
		});

		fireEvent.click(colorButton);
		expect(colorButton).toHaveStyle({
			'background-color': 'MidnightBlue',
		});

		fireEvent.click(checkbox);
		expect(colorButton).toHaveStyle({
			'background-color': 'gray',
		});
	});
});

describe('spaces before camel-case capital letters', () => {
	it('should works for no inner capital letters', () => {
		expect(replaceCamelCaseWithSpaces('Red')).toBe('Red');
	});
	it('should works for one inner capital letter', () => {
		expect(replaceCamelCaseWithSpaces('MidnightBlue')).toBe(
			'Midnight Blue'
		);
	});
	it('should works for multiple inner capital letters', () => {
		expect(replaceCamelCaseWithSpaces('MediumVioletRed')).toBe(
			'Medium Violet Red'
		);
	});
});
