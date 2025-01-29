import React from "react";
import { FaFilePdf } from "react-icons/fa"; // Importa o ícone de PDF

const DownloadButton = ({ fileName, label }) => {
    return (
        <a href={"dist/images/CurrículoMatheusZacanini(2025-1).pdf"} download className="downloadButton">
            <FaFilePdf style={{ marginRight: 8 }} /> {/* Ícone de PDF com um pequeno espaçamento */}
            {label}
        </a>
    );
};

export default DownloadButton;
