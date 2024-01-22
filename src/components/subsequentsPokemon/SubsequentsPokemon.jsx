import { SubsequentsPokemonStyle } from "./subsequentsPokemon.css"

export const SubsequentsPokemon = () => {
    return (
        <nav className={SubsequentsPokemonStyle}>
            <button>Previous Pokemon</button>
            <button>Sequent Pokemon</button>
        </nav>
    )
}