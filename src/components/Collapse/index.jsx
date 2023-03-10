
//v- packages
import React, { useState } from 'react';

//v- styles
import '../../20_styles/Collapse.css'

//v- images
import flècheHaut from '../../10_images/flèche_vers_le_haut.png'
import flècheBas from '../../10_images/flèche_vers_le_bas.png'


// function nbrEquip(props) {

//   const InfoLogement = props.IInfoLogement
//   const CollapseContent = InfoLogement.equipments

//   return (
//     <>
//       {CollapseContent.map(content =>
//         <li> {CollapseContent.content}</li>

//       )}
//     </>
//   )
// }

// function CardTotal() {
//   return (
//     <div className='card-total'>
//       {DataLogement.map(logement =>

//         <Link className="card-individuel" to={`/FicheLogement/${logement.id}`}>
//           <img className="card-cover" src={logement.cover} alt={logement.description} />
//           <h1 className='card-titre'>{logement.title}</h1>
//         </Link>

//       )}
//     </div >
//   )
// }




// const tutu = <>
//   <li> momo</li>
//   <li> toto</li>
//   <li> popo</li>
//   <li> lolo</li>
//   <li> gogo</li>
// </>

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

  // if (toggle === true) {
  //   CollapseContentAff = "collapse-content-out"
  // }

  // if (toggle === false) {
  //   CollapseContentAff = "collapse-content-in"
  // }

  // const numeroFin = InfoLogement.CollapseContent.length
  // console.log("numero fin: ", numeroFin, " jzejejejej")

  // const tutu = function nbreEquip(props) {

  //   const InfoLogement = props.IInfoLogement
  //   const CollapseContent = InfoLogement.equipments
  //   return (
  //     <>
  //       {/* <li> {CollapseContent[0]}</li>
  //       <li> {CollapseContent[1]}</li>
  //       <li> {CollapseContent[2]}</li>
  //       <li> {CollapseContent[3]}</li> */}
  //       <li> momo</li>
  //       <li> toto</li>
  //       <li> popo</li>
  //       <li> lolo</li>
  //       <li> gogo</li>
  //     </>
  //   )
  // }



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
