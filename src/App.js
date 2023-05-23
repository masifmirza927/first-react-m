import './App.css';
import { useState } from "react"

import MyFirstComp from "./MyFirstComp"

function App() {

  const [fruits, setFruits] = useState(["apple", "mango", "cherry", "peach"]);


  return (
    <div className="App">
      <ul>
        {
          fruits.map( (item) => {
            return <li>{item}</li>
          })
        }
      </ul>

    </div>
  );

}

export default App;
