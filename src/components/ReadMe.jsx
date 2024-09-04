import React from "react";
import '../css/readMe.css';
import { TituloGlobal , ConteudoReadme } from './textos';
import { ButtonMyGit } from "./buttons";


export const ReadMe = () => {

    return (

        <>
<<<<<<< HEAD
            
            <TituloGlobal conteudo={"Sobre mim: "} id={"ReadMe"} />
=======
            <TituloReadme/>
>>>>>>> 393aefaf2403a7549a7f7c4b181f4c38a3b4c006
            <div className="ReadMe">
                <ConteudoReadme/>
            </div>
            <ButtonMyGit href={"https://www.linkedin.com/in/matheus-zacanini/"}/>
        </>

    )
}