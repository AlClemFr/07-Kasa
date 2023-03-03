//v- Package 
import { Link } from "react-router-dom";

//v- style 
import '../../20_styles/Card.css'

//v- Data 
import { DataLogement } from '../../30_data'

function CardTotal() {
    return (
        <div className='card-total'>
            {DataLogement.map(logement =>

                <Link className="card-individuel" to={`/FicheLogement/${logement.id}`}>
                    <img className="card-cover" src={logement.cover} alt={logement.description} />
                    <h1 className='card-titre'>{logement.title}</h1>
                </Link>

            )}
        </div >
    )
}

export default CardTotal
