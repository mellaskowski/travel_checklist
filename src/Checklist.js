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
}];

const CheckList: React.FunctionComponent<CheckListProps> = ({

}) => {
	
	const [listState, setListState] = useState(CheckListStartData);

	let startingStates: CheckListItem[] = [];

	/// could either only update the latest response or 
	/// 

	const newListItem = CheckListItem({
		name: 'new',
		packed: false,
		quantity: 1,
		isNew: true	
	});

	// useEffect(() => {
	// 	startingStates = listState;
	// 	setListState(startingStates);
	// 	console.log('startingStates', startingStates);
	// },
	// []
	// );

	// add new item to list
	const addItemToList = () => {
		console.log('adding new item to list');
		let lastItem = {};
		console.log('cur list state', listState);
		const curState = listState.filter((item,index) => {
			if (index===(listState.length - 1)) {
				// lastItem = new CheckListItem({
				// 	name: item.name,		
				// 	packed: item.packed,
				// 	quantity: item.quantity,
				// 	isNew: false	
				// });
				console.log(lastItem, 'last item');
				return false;
			}  else {
				// console.log('temp', temp);

				return {
					name: item.name,
					packed: item.packed,		
					quantity: item.quantity,
					isNew: false }
			}
		});
	
		curState.push(lastItem);
		curState.push(newListItem);
						console.log('current state', curState);
		setListState(curState);
	};

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