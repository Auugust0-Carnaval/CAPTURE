import React, { useEffect, useState } from "react";
import './Nav.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faCookieBite } from '@fortawesome/free-solid-svg-icons';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';


function Nav(){
    const [showNavbar, setShowNavbar] = useState(false);

    const handleClick = () => {
        setShowNavbar(!showNavbar);
    };



    const [isNavVisible,setIsNavVisible] = useState(false);

    useEffect(() => {
        setIsNavVisible(true);
    }, []);

    return (
        <div>
            <button className="btn btn-outline-primary" onClick={handleClick}>
                <FontAwesomeIcon icon={faTwitter} className="Icon" />
                 CAPTURE
            </button>
            {showNavbar && (
                <nav className="vertical-navbar">
                    <ul className="list-group btn-success">
                        <li className="list-group-item">
                            <a href="#">
                                <FontAwesomeIcon icon={faCookieBite} className="Icon" /> FEED
                            </a>
                        </li>
                        <li className="list-group-item">
                            <a href="#">
                                <FontAwesomeIcon icon={faBell} className="Icon" /> NOTIFY
                            </a>
                        </li>
                        <li className="list-group-item">
                            <a href="#">
                                <FontAwesomeIcon icon={faUser} className="Icon" /> PROFILE
                            </a>
                        </li>

                        <a href="#" className="btn btn-outline-primary" id="more">
                            <FontAwesomeIcon icon={faEllipsisV } className="Icon"/>                            </a>
                    </ul>
                </nav>
            )}
        </div>
    );
}

export default Nav