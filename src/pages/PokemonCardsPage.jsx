import { FilterSection } from "../components/filterSection/FilterSection"
import { PokemonCardGrid } from "../components/pokemonCardGrid/PokemonCardGrid"
import { PokemonMainSection } from "../components/pokemonMainSection/PokemonMainSection"

export const PokemonCardsPage = () => {
    return (
        <>
            <FilterSection />
            <PokemonMainSection>
                <PokemonCardGrid />
            </PokemonMainSection>
        </>
    )
}