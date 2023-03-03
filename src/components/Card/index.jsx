// import PropTypes from 'prop-types'

// import styled from 'styled-components'

//v- Package 
import { Link } from "react-router-dom";

//v- Data 
import '../../20_styles/Card.css'
// import DataLogement from '../../30_Data/'
import { DataLogement } from '../../30_Data/'

let logementbis = "/FicheLogement"
// `/logement/${item.id}`

function CardTotal() {
    return (


        <div className='card-total'>

            {
                DataLogement.map(logement =>

                    <Link className="card-individuel" to={`/FicheLogement/${logement.id}`}>

                        {/* <a href={logementbis} className="card-individuel" > */}
                        {/* // <a href= /logement/${logement.id}`} className="card-individuel" > */}
                        <img className="card-cover" src={logement.cover} alt={logement.description} />
                        <h1 className='card-titre'>{logement.title}</h1>
                        {/* </a> */}
                    </Link>
                )
            }
        </div >
    )
}

export default CardTotal
