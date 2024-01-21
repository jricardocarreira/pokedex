import { PokemonDetails } from "../components/pokemonDetails/PokemonDetails"
import { PokemonMainSection } from "../components/pokemonMainSection/PokemonMainSection"

export const PokemonDetailsPage = () => {
    return (
        <>
            <PokemonMainSection>
                <PokemonDetails />
            </PokemonMainSection>
        </>
    )
}