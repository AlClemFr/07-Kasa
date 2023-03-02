// v- packages
import styled from 'styled-components'
import { Link } from 'react-router-dom'


/* provioire shiny */
const HeaderLink = styled(Link)`
    padding: 15px;
    color: #8186a0;
    /* color: #F0F0; */
    text-decoration: none;
    font-size: 18px;
`

/* _Header. */
const Header00 = styled.nav`
position: absolute;
width: 1240px;
height: 68px;
left: 100px;
top: 40px;
`


// /* .LOGO */
// const HeaderLogo = styled.div`
// position: absolute;
// width: 0px;
// /* height: 68px; */
// `

/* Accueil */
const HeaderAccueil = styled(Link)`
position: absolute;
left: 71.6%;
left: 60%;

right: 18.96%;
top: 5.57%;
bottom: 91.11%;

font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 24px;
line-height: 142.6%;
/* or 34px */

display: flex;
align-items: flex-end;
text-align: right;
/* text-decoration: none; */
text-decoration-line: underline;

color: #FF6060;
/* color: blue; */

`

/* A Propos */
const HeaderAbout = styled(Link)`
position: absolute;
left: 85%;
left: 75%;

right: 6.94%;
top: 5.57%;
bottom: 91.11%;

font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 24px;
line-height: 142.6%;
/* or 34px */

display: flex;
align-items: flex-end;
text-align: right;
/* text-decoration: none; */
text-decoration-line: underline;

color: #FF6060;
/* color: blue; */


`

export { HeaderLink, Header00, HeaderAbout, HeaderAccueil }