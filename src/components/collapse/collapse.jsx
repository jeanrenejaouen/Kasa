import React from "react"
import { useRef, useState } from "react"
import arrowBack from '../../assets/icons/arrow_back.svg'
import './_collapse.scss'

function Collapse(props) { /* arguments obtenus des composants parents */
/* configurez la variable d'état "isExpanded" pour enregistrer si le collapse est développé ou non */
    const [isExpanded, setIsExpanded] = useState(false);

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
            <div onClick={toggleIsExpanded}>
                {isExpanded ? <img src={arrowBack} alt="Chevron down"></img> : <img className= "rotate" src={arrowBack} alt="Chevron up"></img>}                
            </div>
        </div>            

        <div onClick={toggleIsExpanded} className={isExpanded ? 'collapseExpandOn' : 'collapseExpandOff'}>
            <p ref={ref}>{props.content}</p>
        </div>
    </>
  );
};

export default Collapse