import"./criarAula.css";
import react from "react";
function CriarAula() {
    return (
        <div>
            <h1>Criar Nova Aula</h1>
            <input placeholder="Matéria"/>
            <input placeholder="Valor"/>
            <button>Salvar</button>
        </div>
    )
}
export default CriarAula;