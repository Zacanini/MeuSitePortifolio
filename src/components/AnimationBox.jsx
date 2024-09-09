import React, { useState } from "react";
import { ButtonTroca } from './buttons.jsx';
import '../css/AnimationBox.css';

export const CaixaUm = () => {
    const array = [
        "gokuVoando.gif",
        "kuririn.gif",
        "gokuEvegeta.gif",
        "majinVSgoku.gif",
        "gohanvsgohan.gif",
        "gogeta.gif",
        
    ];
    const array2 = [
        "Goku",
        "kuririn",
        "gokuEvegeta",
        "majinVSgoku",
        "gohanvsgohan",
        "gogeta"
    ];
    const [classe, setClasse] = useState(array2[0]);
    const [personagem, setPersonagem] = useState(array[0]); // Estado da imagem atual
    const [index, setIndex] = useState(0); // Estado do índice atual

    const handleTrocar = () => {
        const nextIndex = (index + 1) % array.length; // Calcula o próximo índice diretamente
        setIndex(nextIndex);
        setPersonagem(array[nextIndex]); // Atualiza o estado da imagem
        setClasse(array2[nextIndex]); // Atualiza o estado da classe
    };

    const src = `/images/${personagem}`;
    const nomeclasse = classe; // Atribua a classe diretamente

    return (
        <>
            <div className="CaixaPai">
                <div className="ConjuntoNuvens">
                    <img className="nuvemDois" src="/images/nuvem.png" alt="" />
                    <img className="nuvem" src="/images/nuvem.png" alt="" />
                    <img className="nuvemDois" src="/images/nuvem.png" alt="" />
                    <img className="nuvem" src="/images/nuvem.png" alt="" />
                    <img className="nuvemDois" src="/images/nuvem.png" alt="" />
                    <img className="nuvem" src="/images/nuvem.png" alt="" />
                    <img className="nuvemDois" src="/images/nuvem.png" alt="" />
                    <img className="nuvem" src="/images/nuvem.png" alt="" />
                    <img className="nuvemDois" src="/images/nuvem.png" alt="" />
                    <img className="nuvem" src="/images/nuvem.png" alt="" />
                    <img className="nuvemDois" src="/images/nuvem.png" alt="" />
                    <img className="nuvem" src="/images/nuvem.png" alt="" />
                    <img className="nuvemDois" src="/images/nuvem.png" alt="" />
                    <img className="nuvem" src="/images/nuvem.png" alt="" />
                    <img className="nuvemDois" src="/images/nuvem.png" alt="" />
                </div>
                <img className={nomeclasse} src={src} alt="Imagem" />
                <div className="chao"></div>
            </div>
            <div>
                <ButtonTroca  onClick={handleTrocar} />
            </div>
        </>
    );
};
