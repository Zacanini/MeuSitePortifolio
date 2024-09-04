import React, { useState } from "react";
import { FaBars, FaHome, FaUser, FaCode, FaFolderOpen } from "react-icons/fa";
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
                <a href="#home" className="menuItem">
                    <FaHome className="icon" />
                </a>
                <a href="#ReadMe" className="menuItem">
                    <FaUser className="icon" />
                </a>
                <a href="#skills" className="menuItem">
                    <FaCode className="icon" /> {/* Ícone de código */}
                </a>
                <a href="#projects" className="menuItem">
                    <FaFolderOpen className="icon" /> {/* Ícone de projetos */}
                </a>
            </div>
        </div>
    );
};
