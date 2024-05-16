import React from 'react'
import Collapse from '../../components/collapse/collapse.jsx';
import '../../style.css'

function Fichelogementdescription ({ currentApartment }) {
    return (
        // Retourne 2 collapses (Description et Équipement) en appelant deux fois le composant "collapse"
        // Une ligne <li> est créée pour chaque équipement
        <div className='ficheLogementDescription'>
                <div className="ficheLogemenDropdown">
                    <Collapse title="Description" content={currentApartment.description} />
                </div>
                <div className="ficheLogemenDropdown">
                    <Collapse title="Équipements" content={currentApartment.equipments.map((equipment, index) => (
                    <li key={index}>{equipment}</li>
                    ))} />
                </div>
            </div>
    )
}

export default Fichelogementdescription