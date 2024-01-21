import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Header } from "../components/header/Header"
import { Footer } from "../components/footer/Footer"
import { PokemonCardsPage } from "./PokemonCardsPage"
import { PokemonDetailsPage } from "./PokemonDetailsPage"

export const AppRoutes = ({ onToggleTheme }) => {
    return (
        <BrowserRouter>
            <Header onToggleTheme={onToggleTheme}/>
            <Routes>
                <Route exact path='/' element={<PokemonCardsPage />} />
                <Route path='/pokemon/:id' element={<PokemonDetailsPage />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}