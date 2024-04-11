import React from 'react'
import {Link} from 'react-router-dom'
// NavLink est similaire à Link, mais avec la possibilité d'ajouter des attributs de style supplémentaires à l'élément

import logokasa from '../assets/images/LogoKasa.jpg'

function Header() {
    return (
      // afficher un <header> comprenant un logo et une barre de navigation
      //  avec 2 liens vers les pages "A propos" et "Accueil".
      

      <header className="header">
        <img src={logokasa} alt="Logo Kasa"></img>
        <nav>
          <ul className="nav">
            <li>
              <Link to="/">Accueil</Link>
            </li>
            <li>
              <Link to="/apropos">A propos</Link>
            </li>
          </ul>
        </nav>
      </header>
    )
  }
  
  export default Header