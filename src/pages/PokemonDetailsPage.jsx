import { PokemonDetails } from "../components/pokemonDetails/PokemonDetails"
import { PokemonMainSection } from "../components/pokemonMainSection/PokemonMainSection"
import { SubsequentsPokemon } from "../components/subsequentsPokemon/SubsequentsPokemon"

export const PokemonDetailsPage = () => {
    return (
        <>
            <PokemonMainSection>
                <PokemonDetails />
            </PokemonMainSection>
            <SubsequentsPokemon />
        </>
    )
}