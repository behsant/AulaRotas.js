import { Link } from "react-router-dom";
import "./Index.css";
function Header(){
    return(
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/sobre">Sobre</Link></li>

        </ul>
    )
}

export default Header;