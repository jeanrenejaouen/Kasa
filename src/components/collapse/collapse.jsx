import React from "react"
import { useRef, useState } from "react"
import arrowBack from '../../assets/icons/arrow_back.svg'
import './_collapse.scss'

function Collapse(props) { /* arguments obtenus des composants parents */
/* configurez la variable d'état "isExpanded" pour enregistrer si le collapse est développé ou non */
/* Ce code React crée un état local dans un composant en utilisant le Hook useState.
La variable isExpanded stocke la valeur actuelle de l'état, qui est initialisée à false. */
/* La fonction setIsExpanded est utilisée pour mettre à jour la valeur de isExpanded. Lorsque setIsExpanded est appelée,
 elle prend en paramètre une nouvelle valeur pour isExpanded et met à jour l'état avec cette nouvelle valeur. */
    const [isExpanded, setIsExpanded] = useState(false);
    /* ici par défaut le collapse n'est pas développé (false) */

/* fonction inversant l'état de la variable "isExpanded" lorsque l'on clique sur la flèche du collapse*/
    const toggleIsExpanded = () => {
    setIsExpanded((isExpanded) => !isExpanded);
    }

/* créer une "ref" connectée au paragraphe entourant "props.content" */
/* useRef permet de conserver la référence d'un élément du DOM pour en tirer quelques informations */
    const ref = useRef(null);

    return (
    /* événement onClick sur la flèche "arrowBack" pour appeler la fonction "toggleIsExpanded" après chaque clic */
    /* la rotation de la flèche (chevron) est appliquée en fonction de la valeur "isExpanded" */
    /* attribut de style en ligne utilisé pour attribuer la hauteur */
       
    <>
        <div className="collapseTitle">
            <h2>{props.title}</h2>
            {/* condition ternaire pour afficher un élément différent en fonction d'une variable. 
            Au clic sur un élément, la fonction toggleIsExpanded est appelée. Si la variable isExpanded est true, 
            alors une image avec la source arrowBack et l'attribut alt "Chevron down" est affichée. 
            Sinon, une autre image avec la classe "rotate", la source arrowBack et l'attribut alt "Chevron up" est affichée. */}
            <div onClick={toggleIsExpanded}>
                {isExpanded ? <img src={arrowBack} alt="Chevron down"></img> : <img className= "rotate" src={arrowBack} alt="Chevron up"></img>}                
            </div>
        </div>            
        {/* Lorsqu'un élément est cliqué, la fonction toggleIsExpanded sera appelée.
        L'élément aura la classe CSS "collapseExpandOn" si isExpanded est vrai, sinon il aura la classe CSS
         "collapseExpandOff". */}
        <div onClick={toggleIsExpanded} className={isExpanded ? 'collapseExpandOn' : 'collapseExpandOff'}>
        {/* crée un élément <p> avec un attribut ref qui fait référence à une variable ref et affiche le contenu spécifié 
        dans props.content. L'élément <p> affichera donc le contenu passé en tant que prop content. */}
            <p ref={ref}>{props.content}</p>
        </div>
    </>
  );
};

export default Collapse