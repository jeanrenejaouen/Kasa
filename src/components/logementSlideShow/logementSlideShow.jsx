import React from 'react'
import { useState } from 'react'
import ArrowLeft from '../../assets/icons/arrow-left.svg'
import ArrowRight from '../../assets/icons/arrow-right.svg'
import '../../style.css'

function SlideShow(props) {

    // -slides contains all the pictures passed as property
    const slides = props.pictures

    // -set up the state variable "currentIndex" to store the index of current slide
    const [currentIndex, setCurrentIndex] = useState(0)

    // -isOneSlide is true if only there is only 1 slide in slides
    const isOneSlide = slides.length === 1

    // function called by a clic on the left arrow
    const goToPrevious = () => {
        // -isFirstSlide is true if currentIndex = 0
        const isFirstSlide = currentIndex === 0
        // -if the first slide is displayed : newIndex = index of the last slide 
        // if not : newIndex = currentIndex - 1
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
        // currentIndex is updated with the newIndex
        setCurrentIndex(newIndex)
    };
    
    // function called by a clic on the right arrow
    const goToNext = () => {
        // -isLastSlide is true if currentIndex = number of pictures - 1
        const isLastSlide = currentIndex === slides.length - 1
        // -if the last slide is displayed : newIndex = 0 
        // if not : newIndex = currentIndex + 1
        const newIndex = isLastSlide ? 0 : currentIndex + 1
        // currentIndex is updated with the newIndex
        setCurrentIndex(newIndex)
    };
      
    return (
        // -the image displayed is the one identified by currenIndex
        // -the arrows and the counter are displayed only if there are more than 1 slide in slides
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