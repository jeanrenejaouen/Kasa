import React from "react"
import { useParams } from 'react-router-dom'
/* import Logements from '../../data/fiches-logement.json' */
import { useFetchData } from "../../hookFetch/useFetchData.js"
import LogementHeader from '../../components/logementHeader/logementHeader.jsx'
import LogementSlideShow from '../../components/logementSlideShow/logementSlideShow.jsx'
import LogementDescription from '../../components/logementDescription/logementDescription.jsx'
import Erreur from '../../pages/erreur/erreur.jsx'
import './_fichelogement.scss'

function Fichelogement() {
    
    const Logements = useFetchData(`/fiches-logement.json`)
    
    // Récupére l'identifiant de l'appartement actuel passé dans l'url et le stocke dans idLogement
    const idLogement = useParams("id").id

    /* inclure dans un tableau "currentApartment" uniquement l'appartement avec l'identifiant identique à
     l'identifiant récupéré ci-dessus (idLogement) */
    const currentApartment = Logements.filter(item => item.id === idLogement);

    // si aucun appartement dans la table "currentApartment", appelez le composant "Erreur"
    if (currentApartment.length === 0) {
        return (
            <Erreur />
        )
    }

    return (
        // appeler les 3 composants pour construire la "fichelogement"
        <div className="ficheLogement">
            {/* passe les images du premier appartement de votre liste d'appartements currentApartment 
            en tant que propriété pictures au composant LogementSlideShow. Le composant LogementSlideShow
             affichera ensuite un diaporama de ces images. */}
            <LogementSlideShow pictures={currentApartment[0].pictures} />
            <LogementHeader currentApartment={currentApartment[0]} />
            <LogementDescription currentApartment={currentApartment[0]} />
        </div>
    )
 }

 export default Fichelogement