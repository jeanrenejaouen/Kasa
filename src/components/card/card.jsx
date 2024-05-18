import React from "react"
import './_card.scss'

function Card ({image, title}) {
    return (
        // retourner une carte avec props image, title
        //Les données image et title proviennent du composant parent gallery
        <div className="card">
            <img className="card-Img" src={image} alt={title}/>            
            <p className="card-Title">{title}</p>         
        </div>
    )
}
  
  export default Card