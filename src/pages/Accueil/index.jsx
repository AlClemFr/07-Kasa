// v- packages
import React from 'react'
// import ReactDOM from 'react-dom'

// v- chemin components
import Header from '../../components/Header'
import Banner from '../../components/Banner'
import CardTotal from '../../components/CardTotal'
import Footer from '../../components/Footer'

function Accueil() {
  return (
    <>
      <Header />
      <Banner BBannerTitre='Accueil' />
      <CardTotal />
      <Footer />
    </>
  )
}

export default Accueil
