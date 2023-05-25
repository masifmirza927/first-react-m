import './App.css';
import { useRef, useState } from "react"


function App() {

  const [fruits, setFruits] = useState([]);
  const [inputText, setInputText] = useState("");

  const inputField = useRef();



  const inputUpdate = (event) => {
    setInputText(event.target.value);
  }

  const updateArr = () => {
    const newAr = [...fruits, inputText];
    setFruits(newAr);
    setInputText("");
    inputField.current.focus();
  }

// we are deleting item from fruits array
// params: item -> fruit
  const deleteItem = (item) => {
    const result = fruits.filter( (elem) => {
      return elem != item;
    })
    setFruits(result);
  }

  const enterKeyPressed = (event) => {
    console.log(event)
    if(event.key == "Enter") {
      updateArr();
    }
  }

  return (
    <div className="App">
      <input onChange={inputUpdate} type='text' onKeyUp={enterKeyPressed} value={inputText} ref={inputField}  />
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
