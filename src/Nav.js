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
                <nav className="vertical-navbar">
                    <ul className="list-group">
                        <li className="list-group-item">
                            <a href="#">FEED</a>
                        </li>
                        <li className="list-group-item">
                            <a href="#">NOTIFY</a>
                        </li>
                        <li className="list-group-item">
                            <a href="#">PROFILE</a>
                        </li>
                    </ul>
                </nav>
            )}
        </div>
    );
}

export default Nav