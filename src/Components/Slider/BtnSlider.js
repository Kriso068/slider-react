import React from 'react'
import leftArrow from './icons/left-arrow.svg'
import rightArrow from './icons/right-arrow.svg'


export default function BtnSlider({direction, moveSlide}) {

  return (
    <button 
        onClick={moveSlide}
        // on defini la class grace à la direction 
        className={direction === "next" ? "btn-slide next" : "btn-slide prev"}>
        {/* on defini la fleche aussi grace à la direction  */}
        <img src={direction === "next" ? rightArrow : leftArrow} alt="icone fleche"/>
    </button>
  )
}
