import './App.css';
import { useState } from "react"


function App() {

  const [fruits, setFruits] = useState([]);
  const [inputText, setInputText] = useState("");

  const inputUpdate = (event) => {
    setInputText(event.target.value);
  }

  const updateArr = () => {
    
    const newAr = [...fruits, inputText];
    setFruits(newAr);
    setInputText("");
  }

  const deleteItem = (item) => {
    
    const result = fruits.filter( (elem) => {
      return elem != item;
    })

    setFruits(result);

  }


  return (
    <div className="App">
      <input onChange={inputUpdate} type='text' value={inputText} />

      <button onClick={updateArr}>Add</button>

      <ul>
        {
          fruits.map( (item, index) => {
            return <li key={index}>{item} <button onClick={ () => { deleteItem(item) } } >X</button> </li>
          })
        }
      </ul>

    </div>
  );

}

export default App;
