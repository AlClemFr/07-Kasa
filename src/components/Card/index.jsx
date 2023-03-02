// import PropTypes from 'prop-types'

// import styled from 'styled-components'

//v- Data 
import '../../20_styles/Card.css'
// import DataLogement from '../../30_Data/'
import { DataLogement } from '../../30_Data/'


function CardTotal() {
    return (
        <div className='card-total'>
            {/* <Card /> */}
            {
                DataLogement.map(logement =>

                    <a href="iuiu" className="card-individuel">
                        <img className="card-cover" src={logement.cover} alt={logement.description} />
                        <h1 className='card-titre'>{logement.title}</h1>
                    </a>
                )
            }
        </div>
    )
}

export default CardTotal
