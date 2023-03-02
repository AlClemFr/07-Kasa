
//v- packages
import { NavLink } from 'react-router-dom'

//v- styles
import { D404Chiff, D404Txt, D404Ret } from './styles';

// v- chemin components
import Header from '../../components/Header'
import Footer from '../../components/Footer'

function Error() {
  return (

    <>
      <Header />
      <D404Chiff style={{ fontSize: 250 }} >404</D404Chiff>
      <D404Txt>Oups! La page que vous demandez n'existe pas.</D404Txt>
      < NavLink to='/'>
        <D404Ret>Retourner sur la page d'accueil</D404Ret>
      </NavLink>
      <Footer />
    </>
  )
}

export default Error





