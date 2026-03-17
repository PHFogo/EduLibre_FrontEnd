import React from "react";
import "./footer.css";
function Footer(){
    return(

        <footer className="footer">

            <div className="footer_container">

                <div className="footer_brand">
                    <h2>EduLibre</h2>
                    <p>
                        Conectando alunos e professores para transformar
                        aprendizado em oportunidades reais.
                    </p>
                </div>

                <div className="footer_links">
                    <h4>Navegação</h4>
                    <a href="#">Home</a>
                    <a href="#">Professores</a>
                    <a href="#">Agendamentos</a>
                    <a href="#">Login</a>
                </div>

                <div className="footer_links">
                    <h4>Suporte</h4>
                    <a href="#">Contato</a>
                    <a href="#">Ajuda</a>
                    <a href="#">Termos</a>
                    <a href="#">Privacidade</a>
                </div>

            </div>

            <div className="footer_bottom">
                © 2026 EduLibre — Todos os direitos reservados
            </div>

        </footer>

    )
}

export default Footer;