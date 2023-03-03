
// v- packages
import { Link } from 'react-router-dom'
import React, { useState } from 'react';
// import { NavLink } from 'react-router-dom'

// import styled from 'styled-components'

import { useParams } from "react-router-dom";

//v- Data 
import { DataLogement } from '../../30_data'

//v- styles
// import { Footer00 } from './styles'
import '../../20_styles/Defilement.css'

// v- images
import flèche_vers_la_gauche from '../../10_images/flèche_vers_la_gauche.png'
import flèche_vers_la_droite from '../../10_images/flèche_vers_la_droite.png'


function Defilement() {

  //  Déclare une nouvelle variable d'état, 
  //  que l'on va appeler « count »  
  let [count, setCount] = useState(0)

  if (count < 0) { count = 4 }
  if (count > 4) { count = 0 }

  const { id } = useParams();
  const InfoLogement = DataLogement.find((info) => info.id === id);

  let ii = count + 1

  const image = InfoLogement.pictures[count]

  const numeroCourant = ii.toString()

  let numeroFin = InfoLogement.pictures.length
  numeroFin = numeroFin.toString()

  console.log(numeroCourant)
  console.log(numeroFin)

  return (
    <>
      <div className="defilement-corps">
        <img className="defilement-image" src={image} alt={InfoLogement.description[count]} />

        <h1 className="defilement-texte"> {InfoLogement.id}</h1>

        {/* fleche de gauche */}
        <Link className="defilement-fond" to={`/FicheLogement/${InfoLogement.id}`}>
          <img className="defilement-gauche" src={flèche_vers_la_gauche}
            alt={InfoLogement.description} onClick={() => setCount(count - 1)} />
        </Link>

        {/* fleche de droite */}
        <Link className="defilement-fond" to={`/FicheLogement/${InfoLogement.id}`}>
          <img className="defilement-droite" src={flèche_vers_la_droite}
            alt={InfoLogement.description} onClick={() => setCount(count + 1)} />
        </Link>

        <h5 className="defilement-numero"> {numeroCourant}/{numeroFin}</h5>

      </div >

    </>
  )
}

export default Defilement
