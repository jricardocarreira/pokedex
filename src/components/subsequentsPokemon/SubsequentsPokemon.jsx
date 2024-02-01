import { Link } from "react-router-dom"
import { subsequentsPokemonLinksStyle, subsequentsPokemonStyle } from "./subsequentsPokemon.css"

export const SubsequentsPokemon = ({ id }) => {
    return (
        <nav className={subsequentsPokemonStyle}>
            <Link to={`/pokemon/${+id + 1}`} className={subsequentsPokemonLinksStyle} >
                <p>Next Pokemon</p>
                <img src="/src/assets/arrow.svg" />
            </Link>
            {id > 1 && <Link to={`/pokemon/${id - 1}`} className={subsequentsPokemonLinksStyle} >
                <img src="/src/assets/arrow.svg" />
                <p>Previous Pokemon</p>
            </Link>}
        </nav>
    )
}