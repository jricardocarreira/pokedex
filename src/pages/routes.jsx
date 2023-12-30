import { BrowserRouter, Route, Routes } from "react-router-dom"
import { PokemonCardsPage } from "./PokemonCardsPage"

export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<PokemonCardsPage />} />
            </Routes>
        </BrowserRouter>
    )
}