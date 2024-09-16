import '../../css/Navbar.css';
import {Link} from "react-router-dom";

const Navbar = () => {
    return(
        <nav id ='navbar'>
            <div id='leftNav'>
                <Link to="/"> Home </Link>
            </div>
            <div id="rightNav">
                <Link to="/projects"> Projects </Link>
                <Link to="/about"> About </Link>
            </div>
        </nav>
    )
}
export default Navbar;