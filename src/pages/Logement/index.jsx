// v- packages
import React from 'react'
import { useParams } from "react-router-dom";

// v- chemin components
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Defilement from '../../components/Defilement'
import Collapse from '../../components/Collapse'
import DessusCollapse from '../../components/DessusCollapse'


//v- Data 
import { DataLogement } from '../../30_data'

//v- styles
import '../../20_styles/Collapse.css'

function Logement() {

  const { id } = useParams();
  const InfoLogement = DataLogement.find((info) => info.id === id);

  return (
    <>
      <Header />
      <Defilement IInfoLogement={InfoLogement} />

      <DessusCollapse IInfoLogement={InfoLogement} />

      <div className='collapse-total'>
        <Collapse TTitre='Description' IInfoLogement={InfoLogement} />
        <Collapse TTitre='Equipments' IInfoLogement={InfoLogement} />
      </div>
      <Footer />
    </>
  )
}

export default Logement
