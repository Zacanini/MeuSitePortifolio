import React, { useState } from "react";
import { TituloGlobal } from "./textos";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; // ícones de seta
import "../css/Projects.css";

export const Projects = () => {
    const [currentProject, setCurrentProject] = useState(0);

    const projects = [
        {
<<<<<<< HEAD
            name: "Back End de gestão de vendas e ingressos feito em Java para o Teatro Central Juiz de Fora",
            image: "./images/Teatro.png",
            link: "https://github.com/Zacanini/SistemaDeComprasEGest-oDeVagasTeatroCentral",
            buttonText: "REPOSITÓRIO"
        },
        {
            name: "Back End em Java feito durante a faculdade, de uma instituição bancária",
            image: "./images/Banco.png",
            link: "https://github.com/Zacanini/Instituicao-BancariaJava",
            buttonText: "REPOSITÓRIO"
        },
        {
            name: "Front/Back End feito em JavaScript de uma aplicação de previsão do tempo de qualquer cidade do mundo, utilizando a API da OpenWeather",
            image: "./images/Tempo.png",
            link: "https://github.com/Zacanini/APIprevisaoDoTempo/tree/main",
            buttonText: "REPOSITÓRIO"
        },
        {
            name: "Jogo do Spider Man inspirado no Mario Bros, o Spider Jump, feito completamente em JavaScript, onde o jogador clica em alguma tecla para pular, cada pulo soma 1 no score, a cada 10 pulos aumenta a velocidade e caso haja colisão o jogo encerra.",
            image: "./images/Jogo.png",
            link: "https://github.com/Zacanini/LIGHT-DARK-Registration-Screen",
            buttonText: "REPOSITÓRIO"
        },
        {
            name: "Caso queira ver mais alguns projetos meus, te convido a acessar meu GitHub",
            image: "./images/GitHub.png",
            link: "https://github.com/Zacanini",
            buttonText: "GITHUB"
=======
            name: "Beck And de gestão de vendas e ingressos feito em java para o Teatro central Juiz de fora",
            image: "./images/Teatro.png",
            link: "https://github.com/Zacanini/SistemaDeComprasEGest-oDeVagasTeatroCentral",
        },
        {
            name: "Beck And em java feito durante a faculdade, de uma instituição bancaria",
            image: "./images/Banco.png",
            link: "https://github.com/Zacanini/Instituicao-BancariaJava",
        },
        {
            name: "Front/Beck And feito em JavaScript de uma aplicação de previsão do tempo de qualquer cidade do mundo, Ultilizando a API da openWeather",
            image: "./images/Tempo.png",
            link: "https://github.com/Zacanini/APIprevisaoDoTempo/tree/main",
        },
        {
            name: "Jogo do Spider Man inspirado no Mario Bross, o Spider Jump, feito completamente em JavScript ,onde o jogador clica em alguma tecla para pular,cada pulo soma 1 no score, a cada 10 pulos aumenta a velocidade e caso haja colisão o jogo encerra.",
            image: "./images/Jogo.png",
            link: "https://github.com/Zacanini/LIGHT-DARK-Registration-Screen",
        },
        {
            name: "Caso queira ver mais alguns projetos meu, te convido a acessar meu gitHub",
            image: "./images/GitHub.png",
            link: "https://github.com/Zacanini",
>>>>>>> 393aefaf2403a7549a7f7c4b181f4c38a3b4c006
        }
    ];

    const nextProject = () => {
        setCurrentProject((prev) => (prev + 1) % projects.length);
    };

    const prevProject = () => {
        setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
    };

    return (
        <>
            <TituloGlobal conteudo={"Projetos: "} id={"projects"} />
            <div className="carousel" >
                <button className="arrow left-arrow" onClick={prevProject}>
                    <FaArrowLeft />
                </button>
                <div
                    className="carousel-inner"
                    style={{ transform: `translateX(-${currentProject * 100}%)`}}
                >
                    {projects.map((project, index) => (
                        <div className="divProject" key={index}>
                            <h1 className="nameProject">{project.name}</h1>
                            <img
                                style={{ width: 340, marginBottom: 8 }}
                                src={project.image}
                                alt="Project"
                            />
                            <a
                                className="botaoProjetos"
                                target="blank"
                                href={project.link}
                            >
<<<<<<< HEAD
                                {project.buttonText}
=======
                                REPOSITÓRIO
>>>>>>> 393aefaf2403a7549a7f7c4b181f4c38a3b4c006
                            </a>
                        </div>
                    ))}
                </div>
                <button className="arrow right-arrow" onClick={nextProject}>
                    <FaArrowRight />
                </button>
            </div>
        </>
    );
};
