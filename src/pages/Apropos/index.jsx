// v- packages
import React from 'react'

// v- chemin components
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Banner from '../../components/Banner'
import Collapse from '../../components/Collapse'

//v- Data 
import { DataApropos } from '../../30_data'

function Apropos() {
  return (
    <>

      <Header />
      <Banner BBannerTitre='Apropos' />
      <Collapse TTitre='Apropos' NNum='01' AApropos={DataApropos} />
      <Collapse TTitre='Apropos' NNum='02' AApropos={DataApropos} />
      <Collapse TTitre='Apropos' NNum='03' AApropos={DataApropos} />
      <Collapse TTitre='Apropos' NNum='04' AApropos={DataApropos} />
      <Footer />
    </>
  )
}

export default Apropos
