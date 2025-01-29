import React, { useState } from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import '../css/RedesSociais.css';

export const BoxMidialLinks = () => {
    const [showPopup, setShowPopup] = useState(false);

    const copyEmailToClipboard = () => {
        navigator.clipboard.writeText("zacanini2@gmail.com").then(() => {
            setShowPopup(true);
            setTimeout(() => setShowPopup(false), 5000); // Esconde o popup após 5 segundos
        }, (err) => {
            console.error("Erro ao copiar o email: ", err);
        });
    };

    return (
        <>
            <div style={{display:"flex",alignItems:'center', justifyContent:'flex-start', marginTop:50}}>
                <a href="https://www.linkedin.com/in/matheus-zacanini/" target="_blank" rel="noopener noreferrer" style={{margin: '0 10px', color:'#F2622E'}}>
                    <FaLinkedin size={40} />
                </a>
                <a href="https://github.com/Zacanini" target="_blank" rel="noopener noreferrer" style={{margin: '0 10px', color:'#F2622E'}}>
                    <FaGithub size={40} />
                </a>
                <a onClick={copyEmailToClipboard} style={{margin: '0 10px', color:'#F2622E', cursor: 'pointer'}}>
                    <FaEnvelope size={40} />
                </a>
            </div>
            {showPopup && <div className="popup">Email copiado na área de transferência</div>}
        </>
    )
}