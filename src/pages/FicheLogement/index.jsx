// v- packages
import React from 'react'
import { useParams } from "react-router-dom";

// v- chemin components
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Defilement from '../../components/Defilement'
import Collapse from '../../components/Collapse'


//v- Data 
import { DataLogement } from '../../30_data_logement'



//v- styles
// import { Footer00 } from './styles'
import '../../20_styles/Collapse.css'




function FicheLogement() {

  const { id } = useParams();
  const InfoLogement = DataLogement.find((info) => info.id === id);
  console.log("infologement 00 : ", InfoLogement)

  return (
    <>
      <Header />
      <Defilement IInfoLogement={InfoLogement} />

      {/* <Collapse Titre='Description' TitreBis='ChoixCss' /> */}
      <div className='collapse-total'>
        <Collapse TTitre='Description' IInfoLogement={InfoLogement} />
        <Collapse TTitre='Equipments' IInfoLogement={InfoLogement} />
      </div>


      {/* <Testo /> */}
      <Footer />
    </>
  )
}

export default FicheLogement
