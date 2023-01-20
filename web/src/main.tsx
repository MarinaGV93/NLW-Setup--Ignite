import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// Chama o metodo (createRoot) que vem dentro de ReacttDOM, passa o id e dentro renderiza (exibir em tela) o componente APP
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
