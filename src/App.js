import './App.css';
import { useState } from "react"

import MyFirstComp from "./MyFirstComp"

function App() {

  const [fruits, setFruits] = useState([]);
  const [inputText, setInputText] = useState("");

  const addItem = () => {
    const newArr = [...fruits, inputText];
    setFruits( newArr);
  }

  const inputUpdate = (event) => {
    const txt = event.target.value;
    setInputText(txt);
  }
  

  return (
    <div className="App">
      <input onChange={inputUpdate} type='text' />

      <button onClick={addItem}>Add</button>
      <ul>
        {
          fruits.map( (item, index) => {
            return <li key={index}>{item}</li>
          })
        }
      </ul>

    </div>
  );

}

export default App;
