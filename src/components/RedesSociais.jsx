import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export const BoxMidialLinks = () => {

    return (
        <>
            <div style={{display:"flex",alignItems:'center', justifyContent:'flex-start', marginTop:50}}>
                <a href="https://www.linkedin.com/in/matheus-zacanini/" target="_blank" rel="noopener noreferrer" style={{margin: '0 10px', color:'#F2622E'}}>
                    <FaLinkedin size={40} />
                </a>
                <a href="https://github.com/Zacanini" target="_blank" rel="noopener noreferrer" style={{margin: '0 10px', color:'#F2622E'}}>
                    <FaGithub size={40} />
                </a>
                <a href="zacanini2@gmail.com" style={{margin: '0 10px', color:'#F2622E'}}>
                    <FaEnvelope size={40} />
                </a>
            </div>
        </>
    )
}