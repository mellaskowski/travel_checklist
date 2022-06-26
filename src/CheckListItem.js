import React, { useState } from 'react';


export interface CheckListItemProp extends React.Component {
	name: string,
	packed: boolean,
	quantity: number,
	isNew?: boolean,
}

const CheckListItem: React.FunctionComponent<CheckListItemProp> =({
	name,
	packed,
	quantity,
	isNew
}) => {

	isNew = isNew || false;
	const [checked, setChecked] = useState(isNew);
	const [displayName, setName] = useState(name);

	// when user packs/checks an item
	const checkItem = () => {
		if (checked) {
			//un pack item
			setChecked(false);
		} else {
			setChecked(true);
		}
	};

	const nameChange = () => {

	}


	return (
		<div>
			{!isNew && <input defaultValue={checked} type="checkbox" /> }
			<input type="text" defaultValue={displayName}/>
			<input type="number" defaultValue={quantity}/>
		</div>
	);
}

export default CheckListItem;