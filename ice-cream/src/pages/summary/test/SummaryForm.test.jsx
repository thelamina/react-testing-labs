import { fireEvent, render, screen } from '@testing-library/react';
import SummaryForm from '../SummaryForm';

describe('SummaryForm', () => {
	describe('Terms and Conditions', () => {
		it('should be unchecked by default', () => {
			render(<SummaryForm />);
			const checkbox = screen.getByRole('checkbox', {
				name: /Terms and Conditions/i,
			});
			expect(checkbox).not.toBeChecked();
		});

		it('should enable order button when checked and disable order button when unchecked', () => {
			render(<SummaryForm />);

			const button = screen.getByRole('button', {
				name: /Confirm order/i,
			});
			const checkbox = screen.getByRole('checkbox', {
				name: /Terms and Conditions/i,
			});

			expect(button).toBeDisabled();

			fireEvent.click(checkbox);
			expect(button).toBeEnabled();

			fireEvent.click(checkbox);
			expect(button).toBeDisabled();
		});
	});
});
