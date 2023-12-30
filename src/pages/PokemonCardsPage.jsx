import { FilterSection } from "../components/filterSection/FilterSection"
import { Footer } from "../components/footer/Footer"
import { Header } from "../components/header/Header"
import { PokemonSection } from "../components/pokemonSection/PokemonSection"

const PokemonCardsPage = () => {
    return (
        <>
            <Header />
            <FilterSection />
            <PokemonSection />
            <Footer />
        </>
    )
}

export { PokemonCardsPage }