import "./professores.css";
import react from "react";
import { userEffect, useState } from "react";
function Professores() {
   const [professores, setProfessores] = useState([]);

   useEffect(() => {
      fetch("http://localhost:8080/professores")
         .then((response) => response.json())
         .then((data) => setProfessores(data))
         .catch((error) => console.error("Erro ao buscar professores:", error));
   }, []);
   return(
        <div>
            <h1>Professores Disponíveis</h1>
            {professores.map(professor => (
                <div key={professor.id}>
                    <h3>{professor.nome}</h3>
                    <p>{professor.materia}</p>
                    <button>Agendar Aula</button>
                </div>
            ))}
        </div>
   )
}
export default Professores;