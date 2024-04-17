import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Accueil from '../pages/accueil'
import Apropos from '../pages/apropos'
import Fichelogement from '../pages/fichelogement'
import Erreur from '../pages/erreur'
import Header from './header'
import Footer from './footer'

function Router() {
    return (
        <BrowserRouter>
            <Header/>
            <main>
                <Routes>
                    <Route path="/" element={<Accueil />} />
                    <Route path="/apropos" element={<Apropos />} />
                    <Route path="/fichelogement/:id" element={<Fichelogement />} />
                    {/* Si url différent des trois premiers, Affichage page "erreur" */}
                    <Route path="*" element={<Erreur />} />                   
                </Routes>
            </main>
            <Footer/>            
        </BrowserRouter>
    )
}

export default Router