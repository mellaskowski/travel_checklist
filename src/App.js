import './App.css';
import CheckList from './Checklist.js';
import CheckListItem from './CheckListItem';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>
          My Travel Checklist
        </h2>

        <div>
          <CheckList items={[]} />
          <CheckListItem quantity={9} name={'potato'} packed={false}/>
      </div>
      </header>
    </div>
  );
}

export default App;
