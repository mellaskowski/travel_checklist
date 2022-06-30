import React, { useState } from 'react';


export interface CheckListItemProp extends React.Component {
	name: string,
	isPacked: boolean,
	quantity: number,
	isNew?: boolean,
}
const DEFAULT_QUANTITY = 1;

const CheckListItem: React.FunctionComponent<CheckListItemProp> = (props) => {

	props = {
		name: props.name || '',
		isPacked: props.isPacked,
		quantity: props.quantity || DEFAULT_QUANTITY,
		isNew: props.isNew
	};

	const [name, setName] = useState(props.name);
	const [quantity, setQuantity] = useState(props.quantity);
	const [isPacked, setIsPacked] = useState(props.packed);
	const [isNew, setNew] = useState(props.isNew);

	// when user packs/checks an item
	const updatePackStatus = (event) => {
		if (isPacked) {
			setIsPacked(false);
		} else {
			setIsPacked(true);
		}
		console.log('packed?', isPacked, event.target.value);
	};

	const updateName = (event) => {
		console.log('is new name: ', event.target.value);
		setName(event.target.value);
	};

	const updateQuantity = (event) => {
		console.log('quantity status update: ', event.target.value);
		setQuantity( event.target.value);
	};

	return (
		<div>
			{ <input value={isPacked} type="checkbox" onChange={updatePackStatus}/> }
			<input type="text" value={name} onChange={(x) => updateName(x)}/>
			<input type="number" value={quantity} onChange={updateQuantity}/>
		</div>
	);
}

export default CheckListItem;