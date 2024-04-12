import React from "react"
import Logements from '../data/fiches-logement.json'
import Card from './card'

function Gallery() {
    //afficher une galerie avec tous les appartements provenant de la base de données JSON
    //pour chaque appartement rendre un article "cliquable"
    //se connecter au composant "fichelogement/id"
    //Le composant "Carte" est appelé avec 2 paramètres (une image et un titre)
    return (
        <div>
            {Logements.map((logement) => {
               return (
                    <article key={logement.id}>
                        <Card image={logement.cover} title={logement.title} />
                    </article>
               );                             
        
            })}

        </div>
    );
};

export default Gallery