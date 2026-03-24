import React from 'react';
import './login.css';

function Login() {
    return (
        <div className="login-container">
            <div className="login-form">
                <h2>Login</h2>
                <form>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Senha:</label>
                        <input type="password" id="password" name="password" required />
                    </div>
                    <button type="submit" className="login-btn">Entrar</button>
                </form>
                <p className="register-link">
                    Não tem conta? <a href="#">Cadastre-se</a>
                </p>
            </div>
        </div>
    );
}

export default Login;