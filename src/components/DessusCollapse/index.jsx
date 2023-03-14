
//v- packages
import React from 'react';

//v- styles
import '../../20_styles/DessusCollapse.css'

//v- images
import EtoileGrise from '../../10_images/étoile_grise.png'
import EtoileRouge from '../../10_images/étoile_rouge.png'
import foto from '../../10_images/logo_kasa.png'


//v- fonction
function DessusCollapse(props) {

  //v- récupération data via props

  const InfoLogement = props.IInfoLogement

  //v- variable divers

  const HostName = InfoLogement.host.name
  const Hostpicture = <img className="dessus-photo" src={InfoLogement.host.picture} alt='' />



  let Tags = ''
  Tags = InfoLogement.tags
  const listTags = Tags.map((poub) => <div className='dessus-tag'>{poub}</div>)

  const NbrEtoile = InfoLogement.rating
  let i = 0

  const etoilegrise = <img className="dessus-etoile" src={EtoileGrise}
    alt='étoile' />

  const etoilerouge = <img className="dessus-etoile" src={EtoileRouge}
    alt='étoile' />

  let listStar = [etoilegrise, etoilegrise, etoilegrise, etoilegrise, etoilegrise]

  for (i; i < NbrEtoile; i++) {
    listStar[i] = etoilerouge
  }

  return (
    <>
      <div className="dessus-corps">

        <div className="dessus-texte-tag">
          <h1 className="dessus-title">{InfoLogement.title} </h1>
          <h5 className="dessus-location">{InfoLogement.location} </h5>

          <div className='dessus-total-tag'>
            {listTags}
          </div>
        </div>

        <div className='dessus-nom-photo'>
          <div>
            {HostName}
            {Hostpicture}
          </div>

          <div>
            {listStar[0]}
            {listStar[1]}
            {listStar[2]}
            {listStar[3]}
            {listStar[4]}
          </div>
        </div>

      </div>
    </>
  )
}

export default DessusCollapse
