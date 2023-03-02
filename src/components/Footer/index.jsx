
// v- packages
// import { Link } from 'react-router-dom'
// import { NavLink } from 'react-router-dom'

// import styled from 'styled-components'

//v- styles
import '../../20_styles/Footer.css'

// v- images
import Logo from '../../10_images/logo_kasa_blanco_fond_noir.png'


function Footer() {
  return (
    <div className="footer-body">
      <img className="footer-logo" src={Logo} alt="Logo Kasa" />
      <h5 className="footer-texte">© 2020 Kasa. All rights reserved</h5>
    </div >
  )
}

export default Footer
