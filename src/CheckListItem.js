import React, { useState } from 'react';


export interface CheckListItemProp extends React.Component {
	name: string,
	isPacked: boolean,
	quantity: number,
	isNew?: boolean,
}
const DEFAULT_QUANTITY = 1;

const CheckListItem: React.FunctionComponent<> = (props) => {
	console.log('props', props);
	const [name, setName] = useState(props.name);
	const [quantity, setQuantity] = useState(props.quantity);
	const [isPacked, setIsPacked] = useState(props.packed);
	const [isNew, setNew] = useState(props.isNew);

	// when user packs/checks an item
	const updatePackStatus = () => {
		if (isPacked) {
			setIsPacked(false);
		} else {
			setIsPacked(true);
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
			{ <input defaultValue={isPacked} type="checkbox" onClick={() =>updatePackStatus()}/> }
			<input type="text" defaultValue={name}/>
			<input type="number" defaultValue={quantity}/>
		</div>
	);
}

export default CheckListItem;