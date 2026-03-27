import "./professores.css";
import React, { useState, useEffect } from "react";
import api from "../../services/api";

function Professores() {
   const [professores, setProfessores] = useState([]);
   const [erro, setErro] = useState("");
   const [agendando, setAgendando] = useState(null);

   useEffect(() => {
      api.get("/professores")
         .then((res) => setProfessores(res.data))
         .catch(() => setErro("Erro ao buscar professores."));
   }, []);

   const handleAgendar = async (professorId) => {
      setAgendando(professorId);
      try {
         await api.post("/agendamentos", { professorId });
         alert("Aula agendada com sucesso!");
      } catch (err) {
         alert(err.response?.data?.message || "Erro ao agendar aula.");
      } finally {
         setAgendando(null);
      }
   };

   return(
        <div>
            <h1>Professores Disponíveis</h1>
            {erro && <p style={{ color: "red" }}>{erro}</p>}
            {professores.map(professor => (
                <div key={professor.id}>
                    <h3>{professor.nome}</h3>
                    <p>{professor.materia}</p>
                    <button
                        onClick={() => handleAgendar(professor.id)}
                        disabled={agendando === professor.id}
                    >
                        {agendando === professor.id ? "Agendando..." : "Agendar Aula"}
                    </button>
                </div>
            ))}
        </div>
   )
}

export default Professores;