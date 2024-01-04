import { FilterSection } from "../components/filterSection/FilterSection"
import { Footer } from "../components/footer/Footer"
import { Header } from "../components/header/Header"
import { PokemonCardGrid } from "../components/pokemonCardGrid/PokemonCardGrid"
import { PokemonMainSection } from "../components/pokemonMainSection/PokemonMainSection"

const PokemonCardsPage = () => {
    return (
        <>
            <Header />
            <FilterSection />
            <PokemonMainSection>
                <PokemonCardGrid />
            </PokemonMainSection>
            <Footer />
        </>
    )
}

export { PokemonCardsPage }