import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Accueil from '../pages/accueil'
import Apropos from '../pages/apropos'
import Fichelogement from '../pages/fichelogement'
import Erreur from '../pages/erreur'


function Router() {
    return (
        <BrowserRouter>
          
                <Routes>
                    <Route path="/" element={<Accueil />} />
                    <Route path="/apropos" element={<Apropos />} />
                    <Route path="/fichelogement" element={<Fichelogement />} />
                    <Route path="/erreur" element={<Erreur />} />                   
                </Routes>
          
        </BrowserRouter>
    )
}

export default Router