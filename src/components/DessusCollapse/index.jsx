
//v- packages
import React from 'react';

//v- styles
import '../../20_styles/Collapse.css'


//v- fonction
function DessusCollapse(props) {

  //v- récupération data via props

  const InfoLogement = props.IInfoLogement

  //v- variable divers


  return (
    <>
      <div>
        <div>
          <h1>{InfoLogement.title} </h1>
          <h5>{InfoLogement.location} </h5>

          <h6>Tag0 Tag1 .....</h6>
        </div>

        <div>

          <p>Foto</p>

          <p>******</p>

        </div>

      </div>
    </>
  )
}









export default DessusCollapse
