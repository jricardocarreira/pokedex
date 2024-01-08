import { Footer } from "../components/footer/Footer"
import { Header } from "../components/header/Header"
import { PokemonDetails } from "../components/pokemonDetails/PokemonDetails"
import { PokemonMainSection } from "../components/pokemonMainSection/PokemonMainSection"
import { ThemeTogglerButton } from "../components/themeTogglerButton/ThemeTogglerButton"

export const PokemonDetailsPage = () => {
    return (
        <>
            <Header />
            <PokemonMainSection>
                <PokemonDetails />
            </PokemonMainSection>
            <Footer />
        </>
    )
}