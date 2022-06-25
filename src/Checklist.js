import CheckListItem from './CheckListItem';


export interface CheckListProps extends React.Component {
	items: CheckListItem[],
}

const CheckList: React.FunctionComponent<CheckListProps> = ({
	items

}) => {
	
	// const [state, setState]: CheckBoxState = useState<boolean[]>();
	// const [length, setLength]: number = useState<number>(); // to keep track of new item

	let startingStates = [];

	const initState = (index: number) => {

	};

	// add new item to list
	const addItemToList = () => {

	};

	const newItem = (): CheckListItem => {
		return (
			<div>
			<CheckListItem name={''} quantity={1} packed={false}/>
			<input type="button" onClick={addItemToList()}/> Add
	
			</div>
		);
	};


	return ( <div>
		'Rue'
		{ newItem() }
		</div>
	);
}


export default CheckList;