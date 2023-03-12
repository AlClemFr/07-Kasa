
// v- packages
import { Link } from 'react-router-dom'
import React, { useState } from 'react';
// import useCollapse from 'react-collapsed';
// import { NavLink } from 'react-router-dom'

// import styled from 'styled-components'

// import { useParams } from "react-router-dom";

// v- Data 
// import { DataLogement } from '../../30_data'

//v- styles
// import { Footer00 } from './styles'
import '../../20_styles/Defilement.css'
// import '../../20_styles/Collapse.css'

// v- images
import flèche_vers_la_gauche from '../../10_images/flèche_vers_la_gauche.png'
import flèche_vers_la_droite from '../../10_images/flèche_vers_la_droite.png'


function Defilement(props) {


  // console.log("infologement 01 : ", props)
  //  Déclare une nouvelle variable d'état, 
  //  que l'on va appeler « count »  
  let [count, setCount] = useState(0)

  // let count = 0
  // const { getCollapseProps, getToggleProps, isExpanded } = useCollapse()

  //j- teste inhibition
  // const { id } = useParams();
  // const InfoLogement = DataLogement.find((info) => info.id === id);

  // const InfoLogement = InfoLogement
  //v- récupération data via props
  const InfoLogement = props.IInfoLogement

  let numeroFin = InfoLogement.pictures.length
  numeroFin = numeroFin.toString()

  if (count >= numeroFin) { count = 0 }
  if (count < 0) { count = numeroFin - 1 }

  // console.log("count: ", count, "  numerofin:", numeroFin)

  let masquage = "defilement-masquage"
  if (numeroFin > 1) { masquage = "" }

  // console.log("numero fin : ", numeroFin, "masquage:  ", masquage)

  const image = InfoLogement.pictures[count]

  return (
    <>
      <div className="defilement-corps">
        <img className="defilement-image" src={image} alt={InfoLogement.description[count]} />

        <h1 className="defilement-texte"> {"Fiche Logement = " + InfoLogement.id}</h1>

        <div className={masquage}>
          {/* fleche de gauche */}
          <Link to={`/FicheLogement/${InfoLogement.id}`}>
            <img className="defilement-gauche" src={flèche_vers_la_gauche}
              alt={InfoLogement.description} onClick={() => setCount(count - 1)} />
          </Link>

          {/* fleche de droite */}
          <Link to={`/FicheLogement/${InfoLogement.id}`}>
            <img className="defilement-droite" src={flèche_vers_la_droite}
              alt={InfoLogement.description} onClick={() => setCount(count + 1)} />
          </Link>

          {/* valeur courante / nombre total  */}
          <h5 className="defilement-numero"> {count + 1}/{numeroFin}</h5>
        </div>
      </div >
    </>
  )
}

export default Defilement
