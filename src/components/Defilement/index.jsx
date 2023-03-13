// v- packages
import { Link } from 'react-router-dom'
import React, { useState } from 'react';


//v- styles
import '../../20_styles/Defilement.css'

// v- images
import flèche_vers_la_gauche from '../../10_images/flèche_vers_la_gauche.png'
import flèche_vers_la_droite from '../../10_images/flèche_vers_la_droite.png'

function Defilement(props) {

  let [count, setCount] = useState(0)

  //v- récupération data via props
  const InfoLogement = props.IInfoLogement

  let numeroFin = InfoLogement.pictures.length
  numeroFin = numeroFin.toString()

  if (count >= numeroFin) { count = 0 }
  if (count < 0) { count = numeroFin - 1 }

  // console.log("count: ", count, "  numerofin:", numeroFin)

  let masquage = "defilement-avec-masquage"
  if (numeroFin > 1) { masquage = "defilement-sans-masquage" }

  const image = InfoLogement.pictures[count]

  return (
    <>
      <div className="defilement-corps">
        <img className="defilement-image" src={image} alt={InfoLogement.description[count]} />

        <div className={masquage}>

          <div className="defilement-flèche">
            {/* fleche de gauche */}
            <Link to={`/FicheLogement/${InfoLogement.id}`}>
              <img className="defilement-gauche" src={flèche_vers_la_gauche}
                alt={InfoLogement.description} onClick={() => setCount(count - 1)} />
            </Link>

            {/* <div className="defilement-milieux">Toto</div> */}

            {/* fleche de droite */}
            <Link to={`/FicheLogement/${InfoLogement.id}`}>
              <img className="defilement-droite" src={flèche_vers_la_droite}
                alt={InfoLogement.description} onClick={() => setCount(count + 1)} />
            </Link>
          </div>

          {/* valeur courante / nombre total  */}
          <h5 className="defilement-numero"> {count + 1}/{numeroFin}</h5>

        </div>

      </div >
    </>
  )
}

export default Defilement
