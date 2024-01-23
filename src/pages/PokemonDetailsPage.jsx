import { useParams } from "react-router-dom";
import { PokemonDetails } from "../components/pokemonDetails/PokemonDetails"
import { PokemonMainSection } from "../components/pokemonMainSection/PokemonMainSection"
import { SubsequentsPokemon } from "../components/subsequentsPokemon/SubsequentsPokemon"

export const PokemonDetailsPage = () => {
    const { id } = useParams();

    return (
      <>
        <PokemonMainSection>
          <PokemonDetails />
          <SubsequentsPokemon id={id} />
        </PokemonMainSection>
      </>
    )
}