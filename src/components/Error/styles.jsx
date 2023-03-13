// v- packages
import styled from 'styled-components'


/* 404 */
const D404Chiff = styled.h1`

position: absolute;

width: 597px;
height: 263px;

left: 30%;
top: 10%;

font - family: 'Montserrat';
font - style: normal;
font - weight: 700;
font - size: 288px;

line - height: 142.6 %;

display: flex;
align - items: center;
text - align: center;

color: #FF6060;

margin-top:164px;
`


/* Oups! La page que vous demandez n'existe pas. */
const D404Txt = styled.h2`

position: absolute;

/* left: 20.49 %;
right: 18.96 %;
top: 59.18 %;
bottom: 35.84 %; */

top:60%;
left: 25%;

font - family: 'Montserrat';
font - style: normal;
font - weight: 500;
font - size: 36px;
line - height: 142.6 %;
/* or 51px */
display: flex;
align - items: flex - end;

color: #FF6060;

margin-top:100px;`


/* Retourner sur la page d’accueil */
const D404Ret = styled.a`

position: absolute;
left: 40.14%;
right: 40.14%;
top: 81.93%;
bottom: 15.53%;

font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 142.6%;
/* identical to box height, or 26px */
display: flex;
align-items: flex-end;
text-decoration-line: underline;

color: #FF6060;

width: 400px;
margin-top:100px;`

const D404Foot = styled.div`
position: absolute;
width:100%;

margin-top:800px;

`

export { D404Chiff, D404Txt, D404Ret, D404Foot }