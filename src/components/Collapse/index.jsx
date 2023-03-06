
// v- packages
import React from 'react';
import useCollapse from 'react-collapsed';

//v- styles
// import { Footer00 } from './styles'
import '../../20_styles/Collapse.css'

// v- images
// import flèche_vers_la_gauche from '../../10_images/flèche_vers_la_gauche.png'
// import flèche_vers_la_droite from '../../10_images/flèche_vers_la_droite.png'


function Collapse() {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

  return (

    <>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <h1>Testo COLLAPSE</h1>

      {/* <div className="collapsible">
        <div className="header" {...getToggleProps()}>
          {isExpanded ? 'Collapse' : 'Expand'}
        </div>
        <div {...getCollapseProps()}>
          <div className="content">
            Now you can see the hidden content. <br /><br />
            Click again to hide...
          </div>
        </div>
      </div> */}
    </>
  );
}

export default Collapse
