import React, { useState } from 'react';


export interface CheckListItemProp extends React.Component {
	name: string,
	isPacked: boolean,
	quantity: number,
	isNew?: boolean,
}
const DEFAULT_QUANTITY = 1;

const CheckListItem: React.FunctionComponent<CheckListItemProp> = ({
																	  displayName,
																	  packed,
																	  quantityOfItem,
																	  newItem
																  }) => {
	console.log(displayName, quantityOfItem, packed, newItem);
	const [name, setName] = useState('displayName');
	const [quantity, setQuantity] = useState(DEFAULT_QUANTITY);
	const [isPacked, setIsPacked] = useState(false);
	const [isNew, setNew] = useState(true);

	// when user packs/checks an item
	const updatePackStatus = (value) => {
		console.log('update pack status ', value);
		if (value) {
			setIsPacked(true);
		} else {
			setIsPacked(false);
		}
	};

	const updateName = (name: string = '') => {
		console.log('is new name: ', name);
		setName(name);
	};

	const updateQuantity = (quantity: number = DEFAULT_QUANTITY) => {
		console.log('quantity status update: ', quantity);
		setQuantity(quantity);
	};

	return (
		<div>
			{ <input defaultValue={isPacked} type="checkbox" /> }
			<input type="text" defaultValue={name} />
			<input type="number" defaultValue={quantity}/>
		</div>
	);
}

export default CheckListItem;