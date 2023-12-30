import { Footer } from "../components/footer/Footer"
import { Header } from "../components/header/Header"
import { PokemonDetails } from "../components/pokemonDetails/PokemonDetails"

const PokemonDetailsPage = () => {
    return (
        <>
            <Header />
            <PokemonDetails />
            <Footer />
        </>
    )
}

export { PokemonDetailsPage }