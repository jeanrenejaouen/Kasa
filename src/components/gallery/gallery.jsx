import React from "react"
import { NavLink } from "react-router-dom"
/* Import du hook personnalisé useFetchData */
import { useFetchData } from "../../hookFetch/useFetchData.js"
/* import Logements from '../../data/fiches-logement.json' */
import Card from '../card/card'
/* import '../../style.css' */
import './_gallery.scss'

function Gallery() {

    const Logements = useFetchData(`/fiches-logement.json`)
    
    //afficher une galerie avec tous les appartements provenant de la base de données JSON
    //pour chaque appartement rendre un article "cliquable"
    //se connecter au composant "fichelogement/id"
    //Le composant "Carte" est appelé avec 2 paramètres (une image et un titre)
    return (
        <div className="gallery">
            {Logements.map((logement) => (
               
                    <article key={logement.id}>                        
                        <NavLink to={`/fichelogement/${logement.id}`}>
                            <Card image={logement.cover} title={logement.title} />
                        </NavLink>
                    </article>                                            
        
            ))}

        </div>
    );
};

export default Gallery