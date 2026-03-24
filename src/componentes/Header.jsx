import "./Headers.css";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

function Header() {
    return (

        <header className="header">
            {/* ÁREA DA LOGO E DO NOME DA LOJA */}
            <div className="logo">
                <Link to="/" className="logo-link">
                   <img src={logo} alt="EduLibre" className="logo_img" />
                    <strong>EduLibre</strong>
                </Link>
            </div>

            {/* ÁREA DO MENU DE NAVEGAÇÃO */}
            <nav className="menu_header">
                <Link to="/">Home</Link>
                <Link to="/agendamentos">Meus agendamentos</Link>
                <Link to="/login">Login</Link>
            </nav>

        </header>
    )
}

export default Header;