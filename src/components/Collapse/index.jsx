
//v- packages
import React, { useState } from 'react';

//v- styles
import '../../20_styles/Collapse.css'

//v- images
import flècheHaut from '../../10_images/flèche_vers_le_haut.png'
import flècheBas from '../../10_images/flèche_vers_le_bas.png'

//v- fonction
function Collapse(props) {

  //v- récupération data via props
  const CollapseTitre = props.TTitre
  const InfoLogement = props.IInfoLogement

  //v- variable useState 
  const [toggle, setToggle] = useState(false)

  //v- variable divers
  let CollapseColor = ''
  let CollapseContent = ''

  let CollapseContentAff = ''

  if (CollapseTitre === 'Description') {

    CollapseColor = 'collapse-color-description'
    CollapseContentAff = "collapse-content-description"

    CollapseContent = InfoLogement.description


    return (
      <>
        <div className="collapse-block">
          <button className={CollapseColor}
            onClick={() => setToggle(!toggle)}>
            <div className="collapse-header">
              {CollapseTitre}
            </div>
            <img
              className="collapse-color-flèche"
              src={toggle ? flècheBas : flècheHaut}
              alt="flèche" />
          </button>

          {toggle && (
            <p className={CollapseContentAff}>
              {CollapseContent}
            </p>
          )}
        </div>

      </>

    );
  }

  if (CollapseTitre === 'Equipments') {

    CollapseColor = 'collapse-color-equipments'
    CollapseContentAff = "collapse-content-equipments"

    CollapseContent = InfoLogement.equipments
    const listEquipment = CollapseContent.map((poub) => <li>{poub}</li>)

    return (
      <>
        <div className="collapse-block">
          <button className={CollapseColor}
            onClick={() => setToggle(!toggle)}>
            <div className="collapse-header">
              {CollapseTitre}
            </div>
            <img
              className="collapse-color-flèche"
              src={toggle ? flècheBas : flècheHaut}
              alt="flèche" />
          </button>

          {toggle && (
            <ul className={CollapseContentAff}>
              {listEquipment}
            </ul>
          )}
        </div>

      </>

    );
  }
}

export default Collapse
