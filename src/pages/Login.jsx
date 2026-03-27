import React, { useState } from 'react'
import './login.css'
import { useNavigate } from 'react-router-dom'
import api from '../services/api'

function Login() {

    const navigate = useNavigate()

    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [erro, setErro] = useState("")

    const handleLogin = async (e) => {

        e.preventDefault()

        setErro("")

        try{

            const response = await api.post("/login", { email, senha })
            const data = response.data

            // salva token e tipo do usuário
            localStorage.setItem("token", data.token)
            localStorage.setItem("tipo", data.tipo)

            // redireciona
            if(data.tipo === "ALUNO"){
                navigate("/aluno")
            } else {
                navigate("/professor")
            }

        }catch(err){
            const msg = err.response?.data?.message || "Erro no servidor"
            setErro(msg)
        }

    }

    return (
        <div className="login-container">
            <div className="login-form">
                <h2>Login</h2>

                <form onSubmit={handleLogin}>

                    <div className="form-group">
                        <label>Email:</label>
                        <input 
                            type="email"
                            value={email}
                            onChange={(e)=> setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Senha:</label>
                        <input 
                            type="password"
                            value={senha}
                            onChange={(e)=> setSenha(e.target.value)}
                            required
                        />
                    </div>

                    {erro && <p className="erro">{erro}</p>}

                    <button className="login-btn">
                        Entrar
                    </button>

                </form>

            </div>
        </div>
    )
}

export default Login