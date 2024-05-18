import React from 'react'
import Collapse from '../../components/collapse/collapse.jsx';
import './_logementDescription.scss'

function Fichelogementdescription ({ currentApartment }) {
    return (

        // Retourne 2 collapses (Description et Équipement) en appelant deux fois le composant "collapse"        
        <div className='ficheLogementDescription'>
                <div className="ficheLogemenDropdown">
                    {/* contenu généré à partir de la description de l'appartement en cours */}
                    <Collapse title="Description" content={currentApartment.description} />
                </div>
                <div className="ficheLogemenDropdown">
                {/* Ce code React implémente un composant Collapse avec un titre "Équipements" et un contenu 
                qui est généré à partir des équipements d'un appartement en cours.
                Le contenu est un élément de liste <li> pour chaque équipement de l'appartement, avec sa clé 
                représentée par l'index de l'équipement dans le tableau des équipements. */}
                    <Collapse title="Équipements" content={currentApartment.equipments.map((equipment, index) => (
                    // Une ligne <li> est créée pour chaque équipement
                    <li key={index}>{equipment}</li>
                    ))} />
                </div>
            </div>
    )
}

export default Fichelogementdescription