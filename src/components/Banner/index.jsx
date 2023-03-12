
// v- packages
// import React from 'react'

//v- styles
import '../../20_styles/Banner.css'

// v- images
import bannerAccueil from '../../10_images/banner_accueil_cut.png'
import bannerApropos from '../../10_images/banner_apropos_cut.png'


function BannerAccueil(props) {

  const BannerTitre = props.BBannerTitre

  // console.log('Titre= ', BannerTitre)

  let Logo = ''
  let Texte = ''

  if (BannerTitre === "Accueil") {
    Logo = bannerAccueil
    Texte = 'Chez vous, partout et ailleurs'
  }

  if (BannerTitre === "Apropos") {
    Logo = bannerApropos
    Texte = ''
  }

  return (
    <div className="banner-corps">
      <img className="banner-image" src={Logo} alt="Logo Kasa" />
      <h1 className="banner-texte">{Texte}</h1>
    </div >
  )
}

export default BannerAccueil
