import CheckListItem from './CheckListItem';
import React, { useEffect, useState } from 'react';

export interface CheckListProps extends React.Component {
	items: CheckListItem[],
}

const CheckListStartData = [{
	name: '',
	packed: false,
	quantity: 1,
	isNew: true,
}
];

const CheckList: React.FunctionComponent<CheckListProps> = ({

}) => {
	
	const [listState, setListState] = useState(CheckListStartData);

	let startingStates: CheckListItem[] = [];

	const newListItem = {
		name: 'new',
		packed: false,
		quantity: 1,
		isNew: true	
	};

	useEffect(() => {
		startingStates = listState;
		// items.forEach((item, index) => {
		// 	startingStates.concat(item);
		// });
		setListState(startingStates);
		console.log('startingStates', startingStates);
	},
	[]
	);

	// add new item to list
	const addItemToList = () => {
		console.log('adding new item to list');
		let lastItem = {};
		const curState = listState.filter((item,index) => {
			if (index===(listState.length - 1)) {
				lastItem = {
					name: item.name,		
					packed: false,
					quantity: item.quantity,
					isNew: false	
				};
				return false;
			}  else {
				return {
					name: item.name,
					packed: item.packed,		
					quantity: item.quantity,
					isNew: false	}
			}
		});
	
		curState.push(lastItem);
		curState.push(newListItem);
						console.log('current state', curState);
		setListState([...listState, newListItem]);
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


	console.log('pre return', listState.map.length);
	return ( <div>
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
}


export default CheckList;