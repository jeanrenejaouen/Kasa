import React from 'react'
import logofooter from '../assets/images/LogoKasa-footer.jpg'


function Footer() {
    return (
        // afficher un pied de page avec un logo et du texte
        <footer className='footer'>
            <img src={logofooter} alt="Logo Kasa Footer"></img>
            <div className='copyright'>&copy; 2023 Kasa. All rights reserved</div>
        </footer>
    )
}

export default Footer