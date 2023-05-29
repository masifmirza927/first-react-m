
import MySecondComp from "./MySecondComp"   

function MyFirstComp(props) {


    return (
        <div id="MyFirstComp">
            <h1>MyFirst Component</h1>
             <ul>
        {
          props.fruits.map( (item, index) => {
            return <li key={index}>{item} <button onClick={ () => { props.deleteItem(item) } } >X</button> </li>
          })
        }

      </ul>
        </div>
    )
}

export default MyFirstComp