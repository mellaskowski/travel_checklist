import React, { useState } from 'react';


export interface CheckListItemProp extends React.Component {
	name: string,
	isPacked: boolean,
	quantity: number,
	isNew?: boolean,
}
const DEFAULT_QUANTITY = 1;


class CheckListItem extends React.Component<CheckListItemProp> {

	constructor(props: CheckListItemProp) {
	    super(props);
	    this.state = props;
	    console.log('props', props);
     }
    // const isNew = false;

	// const [checked, setChecked] = useState(isNew);
	// const [displayName, setName] = useState(name);

	// when user packs/checks an item
	isPacked(value) {
		if (value) {
			return this;
			//un pack item
		// 	this.setState({isPacked: false});
		// } else {
		// 	this.setState({isPacked: true});
		}
	};

	nameChange(name: string) {
		console.log('is new name: name');
		this.setName(name);
	};

	render(){
		return (
			<div>
				{true && <input defaultValue={this.state.isPacked} type="checkbox" onClick={(value) => this.isPacked(value)}/> }
				<input type="text" defaultValue={''} onSubmit={(value) => this.nameChange(value)}/>
				<input type="number" defaultValue={DEFAULT_QUANTITY}/>
			</div>
		);
	}
}

export default CheckListItem;