
// v- packages
// import React from 'react';
import React, { useState } from 'react';
//j- a supprimer prochainement
// import useCollapse from 'react-collapsed';
// import { useParams } from "react-router-dom";

//v- styles
// import { Footer00 } from './styles'
import '../../20_styles/Collapse.css'

// v- images
import flècheHaut from '../../10_images/flèche_vers_le_haut.png'
import flècheBas from '../../10_images/flèche_vers_le_bas.png'


function Collapse(Titre, TitreBis) {
  // const { getCollapseProps, getToggleProps, isExpanded } = useCollapse()

  // const { id } = useParams();
  // const InfoLogement = DataLogement.find((info) => info.id === id)

  // {InfoLogement.description}

  // const CollapseTitre = 'Description'
  const CollapseTitre = Titre.Titre
  // console.log("Titre out: ", CollapseTitre)

  const CollapseChoixCss = TitreBis.TitreBis
  // console.log("choix css out: ", CollapseChoixCss)

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


  const [toggle, setToggle] = useState(true)
  const [isOpen, setIsOpen] = useState(false)


  let CollapseContentAff = ''
  if (toggle === true) {
    CollapseContentAff = "collapse-content-out"
  }

  if (toggle === false) {
    CollapseContentAff = "collapse-content-in"
  }

  // console.log(toggle)


  return (
    <>

      {/* <div className={CollapseColor} > */}


      {/* <div className="collapse-header" {...getToggleProps()}>
          {isExpanded ? CollapseTitre + 1 : CollapseTitre + 0}
        </div>

        <div {...getCollapseProps()}>
          <div className="collapse-content">
            <br></br>
            {CollapseContent}
          </div>
        </div> */}

      {/* <br></br> */}

      {/* Foctionnel */}
      {/* <div className="collapse-toto">
        <button className={CollapseColor}
          onClick={() => setToggle(!toggle)}>
          <div className="collapse-header">
            {CollapseTitre + 0}
          </div>
        </button>

        {toggle && (
          <p className={CollapseContentAff}>
            {CollapseContent}
          </p>
        )}
      </div> */}

      {/*j- teste ok*/}
      <div className="collapse-block">
        <button className={CollapseColor}
          onClick={() => setIsOpen(!isOpen)}>
          <div className="collapse-header">
            {CollapseTitre + 1}
          </div>
          <img
            className="collapse-color-flèche"
            src={isOpen ? flècheBas : flècheHaut}
            // src={flècheHaut}

            alt="flèche" />
        </button>

        {isOpen && (
          <p className={CollapseContentAff}>
            {CollapseContent}
          </p>
        )}
      </div>

    </>
  );
}

export default Collapse
