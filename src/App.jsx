import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Detalle  from './paginas/detalle'
import Favorito from './paginas/favorito'
import Home from './paginas/home'
import Informativa from './paginas/informativa'
import Mapa from './paginas/mapa'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      <nav className="c-menu">
          <Link to="/home">Home</Link>
          <Link to="/informativa">Informativa</Link>
          <Link to="/mapa">Mapa</Link>
          <Link to="/favorito">Favoritos</Link>
      </nav>

        


      <Routes>
          <Route path="/home " element={<Home /> } />
          <Route path="/informativa" element={<Informativa /> } />
          <Route path="/mapa" element={<Mapa /> } />
          <Route path="/favorito" element={<Favorito /> } />
          <Route path="/detalle/:depto/:municipio" element={<Detalle /> } />
      </Routes>
    </Router>
      
    </>
  )
}

export default App
