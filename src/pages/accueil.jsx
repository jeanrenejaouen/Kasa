import React from "react"
import Banner from '../components/banner.jsx'
import Gallery from '../components/gallery.jsx'
import AccueilImage from '../assets/images/Accueil_image.jpg'
import '../style.css'

function Accueil() {
  return (
    <>
        <Banner image={AccueilImage} altText="Banner" text="Chez vous, partout et ailleurs"/>
        <Gallery/>
    </>
    )
  }
  
  export default Accueil