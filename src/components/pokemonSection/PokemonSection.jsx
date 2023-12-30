import { PokemonCardGrid } from "../pokemonCardGrid/PokemonCardGrid"
import { pokemonSectionStyle } from "./pokemonSection.css"

export const PokemonSection = () => {
    return (
        <div className={pokemonSectionStyle}>
            <PokemonCardGrid />
        </div>
    )
}