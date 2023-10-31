import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

// importando 
import Pokemons from './components/Pokemons'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Pokemons />
  </React.StrictMode>,
)
