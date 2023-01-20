import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import ScoopOption from './ScoopOption';

const Options = ({ optionType }) => {
	const [items, setItems] = useState([]);

	useEffect(() => {
		axios
			.get(`http://localhost:3030/${optionType}`)
			.then(({ data }) => setItems(data))
			.catch((err) => {
				// TODO: catch error
			});
	}, [optionType]);

	// TODO: replace `null` with ToppingOptions when available
	const ItemComponent = optionType === 'scoops' ? ScoopOption : null;

	const optionItems = items.map((item) => (
		<ItemComponent key={item.name} {...item} />
	));

	return <Row>{optionItems}</Row>;
};

export default Options;
