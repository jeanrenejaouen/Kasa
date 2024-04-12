import React from "react"


function Banner(props) {
    return (
        // afficher une bannière avec image, texte et superposition
        <div className="banner">
            <img src={props.image} alt={props.altText} />
            <p className="banner-text">{props.text}</p>
        </div>
    )
}

export default Banner