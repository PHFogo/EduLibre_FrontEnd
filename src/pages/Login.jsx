import React, { useState } from 'react'
import './login.css'
import { useNavigate } from 'react-router-dom'

function Login() {

    const navigate = useNavigate()

    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [erro, setErro] = useState("")

    const handleLogin = async (e) => {

        e.preventDefault()

        setErro("")

        try{

            const response = await fetch("http://localhost:8080/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email,
                    senha
                })
            })

            const data = await response.json()

            if(!response.ok){
                setErro(data.message || "Erro ao logar")
                return
            }

            // salva token
            localStorage.setItem("token", data.token)

            // redireciona
            if(data.tipo === "ALUNO"){
                navigate("/aluno")
            } else {
                navigate("/professor")
            }

        }catch{
            setErro("Erro no servidor")
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