import React from 'react'
import Collapse from '../../components/collapse/collapse.jsx';
import '../../style.css'

function Fichelogementdescription ({ currentApartment }) {
    return (
        // -render 2 collapse (Description and Equipment) by calling the component "collase" twice
        // -a line <li> is created for each piece of equipment
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