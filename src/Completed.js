

function Completed(props) {
    return(
        <div id="Completed">
            <h1>Completed</h1>

            <ul>
        {
          props.completedTasks.map( (item, index) => {
            return <li key={index}>{item} <button >X</button> </li>
          })
        }
      </ul>

        </div>
    )
}

export default Completed;