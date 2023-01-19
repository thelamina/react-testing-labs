import { useState } from 'react';
import './App.css';

export function replaceCamelCaseWithSpaces(color) {
	return color.replace(/\B([A-Z])\B/g, ' $1');
}

function App() {
	const [isActive, setIsActive] = useState(false);
	const [isDisabled, setIsDisabled] = useState(false);

	return (
		<div className='App'>
			<button
				disabled={isDisabled}
				style={{
					color: '#fff',
					backgroundColor: isDisabled
						? 'gray'
						: isActive
						? 'MidnightBlue'
						: 'MediumVioletRed',
				}}
				onClick={() => setIsActive(!isActive)}
			>
				{`Change to ${isActive ? 'red' : 'blue'}`}
			</button>
			<br />
			<input
				id='disableButton'
				type='checkbox'
				aria-checked={isDisabled}
				checked={isDisabled}
				onChange={(e) => setIsDisabled(e.target.checked)}
			/>
			<label htmlFor='disableButton'>Disable button</label>
		</div>
	);
}

export default App;
