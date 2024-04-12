import React from "react"


function Card ({image, title}) {
    return (
        // retourner une carte avec image, titre et superposition
        <div className="card">
            <img src={image} alt={title}/>           
            <p>{title}</p>
        </div>
    )
}
  
  export default Card