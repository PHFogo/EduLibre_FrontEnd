import "./dashboard.css";
import react from "react";
function Aluno(){
    return(
        <div className="page-container">
            <h1 className="page-title">Área do aluno</h1>

            <button className="primary-btn">Ver Professores</button>
            <button className="primary-btn">Minhas Aulas</button>
        </div>
    )
}
export default Aluno;