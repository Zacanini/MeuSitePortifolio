import React from "react";
import '../css/readMe.css';
import { TituloGlobal , ConteudoReadme } from './textos';
import { ButtonMyGit } from "./buttons";


export const ReadMe = () => {

    return (

        <>
            
            <TituloGlobal conteudo={"Sobre mim: "} id={"ReadMe"} />
            <div className="ReadMe">
                <ConteudoReadme/>
            </div>
            <ButtonMyGit href={"https://www.linkedin.com/in/matheus-zacanini/"}/>
        </>

    )
}