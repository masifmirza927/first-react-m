
import MySecondComp from "./MySecondComp"   

function MyFirstComp(props) {


    return (
        <div id="MyFirstComp">
            <h1>my first component {props.name} </h1>
            <MySecondComp />
        </div>
    )
}

export default MyFirstComp