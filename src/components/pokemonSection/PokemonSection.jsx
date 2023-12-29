import { CardGrid } from "../cardGrid/CardGrid"
import { LoadMoreButton } from "../loadMoreButton/LoadMoreButton"
import { PokemonCard } from "../pokemonCard/PokemonCard"
import { pokemonSectionStyle } from "./pokemonSection.css"

export const PokemonSection = () => {
    return (
        <div className={pokemonSectionStyle}>
            <CardGrid />
            <LoadMoreButton />
        </div>
    )
}