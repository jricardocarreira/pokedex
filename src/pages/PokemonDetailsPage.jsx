import { Footer } from "../components/footer/Footer"
import { Header } from "../components/header/Header"
import { PokemonDetails } from "../components/pokemonDetails/PokemonDetails"
import { PokemonMainSection } from "../components/pokemonMainSection/PokemonMainSection"

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