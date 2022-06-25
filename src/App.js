import './App.css';
import CheckList from './Checklist.js';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>
          My Travel Checklist
        </h2>

        <div>
          <CheckList items={[]} />
      </div>
      </header>
    </div>
  );
}

export default App;
