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
    if (event.key == "Enter") {
      addItem();
    }
  }
  // clear all in prgress tasks
  const clearAll = () => {
    setFruits([]);
  }

  // handle checkbox
  const handleCheckbox = (event, item, index) => {
    if (event.target.checked == true) {
      const newAr = [...completedTasks, item];
      setCompletedTasks(newAr);
      deleteItem(index);
    }
  }

  return (
    <div className="App">
      <div className='container'>
      
        <div className='inputBox'>
          <input className='inputTxt' onChange={inputUpdate} type='text' onKeyUp={enterKeyPressed} value={inputText} ref={inputField} />
          <button className='btn' onClick={addItem}>Add</button>
        </div>
        <h1>In Progress Tasks</h1>
        <div className="listBox">
          <ul>
            {
              fruits.map((item, index) => {
                return (<li key={index}> <input className='checked' type='checkbox'  onChange={(event) => { handleCheckbox(event, item, index) }} />  <span>{item}</span>
                  <button className='delIcon' onClick={() => { deleteItem(index) }} >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{"fill": "rgb(204 42 42)"}}><path d="M6 7H5v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7H6zm10.618-3L15 2H9L7.382 4H3v2h18V4z"></path></svg>
                  </button>
                </li>)
              })
            }
          </ul>
        </div>

       {
        (fruits.length > 0) ? <button className='btn clearAllBtn' onClick={clearAll} >Clear All</button> : null
       }       
       


        
      </div>  {/* container */}
     
      <Completed completedTasks={completedTasks} />

    </div>
  );

}

export default App;
