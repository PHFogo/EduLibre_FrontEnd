import "./agendamentos.css";
import React, { useState, useEffect } from "react";
import api from "../../services/api";

function Agendamentos() {
    const [agendamentos, setAgendamentos] = useState([]);
    const [erro, setErro] = useState("");

    useEffect(() => {
        api.get("/agendamentos")
            .then((res) => setAgendamentos(res.data))
            .catch(() => setErro("Erro ao buscar agendamentos."));
    }, []);

    return (
        <div>
            <h1>Minhas aulas agendadas</h1>
            {erro && <p style={{ color: "red" }}>{erro}</p>}
            {agendamentos.length === 0 && !erro && (
                <p>Nenhuma aula agendada.</p>
            )}
            {agendamentos.map((ag) => (
                <div key={ag.id}>
                    {ag.materia && <h3>Matéria: {ag.materia}</h3>}
                    {ag.nomeProfessor && <p>Professor: {ag.nomeProfessor}</p>}
                    {ag.data && <p>Data: {ag.data}</p>}
                    {ag.valor && <p>Valor: R$ {ag.valor}</p>}
                    {ag.status && <p>Status: {ag.status}</p>}
                </div>
            ))}
        </div>
    );
}

export default Agendamentos;
            