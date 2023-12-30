import { BrowserRouter, Route, Routes } from "react-router-dom"
import { PokemonCardsPage } from "./PokemonCardsPage"
import { PokemonDetailsPage } from "./PokemonDetailsPage"

export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<PokemonCardsPage />} />
                <Route path='/pokemon/:id' element={<PokemonDetailsPage />} />
            </Routes>
        </BrowserRouter>
    )
}