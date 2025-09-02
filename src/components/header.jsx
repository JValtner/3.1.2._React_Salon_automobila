import React from "react";
import '../styles/main_style.scss';
const Header = () => {
    return(
    <header>
        <nav>
            <ul>
            <li className="nav-hide">
                <a href="">Akcija</a>
            </li>
            <li className="nav-hide">
                <a href="">Naša priča</a>
            </li>
            <li className="nav-image">
                <a href=""><img src="https://i.ibb.co/cXh6GXGK/car-logo.png" alt="" /></a>
            </li>
            <li className="nav-info">
                <a href="">Informacije</a>
            </li>
            <li className="nav-more">
                <a href="">Više</a>
            </li>
            <li className="nav-hide">
                <a href="">Ponuda</a>
            </li>
            </ul>
        </nav>
    </header>
    );
    
}
export default Header; 