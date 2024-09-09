import React from "react";
import "../css/textos.css";

export const TituloGlobal = ({conteudo , id }) => {
    return (
        <>
            <h1 id={id} className="TituloReadme"> {conteudo} </h1>
        </>
    )

}

export const TextoUm = () => {
    return (
        <>
            <h1 className="TextoUm">Olá, <br />
                Sou Matheus Zacanini <br/> <span className="zaca">ZACA</span> <br />
                E sou Desenvolvedor De Software</h1>
            <h1 className="TextoPequeno">JavaScript,React,Java e C#...</h1>
        </>
    )
}


export const TituloReadme = () => {
    return (
        <>
            <h1 className="TituloReadme"> ReadeMe </h1>
        </>
    )
}

export const ConteudoReadme = () => {
    return (
        <>
            <div className="conteudo-readme">
                <p><strong>-Olá, eu sou o Matheus Zacanini, mas podem me chamar de Zaca! 👋</strong></p>
                <p>-Tenho 22 anos e, há um ano e meio, comecei minha jornada na programação. Atualmente, estou cursando Análise e Desenvolvimento de Sistemas e estou no penúltimo período do curso. 🚀</p>
                <p>-Sou apaixonado por criar soluções e transformar ideias em realidade. No meu tempo livre, estou sempre explorando novas tecnologias, aprendendo sobre as últimas tendências do desenvolvimento e, claro, me divertindo com projetos pessoais.</p>
                <p>-Aqui estão algumas das coisas que eu gostaria de ser e fazer:</p>
                <ul>
                    <li><strong>Desenvolvedor Full Stack:</strong> Trabalhar tanto no front-end quanto no back-end, criando aplicações robustas e envolventes.</li>
                    <li><strong>Especialista em UX/UI:</strong> Garantir que os usuários tenham a melhor experiência possível ao interagir com minhas criações.</li>
                    <li><strong>Contribuidor Open Source:</strong> Participar de projetos de código aberto e colaborar com a comunidade de desenvolvedores.</li>
                    <li><strong>Desenvovler Algo Novo:</strong> Tenho muita vontade e ideias para desenvolver algum projeto inovador que posa ajduar no dia a dia das pessoas.</li>
                </ul>
                <p>Obrigado por visitar meu portfólio! Se você estiver interessado em colaborar ou apenas bater um papo sobre tecnologia, sinta-se à vontade para entrar em contato. 😊</p>
            </div>
        </>
    );
};



