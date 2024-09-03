import React, { useState } from "react";
import { FaBars, FaHome, FaUser, FaCog } from "react-icons/fa";
import '../css/NavBar.css';

export const NavBar = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [rotatedIcon, setRotatedIcon] = useState(false);

    // Função combinada para alternar o menu e girar o ícone
    const handleClick = () => {
        setMenuOpen(!isMenuOpen);
        setRotatedIcon(!rotatedIcon);
    };

    return (
        <div className="navBar">
            <p className="title">
                ZACA
            </p>
            <button onClick={handleClick} className="menuButton">
                <FaBars className={rotatedIcon ? "icon rotated" : "icon"} />
            </button>
            <div className={`menu ${isMenuOpen ? "open" : ""}`}>
                <button className="menuItem">
                    <FaHome className="icon" />
                </button>
                <button className="menuItem">
                    <FaUser className="icon" />
                </button>
                <button className="menuItem">
                    <FaCog className="icon" /> 
                </button>
            </div>
        </div>
    );
};
