// v- packages
import React from 'react'
import { useParams } from "react-router-dom";


// v- chemin components
import Header from '../../components/Header'
import Footer from '../../components/Footer'
// import BannerApropos from '../../components/BannerApropos'




function FicheLogement() {

  let iid = useParams()
  // let toto = "Fiche Logement = " + iid.toSting()

  console.log(iid.id)

  let fiche = "Fiche Logement = " + iid.id

  console.log(fiche)



  return (
    <>
      <Header />

      <br></br>
      <br></br>
      <br></br>
      <br></br>


      <h1>{fiche} </h1>

      <Footer />
    </>
  )
}

export default FicheLogement
