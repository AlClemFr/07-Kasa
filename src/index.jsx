//v- packages
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

//v- chemin page
import Accueil from './pages/Accueil'
import Apropos from './pages/Apropos'
import FicheLogement from './pages/FicheLogement'

//v- chemin composants
import Error from './components/Error'

//v- élément route
const route =
  <BrowserRouter >
    <Routes>
      <Route path='/' element={<Accueil />} />
      <Route path='' element={<Accueil />} />

      <Route path='/kasa' element={<Accueil />} />
      <Route path='/About' element={<Apropos />} />
      <Route path='/FicheLogement/:id' element={<FicheLogement />} />


      {/* aucun chemain trouvée */}
      <Route path="*" element={<Error />} />

      {/* provisoire pour mise en forme page 404*/}
      <Route path="/error" element={<Error />} />

    </Routes>
  </BrowserRouter >

//v- lien avec le DOM accrochage à l'ID root 
//v- voir Html dans répèrtoire public
ReactDOM.render(route, document.getElementById('root'))
