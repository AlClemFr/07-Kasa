
// v- packages
import React from 'react';
import useCollapse from 'react-collapsed';
// import { useParams } from "react-router-dom";

//v- styles
// import { Footer00 } from './styles'
import '../../20_styles/Collapse.css'

// v- images
// import flèche_vers_la_gauche from '../../10_images/flèche_vers_la_gauche.png'
// import flèche_vers_la_droite from '../../10_images/flèche_vers_la_droite.png'


function Collapse(Titre, TitreBis) {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse()

  // const { id } = useParams();
  // const InfoLogement = DataLogement.find((info) => info.id === id)

  // {InfoLogement.description}

  // const CollapseTitre = 'Description'
  const CollapseTitre = Titre.Titre
  console.log("Titre out: ", CollapseTitre)

  const CollapseChoixCss = TitreBis.TitreBis
  console.log("choix css out: ", CollapseChoixCss)

  let CollapseColor = ''

  if (CollapseTitre === 'Description') {
    // console.log("Titre in: ", CollapseTitre)
    CollapseColor = 'collapse-color-description'
  }

  if (CollapseTitre === 'Equipment') {
    // console.log("Titre in: ", CollapseTitre)
    CollapseColor = 'collapse-color-equipment'
  }

  // }

  let CollapseContent = 'Now you can see the hidden content.'
  const CollapseEspace = <br></br>
  CollapseContent = CollapseContent +
    CollapseContent +
    CollapseContent +
    CollapseContent +
    CollapseContent +
    CollapseContent +
    CollapseContent +
    { CollapseEspace } + 'Click again to hide...'

  return (
    <>
      {/* <h1>Testo COLLAPSE Index</h1> */}

      {/* <div className="collapsible"> */}
      {/* <div className="collapse-total"> */}
      <div className={CollapseColor} >
        <div className="collapse-header" {...getToggleProps()}>
          {/* {isExpanded ? 'Collapse' : 'Expand'} */}
          {isExpanded ? CollapseTitre + 1 : CollapseTitre + 0}
        </div>

        <div {...getCollapseProps()}>
          <div className="collapse-content">
            {/* Now you can see the hidden content. <br /><br /> */}
            {/* Click again to hide... */}
            <br></br>
            {CollapseContent}
          </div>
        </div>
        {/* </div> */}
        {/* <br></br>
      <br></br>
      <br></br>
      <br></br> */}
      </div>
    </>
  );
}

export default Collapse
