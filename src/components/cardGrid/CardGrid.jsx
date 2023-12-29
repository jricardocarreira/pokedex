import { PokemonCard } from "../pokemonCard/PokemonCard"
import { cardGridStyle } from "./cardgrid.css"

export const CardGrid = () => {
    return (
        <ul className={cardGridStyle}>
            <PokemonCard />
            <PokemonCard />
            <PokemonCard />
            <PokemonCard />
            <PokemonCard />
            <PokemonCard />
            <PokemonCard />
        </ul>
    )
}