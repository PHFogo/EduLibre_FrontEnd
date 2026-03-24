import { Route, Routes } from "react-router-dom";
import Header from "./componentes/Header.jsx";
import Home from "./pages/home";
import Login from "./pages/Login.jsx";
import Footer from "./componentes/footer.jsx";
import Professores from "./pages/Professores/index.jsx";
import Aluno from "./pages/Aluno/index.jsx";
import Agendamentos from "./pages/Agendamentos/index.jsx";
import Professor from "./pages/Professor/index.jsx";
import CriarAula from "./pages/CriarAula/index.jsx";



function App() {
  return (
    <div>
      <Header/>
      <Routes>    
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/> 
      <Route path="/professores" element={<Professores/>}/>
      <Route path="/aluno" element={<Aluno/>}/>
      <Route path="/agendamentos" element={<Agendamentos/>}/>
      <Route path="/professor" element={<Professor/>}/>
      <Route path="/criar-aula" element={<CriarAula/>}/>
        

      </Routes>
      <Footer/>
    </div>
  )
}

export default App;