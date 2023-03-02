//v- packages
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

//v- chemin page
import Accueil from './pages/Accueil'
import Apropos from './pages/Apropos'

// v- chemin composants
// import Header from './components/Header'
// import Footer from './components/Footer'

import Error from './components/Error'

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Accueil />} />
      <Route path="/about" element={<Apropos />} />

      {/* aucun chemain trouvée */}
      <Route path="*" element={<Error />} />

      {/* provisoire pour mise en forme page 404*/}
      <Route path="/error" element={<Error />} />

    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
)
