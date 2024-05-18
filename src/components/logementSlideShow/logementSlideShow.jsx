import React from 'react'
import { useState } from 'react'
import ArrowLeft from '../../assets/icons/arrow-left.svg'
import ArrowRight from '../../assets/icons/arrow-right.svg'
import './_logementSlideShow.scss'

function SlideShow(props) {

    // Slides contient toutes les images passées en props
    const slides = props.pictures

    /* Ce code React crée un état local contenant une seule variable appelée currentIndex initialisée à la valeur 0.
     La fonction useState retourne un tableau contenant la valeur de l'état et une fonction pour la mettre à jour,
     qui est ici nommée setCurrentIndex. Ainsi, currentIndex contiendra la valeur actuelle de l'état et setCurrentIndex
     peut être utilisée pour mettre à jour cette valeur. */
    // configurer la variable d'état "currentIndex" pour stocker l'index de la diapositive en cours
    const [currentIndex, setCurrentIndex] = useState(0)

    // isOneSlide est vrai s'il n'y a qu'une seule diapositive dans les diapositives
    const isOneSlide = slides.length === 1

    // fonction appelée par un clic sur la flèche gauche Ligne 52
    const goToPrevious = () => {
        // isFirstSlide est vrai si currentIndex = 0
        const isFirstSlide = currentIndex === 0
        // si la première slide est affichée : newIndex = index de la dernière slide 
        // sinon : newIndex = currentIndex - 1
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
        // currentIndex est mis à jour avec le newIndex
        setCurrentIndex(newIndex)
    };
    
    // fonction appelée par un clic sur la flèche droite Ligne 58
    const goToNext = () => {
        // isLastSlide est vrai si currentIndex = nombre d'images - 1
        const isLastSlide = currentIndex === slides.length - 1
        // si la dernière slide est affichée : newIndex = 0
        // sinon : newIndex = currentIndex + 1
        const newIndex = isLastSlide ? 0 : currentIndex + 1
        // currentIndex est mis à jour avec le newIndex
        setCurrentIndex(newIndex)
    };
      
    return (
        // L'image affichée est celle identifiée par currentIndex        
        <div className="sliderStyle">
            <div className='slideStyle'>
                <img src={slides[currentIndex]} alt="Slide"></img>
            </div>
            
            {/* La fonction goToPrevious (Ligne 23) est appelée au clic sur la flèche gauche */}
            <div onClick={goToPrevious} className="arrowStyle leftArrowStyle">
                {/* La flèche de gauche s'affiche uniquement s'il y a plus d'une diapositive dans le carroussel */}
                {!isOneSlide ? <img src={ArrowLeft} alt="Chevron Left"></img> : ''}
            </div>

            {/* La fonction goToNext (Ligne 34) est appelée au clic sur la flèche droite */}
            <div onClick={goToNext} className="arrowStyle rightArrowStyle">
                {/* La flèche de droite s'affiche uniquement s'il y a plus d'une diapositive dans le carroussel */}
                {!isOneSlide ? <img src={ArrowRight} alt="Chevron Right"></img> : ''}
            </div>

            <div className="slideCounter">
            {/* Si isOneSlide est faux, alors il affiche un élément span contenant le texte 
            {currentIndex + 1} / {slides.length} qui représente le numéro de la diapositive actuelle sur 
            le nombre total de diapositives. Sinon, il n'affiche rien (une chaîne de caractères vide).
            + 1 car un tableau commence par 0 */}
                {!isOneSlide ? <span className='slide_counter'>{currentIndex + 1} / {slides.length}</span> : ''}
            </div>
        </div>
    )
}

export default SlideShow