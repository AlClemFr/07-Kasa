// v- packages
import React from 'react'
// import { useParams } from "react-router-dom";

// v- chemin components
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Defilement from '../../components/Defilement'

//v- Data 
// import { DataLogement } from '../../30_data'


function FicheLogement() {

  // const fiche = "Fiche Logement = " + useParams().id


  // const { id } = useParams();
  // const InfoLogement = DataLogement.find((info) => info.id === id);

  // console.log(InfoLogement.id)

  // console.log(InfoLogement.title)
  // console.log(InfoLogement.cover)
  // console.log(InfoLogement.pictures, InfoLogement.pictures.length)
  // console.log(InfoLogement.description)
  // console.log(InfoLogement.host)
  // console.log(InfoLogement.rating)

  // console.log(InfoLogement.location)
  // console.log(InfoLogement.equipments)
  // console.log(InfoLogement.tags)


  return (
    <>
      <Header />
      <Defilement />
      <Footer />
    </>
  )
}

export default FicheLogement
