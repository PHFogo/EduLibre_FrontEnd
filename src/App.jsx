import { Route, Routes } from "react-router-dom";
import Header from "./componentes/Header.jsx";
import Home from "./pages/home";
import Footer from "./componentes/footer.jsx";



function App() {
  return (
    <div>
      <Header/>
      <Routes>    
      <Route path="/" element={<Home/>}/> 
  
        

      </Routes>
      <Footer/>
    </div>
  )
}

export default App;