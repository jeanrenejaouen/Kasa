import React from 'react'
// NavLink est similaire à Link, mais avec la possibilité d'ajouter des attributs de style supplémentaires à l'élément
import {NavLink} from 'react-router-dom'
import logokasa from '../../assets/images/LogoKasa.jpg'
import './_header.scss'

function Header() {
    return (
      // afficher un <header> comprenant un logo et une barre de navigation
      //  avec 2 liens vers les pages "A propos" et "Accueil".
      

      <header className="header">
        <img src={logokasa} alt="Logo Kasa"></img>
        <nav>
          <ul className="nav">
            <li>
              <NavLink to="/">Accueil</NavLink>
            </li>
            <li>
              <NavLink to="/apropos">A Propos</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    )
  }
  
  export default Header