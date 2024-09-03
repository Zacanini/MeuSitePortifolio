import React from "react";
import '../css/readMe.css';
import { TituloReadme , ConteudoReadme } from './textos';
import { ButtonMyGit } from "./buttons";


export const ReadMe = () => {

    return (

        <>

            <TituloReadme/>
            <div className="ReadMe">
                <ConteudoReadme/>
            </div>
            <ButtonMyGit href={"https://github.com/Zacanini"}/>
        </>

    )
}