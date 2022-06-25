

export interface CheckListItemProp extends React.Component {
	name: string,
	packed: boolean,
	quantity: number,
}

const CheckListItem: React.FunctionComponent<CheckListItemProp> =({
	name,
	packed,
	quantity,
}) => {

	// const [checked, setChecked] = useState(boolean);


	// when user adds an item to the list
	// const addItem = () = {

	// };



	return (
		<div>
			<input value={packed} disabled={packed} type="checkbox" />
			<input type="string" default={name}/>
			<input type="number" default={quantity}/>
		</div>
	);
}

export default CheckListItem;