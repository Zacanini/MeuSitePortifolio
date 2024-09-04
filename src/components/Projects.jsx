import React, { useState } from "react";
import { TituloGlobal } from "./textos";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; // ícones de seta
import "../css/Projects.css";

export const Projects = () => {
    const [currentProject, setCurrentProject] = useState(0);

    const projects = [
        {
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
                                REPOSITÓRIO
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
