import "../Dashboard.css";
import React from "react";
import { useNavigate } from "react-router-dom";

function Aluno(){
    const navigate = useNavigate();
    return(
        <div className="page-container">
            <h1 className="page-title">Área do aluno</h1>

            <button className="primary-btn" onClick={() => navigate("/professores")}>Ver Professores</button>
            <button className="primary-btn" onClick={() => navigate("/agendamentos")}>Minhas Aulas</button>
        </div>
    )
}
export default Aluno;