import { LoadMoreButton } from "../loadMoreButton/LoadMoreButton"
import PokemonCardGrid from "../pokemonCardGrid/PokemonCardGrid"
import { pokemonSectionStyle } from "./pokemonSection.css"

export const PokemonSection = () => {
    return (
        <div className={pokemonSectionStyle}>
            <PokemonCardGrid />
            <LoadMoreButton />
        </div>
    )
}