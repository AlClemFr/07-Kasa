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
/* position: absolute; */
/* width: 1240px; */
width: 90%;
height: 68px;
/* left: 100px; */
margin-top: 40px;
margin-left:5%;
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

display: flex;
align-items: flex-end;
text-align: right;

/* left: 71.6%; */
/* left: 75%; */

right: 18.96%;
top: 5.57%;
bottom: 89%;

font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 24px;
line-height: 142.6%;

/* text-decoration: none; */
text-decoration-line: none;

color: #FF6060;
/* color: blue; */

`

/* A Propos */
const HeaderAbout = styled(Link)`
position: absolute;

display: flex;
align-items: flex-end;
text-align: right;

/* left: 85%; */
/* left: 75%; */

right: 6%;
top: 6.57%;
bottom: 89%;

font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 24px;
line-height: 142.6%;
/* or 34px */

/* text-decoration: none; */
text-decoration-line: underline;

color: #FF6060;
/* color: blue; */

`

export { HeaderLink, Header00, HeaderAbout, HeaderAccueil }