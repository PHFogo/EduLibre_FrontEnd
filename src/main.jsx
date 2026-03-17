import react from 'react';
import reactDom from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import "./index.css";

reactDom.createRoot(document.getElementById('root')).render( //aqui estamos criando as rotas, para ter as navegabilidades entre as páginas
    <react.StrictMode>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </react.StrictMode>
);