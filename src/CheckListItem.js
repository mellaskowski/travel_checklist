

interface CheckListItemProp extends React.Component {
	packed: boolean,
	quantity: number,
}

class CheckListItem extends CheckListItemProp {
	constructor(props) {
		super(props);
	}
}