import React from "react";
import '../css/buttons.css'

export const ButtonUm = () => {

    return (

        <>
            <button className="ButtonUm">
                Contate-me
            </button>
        </>
    )
};

export const ButtonTroca = ({ onClick  }) => {
    return (
        <button style={{marginTop:10}} className="ButtonUm" onClick={onClick}>Trocar Personagem</button>
    );
};

