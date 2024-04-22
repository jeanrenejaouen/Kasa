import React from "react"
import { useParams } from 'react-router-dom'
import Logements from '../../data/fiches-logement.json'
import LogementHeader from '../../components/logementHeader/logementHeader.jsx'
import LogementSlideShow from '../../components/logementSlideShow/logementSlideShow.jsx'
import LogementDescription from '../../components/logementDescription/logementDescription.jsx'
import Erreur from '../../pages/erreur/erreur.jsx'
import '../../style.css'

function Fichelogement() {

    // Retrieve the id of the current Apartment
    const idLogement = useParams("id").id

    // include in a table "currentApartment" only apartment with the id retrieved above 
    const currentApartment = Logements.filter(item => item.id === idLogement);

    // if no apartment in the table "currentApartment", call component "Erreur"
    if (currentApartment.length === 0) {
        return (
            <Erreur />
        )
    }

    return (
        // call the 3 components to build the "fichelogement"
        <div className="ficheLogement">
            <LogementSlideShow pictures={currentApartment[0].pictures} numberPhotos={currentApartment[0].pictures.length} />
            <LogementHeader currentApartment={currentApartment[0]} />
            <LogementDescription currentApartment={currentApartment[0]} />
        </div>
    )
 }

 export default Fichelogement