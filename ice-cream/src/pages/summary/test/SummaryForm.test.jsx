import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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

		it('should enable order button when checked and disable order button when unchecked', async () => {
			const user = userEvent.setup();
			render(<SummaryForm />);

			const button = screen.getByRole('button', {
				name: /Confirm order/i,
			});
			const checkbox = screen.getByRole('checkbox', {
				name: /Terms and Conditions/i,
			});

			expect(button).toBeDisabled();

			await user.click(checkbox);
			expect(button).toBeEnabled();

			await user.click(checkbox);
			expect(button).toBeDisabled();
		});

		it('should popover on hover', async () => {
			const user = userEvent.setup();

			render(<SummaryForm />);
            
			const nullPopover = screen.queryByText(
				/no ice cream will actually be delivered/i
			);
			expect(nullPopover).not.toBeInTheDocument();

			const termsAndConditions =
				screen.getByText(/terms and conditions/i);
			await user.hover(termsAndConditions);
			const popover = screen.getByText(
				/no ice cream will actually be delivered/i
			);
			expect(popover).toBeInTheDocument();

			await user.unhover(termsAndConditions);
			expect(popover).not.toBeInTheDocument();
		});
	});
});
