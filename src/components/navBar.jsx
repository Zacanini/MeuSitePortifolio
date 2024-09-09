import React, { useState } from "react";
import { FaBars, FaHome, FaUser, FaCode, FaFolderOpen } from "react-icons/fa";
import '../css/NavBar.css';

export const NavBar = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [rotatedIcon, setRotatedIcon] = useState(false);

    // Função combinada para alternar o menu e girar o ícone no mobile
    const handleClick = () => {
        setMenuOpen(!isMenuOpen);
        setRotatedIcon(!rotatedIcon);
    };

    // Função para rolagem suave até a seção
    const handleScroll = (event, targetId) => {
        event.preventDefault(); // Previne o comportamento padrão de "pular" diretamente

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: "smooth", // Animação suave
                block: "start"      // Alinha ao topo da página
            });
        }

        // Fecha o menu após clicar no link (no mobile)
        setMenuOpen(false);
        setRotatedIcon(false);
    };

    return (
        <div className="navBar">
            <p className="title">
                ZACA
            </p>
            {/* Botão sanduíche apenas para mobile */}
            <button onClick={handleClick} className="menuButton">
                <FaBars className={rotatedIcon ? "icon rotated" : "icon"} />
            </button>

            {/* Menu de navegação */}
            <div className={`menu ${isMenuOpen ? "open" : ""}`}>
                <a href="#home" className="menuItem" onClick={(e) => handleScroll(e, '#home')}>
                    <FaHome className="icon" />
                </a>
                <a href="#ReadMe" className="menuItem" onClick={(e) => handleScroll(e, '#ReadMe')}>
                    <FaUser className="icon" />
                </a>
                <a href="#skills" className="menuItem" onClick={(e) => handleScroll(e, '#skills')}>
                    <FaCode className="icon" /> {/* Ícone de habilidades */}
                </a>
                <a href="#projects" className="menuItem" onClick={(e) => handleScroll(e, '#projects')}>
                    <FaFolderOpen className="icon" /> {/* Ícone de projetos */}
                </a>
            </div>
        </div>
    );
};
