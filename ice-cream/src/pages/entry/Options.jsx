import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import ScoopOption from './ScoopOption';
import ToppingOption from './ToppingOption';

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

	const ItemComponent = optionType === 'scoops' ? ScoopOption : ToppingOption;

	const optionItems = items.map((item) => (
		<ItemComponent key={item.name} {...item} />
	));

	return <Row>{optionItems}</Row>;
};

export default Options;
