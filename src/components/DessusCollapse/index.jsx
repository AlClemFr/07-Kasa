
//v- packages
import React from 'react';

//v- styles
import '../../20_styles/DessusCollapse.css'

//v- images
import EtoileGrise from '../../10_images/étoile_grise.png'
import EtoileRouge from '../../10_images/étoile_rouge.png'

//v- fonction
function DessusCollapse(props) {

  //v- récupération data via props

  const InfoLogement = props.IInfoLogement

  //v- variable divers

  // "name": "Nathalie Jean",
  // "picture": "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-12.jpg"

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
        <h1 className="dessus-title">{InfoLogement.title} </h1>
        <h5 className="dessus-location">{InfoLogement.location} </h5>

        <div className='dessus-total-tag'>
          {listTags}
        </div>

        <div>

          <div>
            {/* <img className="dessus-foto" src={InfoLogement.host.picture} alt='Photo de personne' /> */}
          </div>


          <div>
            {/* {nbrEtoiles} */}
            {listStar[0]}
            {listStar[1]}
            {listStar[2]}
            {listStar[3]}
            {listStar[4]}


            {/* <img className="dessus-etoile" src={EtoileRouge}
              alt='étoile' /> */}
          </div>
        </div>

      </div>
    </>
  )
}

export default DessusCollapse
