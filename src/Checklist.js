import CheckListItem from './CheckListItem';
import React, { useEffect, useState } from 'react';

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
		name: 'new',
		quantity: 1,
		packed: false,
		isNew: true	
	};

	useEffect(() => {
		console.log(listState);
		startingStates = listState;
		items.forEach((item, index) => {
			startingStates.concat(item);
		});
		// add new input section
		startingStates.push(newListItem);
		setListState(startingStates);
		console.log('items', items);
	},
	[]
	);

	// add new item to list
	const addItemToList = () => {
		console.log('adding new item to list');
		const curState = listState;
		// curState.forEach((item,index) => {
		// 	if (index===(curState.length - 1)) {
		// 		const addingItem = {
		// 			name: item.name,		
		// 			quantity: item.quantity,
		// 			packed: false,
		// 			isNew: false	
		// 		};
		// 		return item = addingItem;
		// 		console.log(item, addingItem, 'itesmsms');
		// 	}
		// });
		const lastItem = curState.pop();
		lastItem.isNew = false;
console.log(lastItem);
		curState.push(lastItem);
		curState.push(newListItem);
						console.log('current state', curState);
		setListState([...listState, newListItem]);

		return (			
			<>
				<CheckListItem
				name={lastItem.name}
				quantity={lastItem.quantity}
				packed={lastItem.packed}
				isNew={lastItem.isNew}
				/>
			</>
		);
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
		console.log('listing items', listState);
		return (
			<div>
			{listState.map((item, i) => (				
				<CheckListItem
				name={item.name}
				quantity={item.quantity}
				packed={item.packed}
				isNew={item.isNew}
				/>
			))}
			<button onClick={ () => addItemToList() }> Add </button>
	
			</div>
		);
	};


	return ( <div>
		{ listItems() }
		</div>
	);
}


export default CheckList;