// v- packages
import React from 'react'
// import ReactDOM from 'react-dom'

// v- chemin components
import Header from '../../components/Header'
import BannerAccueil from '../../components/BannerAccueil'
import CardTotal from '../../components/Card'
import Footer from '../../components/Footer'

function Accueil() {
  return (
    <>
      <Header />
      <BannerAccueil />
      <CardTotal />
      <Footer />
    </>
  )
}

export default Accueil
