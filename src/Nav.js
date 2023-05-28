import React, { useState } from "react";
import './Nav.css'

function Nav(){
    const [showNavbar, setShowNavbar] = useState(false);

    const handleClick = () => {
        setShowNavbar(!showNavbar);
    };

    return (
        <div>
            <button className="btn btn-outline-primary" onClick={handleClick}>CAPTURE</button>
            {showNavbar && (
                <nav>
                <ul>
                    <li>
                    <a href="#">Página 1</a>
                    </li>
                    <li>
                    <a href="#">Página 2</a>
                    </li>
                    <li>
                    <a href="#">Página 3</a>
                    </li>
                </ul>
                </nav>
            )}
        </div>
    );
}

export default Nav