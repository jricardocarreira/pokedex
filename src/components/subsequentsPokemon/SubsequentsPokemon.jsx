import { Link } from "react-router-dom"
import { subsequentsPokemonLinksStyle, subsequentsPokemonStyle } from "./subsequentsPokemon.css"

export const SubsequentsPokemon = ({ id }) => {
    return (
        <nav className={subsequentsPokemonStyle}>
            <Link to={`/pokemon/${+id + 1}`} className={subsequentsPokemonLinksStyle} >
                <p>Next Pokemon →</p>
            </Link>
            {id > 1 && <Link to={`/pokemon/${id - 1}`} className={subsequentsPokemonLinksStyle} >
                <p>← Previous Pokemon</p>
            </Link>}
        </nav>
    )
}