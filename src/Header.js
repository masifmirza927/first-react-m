
import MyImg from './images/img.jpg'
import SVG from './images/undraw.svg'

import Navigation from "./Navigation";

function Header(props) {

    return(
        <div>
            <img className='myimg' src={MyImg} />


            <Navigation />

<img className='svg' src={SVG}  />

            <div>
                
            </div>
        </div>
    );
}

export default Header;