import React from 'react'
import { useState } from 'react'
import ArrowLeft from '../../assets/icons/arrow-left.svg'
import ArrowRight from '../../assets/icons/arrow-right.svg'
import './_logementSlideShow.scss'

function SlideShow(props) {

    // Slides contient toutes les images passées en propriété
    const slides = props.pictures

    // configurer la variable d'état "currentIndex" pour stocker l'index de la diapositive en cours
    const [currentIndex, setCurrentIndex] = useState(0)

    // isOneSlide est vrai s'il n'y a qu'une seule diapositive dans les diapositives
    const isOneSlide = slides.length === 1

    // fonction appelée par un clic sur la flèche gauche
    const goToPrevious = () => {
        // isFirstSlide est vrai si currentIndex = 0
        const isFirstSlide = currentIndex === 0
        // si la première slide est affichée : newIndex = index de la dernière slide 
        // sinon : newIndex = currentIndex - 1
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
        // currentIndex est mis à jour avec le newIndex
        setCurrentIndex(newIndex)
    };
    
    // fonction appelée par un clic sur la flèche droite
    const goToNext = () => {
        // Si LastSlide est vrai si currentIndex = nombre d'images - 1
        const isLastSlide = currentIndex === slides.length - 1
        // si la dernière slide est affichée : newIndex = 0
        // sinon : newIndex = currentIndex + 1
        const newIndex = isLastSlide ? 0 : currentIndex + 1
        // currentIndex est mis à jour avec le newIndex
        setCurrentIndex(newIndex)
    };
      
    return (
        // L'image affichée est celle identifiée par currentIndex
        // Les flèches et le compteur s'affichent uniquement s'il y a plus d'une diapositive dans le carroussel
        <div className="sliderStyle">
            <div className='slideStyle'>
                <img src={slides[currentIndex]} alt="Slide"></img>
            </div>

            <div onClick={goToPrevious} className="arrowStyle leftArrowStyle">
                {!isOneSlide ? <img src={ArrowLeft} alt="Chevron Left"></img> : ''}
            </div>

            <div onClick={goToNext} className="arrowStyle rightArrowStyle">
                {!isOneSlide ? <img src={ArrowRight} alt="Chevron Right"></img> : ''}
            </div>

            <div className="slideCounter">
                {!isOneSlide ? <span className='slide_counter'>{currentIndex + 1} / {slides.length}</span> : ''}
            </div>
        </div>
    )
}

export default SlideShow