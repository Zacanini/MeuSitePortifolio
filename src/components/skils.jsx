import React, { useState } from "react";
import { TituloGlobal } from "./textos";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; // ícones de seta
import '../css/skills.css';

const items = [
    {
        icon: './images/html.png', // Substitua pelo caminho real do ícone
        subtitle: 'HTML',
        text: 'Linguagem de marcação para paginas web'
    },
    {
        icon: './images/css.webp', // Substitua pelo caminho real do ícone
        subtitle: 'CSS',
        text: 'Linguagem usada para estilizar elementos '
    },
    {
        icon: './images/javaScript.svg', // Substitua pelo caminho real do ícone
        subtitle: 'JavaScript',
        text: 'Linguagem de programação para desenvolvimento web.'
    },
    {
        icon: './images/react.svg', // Substitua pelo caminho real do ícone
        subtitle: 'React',
        text: 'Biblioteca para construir interfaces de usuário.'
    },
    {
        icon: './images/nodejs.svg', // Substitua pelo caminho real do ícone
        subtitle: 'Node.js',
        text: 'Ambiente de execução para JavaScript no servidor.'
    },
    {
        icon: './images/java.webp', // Substitua pelo caminho real do ícone
        subtitle: 'JAVA',
        text: 'Linguagem usada para criaçao de programas multi sistemas '
    },
    {
        icon: './images/c-sharp.svg', // Substitua pelo caminho real do ícone
        subtitle: 'C#',
        text: 'Linguagem versátil usada para desenvolver aplicativos em diversas plataformas. '
    },
    {
        icon: './images/sql.svg', // Substitua pelo caminho real do ícone
        subtitle: 'SQL',
        text: 'Linguagem usada para gerenciar e consultar bancos de dados relacionais. '
    },
    {
        icon: './images/git.svg', // Substitua pelo caminho real do ícone
        subtitle: 'Git',
        text: 'Git é um sistema de controle de versão para rastrear mudanças no código-fonte de projetos.'
    },
    // Adicione mais itens conforme necessário
];

export const DivSkills = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <>
            <TituloGlobal conteudo={"Skills  </>"} id={"skills"} />
            <div className="divSkills">
                <button className="carousel-button left" onClick={handlePrev}>
                    <FaArrowLeft />
                </button>
                <div className="carousel-item">
                    <img src={items[currentIndex].icon} alt={items[currentIndex].subtitle} className="carousel-icon" />
                    <h3 style={{ color: "white" }} className="carousel-subtitle">{items[currentIndex].subtitle}</h3>
                    <p style={{ width: 300, marginTop: 10, color: "#262626" }} className="carousel-text">{items[currentIndex].text}</p>
                </div>
                <button className="carousel-button right" onClick={handleNext}>
                    <FaArrowRight />
                </button>
            </div>
            
        </>
    );
}
