import React from "react";
import '../css/readMe.css';
import { TituloGlobal, ConteudoReadme } from './textos';
import { ButtonMyGit } from "./buttons";


export const ReadMe = () => {

    return (

        <>
            <div className="divPai">
                <TituloGlobal conteudo={"Sobre mim: "} id={"ReadMe"} />
                <div className="ReadMe">
                    <ConteudoReadme />
                </div>
            </div>
        </>

    )
}