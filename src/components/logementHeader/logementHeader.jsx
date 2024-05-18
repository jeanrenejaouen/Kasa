import React from 'react';
import './_logementHeader.scss';

function LogementHeader({ currentApartment }) {
      // host et name sont divisés par un espace dans un tableau appelé "name"
      const name = currentApartment.host.name.split(' ');

  return (
      // Itération avec "map" sur les tags et renvoie, pour chaque tag, un élément span
      // Une clé key est nécessaire pour identifier de manière unique un élément dans la liste
      <div className="logementHeader">
            <div className='logementTitle'>
                  <h1>{currentApartment.title}</h1>
                  <p>{currentApartment.location}</p>
                  <div className="logementTags">
                        {currentApartment.tags.map((tag) => (
                              <span key={tag}>{tag}</span>
                              ))}
                  </div>
            </div>
            <div className="logementOwner">
                  <div className="logementOwnerDetails">
                        <h3>
                              <span>{name[0]}</span>
                              <span>{name[1]}</span>
                        </h3>
                        <div className="logementOwnerBadge">
                              <img src={currentApartment.host.picture} alt="Appartment"/>
                        </div>
                  </div>

                  {/* affiche des étoiles en fonction de la note d'un appartement. Il prend un tableau [1,2,3,4,5],
                   puis utilise la méthode map pour parcourir chaque numéro du tableau. Pour chaque numéro, 
                   il affiche un élément <span> avec la classe "on" si la note de l'appartement est supérieure 
                   ou égale à ce numéro. Le contenu de chaque <span> est une étoile représentée par le symbole ★.
                    Le key={num} est utilisé pour identifier chaque élément de manière unique. */}
                  <div className='logementOwnerStars'>
                         {[1,2,3,4,5].map((num) => (
                              <span key={num} className={currentApartment.rating >= num ? "on" : ""}>★</span>                        
                         ))}
                  </div>
            </div>
      </div>
  )
}

export default LogementHeader