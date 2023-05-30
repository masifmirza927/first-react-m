

function Completed(props) {
  return (
    <div id="Completed">
      <div className='container'>
      <h3>Completed Tasks</h3>
        <div className="listBox">
          <ul>
            {
              props.completedTasks.map((item, index) => {
                return (<li key={index}> <input className='checked' type='checkbox' />  <span>{item}</span>
                  <button className='delIcon' >
                    {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{ "fill": "rgb(204 42 42)" }}><path d="M6 7H5v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7H6zm10.618-3L15 2H9L7.382 4H3v2h18V4z"></path></svg> */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{ "fill": "rgba(0, 0, 0, 1);" }}><path d="M11 2h2v7h-2zm0 13h2v7h-2zm4-4h7v2h-7zM2 11h7v2H2z"></path></svg>
                  </button>
                </li>)
              })
            }
          </ul>
        </div>

      </div>
    </div>
  )
}

export default Completed;