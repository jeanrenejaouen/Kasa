import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Accueil from '../pages/accueil'
import Apropos from '../pages/apropos'


function Router() {
    return (
        <BrowserRouter>
          
                <Routes>
                    <Route path="/" element={<Accueil />} />
                    <Route path="/apropos" element={<Apropos />} />                    
                </Routes>
          
        </BrowserRouter>
    )
}

export default Router