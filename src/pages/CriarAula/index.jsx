import "./criarAula.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";

function CriarAula() {
    const navigate = useNavigate();
    const [materia, setMateria] = useState("");
    const [valor, setValor] = useState("");
    const [erro, setErro] = useState("");
    const [salvando, setSalvando] = useState(false);

    const handleSalvar = async (e) => {
        e.preventDefault();
        setErro("");
        setSalvando(true);
        try {
            await api.post("/aulas", { materia, valor: parseFloat(valor) });
            alert("Aula criada com sucesso!");
            navigate("/professor");
        } catch (err) {
            setErro(err.response?.data?.message || "Erro ao criar aula.");
        } finally {
            setSalvando(false);
        }
    };

    return (
        <div>
            <h1>Criar Nova Aula</h1>
            <form onSubmit={handleSalvar}>
                <input
                    placeholder="Matéria"
                    value={materia}
                    onChange={(e) => setMateria(e.target.value)}
                    required
                />
                <input
                    placeholder="Valor"
                    type="number"
                    min="0"
                    step="0.01"
                    value={valor}
                    onChange={(e) => setValor(e.target.value)}
                    required
                />
                {erro && <p style={{ color: "red" }}>{erro}</p>}
                <button type="submit" disabled={salvando}>
                    {salvando ? "Salvando..." : "Salvar"}
                </button>
            </form>
        </div>
    );
}

export default CriarAula;