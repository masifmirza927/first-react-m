import './App.css';
import { useRef, useState } from "react"
import Completed from './Completed';
import Confirm from './Confirm';


function App() {

  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [inputText, setInputText] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const inputField = useRef();
  const [selectedItem, setSelectedItem] = useState({});



  const inputUpdate = (event) => {
    setInputText(event.target.value);
  }

  const addItem = () => {
    const newAr = [...tasks, inputText];
    setTasks(newAr);
    setInputText("");
    inputField.current.focus();
  }





  // we are deleting item from fruits array
  // params: item -> fruit
  const deleteItem = (index, taskType) => {
    if(index == undefined && taskType == undefined) {
      index = selectedItem.index;
      taskType = selectedItem.taskType;
      setIsOpen(false);
    }

    if(taskType == "inprogress") {
      const result = tasks.toSpliced(index, 1);
      setTasks(result);
    }else if(taskType == "completed") {
      const result = completedTasks.toSpliced(index, 1);
      setCompletedTasks(result);
    }
  }

  const enterKeyPressed = (event) => {
    if (event.key == "Enter") {
      addItem();
    }
  }
  // clear all in prgress tasks
  const clearAll = () => {
    setTasks([]);
  }

  // handle checkbox
  const handleCheckbox = (event, item, index) => {
    if (event.target.checked == true) {
      const newAr = [...completedTasks, item];
      setCompletedTasks(newAr);
      deleteItem(index, "inprogress");
    } else {
      const newAr = [...tasks, item];
      setTasks(newAr);
      deleteItem(index, "completed");
    }
  }


  // open confirmation modal
  const confirm = (index, taskType) => {
    setIsOpen(true);
    setSelectedItem({
      index: index,
      taskType: taskType
    });

  }
  const cancelConfirm = () => {
    setIsOpen(false);
    setSelectedItem({});
  }

  console.log(selectedItem);

  return (
    <div className="App">
      <div className='container'>

        <div className='inputBox'>
          <input className='inputTxt' onChange={inputUpdate} type='text' onKeyUp={enterKeyPressed} value={inputText} ref={inputField} />
          <button className='btn' onClick={addItem}>Add</button>
        </div>
        <h3>In Progress Tasks</h3>
        <div className="listBox">
          <ul>
            {
              tasks.map((item, index) => {
                return (<li key={index}> <input className='checked' type='checkbox' onChange={(event) => { handleCheckbox(event, item, index) }} />  <span>{item}</span>
                  <button className='delIcon' onClick={() => { confirm(index, "inprogress") }} >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{ "fill": "rgb(204 42 42)" }}><path d="M15 2.013H9V9H2v6h7v6.987h6V15h7V9h-7z"></path></svg>
                  </button>
                </li>)
              })
            }
          </ul>
        </div>

        {
          (tasks.length > 0) ? <button className='btn clearAllBtn' onClick={clearAll} >Clear All</button> : null
        }
      </div>  {/* container */}

      <Completed completedTasks={completedTasks} />

      {
        (isOpen == true) ? <Confirm cancelConfirm={cancelConfirm} deleteItem={deleteItem}  /> : null
      }


    </div>
  );

}

export default App;
