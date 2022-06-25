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
	// const [checked, setChecked] = useState(boolean);


	// when user packs/checks an item


	return (
		<div>
			{!isNew && <input value={packed} disabled={packed} type="checkbox" /> }
			<input type="string" value={name}/>
			<input type="number" value={quantity}/>
		</div>
	);
}

export default CheckListItem;