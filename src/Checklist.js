import CheckListItem from './CheckListItem';
import React, { useEffect, useState } from 'react';

export interface CheckListProps extends React.Component {
	items: CheckListItem[],
}

const CheckListoldData = [{
	name: 'Booo',
	packed: false,
	quantity: 1,
	isNew: true,
}];


const CheckList: React.FunctionComponent<CheckListProps> = ({

}) => {
	
	const [listState, setListState] = useState(CheckListoldData);

	let startingStates: CheckListItem[] = [];

	const newListItem = CheckListItem({
		name: 'new',
		isPacked: false,
		quantity: 1,
		isNew: true
	});


	// add new item to list
	// make sure all previous items are marked as not new
	// add the new Checklist item
	const addItemToList = () => {
		const curState = listState.filter((item,index) => {
				return {
					name: item.name,
					packed: item.packed,		
					quantity: item.quantity,
					isNew: false };
		});
	
		curState.push(newListItem);
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

{/*{listState.map((component, index) => (*/}
{/*	<React.Fragment key={index}>*/}
{/*		{component}*/}
{/*	</React.Fragment>*/}
export default CheckList;