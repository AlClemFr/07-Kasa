
// v- packages
// import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

// import styled from 'styled-components'

//v- styles
import { HeaderLink, Header00, HeaderAbout, HeaderAccueil } from './styles'
import '../../20_styles/Header.css'

// v- images
import Logo from '../../10_images/logo_kasa_210_68.png'

function Header() {
  return (
    // <nav>
    <Header00>
      <NavLink to="/">
        <img className="header-logo" src={Logo} alt="Logo Kasa" />
      </NavLink>

      {/* provisoire */}
      {/* <HeaderLink to="/error">Error</HeaderLink> */}

      {/* début kasa */}
      <HeaderAccueil to="/">Accueil</HeaderAccueil>
      <HeaderAbout to="/about">A Propos</HeaderAbout>

    </Header00 >
    // </nav>
  )
}

export default Header
