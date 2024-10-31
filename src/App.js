import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let [elements, setElement] = useState(['Sample Text 1','Sample Text 2','Sample Text 3']);


  let [newValue , setNewValue] = useState('');


  let [filterer , setFilterer] = useState('');


  const theGreatFilter = elements.filter((entry2) => 
    entry2.toLowerCase().includes(filterer.toLowerCase())
  )

  const elementList = theGreatFilter.map((entry) => (
    <li>{entry} <button type="button" onClick={() => eraseEntry(entry)}>trash</button></li>
  ));


  const inputValue = (event) => {
    setNewValue(event.target.value);
  };

  const filterValue = (event) => {
    setFilterer(event.target.value);
  };

  const addValueToList = () => {
    if (!elements.includes(newValue)){
    setElement([ ...elements, newValue]);
    }
    setNewValue('');
  };

  const eraseEntry = (entry2) => {
    const Entries = elements.filter((entry3) => entry3 !== entry2);
    setElement(Entries);
  }

  return (
    <div className="App">
      <ul>
        {elementList}
      </ul>
      <div class="Inputs">
      Add Element: <input type="text" value={newValue} onChange={inputValue}/>
      <button type="button" onClick={addValueToList}>Add</button>
      <br></br>
      Filter: <input type="text" value={filterer} onChange={filterValue}/>
      </div>
    </div>
  );
}


export default App;
