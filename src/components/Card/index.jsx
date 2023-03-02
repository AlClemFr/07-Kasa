// import PropTypes from 'prop-types'

// import styled from 'styled-components'

//v- Data 
import '../../20_styles/Card.css'
// import DataLogement from '../../30_Data/'


const title = "Appartement cosy qdlkfjkepfjopqsdjfpqosjufdpqjd"
const cover = "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg"
const description = "Votre maison loin de chez vous. Que vous veniez de l'autre bout du monde, ou juste de quelques stations de RER, vous vous sentirez chez vous dans notre appartement."

function Card() {
    return (

        <div className='card-total'>

            <a href="iuiu" className="card-individuel">
                <img className="card-cover" src={cover} alt={description} />
                <h1 className='card-titre'>{title}</h1>
            </a>

            <a href="iuiu" className="card-individuel">
                <img className="card-cover" src={cover} alt={description} />
                <h1 className='card-titre'>{title}</h1>
            </a>


            <a href="iuiu" className="card-individuel">
                <img className="card-cover" src={cover} alt={description} />
                <h1 className='card-titre'>{title}</h1>
            </a>

            {/* <a href="iuiu" className="card-individuel">
                <img className="card-cover" src={cover} alt={description} />
                <h1 className='card-titre'>{title}</h1>
            </a>

            <a href="iuiu" className="card-individuel">
                <img className="card-cover" src={cover} alt={description} />
                <h1 className='card-titre'>{title}</h1>
            </a>


            <a href="iuiu" className="card-individuel">
                <img className="card-cover" src={cover} alt={description} />
                <h1 className='card-titre'>{title}</h1>
            </a> */}


        </div>






    )
}

export default Card