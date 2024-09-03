import React, { useState } from "react";
import { TituloGlobal } from "./textos";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; // ícones de seta
import '../css/skills.css';

const items = [
    {
        icon: './public/images/javaScript.svg', // Substitua pelo caminho real do ícone
        subtitle: 'JavaScript',
        text: 'Linguagem de programação para desenvolvimento web.'
    },
    {
        icon: './public/images/react.svg', // Substitua pelo caminho real do ícone
        subtitle: 'React',
        text: 'Biblioteca para construir interfaces de usuário.'
    },
    {
        icon: './public/images/nodejs.svg', // Substitua pelo caminho real do ícone
        subtitle: 'Node.js',
        text: 'Ambiente de execução para JavaScript no servidor.'
    }
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
            <TituloGlobal conteudo={"Skills"} id={"skills"} />
            <div className="divSkills">
                <button className="carousel-button left" onClick={handlePrev}>
                    <FaArrowLeft />
                </button>
                <div className="carousel-item">
                    <img src={items[currentIndex].icon} alt={items[currentIndex].subtitle} className="carousel-icon" />
                    <h3 className="carousel-subtitle">{items[currentIndex].subtitle}</h3>
                    <p className="carousel-text">{items[currentIndex].text}</p>
                </div>
                <button className="carousel-button right" onClick={handleNext}>
                    <FaArrowRight />
                </button>
            </div>
        </>
    );
}
