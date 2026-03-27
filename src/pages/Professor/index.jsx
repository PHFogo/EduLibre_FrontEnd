import "../Dashboard.css";
import React from "react";
import { useNavigate } from "react-router-dom";

function Professor(){
    const navigate = useNavigate();
    return(
        <div className="page-container">
            <h1 className="page-title">Área do professor</h1>
            <button className="primary-btn" onClick={() => navigate("/criar-aula")}>Criar Aula</button>
            <button className="primary-btn" onClick={() => navigate("/agendamentos")}>Ver Agendamentos</button>
        </div>
    )
}
export default Professor;