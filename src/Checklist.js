import CheckListItem from './CheckListItem';
import React, { useState } from 'react';

export interface CheckListProps extends React.Component {
	items: CheckListItem[],
}

const CheckListFakeData = [{
	name: 'socks',
	packed: true,
	quantity: 9,
	isNew: false,
},
{
	name: 'pants',
	packed: false,
	quantity: 4,
	isNew: false,
}
];

const CheckList: React.FunctionComponent<CheckListProps> = ({
	items

}) => {
	
	const [listState, setListState] = useState(CheckListFakeData);

	let startingStates: CheckListItem[] = [];

	const newListItem = {
		name: 'Booo',
		quantity: 1,
		packed: false,
		isNew: true	
	};

	const initState = (index: number) => {
		console.log(listState);
		startingStates = listState;
		items.forEach((item, index) => {
			startingStates.concat(item);
		});
		// add new input section
		startingStates.push(newListItem);
		// this.setState(startingStates);
		// setListState(startingStates);
		console.log('items', items);
	};

	// add new item to list
	const addItemToList = () => {
		
		console.log('adding new item to list');
	};

	const displayListItem = (item: CheckListItem) => {
		return (			
			<>
				<CheckListItem
				name={item.name}
				quantity={item.quantity}
				packed={item.packed}
				isNew={item.isNew}
				/>
			</>
		);
	};

	const listItems = (): CheckListItem => {
		return (
			<div>
			{ listState.map(displayListItem) }
			<input type="button" onClick={addItemToList()} value='Add'/>
	
			</div>
		);
	};


	return ( <div>
		{ initState() }
		{ listItems() }
		</div>
	);
}


export default CheckList;