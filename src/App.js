import './App.css';
import { useRef, useState } from "react"
import MyFirstComp from './MyFirstComp';
import Completed from './Completed';


function App() {

  const [fruits, setFruits] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);

  const [inputText, setInputText] = useState("");

  const inputField = useRef();



  const inputUpdate = (event) => {
    setInputText(event.target.value);
  }

  const addItem = () => {
    const newAr = [...fruits, inputText];
    setFruits(newAr);
    setInputText("");
    inputField.current.focus();
  }

// we are deleting item from fruits array
// params: item -> fruit
  const deleteItem = (index) => {
    const result = fruits.toSpliced(index, 1);
    setFruits(result);
  }

  const enterKeyPressed = (event) => {
    console.log(event)
    if(event.key == "Enter") {
      addItem();
    }
  }
// clear all in prgress tasks
  const clearAll = () => {
    setFruits([]);
  }

// handle checkbox
const handleCheckbox = (event, item, index) => {
    if(event.target.checked == true) {
      const newAr = [...completedTasks, item];
      setCompletedTasks(newAr);
      deleteItem(index);
    }
}  

  return (
    <div className="App">

      <input onChange={inputUpdate} type='text' onKeyUp={enterKeyPressed} value={inputText} ref={inputField}  />
      <button onClick={addItem}>Add</button>

      <ul>
        {
          fruits.map( (item, index) => {
            return <li key={index}> <input type='checkbox' onChange={ (event) => {handleCheckbox(event, item, index)} } />  {item} <button onClick={ () => { deleteItem(index) } } >X</button> </li>
          })
        }
      </ul>

      <button onClick={clearAll} >Clear All</button>


      <Completed completedTasks={completedTasks} />
    </div>
  );

}

export default App;
