import React from "react"
import Banner from '../../components/banner/banner.jsx'
import Gallery from '../../components/gallery/gallery.jsx'
import AccueilImage from '../../assets/images/Accueil_image.jpg'
import './_accueil.scss'

function Accueil() {
  return (
    <>
        <Banner image={AccueilImage} altText="Banner" text="Chez vous, partout et ailleurs"/>
        <Gallery/>
    </>
    )
  }
  
  export default Accueil